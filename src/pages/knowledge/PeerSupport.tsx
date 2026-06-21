import { AlertTriangle, Heart, Users, ExternalLink, Phone } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';

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
      <div
        className="relative h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #9B2D6E 0%, #4A1A8C 60%, #2D1060 100%)' }}
      >
        <h1 className="font-serif font-semibold text-white text-5xl mb-4">Peer Support</h1>
        <p className="text-white/70 text-lg max-w-xl">Community resources and mutual aid for those affected by vanishing twin syndrome.</p>
      </div>

      {/* PROMINENT CRISIS DISCLAIMER */}
      <section className="px-6 py-6 sticky top-20 z-30">
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
          <RevealDiv className="mb-12">
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
