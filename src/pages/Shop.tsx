import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useInView';
import { HiggsVideo } from '../components/HiggsVideo';
import { HIGGSFIELD, FALLBACKS } from '../assets/higgsfield';

const BASE = import.meta.env.BASE_URL;

const CHIME_IMAGES = [
  `${BASE}unnamed (1).jpg`,
  `${BASE}unnamed (2).jpg`,
  `${BASE}unnamed (3).jpg`,
  `${BASE}unnamed (4).jpg`,
  `${BASE}unnamed (5).jpg`,
  `${BASE}unnamed (6).jpg`,
  `${BASE}unnamed (7).jpg`,
];

const PRODUCT_URL = 'https://windriverchimes.com/products/loss-of-multiples-memorial-chime-27-inch-purple';

function ChimeReel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((idx + CHIME_IMAGES.length) % CHIME_IMAGES.length);
      setTransitioning(false);
    }, 220);
  }, [transitioning]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 3.5 s
  useEffect(() => {
    timerRef.current = setTimeout(next, 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  return (
    <div className="relative rounded-2xl overflow-hidden select-none" style={{ background: '#0D0520' }}>
      {/* Main image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={CHIME_IMAGES[current]}
          alt={`Loss of Multiples Memorial Chime — view ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: transitioning ? 0 : 1 }}
          draggable={false}
        />
      </div>

      {/* Prev / next arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: 'rgba(10,4,28,0.65)', backdropFilter: 'blur(8px)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: 'rgba(10,4,28,0.65)', backdropFilter: 'blur(8px)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {CHIME_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? '#4DB8E8' : 'rgba(255,255,255,0.4)',
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 p-2" style={{ background: 'rgba(10,4,28,0.8)' }}>
        {CHIME_IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 rounded-lg overflow-hidden transition-all duration-200"
            style={{
              aspectRatio: '1',
              outline: i === current ? '2px solid #4DB8E8' : '2px solid transparent',
              outlineOffset: '1px',
              opacity: i === current ? 1 : 0.55,
            }}
            aria-label={`View image ${i + 1}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
          </button>
        ))}
      </div>
    </div>
  );
}

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
          <div className="grid md:grid-cols-2 gap-10 items-start mb-20">

            {/* Image reel */}
            <RevealDiv className="reveal-left">
              <ChimeReel />
            </RevealDiv>

            {/* Product info */}
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
                Created in partnership with Wind River Chimes, the Loss of Multiples Memorial Chime is a thoughtfully designed tribute for families who have experienced the loss of a twin or multiple. Each 27-inch chime is crafted with care and carries a message of remembrance.
              </p>
              <p className="text-[#1A1020]/55 text-sm leading-relaxed mb-3">
                The purple butterfly — the international symbol for twin loss — is featured prominently, making this chime a meaningful tribute to both the baby who was lost and the surviving twin.
              </p>
              <p className="text-[#1A1020]/55 text-sm leading-relaxed mb-8">
                A portion of proceeds from each sale supports IVTSF's research and awareness programs.
              </p>
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Shop Wind River Chimes <ExternalLink size={15} />
              </a>
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
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #C2408C, #6B2DB5)' }}
              >
                Donate to IVTSF
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
