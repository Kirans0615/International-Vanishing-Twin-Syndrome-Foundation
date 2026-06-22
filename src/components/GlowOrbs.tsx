export function GlowOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 400,
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(107,45,181,0.35) 0%, rgba(77,184,232,0.15) 50%, transparent 75%)',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 200,
          bottom: '20%',
          right: '15%',
          background: 'radial-gradient(ellipse, rgba(194,64,140,0.25) 0%, transparent 70%)',
          animation: 'glowPulse 6s ease-in-out 2s infinite',
        }}
      />
    </div>
  )
}
