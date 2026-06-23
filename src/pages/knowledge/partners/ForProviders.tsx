import { Link } from 'react-router-dom'
import { Stethoscope, ArrowRight } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function ForProviders() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.diagnosingHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">For Providers</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Clinical resources for healthcare professionals working with patients affected by VTS.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <RevealDiv className="mb-12">
            <div
              className="rounded-r-2xl p-6 border-l-4"
              style={{ background: '#F0EBF8', borderLeftColor: '#4DB8E8' }}
            >
              <p className="text-[#1A1020]/70 text-sm leading-relaxed">
                Resources on this page are intended for licensed healthcare professionals. The IVTSF does not provide clinical decision support or replace institutional guidelines. Always apply clinical judgment and consult current evidence-based standards.
              </p>
            </div>
          </RevealDiv>

          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF develops resources to support healthcare providers in delivering accurate, compassionate, and informed care to patients experiencing VTS and multifetal pregnancy loss.
            </p>
          </RevealDiv>

          {/* Primary resource card */}
          <RevealDiv className="mb-8">
            <div
              className="rounded-2xl p-10 text-white"
              style={{ background: 'linear-gradient(135deg, #4A1A8C, #2D1060)' }}
            >
              <Stethoscope size={36} className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }} aria-hidden />
              <h2 className="font-serif font-semibold text-white text-3xl mb-3">
                Prenatal Provider Reference Guide
              </h2>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '56ch' }}>
                A clinical reference guide for healthcare providers on vanishing twin syndrome — covering diagnosis, communication with patients, monitoring guidance, and referral to current evidence.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Clinical Reference', 'Evidence-Based', 'Printable'].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1.5 text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/knowledge-hub/partners/providers/prenatal-reference"
                className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-[#F0EBF8]"
                style={{ background: 'white', color: '#4A1A8C' }}
              >
                View Reference Guide →
              </Link>
            </div>
          </RevealDiv>

          {/* 3 info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Communication with Patients',
                desc: 'The IVTSF has researched communication gaps between providers and patients in VTS cases. Our resources support trauma-informed, clear communication.',
                href: '/knowledge-hub/literature',
              },
              {
                title: 'Terminology Guidelines',
                desc: 'Use of consistent, evidence-based terminology in VTS cases supports better patient understanding and more accurate documentation.',
                href: '/what-is-vts/key-terms',
              },
              {
                title: 'Research & Literature',
                desc: 'Access our curated literature repository for current peer-reviewed research on VTS diagnosis, outcomes, and clinical care.',
                href: '/knowledge-hub/literature',
              },
            ].map(card => (
              <RevealDiv key={card.title}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#F0EBF8' }}
                >
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">{card.title}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: '#6B2DB5' }}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
