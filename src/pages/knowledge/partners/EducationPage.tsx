import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, BookOpen, Info, ArrowRight, Download, ExternalLink, GraduationCap, CheckCircle, Users } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const DRIVE_VIEW = 'https://drive.google.com/file/d/1LtYHG74MpuYGmxT2FIwR9lSRY7BgGiL-/view'
const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1LtYHG74MpuYGmxT2FIwR9lSRY7BgGiL-'

const TOPICS = [
  'Understanding the unique experiences of children born after the loss of a co-multiple',
  'Identity development and family narratives following multiple loss',
  'Recognizing how loss may influence classroom experiences and social interactions',
  'Using inclusive, family-centered language',
  'Adapting family-history, family-tree, and sibling-related assignments',
  'Partnering effectively with parents and caregivers',
  'Knowing when additional counselling or emotional support may be beneficial',
  'Strengths-based approaches that recognize resilience, empathy, and belonging',
]

const WHO = [
  'Teachers and classroom educators',
  'School counsellors and psychologists',
  'Administrators and student support teams',
  'Early childhood educators',
  'Special education professionals',
  'Any professional supporting children with a history of multiple loss',
]

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

          <RevealDiv className="mb-14">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF develops and curates educational materials to improve understanding of VTS and multifetal pregnancy. Resources are designed to be accessible, accurate, and sensitive to diverse family experiences worldwide.
            </p>
          </RevealDiv>

          {/* ── FEATURED: School After Loss ── */}
          <RevealDiv className="mb-16">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1A0A3D 0%, #2D1060 60%, #1A0855 100%)',
                border: '1px solid rgba(139,63,212,0.25)',
                boxShadow: '0 8px 48px rgba(74,26,140,0.25)',
              }}
            >
              {/* Header bar */}
              <div
                className="flex items-center gap-3 px-8 py-5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(194,64,140,0.2)' }}
                >
                  <GraduationCap size={20} color="#C2408C" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4DB8E8', fontFamily: 'DM Mono, monospace' }}>
                    Featured Resource
                  </p>
                  <h2 className="font-serif font-semibold text-white text-2xl leading-tight">
                    School After Loss
                  </h2>
                </div>
              </div>

              <div className="px-8 pt-7 pb-8">
                <p className="text-white/80 text-base font-medium mb-3 leading-snug">
                  Supporting Children Born After the Loss of a Twin or Co-Multiple
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-2">
                  This guidance brief was developed for educators, school counsellors, psychologists, administrators, and support staff who work with children born following the prenatal or neonatal loss of a twin, triplet, or other co-multiple.
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Many children born after multiple loss thrive and never require specialized support. However, questions surrounding identity, family history, sibling relationships, and loss may emerge at different developmental stages and are often poorly understood within educational settings. This resource provides evidence-informed guidance to help schools respond with sensitivity, understanding, and inclusion. The guide also includes practical classroom examples, educator-friendly recommendations, and links to additional support organizations and resources.
                </p>

                {/* Two-column content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Topics covered */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#4DB8E8', fontFamily: 'DM Mono, monospace' }}>
                      Topics Covered
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {TOPICS.map((t, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle size={14} color="#4DB8E8" className="flex-shrink-0 mt-0.5" aria-hidden />
                          <span className="text-sm text-white/65 leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who should use */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#C2408C', fontFamily: 'DM Mono, monospace' }}>
                      Who Should Use This Resource
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {WHO.map((w, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Users size={14} color="#C2408C" className="flex-shrink-0 mt-0.5" aria-hidden />
                          <span className="text-sm text-white/65 leading-relaxed">{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download / View buttons */}
                <div
                  className="flex flex-wrap gap-3 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <a
                    href={DRIVE_VIEW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                  >
                    <ExternalLink size={15} />
                    Download Here
                  </a>
                  <a
                    href={DRIVE_DOWNLOAD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-125"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <Download size={15} />
                    Save PDF
                  </a>
                </div>

                {/* Supporting org note */}
                <p className="text-xs text-white/35 leading-relaxed mt-5 italic">
                  If you are interested in being listed as a supporting organization, institution, or individual,{' '}
                  <Link to="/contact" className="underline underline-offset-2 text-white/50 hover:text-white/75 transition-colors">
                    please complete this form
                  </Link>.
                </p>
              </div>
            </div>
          </RevealDiv>

          {/* ── Additional Resources ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-2">Additional Resources</h2>
            <p className="text-[#1A1020]/50 text-base">Browse by audience.</p>
          </RevealDiv>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
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
