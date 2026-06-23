import { Link } from 'react-router-dom'
import { Heart, Sparkles, Stethoscope, ArrowRight } from 'lucide-react'
import { useReveal } from '../../hooks/useInView'
import { HiggsVideo } from '../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function PartnersResources() {
  return (
    <>
      <div className="relative h-[52vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.knowledgeHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">
            Partners &amp; Resources
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Trusted resources for families, patients, and healthcare providers.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF partners with organizations, researchers, and advocates worldwide to connect families, patients, and providers with trusted, evidence-based resources.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* For Families */}
            <RevealDiv className="reveal-left">
              <div
                className="rounded-2xl p-8 h-full flex flex-col"
                style={{ background: '#F0EBF8' }}
              >
                <Heart size={32} color="#C2408C" className="mb-5" aria-hidden />
                <h3 className="font-serif font-semibold text-[#1A1020] text-2xl mb-3">
                  For Families &amp; Patients
                </h3>
                <p className="text-[#1A1020]/60 text-sm leading-relaxed mb-4 flex-1">
                  Curated resources, checklists, and educational materials to support families navigating VTS.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Prenatal Patient Question Checklist', 'Education'].map(s => (
                    <span
                      key={s}
                      className="text-xs rounded-full px-3 py-1"
                      style={{ background: 'rgba(139,63,212,0.1)', color: '#6B2DB5' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/knowledge-hub/partners/families"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#C2408C' }}
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </RevealDiv>

            {/* Memorialization */}
            <RevealDiv className="reveal-delay-1">
              <div
                className="rounded-2xl p-8 h-full flex flex-col"
                style={{ background: '#1A0A3D' }}
              >
                <Sparkles size={32} color="#4DB8E8" className="mb-5" aria-hidden />
                <h3 className="font-serif font-semibold text-white text-2xl mb-3">
                  Memorialization /<br />Disposal of Remains
                </h3>
                <p className="mb-5 flex-1" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>
                  Resources to help families honor and remember babies lost in multiple pregnancies.
                </p>
                <Link
                  to="/knowledge-hub/partners/memorialization"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#4DB8E8' }}
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </RevealDiv>

            {/* For Providers */}
            <RevealDiv className="reveal-right">
              <div
                className="rounded-2xl p-8 h-full flex flex-col"
                style={{ background: '#F0EBF8' }}
              >
                <Stethoscope size={32} color="#6B2DB5" className="mb-5" aria-hidden />
                <h3 className="font-serif font-semibold text-[#1A1020] text-2xl mb-3">
                  For Providers
                </h3>
                <p className="text-[#1A1020]/60 text-sm leading-relaxed mb-4 flex-1">
                  Clinical reference materials and guidance for healthcare providers working with VTS patients.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="text-xs rounded-full px-3 py-1"
                    style={{ background: 'rgba(139,63,212,0.1)', color: '#6B2DB5' }}
                  >
                    Prenatal Provider Reference Guide
                  </span>
                </div>
                <Link
                  to="/knowledge-hub/partners/providers"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#6B2DB5' }}
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>
    </>
  )
}
