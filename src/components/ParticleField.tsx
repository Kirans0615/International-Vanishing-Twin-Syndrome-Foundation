import { useMemo } from 'react'

const COLORS = ['#4DB8E8', '#8B3FD4', '#C2408C', '#87CEEB', '#6B2DB5']

export function ParticleField({ count = 55 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 17.3 + 11) % 100,
      y: (i * 23.7 + 7) % 100,
      size: 2 + (i % 4),
      color: COLORS[i % COLORS.length],
      duration: 5 + (i % 6),
      delay: (i * 0.13) % 7,
    })), [count])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.25,
            animation: `particleDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
