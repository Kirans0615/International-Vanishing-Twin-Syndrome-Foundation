import { ArrowRight, Microscope, Stethoscope, Building2, BookOpen, Megaphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useInView'

const COLLAB_TYPES = [
  {
    Icon: Microscope,
    color: '#6B2DB5',
    title: 'Research Collaboration',
    desc: 'Partner with IVTSF on studies, registries, data initiatives, or publication efforts related to VTS, multifetal pregnancy, or perinatal outcomes.',
  },
  {
    Icon: Stethoscope,
    color: '#4DB8E8',
    title: 'Clinical Partnership',
    desc: 'Work with us to develop clinical resources, patient education tools, or provider training materials for VTS-aware care.',
  },
  {
    Icon: Building2,
    color: '#C2408C',
    title: 'Organizational Partnership',
    desc: 'Join our network of nonprofit, advocacy, and healthcare organizations committed to improving outcomes for multiple-birth families.',
  },
  {
    Icon: BookOpen,
    color: '#4A1A8C',
    title: 'Academic & Educational Institutions',
    desc: 'Collaborate on curricula, student projects, continuing education, or institutional VTS awareness initiatives.',
  },
  {
    Icon: Megaphone,
    color: '#8B3FD4',
    title: 'Media & Press',
    desc: 'Journalists, documentarians, and content creators are welcome to reach out for interviews, fact-checking, or editorial partnerships.',
  },
  {
    Icon: Globe,
    color: '#4DB8E8',
    title: 'International Outreach',
    desc: 'We actively seek international partners to help expand access to VTS resources and support across diverse languages and healthcare systems.',
  },
]

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function Collaborate() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/Z.jpeg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,8,64,0.85) 0%, rgba(26,8,64,0.3) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em] drop-shadow-lg">
            Collaboration &amp; Partnerships
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed drop-shadow">
            Partner with the IVTSF to advance VTS awareness, research, and support for families worldwide.
          </p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* ── Intro ── */}
          <RevealDiv className="mb-14">
            <div className="max-w-3xl">
              <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-5">
                Let's Build Something Together
              </h2>
              <p className="text-[#1A1020]/65 text-lg leading-relaxed mb-4">
                The IVTSF believes that advancing understanding of vanishing twin syndrome requires collaboration across disciplines, institutions, and communities. We welcome partnership requests from researchers, clinicians, advocacy organizations, academic institutions, media professionals, and others who share our commitment to improving outcomes for families affected by multiple pregnancy loss.
              </p>
              <p className="text-[#1A1020]/65 text-base leading-relaxed">
                Whether you're looking to co-develop resources, explore joint research, expand international reach, or simply connect — we'd love to hear from you.
              </p>
            </div>
          </RevealDiv>

          {/* ── Types of Collaboration ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-2">
              Areas of Collaboration
            </h2>
            <p className="text-[#1A1020]/50 text-base">
              We welcome requests across a broad range of partnership types.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {COLLAB_TYPES.map(({ Icon, color, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 12px rgba(74,26,140,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-base mb-2">{title}</h3>
                  <p className="text-sm text-[#1A1020]/55 leading-relaxed flex-1">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-5">
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.12)' }}
            >
              <ArrowRight size={16} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                Not sure which category fits? We'd still love to hear from you — use the form below and describe your idea or inquiry, and we'll follow up to explore how we might work together.
              </p>
            </div>
          </RevealDiv>

          {/* Partners link */}
          <RevealDiv className="mb-16">
            <p className="text-sm text-[#1A1020]/50 leading-relaxed">
              To see our current partners and supported organizations, visit the{' '}
              <Link to="/knowledge-hub/partners" className="font-medium underline underline-offset-2" style={{ color: '#6B2DB5' }}>
                Partners &amp; Resources page
              </Link>.
            </p>
          </RevealDiv>

          {/* ── Request Section ── */}
          <RevealDiv>
            <div
              className="relative overflow-hidden rounded-3xl px-10 py-14 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(26,8,64,0.92) 0%, rgba(107,45,181,0.85) 100%)' }}
            >
              <img
                src="/Z.jpeg"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay"
                style={{ filter: 'brightness(0.4)', opacity: 0.5 }}
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-serif font-semibold text-white text-3xl mb-5 drop-shadow-lg">
                  Submit a Collaboration or Partnership Request
                </h2>
                <p className="text-white/85 text-base leading-relaxed mb-4">
                  IVTSF welcomes inquiries from potential partners, researchers, clinicians, educators, institutions, advocacy organizations, and others interested in collaborating on projects or volunteer efforts aligned with our mission.
                </p>
                <p className="text-white/70 text-base leading-relaxed mb-9">
                  Click below to submit a request for partnership or collaboration on research, education, advocacy, support, awareness initiatives, or practical tools that advance care for individuals and families affected by vanishing twin syndrome and multifetal loss.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdiahpIBLquTMYX-iJ8Ld-KGtjCxy23jtiUb2brxDmAnx8XnQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-base transition-all hover:brightness-110 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8B3FD4, #C2408C)', boxShadow: '0 8px 32px rgba(107,45,181,0.5)' }}
                >
                  Start a Request
                </a>
                <p className="text-white/40 text-xs mt-6 leading-relaxed">
                  Submissions are reviewed by the IVTSF team. We aim to respond within 5–10 business days.
                </p>
              </div>
            </div>
          </RevealDiv>

        </div>
      </section>
    </>
  )
}
