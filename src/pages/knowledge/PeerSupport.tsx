import { AlertTriangle, Heart, Users, ExternalLink, Phone, Download, CheckCircle, BookOpen } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { KnowledgeHubSubNav } from '../../components/KnowledgeHubSubNav';
import { Breadcrumb } from '../../components/Breadcrumb';
import { HIGGSFIELD } from '../../assets/higgsfield';

const PAPER_PDF = 'https://footprintsbabyloss.org/wp-content/uploads/2025/09/Position-paper-The-Role-of-Peer-Support-in-Multiple-Pregnancy-Complications-and-Loss-1.pdf'
const PAPER_PAGE = 'https://footprintsbabyloss.org/resources/peer-support-position-paper/'

const PAPER_HIGHLIGHTS = [
  'The emotional and psychological needs of families facing VTS and other complications',
  'The role of lived experience in supporting bereaved parents',
  'The impact of peer support on resilience, coping, and well-being',
  'Recommendations for healthcare providers on guiding parents toward reliable peer support',
]

const RESOURCES = [
  { name: 'Postpartum Support International', desc: 'Helpline and resources for perinatal mental health, including grief after pregnancy loss.', href: 'https://www.postpartum.net', phone: '1-800-944-4773' },
  { name: 'SHARE Pregnancy & Infant Loss Support', desc: 'Community support, resources, and education for those grieving a pregnancy or infant loss.', href: 'https://nationalshare.org', phone: null },
  { name: 'RESOLVE: The National Infertility Association', desc: 'Support for families navigating infertility and related loss, including loss during ART pregnancies.', href: 'https://resolve.org', phone: null },
  { name: 'National Alliance on Mental Illness (NAMI)', desc: 'Mental health support and resources, including grief and traumatic loss. Crisis helpline available.', href: 'https://www.nami.org', phone: '1-800-950-6264' },
];

const SUPPORT_AREAS = [
  { Icon: Heart, title: 'Grief After Loss', desc: 'Processing the loss of a twin or multiple is a valid and real grief experience, whether the loss occurred at 6 weeks or 36 weeks of pregnancy.' },
  { Icon: Users, title: 'Cotwin Support', desc: 'Surviving twins and their families often benefit from specialized support as they navigate identity, health, and the unique experience of being a solo twin.' },
  { Icon: Heart, title: 'Provider Communication', desc: 'Many families experience inadequate communication from providers. IVTSF advocates for better standards and can help families find trauma-informed care.' },
  { Icon: Users, title: 'Community Connection', desc: 'Connecting with others who understand the VTS experience can be profoundly healing. We work to build and strengthen peer networks worldwide.' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function PeerSupport() {
  return (
    <>
      <div className="relative h-[48vh] overflow-hidden">
        <HiggsVideo src={HIGGSFIELD.videos.peerSupportHero} fallbackGradient="linear-gradient(135deg, #9B2D6E 0%, #4A1A8C 60%, #2D1060 100%)" className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Peer Support</h1>
          <p className="text-white/70 text-lg max-w-xl">Community resources and mutual aid for those affected by vanishing twin syndrome.</p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      {/* PROMINENT CRISIS DISCLAIMER */}
      <section className="px-6 py-6">
        <div className="max-w-3xl mx-auto rounded-2xl border-2 border-amber-400 p-6" style={{ background: '#FFFBEB' }}>
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h2 className="font-semibold text-amber-800 text-base mb-2">If You Are in Crisis, Please Reach Out Now</h2>
              <p className="text-amber-700 text-sm leading-relaxed mb-3">
                IVTSF is not a crisis service and cannot provide emergency counseling. If you are experiencing a mental health crisis, thoughts of self-harm, or suicidal ideation, please contact a crisis service immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: '#D97706' }}
                >
                  <Phone size={14} />
                  988 Suicide &amp; Crisis Lifeline (US)
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-amber-800 text-sm font-semibold border border-amber-400 hover:bg-amber-50 transition-colors"
                >
                  <ExternalLink size={14} />
                  International Crisis Lines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pt-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* ── Intro ── */}
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-5">
              Evidence-Based Peer Support in Multiple Pregnancy Loss
            </h2>
            <div className="flex flex-col gap-4 text-[#1A1020]/65 text-base leading-relaxed">
              <p>
                Families experiencing VTS, TTTS, TAPS, sFGR, and other multiple-pregnancy complications often navigate profound grief, uncertainty, and complex emotional experiences that are not widely understood outside of lived experience. Peer support networks — especially those designed for multiple-birth loss — can provide emotional validation, practical insight, and community connection.
              </p>
              <p>
                The IVTSF recognizes peer support as a valuable complement to medical care and counseling, and we stand with global partner organizations to ensure families have access to safe, science-grounded, and compassionate community support.
              </p>
            </div>
          </RevealDiv>

          {/* ── Position Paper featured card ── */}
          <RevealDiv className="mb-16">
            <p className="text-sm font-semibold text-[#1A1020]/50 mb-4 uppercase tracking-widest" style={{ fontFamily: 'DM Mono, monospace' }}>
              We proudly share this recommended resource from our international partners:
            </p>
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
                  <BookOpen size={20} color="#C2408C" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C2408C', fontFamily: 'DM Mono, monospace' }}>
                    Position Paper · Footprints Baby Loss &amp; TAPS Support Foundation (2024/2025)
                  </p>
                  <h3 className="font-serif font-semibold text-white text-xl leading-snug">
                    The Role of Peer Support in Multiple Pregnancy Complications and Loss
                  </h3>
                </div>
              </div>

              <div className="px-8 pt-6 pb-8">
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  This evidence-based paper highlights:
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {PAPER_HIGHLIGHTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} color="#C2408C" className="flex-shrink-0 mt-0.5" aria-hidden />
                      <span className="text-sm text-white/65 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="flex flex-wrap gap-3 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <a
                    href={PAPER_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                  >
                    <Download size={15} />
                    Download Paper
                  </a>
                  <a
                    href={PAPER_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-125"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <ExternalLink size={15} />
                    View at Footprints / Become a Supporter
                  </a>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* ── separator ── */}
          <div className="mb-14" style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }} />

          <RevealDiv className="mb-4">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed max-w-2xl">
              Grief after vanishing twin syndrome is real and valid, regardless of when the loss occurred or how it is medically classified. IVTSF is committed to connecting affected individuals and families with compassionate, evidence-informed peer support.
            </p>
          </RevealDiv>

          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl">Areas of Support</h2>
          </RevealDiv>

          <div className="grid gap-5 md:grid-cols-2 mb-16">
            {SUPPORT_AREAS.map(({ Icon, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-7 h-full" style={{ background: '#F0EBF8' }}>
                  <Icon size={24} color="#C2408C" className="mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-3">{title}</h3>
                  <p className="text-sm text-[#1A1020]/65 leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl">Trusted External Resources</h2>
            <p className="text-[#1A1020]/55 text-base mt-2 leading-relaxed">
              IVTSF does not endorse specific clinical interventions. The following organizations provide grief support and mental health services. Always consult a licensed provider for your specific needs.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-4 mb-16">
            {RESOURCES.map(({ name, desc, href, phone }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-6" style={{ background: '#F0EBF8' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-1">{name}</h3>
                      <p className="text-sm text-[#1A1020]/60 leading-relaxed mb-3">{desc}</p>
                      {phone && (
                        <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#C2408C] hover:underline">
                          <Phone size={13} />
                          {phone}
                        </a>
                      )}
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                      style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                    >
                      Visit <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="rounded-2xl p-8 text-center" style={{ background: '#1A0A3D' }}>
              <Heart size={28} color="#C2408C" className="mx-auto mb-4" aria-hidden />
              <h2 className="font-serif font-semibold text-white text-2xl mb-3">Connect With IVTSF</h2>
              <p className="text-white/55 text-base leading-relaxed mb-6 max-w-lg mx-auto">
                If you are a peer support provider, counselor, or organization interested in collaborating with IVTSF to improve support networks, we would love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Contact IVTSF
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
