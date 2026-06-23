import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, BookOpen, Info, ArrowRight } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const TABS = ['All', 'For Patients', 'For Families', 'General Public'] as const
type Tab = (typeof TABS)[number]

interface Resource {
  category: Tab
  Icon: typeof FileText
  title: string
  desc: string
  internalHref?: string
}

const RESOURCES: Resource[] = [
  {
    category: 'For Patients',
    Icon: Info,
    title: 'What is Vanishing Twin Syndrome?',
    desc: 'An accessible introduction to VTS — what it is, how it occurs, and what it means for ongoing pregnancy.',
    internalHref: '/what-is-vts',
  },
  {
    category: 'For Patients',
    Icon: FileText,
    title: 'Understanding Your Prenatal Diagnosis',
    desc: 'Guidance for patients navigating a VTS diagnosis, covering common questions and what to expect from your care team.',
  },
  {
    category: 'For Families',
    Icon: BookOpen,
    title: 'Talking to Your Family About VTS',
    desc: 'Practical language and approaches for discussing VTS with partners, children, and extended family.',
  },
  {
    category: 'For Families',
    Icon: BookOpen,
    title: 'VTS: A Guide for Parents',
    desc: 'A comprehensive guide for parents — covering the diagnosis, grief, care for the surviving baby, and long-term considerations.',
  },
  {
    category: 'General Public',
    Icon: Info,
    title: 'Key Terms in Multifetal Pregnancy',
    desc: 'Definitions of terminology used in multifetal pregnancy and VTS — designed for general audiences.',
    internalHref: '/what-is-vts/key-terms',
  },
  {
    category: 'General Public',
    Icon: FileText,
    title: 'Research Overview: What We Know',
    desc: 'A plain-language summary of the current state of VTS research, key findings, and ongoing areas of investigation.',
    internalHref: '/knowledge-hub/literature',
  },
]

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function EducationPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All')
  const filtered = RESOURCES.filter(r => activeTab === 'All' || r.category === activeTab)

  return (
    <>
      <div className="relative h-[48vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.literatureHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Education</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Accessible, accurate materials for patients, families, and the public.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF develops and curates educational materials to improve understanding of VTS and multifetal pregnancy. Resources are designed to be accessible, accurate, and sensitive to diverse family experiences worldwide.
            </p>
          </RevealDiv>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: activeTab === tab ? '#4A1A8C' : 'transparent',
                  color: activeTab === tab ? 'white' : 'rgba(26,16,32,0.5)',
                  border: `1px solid ${activeTab === tab ? 'transparent' : 'rgba(139,63,212,0.2)'}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => (
              <RevealDiv key={r.title} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#F0EBF8' }}
                >
                  <span
                    className="text-xs font-medium rounded-full px-3 py-1 self-start mb-4"
                    style={{ background: 'rgba(139,63,212,0.12)', color: '#6B2DB5' }}
                  >
                    {r.category}
                  </span>
                  <r.Icon size={22} color="#6B2DB5" className="mb-3" aria-hidden />
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">{r.title}</h3>
                  <p className="text-[#1A1020]/60 text-sm leading-relaxed mb-5 flex-1">{r.desc}</p>
                  {r.internalHref ? (
                    <Link
                      to={r.internalHref}
                      className="inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: '#6B2DB5' }}
                    >
                      View Resource <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: 'rgba(107,45,181,0.4)' }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Contribute callout */}
          <RevealDiv className="mt-12">
            <div className="rounded-2xl p-8 text-center" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-2xl mb-3">
                Contribute a Resource
              </h3>
              <p className="text-white/55 text-base leading-relaxed mb-6 max-w-lg mx-auto">
                Are you a healthcare provider or educator with resources to share? We welcome contributions meeting our evidence-based and trauma-informed standards.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  )
}
