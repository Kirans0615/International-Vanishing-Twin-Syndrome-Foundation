import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { ParticleField } from '../../components/ParticleField';
import { AboutSubNav } from '../../components/AboutSubNav';

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Newsletters() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div
        className="relative h-[35vh] overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #4A1A8C 100%)' }}
      >
        <ParticleField count={20} />
        <h1 className="relative z-10 font-serif font-semibold text-white text-5xl mb-4">Newsletters</h1>
        <p className="relative z-10 text-white/70 text-lg">Stay informed about VTS research, events, and advocacy.</p>
      </div>

      <AboutSubNav />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Recent Issues</h2>
          </RevealDiv>

          <RevealDiv className="mb-4">
            <div className="card-hover rounded-2xl p-7 flex items-center justify-between flex-wrap gap-4" style={{ background: '#F0EBF8' }}>
              <div className="flex items-center gap-4">
                <Mail size={32} color="#C2408C" aria-hidden />
                <div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl">Spring 2026</h3>
                  <p className="text-sm text-[#1A1020]/50">IVTSF Newsletter</p>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/18btS07eaL8WNkfgEVoHqlpGFYc7nJ93A/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110"
                style={{ background: '#4A1A8C' }}
              >
                Read Now →
              </a>
            </div>
          </RevealDiv>

          <RevealDiv className="reveal-delay-1 mt-16">
            <div className="rounded-2xl p-10 text-center" style={{ background: '#F0EBF8' }}>
              <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Stay Updated</h2>
              <p className="text-[#1A1020]/55 mb-8 leading-relaxed">
                Subscribe to receive IVTSF newsletters, research updates, and advocacy news. We send only what matters.
              </p>
              {submitted ? (
                <p className="text-[#6B2DB5] font-medium text-lg">Thank you for subscribing!</p>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-[#8B3FD4]/20 bg-white text-[#1A1020] outline-none focus:border-[#6B2DB5] focus:ring-2 transition-all"
                    style={{ ['--tw-ring-color' as string]: 'rgba(107,45,181,0.2)' }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:brightness-110"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-xs text-[#1A1020]/40 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
