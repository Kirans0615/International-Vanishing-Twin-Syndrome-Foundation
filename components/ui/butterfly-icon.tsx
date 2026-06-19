/**
 * Static butterfly icon for use in navbar, footer, and watermark positions.
 * Uses solid fills to avoid SVG gradient-ID collisions across multiple instances.
 */
interface ButterflyIconProps {
  size?: number;
  className?: string;
  opacity?: number;
}

export function ButterflyIcon({
  size = 48,
  className,
  opacity = 1,
}: ButterflyIconProps) {
  const h = Math.round(size * 0.9);
  return (
    <svg
      viewBox="0 0 400 360"
      width={size}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      className={className}
      style={{ opacity }}
    >
      {/* Left upper wing */}
      <path
        d="M 195,104 C 155,74 72,18 20,32 C -14,46 -8,96 32,116 C 76,138 148,134 195,128 Z"
        fill="#5B21B6"
      />
      <path
        d="M 192,112 C 158,94 100,62 64,68 C 40,74 38,98 68,110 C 104,124 158,122 192,122 Z"
        fill="#7C3AED"
        opacity={0.5}
      />
      <ellipse cx="68" cy="62" rx="8" ry="14" transform="rotate(-35 68 62)" fill="#60A5FA" />

      {/* Left lower wing */}
      <path
        d="M 195,134 C 144,152 48,192 24,240 C 4,272 38,296 92,278 C 144,262 188,226 195,196 Z"
        fill="#7C3AED"
      />

      {/* Right upper wing */}
      <path
        d="M 205,104 C 245,74 328,18 380,32 C 414,46 408,96 368,116 C 324,138 252,134 205,128 Z"
        fill="#5B21B6"
      />
      <path
        d="M 208,112 C 242,94 300,62 336,68 C 360,74 362,98 332,110 C 296,124 242,122 208,122 Z"
        fill="#7C3AED"
        opacity={0.5}
      />
      <ellipse cx="332" cy="62" rx="8" ry="14" transform="rotate(35 332 62)" fill="#60A5FA" />

      {/* Right lower wing */}
      <path
        d="M 205,134 C 256,152 352,192 376,240 C 396,272 362,296 308,278 C 256,262 212,226 205,196 Z"
        fill="#7C3AED"
      />

      {/* Body */}
      <ellipse cx="200" cy="180" rx="11" ry="76" fill="#2D1B69" />
      <circle cx="200" cy="104" r="10" fill="#1E1B4B" />

      {/* Antennae */}
      <path d="M 196,96 C 178,72 156,46 138,22" stroke="#4C1D95" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 204,96 C 222,72 244,46 262,22" stroke="#4C1D95" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="136" cy="20" r="4" fill="#4C1D95" />
      <circle cx="264" cy="20" r="4" fill="#4C1D95" />
    </svg>
  );
}
