import { useReveal } from '../hooks/useInView'

const BASE = import.meta.env.BASE_URL

/**
 * Memorial butterfly artwork by Andrea Greenwich Heffner, Chair of the IVTSF.
 *
 * Original watercolour and ink. The tiny white hearts worked into the wing
 * borders are hers, and they carry the piece — the layout keeps them legible
 * rather than shrinking the work into a thumbnail grid.
 *
 * Presented on light, paper-like tiles on purpose: these are ink drawings, and
 * on a dark ground the black linework disappears and the butterflies collapse
 * into purple shapes. All four files are transparent PNGs, so they sit on the
 * page rather than in a box.
 */
type Piece = {
  src: string
  alt: string
}

const PIECES: Piece[] = [
  {
    src: `${BASE}andrea-butterfly-hearts.png`,
    alt: 'Watercolour butterfly with wings spread, two large violet hearts filling the upper wings and small hearts along the lower wing borders.',
  },
  {
    src: `${BASE}andrea-butterfly-monarch.png`,
    alt: 'Watercolour butterfly with wings open, violet panels between bold black veins and tiny white hearts along the wing edges.',
  },
  {
    src: `${BASE}andrea-butterfly-profile.png`,
    alt: 'Watercolour butterfly seen from the side, layered violet petals and a border of small white hearts.',
  },
  {
    src: `${BASE}andrea-butterfly-resting.png`,
    alt: 'Watercolour butterfly at rest with wings folded together, soft violet washes forming overlapping hearts.',
  },
]

export function ButterflyArtwork({
  heading = 'Butterflies for the ones we carry',
  intro,
}: {
  heading?: string
  intro?: string
}) {
  const { ref, className: rc } = useReveal()

  return (
    <section
      ref={ref}
      className={`${rc} rounded-2xl overflow-hidden`}
      style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.12)' }}
      aria-labelledby="butterfly-artwork-heading"
    >
      <div className="px-6 py-12 md:px-10 md:py-14">
        <h2
          id="butterfly-artwork-heading"
          className="font-serif font-semibold text-[#1A1020] text-2xl md:text-3xl mb-3"
        >
          {heading}
        </h2>
        <p className="text-[#1A1020]/65 text-sm md:text-base leading-relaxed max-w-[62ch]">
          {intro ??
            'Original watercolours by Andrea Greenwich Heffner, Chair of the IVTSF. Look closely at the wing borders — each one is edged with small hearts.'}
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {PIECES.map(piece => (
            <li key={piece.src}>
              <figure className="h-full">
                <div
                  className="flex items-center justify-center rounded-xl p-6 md:p-8 aspect-square overflow-hidden"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(107,45,181,0.10)',
                    boxShadow: '0 2px 10px rgba(74,26,140,0.06)',
                  }}
                >
                  <img
                    src={piece.src}
                    alt={piece.alt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[#1A1020]/45 text-xs leading-relaxed">
          Artwork © Andrea Greenwich Heffner. Please do not reproduce without
          permission.
        </p>
      </div>
    </section>
  )
}
