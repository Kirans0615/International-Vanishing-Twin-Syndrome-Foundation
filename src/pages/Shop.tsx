import { ExternalLink, Wind } from 'lucide-react';
import { useReveal } from '../hooks/useInView';
import { HiggsVideo } from '../components/HiggsVideo';
import { HIGGSFIELD, FALLBACKS } from '../assets/higgsfield';

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Shop() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.shopHero} fallbackGradient={FALLBACKS.purpleMid} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <Wind size={36} color="#4DB8E8" className="mb-4 animate-scroll-bounce" aria-hidden />
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">Shop</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Meaningful products that honor loss and support our mission.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <RevealDiv className="reveal-left">
              <div className="relative rounded-2xl overflow-hidden aspect-square" style={{ background: '#1A0A3D' }}>
                <HiggsVideo src={HIGGSFIELD.videos.homeShopChime} fallbackGradient="linear-gradient(135deg, #4A1A8C 0%, #1A0A3D 100%)" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wind size={64} color="rgba(77,184,232,0.4)" aria-hidden />
                </div>
              </div>
            </RevealDiv>

            <RevealDiv className="reveal-right">
              <div className="mb-2">
                <span className="text-xs font-medium rounded-full px-3 py-1" style={{ background: '#F0EBF8', color: '#6B2DB5' }}>
                  Featured Product
                </span>
              </div>
              <h2 className="font-serif font-semibold text-[#1A1020] text-4xl mt-3 mb-4 leading-tight">
                Loss of Multiples<br />Memorial Chime
              </h2>
              <p className="text-[#1A1020]/65 text-base leading-relaxed mb-4">
                Created in partnership with Wind River Chimes, the Loss of Multiples Memorial Chime is a thoughtfully designed tribute for families who have experienced the loss of a twin or multiple. Each chime is crafted with care and carries a message of remembrance.
              </p>
              <p className="text-[#1A1020]/55 text-sm leading-relaxed mb-6">
                A portion of proceeds from each sale supports IVTSF's research and awareness programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://windriverchimes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                >
                  Shop Wind River Chimes <ExternalLink size={15} />
                </a>
              </div>
            </RevealDiv>
          </div>

          <RevealDiv>
            <div className="rounded-2xl p-8 border-l-4 border-[#4DB8E8]" style={{ background: '#F0EBF8' }}>
              <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-2">About Our Partnership</h3>
              <p className="text-[#1A1020]/65 text-base leading-relaxed">
                IVTSF partners with Wind River Chimes to offer the Loss of Multiples Memorial Chime as a way for families to find comfort and honor their loss. This product was developed with input from VTS-affected families and is offered as part of our commitment to meaningful support.
              </p>
            </div>
          </RevealDiv>

          <RevealDiv className="mt-10">
            <div className="text-center rounded-2xl p-8" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-2xl mb-3">Support Our Mission</h3>
              <p className="text-white/55 text-base leading-relaxed mb-6 max-w-lg mx-auto">
                If you would like to support IVTSF directly, you can make a charitable donation through our Givebutter page.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #C2408C, #6B2DB5)' }}
              >
                Donate to IVTSF
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
