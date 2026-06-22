import { useRef, useEffect, useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'fade'
  delay?: number
  threshold?: number
}

export function AnimatedSection({ children, className = '', direction = 'up', delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const transforms: Record<string, string> = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    fade: 'translateY(0px)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : transforms[direction],
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.34,1.2,0.64,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
