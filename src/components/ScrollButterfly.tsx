import { useEffect, useRef, useState, useCallback } from 'react'
import { BUTTERFLY_VIDEOS } from '../assets/higgsfield'

type ButterflyState = 'opening' | 'idle' | 'fastFlap' | 'flyAway'

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

const PARTICLE_COLORS = ['#4DB8E8', '#8B3FD4', '#C2408C', '#87CEEB', '#6B2DB5']

export function ScrollButterfly() {
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)
  const [floatY, setFloatY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [opacity, setOpacity] = useState(0)
  const [state, setState] = useState<ButterflyState>('opening')
  const [particles, setParticles] = useState<Particle[]>([])
  const [glowIntensity, setGlowIntensity] = useState(0.3)
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const idleRef = useRef<HTMLVideoElement>(null)
  const openingRef = useRef<HTMLVideoElement>(null)
  const fastFlapRef = useRef<HTMLVideoElement>(null)
  const flyAwayRef = useRef<HTMLVideoElement>(null)

  const videoRefs: Record<ButterflyState, React.RefObject<HTMLVideoElement | null>> = {
    idle: idleRef,
    opening: openingRef,
    fastFlap: fastFlapRef,
    flyAway: flyAwayRef,
  }

  const currentX = useRef(0)
  const currentY = useRef(0)
  const targetX = useRef(0)
  const targetY = useRef(0)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())
  const scrollVelocity = useRef(0)
  const animFrame = useRef<number>(0)
  const floatPhase = useRef(0)
  const particleId = useRef(0)
  const stateRef = useRef<ButterflyState>('opening')
  const flyingAway = useRef(false)
  const isHoveredRef = useRef(false)

  useEffect(() => { stateRef.current = state }, [state])
  useEffect(() => { isHoveredRef.current = isHovered }, [isHovered])

  // Switch active video when state changes
  useEffect(() => {
    Object.entries(videoRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      if (key === state) {
        ref.current.currentTime = 0
        ref.current.play().catch(() => {})
      } else {
        ref.current.pause()
      }
    })
  }, [state]) // eslint-disable-line react-hooks/exhaustive-deps

  // Opening sequence on mount
  useEffect(() => {
    const initX = window.innerWidth - 140
    const initY = window.innerHeight - 160
    currentX.current = initX
    currentY.current = initY
    targetX.current = initX
    targetY.current = initY
    setPosX(initX)
    setPosY(initY)

    const fadeIn = setTimeout(() => setOpacity(1), 800)
    const toIdle = setTimeout(() => setState('idle'), 8800)
    return () => { clearTimeout(fadeIn); clearTimeout(toIdle) }
  }, [])

  const getTargetPos = useCallback(() => {
    const scrollY = window.scrollY
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight)
    const fraction = scrollY / maxScroll
    const sineX = Math.sin(fraction * Math.PI * 3.5) * 55
    const baseX = window.innerWidth - 145
    const tx = Math.max(80, Math.min(window.innerWidth - 80, baseX + sineX))
    const ty = Math.max(90, Math.min(window.innerHeight - 160, 90 + fraction * (window.innerHeight - 280)))
    return { tx, ty }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now()
      const dt = Math.max(1, now - lastScrollTime.current)
      const dy = window.scrollY - lastScrollY.current
      scrollVelocity.current = (dy / dt) * 16
      lastScrollY.current = window.scrollY
      lastScrollTime.current = now
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let lastTime = performance.now()

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      scrollVelocity.current *= 0.88
      const absVel = Math.abs(scrollVelocity.current)
      const isScrollingFast = absVel > 8

      if (stateRef.current === 'idle' && isScrollingFast) {
        setState('fastFlap')
      } else if (stateRef.current === 'fastFlap' && !isScrollingFast) {
        setTimeout(() => { if (!flyingAway.current) setState('idle') }, 1200)
      }

      floatPhase.current += dt * 0.75
      setFloatY(Math.sin(floatPhase.current) * 9)
      setRotation(Math.max(-20, Math.min(20, scrollVelocity.current * 0.14)))
      setScale(prev => prev + ((isScrollingFast ? 1.08 : 1.0) - prev) * 0.1)
      setGlowIntensity(isScrollingFast ? 0.6 : isHoveredRef.current ? 0.5 : 0.3)

      if (!flyingAway.current) {
        const { tx, ty } = getTargetPos()
        targetX.current = tx
        targetY.current = ty
      }

      const lerpSpeed = flyingAway.current ? 0.2 : 0.055
      currentX.current += (targetX.current - currentX.current) * lerpSpeed
      currentY.current += (targetY.current - currentY.current) * lerpSpeed
      setPosX(Math.round(currentX.current))
      setPosY(Math.round(currentY.current))

      const nearEdge = currentX.current < 70 || currentX.current > window.innerWidth - 70
      setOpacity(nearEdge ? 0.45 : 1)

      const speed = Math.hypot(targetX.current - currentX.current, targetY.current - currentY.current)
      if (speed > 10 && !flyingAway.current) {
        const count = Math.min(3, Math.floor(speed / 15))
        const newParticles: Particle[] = Array.from({ length: count }, () => ({
          id: particleId.current++,
          x: currentX.current + (Math.random() - 0.5) * 30,
          y: currentY.current + (Math.random() - 0.5) * 30,
          opacity: 0.8,
          size: 3 + Math.random() * 4,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          vx: (Math.random() - 0.5) * 1.5,
          vy: -0.5 - Math.random() * 1.5,
          life: 1,
        }))
        setParticles(prev => [...prev.slice(-18), ...newParticles])
      }

      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - dt * 1.6,
            opacity: p.opacity * Math.pow(0.95, dt * 60),
            size: p.size * 0.99,
          }))
          .filter(p => p.life > 0 && p.opacity > 0.02)
      )

      animFrame.current = requestAnimationFrame(loop)
    }

    animFrame.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animFrame.current)
  }, [getTargetPos])

  const handleClick = useCallback(() => {
    if (flyingAway.current || stateRef.current === 'opening') return
    flyingAway.current = true
    setState('flyAway')
    targetX.current = window.innerWidth + 250
    targetY.current = -180
    setTimeout(() => {
      currentX.current = -100
      currentY.current = window.innerHeight + 100
      const { tx, ty } = getTargetPos()
      targetX.current = tx
      targetY.current = ty
      flyingAway.current = false
      setState('idle')
    }, 3500)
  }, [getTargetPos])

  const SIZE = typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 130

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none"
          style={{
            zIndex: 9988,
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}

      {/* Glow halo */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9989,
          left: posX, top: posY + floatY,
          width: SIZE * 1.8, height: SIZE * 1.2,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(ellipse, rgba(107,45,181,${glowIntensity}) 0%, rgba(77,184,232,${glowIntensity * 0.5}) 40%, transparent 70%)`,
          opacity,
          animation: 'glowPulse 3.5s ease-in-out infinite',
        }}
      />

      {/* Butterfly */}
      <div
        className="fixed"
        style={{
          zIndex: 9990,
          left: posX, top: posY + floatY,
          width: SIZE, height: SIZE,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
          opacity,
          transition: 'opacity 0.5s ease',
          cursor: 'pointer',
          mixBlendMode: 'screen',
        }}
        onClick={handleClick}
        onMouseEnter={() => { setIsHovered(true); setShowTooltip(true) }}
        onMouseLeave={() => { setIsHovered(false); setTimeout(() => setShowTooltip(false), 200) }}
        role="img"
        aria-label="IVTSF butterfly — click to interact"
      >
        {(Object.entries(BUTTERFLY_VIDEOS) as [ButterflyState, string][]).map(([key, src]) => (
          <video
            key={key}
            ref={videoRefs[key] as React.RefObject<HTMLVideoElement>}
            src={src}
            loop={key === 'idle' || key === 'fastFlap'}
            muted
            playsInline
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'contain',
              opacity: state === key ? 1 : 0,
              transition: 'opacity 0.4s ease',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* SVG fallback (hidden once any video loads) */}
        <svg
          width={SIZE} height={SIZE} viewBox="-110 -90 220 180"
          style={{ position: 'absolute', inset: 0, opacity: 0.8, filter: 'drop-shadow(0 0 12px rgba(107,45,181,0.5))' }}
          aria-hidden
        >
          <path d="M 0,-5 C -15,-35 -65,-70 -90,-55 C -105,-45 -100,-20 -85,-5 C -70,10 -40,18 0,8 Z" fill="#6B2DB5" />
          <path d="M 0,-5 C 15,-35 65,-70 90,-55 C 105,-45 100,-20 85,-5 C 70,10 40,18 0,8 Z" fill="#6B2DB5" />
          <path d="M 0,8 C -10,18 -55,48 -70,42 C -80,38 -75,20 -55,10 C -38,1 -15,5 0,8 Z" fill="#C2408C" />
          <path d="M 0,8 C 10,18 55,48 70,42 C 80,38 75,20 55,10 C 38,1 15,5 0,8 Z" fill="#C2408C" />
          <ellipse cx="0" cy="0" rx="4" ry="20" fill="#4A1A8C" />
        </svg>
      </div>

      {/* Tooltip */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9991,
          left: posX, top: posY + floatY + SIZE * 0.6,
          transform: 'translateX(-50%)',
          opacity: showTooltip ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        <div style={{
          background: 'rgba(74,26,140,0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(139,63,212,0.5)',
          borderRadius: '9999px',
          padding: '0.3rem 0.9rem',
          color: 'white',
          fontSize: '0.7rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(107,45,181,0.35)',
        }}>
          IVTSF · Click to interact
        </div>
      </div>
    </>
  )
}
