import { Link } from 'react-router-dom'
import { ClipboardList, BookOpen, ArrowRight } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

const CARDS = [
  {
    Icon: ClipboardList,
    color: '#6B2DB5',
    title: 'Prenatal Patient\nQuestion Checklist',
    desc: 'A comprehensive checklist of questions to discuss with your healthcare provider when navigating a VTS or multifetal pregnancy diagnosis.',
    tags: ['For Patients', 'Printable', 'Evidence-Based'],
    btnLabel: 'View Checklist →',
    href: '/knowledge-hub/partners/families/prenatal-checklist',
    className: 'reveal-left',
  },
  {
    Icon: BookOpen,
    color: '#C2408C',
    title: 'Education',
    desc: 'Educational materials on VTS and multifetal pregnancy developed for patients, families, and the general public.',
    tags: ['For Families', 'Educational', 'Global'],
    btnLabel: 'Explore Education →',
    href: '/knowledge-hub/partners/families/education',
    className: 'reveal-right',
  },
]

export function ForFamilies() {
  return (
    <>
      <div className="relative h-[48vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.peerSupportHero}
          fallbackGradient={FALLBACKS.purpleMid}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">
            For Families &amp; Patients
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Resources designed to support informed conversations with healthcare providers.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF is committed to ensuring families have access to clear, compassionate, evidence-based information throughout their pregnancy journey and beyond. The resources below are designed to support informed conversations with healthcare providers.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {CARDS.map(({ Icon, color, title, desc, tags, btnLabel, href, className }) => (
              <RevealDiv key={href} className={className}>
                <div
                  className="rounded-2xl p-8 h-full flex flex-col"
                  style={{ background: '#F0EBF8' }}
                >
                  <Icon size={36} color={color} className="mb-5" aria-hidden />
                  <h3 className="font-serif font-semibold text-[#1A1020] text-2xl mb-3 whitespace-pre-line">
                    {title}
                  </h3>
                  <p className="text-[#1A1020]/60 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map(t => (
                      <span
                        key={t}
                        className="text-xs rounded-full px-3 py-1"
                        style={{ background: 'rgba(139,63,212,0.1)', color: '#6B2DB5' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110 self-start"
                    style={{ background: `linear-gradient(135deg, #6B2DB5, #C2408C)` }}
                  >
                    {btnLabel} <ArrowRight size={14} />
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
