import React, { useRef, useState, useEffect } from 'react'

interface HiggsVideoProps {
  src: string
  fallbackGradient: string
  className?: string
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
  children?: React.ReactNode
  opacity?: number
}

export function HiggsVideo({
  src,
  fallbackGradient,
  className = '',
  overlayClassName,
  overlayStyle,
  children,
  opacity = 1,
}: HiggsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handleLoad = () => setLoaded(true)
    const handleError = () => setFailed(true)
    video.addEventListener('loadeddata', handleLoad)
    video.addEventListener('error', handleError)
    return () => {
      video.removeEventListener('loadeddata', handleLoad)
      video.removeEventListener('error', handleError)
    }
  }, [])

  const hasPosition = /\b(absolute|fixed|sticky|static)\b/.test(className)
  return (
    <div className={`${hasPosition ? '' : 'relative '}overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{ background: fallbackGradient, opacity: failed || !loaded ? 1 : 0 }}
        aria-hidden
      />
      {!failed && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: loaded ? opacity : 0 }}
        />
      )}
      {(overlayClassName || overlayStyle) && (
        <div className={`absolute inset-0 ${overlayClassName ?? ''}`} style={overlayStyle} aria-hidden />
      )}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}
