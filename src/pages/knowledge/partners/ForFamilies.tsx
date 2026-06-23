import { Link } from 'react-router-dom'
import { ClipboardList, Stethoscope, GraduationCap, ArrowRight, BookOpen, Heart, Users, FileText } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: '#6B2DB5' }}
            aria-hidden
          />
          <span className="text-sm text-[#1A1020]/65 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ForFamilies() {
  return (
    <>
      {/* Hero */}
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

          {/* Intro */}
          <RevealDiv className="mb-14">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The International Vanishing Twin Syndrome Foundation (IVTSF) offers core resources created to help families feel informed, supported, and empowered throughout pregnancy and beyond. These tools are designed to be used together and shared with your care team.
            </p>
          </RevealDiv>

          {/* Resource 1 — Prenatal Patient Question Checklist */}
          <RevealDiv className="mb-8 reveal-left">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.12)', boxShadow: '0 2px 20px rgba(74,26,140,0.06)' }}
            >
              {/* Card header */}
              <div className="flex items-center gap-4 px-8 pt-8 pb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(107,45,181,0.1)' }}
                >
                  <ClipboardList size={24} color="#6B2DB5" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#6B2DB5', fontFamily: 'DM Mono, monospace' }}>Resource 1</p>
                  <h2 className="font-serif font-semibold text-[#1A1020] text-2xl leading-tight">Prenatal Patient Question Checklist</h2>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-5">
                  A patient-friendly guide that helps you know what to ask and what to expect. It supports conversations with your provider about:
                </p>
                <BulletList items={[
                  'What type of pregnancy you have (chorionicity), when the loss occurred, and what may have caused it',
                  'How your pregnancy will be monitored, including ultrasound and prenatal testing (such as cfDNA/NIPT)',
                  'What this may mean for your body and for your baby, and how care may change over time',
                  'Follow-up needs, delivery planning, and what comes next',
                ]} />
                <p className="text-sm text-[#1A1020]/55 leading-relaxed mt-5 mb-6 italic">
                  This checklist is meant to reduce uncertainty, give you language for difficult questions, and support respectful, clear communication with your healthcare team during an ongoing pregnancy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/knowledge-hub/partners/families/prenatal-checklist"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                  >
                    View Checklist <ArrowRight size={14} />
                  </Link>
                  <span className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium rounded-full" style={{ background: 'rgba(107,45,181,0.08)', color: '#6B2DB5' }}>
                    For Patients · Printable · Evidence-Based
                  </span>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Resource 2 — Quick Provider Reference Guide */}
          <RevealDiv className="mb-8 reveal-right">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.12)', boxShadow: '0 2px 20px rgba(74,26,140,0.06)' }}
            >
              <div className="flex items-center gap-4 px-8 pt-8 pb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(77,184,232,0.1)' }}
                >
                  <Stethoscope size={24} color="#4DB8E8" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#4DB8E8', fontFamily: 'DM Mono, monospace' }}>Resource 2</p>
                  <h2 className="font-serif font-semibold text-[#1A1020] text-2xl leading-tight">Quick Provider Reference Guide</h2>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-5">
                  A companion resource for your clinicians that helps ensure your care is informed and consistent. It includes:
                </p>
                <BulletList items={[
                  'Clear VTS definitions and typical ultrasound patterns with references to current guidelines',
                  'Documentation and memorialization considerations',
                  'Postnatal and neonatal follow-up guidance',
                  'Language and psychosocial support for compassionate care',
                ]} />
                <p className="text-sm text-[#1A1020]/55 leading-relaxed mt-5 mb-6 italic">
                  You can share this guide with your provider to help them better understand VTS and your needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/knowledge-hub/partners/providers/prenatal-reference"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                    style={{ background: 'linear-gradient(135deg, #4DB8E8, #6B2DB5)' }}
                  >
                    View Reference Guide <ArrowRight size={14} />
                  </Link>
                  <span className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium rounded-full" style={{ background: 'rgba(77,184,232,0.1)', color: '#4DB8E8' }}>
                    For Providers · Clinical Reference · Printable
                  </span>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Resource 3 — School Support */}
          <RevealDiv className="mb-14 reveal-left">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.12)', boxShadow: '0 2px 20px rgba(74,26,140,0.06)' }}
            >
              <div className="flex items-center gap-4 px-8 pt-8 pb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(194,64,140,0.1)' }}
                >
                  <GraduationCap size={24} color="#C2408C" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#C2408C', fontFamily: 'DM Mono, monospace' }}>Resource 3</p>
                  <h2 className="font-serif font-semibold text-[#1A1020] text-2xl leading-tight">School Support</h2>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-5">
                  A guidance brief developed for educators, school counsellors, psychologists, administrators, and support staff who work with children born following the prenatal or neonatal loss of a twin, triplet, or other co-multiple. This resource helps schools create supportive, inclusive environments for children whose experiences may otherwise go unrecognized.
                </p>
                <p className="text-sm font-semibold text-[#1A1020]/70 mb-3">The resource explores:</p>
                <BulletList items={[
                  'Identity development and family narratives after multiple loss',
                  'Inclusive language and classroom practices',
                  'Family-history assignments and sensitive educational planning',
                  'Strategies for partnering with caregivers',
                  'When additional emotional support may be appropriate',
                ]} />
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium rounded-full" style={{ background: 'rgba(194,64,140,0.08)', color: '#C2408C' }}>
                    For Educators · School Counsellors · Administrators
                  </span>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Additional Sources */}
          <RevealDiv>
            <div
              className="rounded-2xl p-8"
              style={{ background: '#1A0A3D' }}
            >
              <h2 className="font-serif font-semibold text-white text-2xl mb-3">Additional Sources</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                The IVTSF offers an opportunity to share your story, as well as evidence-based guidance on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { Icon: FileText, label: 'Both prenatal and postpartum diagnosis of VTS', href: '/what-is-vts/diagnosing' },
                  { Icon: BookOpen, label: 'What is known about VTS management and care', href: '/what-is-vts/treatment' },
                  { Icon: Heart, label: 'Memorialization and respectful disposition of fetal remains', href: '/knowledge-hub/partners/memorialization' },
                  { Icon: Users, label: 'Peer support', href: '/knowledge-hub/peer-support' },
                ].map(({ Icon, label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="flex items-start gap-3 rounded-xl p-4 transition-all hover:brightness-125"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Icon size={16} color="#4DB8E8" className="flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-white/70 leading-relaxed">{label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/knowledge-hub/stories/share"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Share Your Story <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>

        </div>
      </section>
    </>
  )
}
