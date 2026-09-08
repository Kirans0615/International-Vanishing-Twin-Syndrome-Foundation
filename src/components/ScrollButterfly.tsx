import { useEffect, useRef, useState, useCallback } from 'react'
import { BrandButterfly } from './BrandButterfly'

/**
 * The butterfly that travels down the page as you scroll.
 *
 * Drawn from the foundation logo rather than generic butterfly footage, so the
 * mark on screen is the mark on the letterhead (see BrandButterfly).
 *
 * A second, fainter butterfly trails just behind and never quite catches up —
 * a quiet nod to the twin the foundation exists for. It is deliberately easy to
 * miss: low opacity, softly blurred, always a beat late.
 *
 * One click dismisses it for the session.
 */

const DISMISS_KEY = 'ivtsf-butterfly-dismissed'

// Simplified from five colours to two: the brand blue and violet only.
const PARTICLE_COLORS = ['#87CEEB', '#8B3FD4']
const MAX_PARTICLES = 8

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  size: number
  color: string
  vx: number
  vy: number
  life: number
}

export function ScrollButterfly() {
  const [dismissed, setDismissed] = useState(true) // assume dismissed until we can check storage
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)
  const [twinX, setTwinX] = useState(0)
  const [twinY, setTwinY] = useState(0)
  const [floatY, setFloatY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [opacity, setOpacity] = useState(0)
  const [flapDuration, setFlapDuration] = useState(2.6)
  const [particles, setParticles] = useState<Particle[]>([])
  const [glowIntensity, setGlowIntensity] = useState(0.3)

  const currentX = useRef(0)
  const currentY = useRef(0)
  const targetX = useRef(0)
  const targetY = useRef(0)
  // The twin lags behind on its own slower lerp — it is always chasing.
  const ghostX = useRef(0)
  const ghostY = useRef(0)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(0)
  const scrollVelocity = useRef(0)
  const animFrame = useRef<number>(0)
  const floatPhase = useRef(0)
  const particleId = useRef(0)
  const leaving = useRef(false)

  // Read the dismissal flag after mount so SSR/first paint stay consistent.
  useEffect(() => {
    let already = false
    try {
      already = sessionStorage.getItem(DISMISS_KEY) === '1'
    } catch {
      already = false
    }
    if (!already) setDismissed(false)
  }, [])

  useEffect(() => {
    if (dismissed) return
    const initX = window.innerWidth - 140
    const initY = window.innerHeight - 160
    currentX.current = initX
    currentY.current = initY
    targetX.current = initX
    targetY.current = initY
    ghostX.current = initX
    ghostY.current = initY
    lastScrollY.current = window.scrollY
    lastScrollTime.current = performance.now()
    setPosX(initX)
    setPosY(initY)
    setTwinX(initX)
    setTwinY(initY)
    const fadeIn = setTimeout(() => setOpacity(1), 600)
    return () => clearTimeout(fadeIn)
  }, [dismissed])

  const getTargetPos = useCallback(() => {
    const scrollY = window.scrollY
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight)
    const fraction = scrollY / maxScroll
    const narrow = window.innerWidth < 768
    const size = narrow ? 74 : 130

    // On phones the hero copy fills the upper half, so the butterfly hugs the
    // right edge and starts below it. On desktop it drifts on a sine path.
    const sineX = narrow ? 0 : Math.sin(fraction * Math.PI * 3.5) * 55
    const baseX = narrow ? window.innerWidth - 52 : window.innerWidth - 145
    const tx = Math.max(size / 2, Math.min(window.innerWidth - size / 2, baseX + sineX))

    // Clear the sticky navbar; on phones clear the hero copy block as well.
    const topLimit = narrow
      ? Math.round(window.innerHeight * 0.62)
      : 88 + size / 2
    const bottomLimit = window.innerHeight - 120
    const ty = Math.max(
      topLimit,
      Math.min(bottomLimit, topLimit + fraction * (bottomLimit - topLimit)),
    )
    return { tx, ty }
  }, [])

  useEffect(() => {
    if (dismissed) return
    const onScroll = () => {
      const now = performance.now()
      const dt = Math.max(1, now - lastScrollTime.current)
      const dy = window.scrollY - lastScrollY.current
      scrollVelocity.current = (dy / dt) * 16
      lastScrollY.current = window.scrollY
      lastScrollTime.current = now
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  useEffect(() => {
    if (dismissed) return
    let lastTime = performance.now()

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      scrollVelocity.current *= 0.88
      const absVel = Math.abs(scrollVelocity.current)
      const fast = absVel > 8

      // Flap speed replaces the old video-swap state machine.
      setFlapDuration(leaving.current ? 0.5 : fast ? 1.1 : 2.6)

      floatPhase.current += dt * 0.75
      setFloatY(Math.sin(floatPhase.current) * 9)
      setRotation(Math.max(-20, Math.min(20, scrollVelocity.current * 0.14)))
      setScale(prev => prev + ((fast ? 1.06 : 1.0) - prev) * 0.1)
      setGlowIntensity(fast ? 0.5 : 0.28)

      if (!leaving.current) {
        const { tx, ty } = getTargetPos()
        targetX.current = tx
        targetY.current = ty
      }

      const lerpSpeed = leaving.current ? 0.2 : 0.055
      currentX.current += (targetX.current - currentX.current) * lerpSpeed
      currentY.current += (targetY.current - currentY.current) * lerpSpeed
      setPosX(Math.round(currentX.current))
      setPosY(Math.round(currentY.current))

      // Twin follows the leader, not the target — so it is always behind.
      ghostX.current += (currentX.current - ghostX.current) * 0.022
      ghostY.current += (currentY.current - ghostY.current) * 0.022
      setTwinX(Math.round(ghostX.current))
      setTwinY(Math.round(ghostY.current))

      if (!leaving.current) {
        const nearEdge = currentX.current < 70 || currentX.current > window.innerWidth - 70
        setOpacity(nearEdge ? 0.45 : 1)
      }

      // Fewer, smaller, softer particles than before.
      const speed = Math.hypot(targetX.current - currentX.current, targetY.current - currentY.current)
      if (speed > 14 && !leaving.current) {
        setParticles(prev => [
          ...prev.slice(-(MAX_PARTICLES - 1)),
          {
            id: particleId.current++,
            x: currentX.current + (Math.random() - 0.5) * 22,
            y: currentY.current + (Math.random() - 0.5) * 22,
            opacity: 0.5,
            size: 2 + Math.random() * 2,
            color: PARTICLE_COLORS[particleId.current % PARTICLE_COLORS.length],
            vx: (Math.random() - 0.5) * 1.1,
            vy: -0.4 - Math.random() * 1.0,
            life: 1,
          },
        ])
      }

      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - dt * 1.8,
            opacity: p.opacity * Math.pow(0.94, dt * 60),
            size: p.size * 0.99,
          }))
          .filter(p => p.life > 0 && p.opacity > 0.03)
      )

      animFrame.current = requestAnimationFrame(loop)
    }

    animFrame.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animFrame.current)
  }, [getTargetPos, dismissed])

  /**
   * One click and it leaves for good. Pointer events are released immediately,
   * so nothing underneath is blocked while it flies off — no second click
   * needed to get at the page.
   */
  const handleDismiss = useCallback(() => {
    if (leaving.current) return
    leaving.current = true
    try {
      sessionStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* private mode — it simply returns on the next page load */
    }
    targetX.current = window.innerWidth + 260
    targetY.current = -200
    setOpacity(0)
    setTimeout(() => setDismissed(true), 1400)
  }, [])

  if (dismissed) return null

  const SIZE = typeof window !== 'undefined' && window.innerWidth < 768 ? 74 : 130

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none"
          style={{
            zIndex: 9988,
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${p.size * 1.5}px ${p.color}`,
          }}
        />
      ))}

      {/* The twin: behind, fainter, always a beat late. */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9987,
          left: twinX,
          top: twinY + floatY * 0.7,
          transform: `translate(-50%, -50%) rotate(${rotation * 0.6}deg) scale(${scale * 0.82})`,
          opacity: opacity * 0.22,
          filter: 'blur(1.4px)',
          transition: 'opacity 0.6s ease',
        }}
        aria-hidden
      >
        <BrandButterfly
          size={SIZE}
          variant="ghost"
          idPrefix="bf-twin"
          flapDuration={flapDuration * 1.15}
        />
      </div>

      {/* Glow halo */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9989,
          left: posX,
          top: posY + floatY,
          width: SIZE * 1.7,
          height: SIZE * 1.15,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(ellipse, rgba(107,45,181,${glowIntensity}) 0%, rgba(77,184,232,${glowIntensity * 0.45}) 42%, transparent 70%)`,
          opacity,
          animation: 'glowPulse 3.5s ease-in-out infinite',
        }}
        aria-hidden
      />

      <button
        type="button"
        className="fixed"
        style={{
          zIndex: 9990,
          left: posX,
          top: posY + floatY,
          width: SIZE,
          height: SIZE,
          padding: 0,
          border: 'none',
          background: 'none',
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
          opacity,
          transition: 'opacity 0.6s ease',
          cursor: 'pointer',
          // Released the instant it is dismissed, so the page underneath is
          // immediately usable without a second click.
          pointerEvents: leaving.current ? 'none' : 'auto',
        }}
        onClick={handleDismiss}
        aria-label="Dismiss the IVTSF butterfly"
      >
        <BrandButterfly size={SIZE} idPrefix="bf-main" flapDuration={flapDuration} />
      </button>
    </>
  )
}
