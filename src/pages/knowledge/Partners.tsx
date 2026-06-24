import { ExternalLink } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsImage } from '../../components/HiggsImage';
import { HIGGSFIELD } from '../../assets/higgsfield';

const PARTNERS = [
  { name: 'ISUOG', full: 'International Society of Ultrasound in Obstetrics and Gynecology', desc: 'Sets global standards for obstetric ultrasound practice, including guidelines relevant to VTS diagnosis and monitoring.', href: 'https://www.isuog.org' },
  { name: 'ICOMBO', full: 'International Council of Multiple Birth Organizations', desc: 'A global network supporting families of multiples with education, research, and advocacy.', href: 'https://www.icombo.org' },
  { name: 'The Butterfly Project', full: 'Perinatal Loss Support', desc: 'A support organization for families who have experienced perinatal loss, including vanishing twin syndrome.', href: '#' },
  { name: 'Wind River Chimes', full: 'Product Partner', desc: 'Creator of the Loss of Multiples Memorial Chime — a tribute product supporting IVTSF\'s mission through product proceeds.', href: 'https://windriverchimes.com' },
  { name: 'IPEN', full: 'International Perinatal Loss Network', desc: 'A global network connecting perinatal loss support organizations, researchers, and families worldwide.', href: '#' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Partners() {
  return (
    <>
      <div className="relative h-[45vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}Z.jpeg`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,8,64,0.75) 0%, rgba(26,8,64,0.25) 100%)' }} aria-hidden />
        <div className="relative z-10">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 drop-shadow-lg">Partners &amp; Resources</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed drop-shadow">Organizations we collaborate with to advance VTS awareness and support.</p>
        </div>
      </div>

      <section className="relative bg-[#FAF8FF] px-6 py-20 overflow-hidden">
        <HiggsImage src={HIGGSFIELD.images.partnersTexture} alt="" fallbackGradient="transparent" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.05 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed max-w-2xl">
              IVTSF collaborates with organizations worldwide to advance awareness, support families, and improve care for those affected by vanishing twin syndrome.
            </p>
          </RevealDiv>

          <div className="grid gap-5 md:grid-cols-2">
            {PARTNERS.map(({ name, full, desc, href }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 4) + 1}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover block rounded-2xl p-7 h-full group"
                  style={{ background: '#F0EBF8' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif font-semibold text-[#1A1020] text-xl group-hover:text-[#6B2DB5] transition-colors">{name}</h3>
                      <p className="text-xs text-[#6B2DB5] font-medium mt-0.5">{full}</p>
                    </div>
                    <ExternalLink size={16} color="#8B3FD4" className="flex-shrink-0 mt-1 ml-2" aria-hidden />
                  </div>
                  <p className="text-sm text-[#1A1020]/65 leading-relaxed">{desc}</p>
                </a>
              </RevealDiv>
            ))}
          </div>

        </div>
      </section>

      {/* Collaboration & Partnership Requests — full-bleed image section */}
      <section className="relative overflow-hidden py-24 px-6">
        <img
          src={`${import.meta.env.BASE_URL}Z.jpeg`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,8,64,0.70) 0%, rgba(107,45,181,0.55) 100%)' }} aria-hidden />
        <RevealDiv className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-white text-4xl mb-6 drop-shadow-lg">
            Collaboration &amp; Partnership Requests
          </h2>
          <p className="text-white/85 text-base leading-relaxed mb-5">
            IVTSF welcomes inquiries from potential partners, researchers, clinicians, educators, institutions, advocacy organizations, and others interested in collaborating on projects or volunteer efforts aligned with our mission.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            Click below to submit a request for partnership or collaboration on research, education, advocacy, support, awareness initiatives, or practical tools that advance care for individuals and families affected by vanishing twin syndrome and multifetal loss.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiahpIBLquTMYX-iJ8Ld-KGtjCxy23jtiUb2brxDmAnx8XnQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-semibold text-base transition-all hover:brightness-110 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)', boxShadow: '0 8px 32px rgba(107,45,181,0.45)' }}
          >
            Start a Request
          </a>
        </RevealDiv>
      </section>

    </>
  );
}
