import { type ReactNode, type CSSProperties } from 'react';

interface VideoBackgroundProps {
  src?: string;
  fallbackStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  opacity?: number;
}

export function VideoBackground({
  src,
  fallbackStyle,
  className = '',
  style = {},
  children,
  opacity = 1,
}: VideoBackgroundProps) {
  const defaultFallback: CSSProperties = {
    background: 'radial-gradient(ellipse at center, #2D1060 0%, #1A0A3D 60%, #0D0520 100%)',
    ...fallbackStyle,
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {src ? (
        <video
          data-hero
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.parentElement) {
              Object.assign(e.currentTarget.parentElement.style, defaultFallback);
            }
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0" style={defaultFallback} aria-hidden />
      )}
      {children}
    </div>
  );
}
