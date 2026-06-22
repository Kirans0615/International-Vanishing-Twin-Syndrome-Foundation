import React, { useState } from 'react'

interface HiggsImageProps {
  src: string
  fallbackGradient: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export function HiggsImage({ src, fallbackGradient, alt, className = '', style }: HiggsImageProps) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={className} style={{ background: fallbackGradient, ...style }} aria-label={alt} />
  return <img src={src} alt={alt} className={className} style={style} onError={() => setFailed(true)} />
}
