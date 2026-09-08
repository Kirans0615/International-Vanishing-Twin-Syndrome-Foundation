/**
 * The IVTSF butterfly, drawn from the foundation logo.
 *
 * Shape notes, taken from public/High Res_White Background_IVTSF Logo.png:
 *  · upper wings are slim pointed petals sweeping up and out, deep purple
 *  · lower wings are rounder lobes falling away below, magenta
 *  · each wing carries a pale-blue inner blade set close to the centre — this
 *    is the most recognisable part of the mark and the thing a generic
 *    butterfly never has
 *  · there is almost no body; the wings very nearly meet
 *
 * `variant="ghost"` renders the same mark as a faint silhouette — used for the
 * second butterfly (see ScrollButterfly).
 */
type Variant = 'solid' | 'ghost'

export function BrandButterfly({
  size = 130,
  variant = 'solid',
  flapDuration = 2.6,
  idPrefix = 'bf',
  className = '',
  style,
}: {
  size?: number
  variant?: Variant
  /** Seconds per wing cycle. Lower = faster flap. */
  flapDuration?: number
  /** Gradients need unique ids when more than one butterfly is on screen. */
  idPrefix?: string
  className?: string
  style?: React.CSSProperties
}) {
  const ghost = variant === 'ghost'

  return (
    <svg
      width={size}
      height={size}
      viewBox="-100 -95 200 190"
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${idPrefix}-upper`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#3D1478" />
          <stop offset="55%" stopColor="#4A1A8C" />
          <stop offset="100%" stopColor="#6B2DB5" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-lower`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#8B3FD4" />
          <stop offset="55%" stopColor="#9B2D6E" />
          <stop offset="100%" stopColor="#C2408C" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-blade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCF1FB" />
          <stop offset="60%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4DB8E8" />
        </linearGradient>
      </defs>

      <g
        style={{
          opacity: ghost ? 0.5 : 1,
          // Ghost reads as a silhouette: one flat brand purple, no gradients.
          fill: ghost ? '#6B2DB5' : undefined,
        }}
      >
        {/* Right half; the left is this group mirrored. */}
        <g
          className="bf-wing bf-wing-right"
          style={{ animationDuration: `${flapDuration}s` }}
        >
          <path
            d="M 2,-10 C 10,-44 36,-84 66,-78 C 90,-73 88,-40 62,-16 C 44,1 16,6 2,-10 Z"
            fill={ghost ? undefined : `url(#${idPrefix}-upper)`}
          />
          <path
            d="M 2,-2 C 16,8 48,24 56,46 C 63,65 44,76 27,63 C 12,51 2,24 2,-2 Z"
            fill={ghost ? undefined : `url(#${idPrefix}-lower)`}
          />
          {!ghost && (
            <>
              <path
                d="M 4,-9 C 11,-33 22,-55 34,-61 C 37,-43 28,-20 8,-4 Z"
                fill={`url(#${idPrefix}-blade)`}
                opacity="0.95"
              />
              <path
                d="M 4,-1 C 13,10 25,28 29,44 C 19,43 8,26 4,6 Z"
                fill={`url(#${idPrefix}-blade)`}
                opacity="0.8"
              />
            </>
          )}
        </g>

        <g
          className="bf-wing bf-wing-left"
          style={{ animationDuration: `${flapDuration}s` }}
        >
          <path
            d="M -2,-10 C -10,-44 -36,-84 -66,-78 C -90,-73 -88,-40 -62,-16 C -44,1 -16,6 -2,-10 Z"
            fill={ghost ? undefined : `url(#${idPrefix}-upper)`}
          />
          <path
            d="M -2,-2 C -16,8 -48,24 -56,46 C -63,65 -44,76 -27,63 C -12,51 -2,24 -2,-2 Z"
            fill={ghost ? undefined : `url(#${idPrefix}-lower)`}
          />
          {!ghost && (
            <>
              <path
                d="M -4,-9 C -11,-33 -22,-55 -34,-61 C -37,-43 -28,-20 -8,-4 Z"
                fill={`url(#${idPrefix}-blade)`}
                opacity="0.95"
              />
              <path
                d="M -4,-1 C -13,10 -25,28 -29,44 C -19,43 -8,26 -4,6 Z"
                fill={`url(#${idPrefix}-blade)`}
                opacity="0.8"
              />
            </>
          )}
        </g>

        {/* The logo has barely any body — a slim spine, not an insect thorax. */}
        {!ghost && (
          <path
            d="M 0,-26 C 2.6,-26 3.4,-18 3.2,-4 C 3,12 1.6,30 0,38 C -1.6,30 -3,12 -3.2,-4 C -3.4,-18 -2.6,-26 0,-26 Z"
            fill="#2E0F5E"
          />
        )}
      </g>
    </svg>
  )
}
