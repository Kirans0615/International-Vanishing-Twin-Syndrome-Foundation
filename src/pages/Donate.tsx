import { Heart, ExternalLink, Shield, BookOpen, Megaphone, Users } from 'lucide-react';
import { useReveal } from '../hooks/useInView';

const IMPACTS = [
  { Icon: BookOpen, label: 'Research', desc: 'Fund peer-reviewed VTS research, literature reviews, and scholarly collaborations advancing clinical knowledge.' },
  { Icon: Megaphone, label: 'Awareness', desc: 'Support global awareness campaigns, provider education, and public communications that reach families early.' },
  { Icon: Users, label: 'Community', desc: 'Build peer support networks, educational resources, and family connection programs for those affected.' },
  { Icon: Shield, label: 'Advocacy', desc: 'Drive policy change, improve clinical communication standards, and ensure VTS is recognized in medical practice.' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Donate() {
  return (
    <>
      <div
        className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #9B2D6E 0%, #4A1A8C 50%, #2D1060 100%)' }}
      >
        <Heart size={40} color="#C2408C" className="mb-5 animate-glow-pulse" aria-hidden />
        <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">Donate</h1>
        <p className="text-white/70 text-xl max-w-lg leading-relaxed">Your generosity funds the research, awareness, and support that VTS families deserve.</p>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <RevealDiv className="reveal-left mb-8">
                <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-4">Why Your Gift Matters</h2>
                <p className="text-[#1A1020]/65 text-base leading-relaxed mb-4">
                  Vanishing twin syndrome affects an estimated 10–40% of all multiple pregnancies, yet it remains chronically understudied and underfunded. Families receive insufficient information. Providers lack standardized guidance. Grief goes unacknowledged.
                </p>
                <p className="text-[#1A1020]/65 text-base leading-relaxed">
                  IVTSF is working to change that — and every gift, large or small, helps us move closer to a world where every family affected by VTS receives the care, recognition, and support they deserve.
                </p>
              </RevealDiv>

              <RevealDiv className="reveal-left mb-6">
                <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-5">Your Donation Supports</h3>
                <div className="flex flex-col gap-4">
                  {IMPACTS.map(({ Icon, label, desc }, i) => (
                    <div key={label} className={`flex items-start gap-4 reveal-delay-${i + 1}`}>
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#F0EBF8' }}>
                        <Icon size={18} color="#6B2DB5" aria-hidden />
                      </div>
                      <div>
                        <span className="font-semibold text-[#1A1020] text-sm block mb-1">{label}</span>
                        <p className="text-[#1A1020]/55 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealDiv>

              <RevealDiv className="reveal-left">
                <div className="rounded-xl p-4 border border-[#8B3FD4]/15" style={{ background: '#F0EBF8' }}>
                  <p className="text-xs text-[#1A1020]/50 leading-relaxed">
                    The International Vanishing Twin Syndrome Foundation is a 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. Please consult your tax advisor for guidance specific to your situation.
                  </p>
                </div>
              </RevealDiv>
            </div>

            <RevealDiv className="reveal-right">
              <div className="rounded-2xl overflow-hidden sticky top-28" style={{ background: '#1A0A3D' }}>
                <div className="p-8 text-center border-b border-white/10">
                  <Heart size={32} color="#C2408C" className="mx-auto mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-white text-2xl mb-2">Make a Gift</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    All donations are processed securely through Givebutter, our trusted nonprofit giving platform.
                  </p>
                </div>
                <div className="p-8">
                  <a
                    href="https://givebutter.com/vanishingtwin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:brightness-110 mb-4"
                    style={{ background: 'linear-gradient(135deg, #C2408C, #6B2DB5)' }}
                  >
                    Donate Now <ExternalLink size={16} className="inline ml-1" />
                  </a>
                  <p className="text-white/30 text-xs text-center leading-relaxed">
                    You will be redirected to Givebutter, a secure third-party giving platform. IVTSF does not store your payment information.
                  </p>
                </div>

                <div className="px-8 pb-8">
                  <div className="rounded-xl p-5 border border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed text-center">
                      Prefer to give by check or mail? Contact us at{' '}
                      <a href="mailto:contact@vanishingtwinsyndrome.org" className="text-[#4DB8E8] hover:underline">
                        contact@vanishingtwinsyndrome.org
                      </a>{' '}
                      for mailing instructions.
                    </p>
                  </div>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>
    </>
  );
}
