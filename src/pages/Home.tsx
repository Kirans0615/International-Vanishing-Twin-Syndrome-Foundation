import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Heart, BookOpen, FlaskConical, HeartHandshake, Stethoscope, Users, Handshake } from 'lucide-react';
import { VideoBackground } from '../components/VideoBackground';
import { useReveal } from '../hooks/useInView';

// HIGGSFIELD ASSET
// Prompt: "A single luminous purple and magenta butterfly with iridescent wings slowly opens from closed to fully spread in extreme slow motion, floating gently upward, soft bioluminescent glow emanating from wing edges, photorealistic macro, 4K cinematic, deep dark cosmic purple background, dreamlike depth of field, seamless loop"
// Replace URL: https://d8j0ntlcm91z4.cloudfront.net/[ID].mp4
const HOME_HERO_VIDEO: string | undefined = undefined;

// HIGGSFIELD ASSET
// Prompt: "Soft abstract purple violet and teal light wisps and particles slowly drifting in darkness, warm and ethereal, nonprofit emotional warmth, ultra-wide cinematic, seamless loop, very subtle motion"
const WHO_BG_VIDEO: string | undefined = undefined;

// HIGGSFIELD ASSET
// Prompt: "Deep space purple nebula slowly breathing and shifting, dark cosmic background, very subtle motion, cinematic seamless loop"
const NEBULA_VIDEO: string | undefined = undefined;

// HIGGSFIELD ASSET
// Prompt: "Abstract flowing purple particles and light streams, dark background, seamless loop, scientific ethereal"
const CARD1_VIDEO: string | undefined = undefined;

// HIGGSFIELD ASSET
// Prompt: "Purple aurora-like light slowly shifting, dark background, dreamlike, seamless loop"
const CARD4_VIDEO: string | undefined = undefined;

// HIGGSFIELD ASSET
// Prompt: "Purple wind chime with soft light and gentle motion, outdoor bokeh background, golden and violet tones, cinematic slow motion"
const SHOP_VIDEO: string | undefined = undefined;

const PARTNER_MARQUEE = ['ICOMBO', 'Butterfly Project', 'ISUOG', 'MoA', 'Bereavement UK', 'IPEN', 'Global Twins', 'Wind River Chimes'];

const PARTICLE_DATA = Array.from({ length: 55 }, (_, i) => {
  const seed = i * 137.508;
  return {
    id: i,
    x: (seed % 100),
    y: ((seed * 1.618) % 100),
    size: 2 + (i % 3),
    color: ['#4DB8E8', '#8B3FD4', '#C2408C', '#87CEEB'][i % 4],
    opacity: 0.15 + (i % 3) * 0.08,
    duration: 5 + (i % 6),
    delay: (i % 7),
  };
});

const AUDIENCE_CARDS = [
  { Icon: Heart, color: '#C2408C', title: 'Parents &\nFamilies', desc: 'Resources, stories, and support for those who have experienced VTS.', link: '/knowledge-hub/peer-support', cta: 'Find Support' },
  { Icon: Stethoscope, color: '#4A1A8C', title: 'Healthcare\nProviders', desc: 'Clinical guidance, diagnostic resources, and communication tools.', link: '/what-is-vts/diagnosing', cta: 'View Clinical Resources' },
  { Icon: BookOpen, color: '#6B2DB5', title: 'Educators', desc: 'Evidence-based materials for teaching about VTS and multifetal loss.', link: '/knowledge-hub/literature', cta: 'Explore Literature' },
  { Icon: Handshake, color: '#4DB8E8', title: 'Potential\nCollaborators', desc: 'Partner with us to advance research and global awareness.', link: '/contact', cta: 'Get In Touch' },
  { Icon: Users, color: '#8B3FD4', title: 'Prospective\nVolunteers', desc: 'Join our global team of advocates, researchers, and communicators.', link: '/volunteer', cta: 'Join Our Team' },
];

const STAT_CHIPS = [
  { text: '35%+ of twin pregnancies may involve VTS', color: '#4DB8E8', mono: true, bold: false, italic: false },
  { text: '50%+ of triplet pregnancies', color: '#87CEEB', mono: true, bold: false, italic: false },
  { text: 'First identified 1945', color: 'rgba(255,255,255,0.7)', mono: false, bold: false, italic: false },
  { text: 'Rates thought to be much higher', color: 'rgba(255,255,255,0.45)', mono: false, bold: false, italic: true },
  { text: 'VTS is NOT rare', color: '#C2408C', mono: false, bold: true, italic: false },
  { text: 'Grief responses vary — all are valid', color: 'rgba(255,255,255,0.6)', mono: false, bold: false, italic: false },
  { text: 'Clear language reduces harm', color: '#8B3FD4', mono: false, bold: false, italic: false },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Home() {
  const particles = useMemo(() => PARTICLE_DATA, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">
        <VideoBackground
          src={HOME_HERO_VIDEO}
          className="absolute inset-0 w-full h-full"
          fallbackStyle={{ background: 'radial-gradient(ellipse at center, #2D1060 0%, #1A0A3D 50%, #0D0520 100%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.94) 0%, rgba(10,4,28,0.5) 40%, rgba(10,4,28,0.1) 100%)' }}
          aria-hidden
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full animate-particle-drift"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                opacity: p.opacity,
                ['--duration' as string]: `${p.duration}s`,
                ['--delay' as string]: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-8 w-full max-w-5xl mx-auto">
          <p
            className="text-[11px] tracking-[0.3em] font-medium uppercase mb-6 animate-fade-slide-up"
            style={{ color: '#4DB8E8', animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            International Vanishing Twin Syndrome Foundation
          </p>

          <h1
            className="font-serif font-semibold text-white tracking-[-0.03em] leading-[1.08] mb-6 animate-fade-slide-up"
            style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            Understanding.<br />Research.<br />Support.
          </h1>

          <p
            className="text-base md:text-lg max-w-[560px] leading-[1.7] mb-8 animate-fade-slide-up"
            style={{ color: '#C4B5D4', animationDelay: '1.1s', animationFillMode: 'both' }}
          >
            Advancing research and compassionate support for families and providers worldwide.
          </p>

          <div className="w-full max-w-2xl overflow-hidden mb-8 opacity-60">
            <div className="flex whitespace-nowrap" style={{ animation: 'marquee 24s linear infinite' }}>
              {[...PARTNER_MARQUEE, ...PARTNER_MARQUEE].map((p, i) => (
                <span key={i} className="text-xs text-white/50 tracking-widest mx-6 uppercase font-medium">{p}</span>
              ))}
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-slide-up"
            style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
          >
            {[
              { label: 'Visit Knowledge Hub', href: '/knowledge-hub' },
              { label: 'What is VTS?', href: '/what-is-vts' },
              { label: 'Learn About IVTSF', href: '/about' },
              { label: 'Donate Today', href: '/donate' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="border border-white/25 text-white/80 hover:border-[#4DB8E8] hover:text-[#4DB8E8] rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200"
                style={{ ['--tw-bg-opacity' as string]: '0.08' }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-slide-up"
            style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
          >
            <Link
              to="/what-is-vts"
              className="px-9 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)' }}
            >
              Learn About VTS
            </Link>
            <Link
              to="/donate"
              className="px-9 py-3.5 rounded-full text-white font-medium border border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <Heart size={16} />
              Donate Now
            </Link>
          </div>

          <div
            className="flex flex-col items-center gap-2 animate-fade-slide-up"
            style={{ animationDelay: '1.8s', animationFillMode: 'both' }}
            aria-hidden
          >
            <ChevronDown size={24} color="#4DB8E8" className="animate-scroll-bounce" />
          </div>
        </div>
      </section>

      {/* ── WHO ARE YOU ── */}
      <section className="bg-[#FAF8FF] px-6 py-24 relative overflow-hidden">
        <VideoBackground
          src={WHO_BG_VIDEO}
          className="absolute inset-0 w-full h-full pointer-events-none"
          opacity={0.04}
          fallbackStyle={{ background: 'transparent' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <RevealDiv className="text-center mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] tracking-[-0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              Who Are You?
            </h2>
          </RevealDiv>
          <RevealDiv className="text-center mb-16 reveal-delay-1">
            <p className="text-[#1A1020]/55 text-lg">Find resources tailored to your needs.</p>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {AUDIENCE_CARDS.map(({ Icon, color, title, desc, link, cta }, i) => (
              <RevealDiv key={link} className={`reveal-delay-${Math.min(i + 1, 4)}`}>
                <Link to={link} className="block h-full">
                  <div className="card-hover rounded-2xl p-7 flex flex-col items-start gap-4 min-h-52 border border-transparent cursor-pointer h-full" style={{ background: '#F0EBF8' }}>
                    <Icon size={28} color={color} aria-hidden />
                    <div>
                      <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-2 whitespace-pre-line">{title}</h3>
                      <p className="text-sm text-[#1A1020]/60 leading-relaxed">{desc}</p>
                    </div>
                    <p className="text-sm font-medium mt-auto" style={{ color }}>{cta} →</p>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION PILLARS ── */}
      <section className="bg-[#FAF8FF] px-6 py-20 border-t border-[#8B3FD4]/10">
        <div className="max-w-7xl mx-auto">
          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] tracking-[-0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              What We Do.
            </h2>
          </RevealDiv>
          <RevealDiv className="mb-12 reveal-delay-1">
            <p className="text-[#1A1020]/55 text-xl max-w-2xl">Three interconnected pillars anchor all of our work.</p>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <RevealDiv className="lg:col-span-2">
              <div className="card-hover rounded-2xl min-h-80 relative overflow-hidden">
                <VideoBackground
                  src={CARD1_VIDEO}
                  className="absolute inset-0 w-full h-full"
                  fallbackStyle={{ background: 'linear-gradient(135deg, #4A1A8C, #2D1060)' }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(74,26,140,0.85)' }} />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-80">
                  <FlaskConical size={32} color="#4DB8E8" className="mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-white text-2xl mb-3">Research &amp;<br />Awareness</h3>
                  <p className="text-white/65 text-sm leading-relaxed">We support and disseminate scientific studies on VTS and its psychological, medical, and developmental implications.</p>
                </div>
              </div>
            </RevealDiv>
            <RevealDiv className="reveal-delay-1">
              <div className="card-hover rounded-2xl p-7 min-h-52 border-l-4 border-[#C2408C] h-full" style={{ background: '#F0EBF8' }}>
                <BookOpen size={28} color="#C2408C" className="mb-4" aria-hidden />
                <h3 className="font-serif font-semibold text-[#4A1A8C] text-xl mb-3">Education &amp;<br />Resources</h3>
                <p className="text-[#1A1020]/65 text-sm leading-relaxed">We develop materials for healthcare providers, patients, and the public to increase understanding of vanishing twin syndrome.</p>
              </div>
            </RevealDiv>
            <RevealDiv className="reveal-delay-2">
              <div className="card-hover rounded-2xl min-h-52 relative overflow-hidden">
                <VideoBackground
                  src={CARD4_VIDEO}
                  className="absolute inset-0 w-full h-full"
                  opacity={0.4}
                  fallbackStyle={{ background: '#1A0A3D' }}
                />
                <div className="absolute inset-0" style={{ background: '#1A0A3D' }} />
                <div className="relative z-10 p-7 h-full flex flex-col justify-end min-h-52">
                  <HeartHandshake size={28} color="#4DB8E8" className="mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-white text-xl mb-3">Family &amp;<br />Provider Support</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Information on support resources for those affected by VTS.</p>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── VTS AT A GLANCE ── */}
      <section className="relative overflow-hidden px-6 py-20">
        <VideoBackground
          src={NEBULA_VIDEO}
          className="absolute inset-0 w-full h-full"
          fallbackStyle={{ background: 'radial-gradient(ellipse at center, #1A0A3D 0%, #0D0520 100%)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(13,5,32,0.82)' }} aria-hidden />
        <div className="relative z-10 max-w-[88rem] mx-auto">
          <RevealDiv className="text-center mb-8">
            <h2 className="font-serif font-semibold text-white text-3xl md:text-4xl mb-3">VTS at a Glance</h2>
          </RevealDiv>
          <div className="overflow-hidden mb-8">
            <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
              {[...STAT_CHIPS, ...STAT_CHIPS].map((chip, i) => (
                <div
                  key={i}
                  className="mx-5 px-6 py-3 rounded-full border border-white/10 flex-none text-sm cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: chip.color,
                    fontFamily: chip.mono ? 'DM Mono, monospace' : 'Inter, sans-serif',
                    fontWeight: chip.bold ? 600 : 400,
                    fontStyle: chip.italic ? 'italic' : 'normal',
                  }}
                >
                  {chip.text}
                </div>
              ))}
            </div>
          </div>
          <RevealDiv className="flex flex-wrap justify-center gap-4">
            {[
              { text: 'VTS is NOT rare', bg: 'rgba(194,64,140,0.2)', border: 'rgba(194,64,140,0.4)', color: '#C2408C' },
              { text: 'Grief responses vary — all are valid', bg: 'rgba(77,184,232,0.15)', border: 'rgba(77,184,232,0.3)', color: '#4DB8E8' },
              { text: 'Clear language reduces harm', bg: 'rgba(139,63,212,0.2)', border: 'rgba(139,63,212,0.4)', color: '#8B3FD4' },
            ].map(({ text, bg, border, color }) => (
              <span key={text} className="px-6 py-2.5 rounded-full text-sm font-medium border" style={{ background: bg, borderColor: border, color }}>
                {text}
              </span>
            ))}
          </RevealDiv>
        </div>
      </section>

      {/* ── SHOP PREVIEW ── */}
      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <RevealDiv className="reveal-left">
            <h2 className="font-serif font-semibold text-[#1A1020] text-4xl mb-4 tracking-[-0.02em]">Memorial Wind Chime</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-3">
              Created in collaboration with Wind River Chimes, the Loss of Multiples Memorial Chime honors the lives of babies lost during multifetal pregnancies.
            </p>
            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-3">
              The purple butterfly — the international symbol for twin loss — is featured prominently, making this chime a meaningful tribute to both the baby who was lost and the surviving twin.
            </p>
            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-8">
              100% of net proceeds support IVTSF's research, education, and global awareness efforts.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: '#4A1A8C' }}
            >
              Shop Now →
            </Link>
          </RevealDiv>
          <RevealDiv className="reveal-right">
            <div className="rounded-2xl overflow-hidden h-80 relative">
              <VideoBackground
                src={SHOP_VIDEO}
                className="w-full h-full"
                fallbackStyle={{ background: 'linear-gradient(135deg, #4A1A8C, #6B2DB5, #C2408C)' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(74,26,140,0.7), transparent)' }} aria-hidden />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── VISION STATEMENT ── */}
      <section style={{ background: '#1A0A3D' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <RevealDiv>
            <blockquote className="font-serif italic text-white text-2xl md:text-3xl leading-relaxed">
              &ldquo;A world where VTS is recognized, supported, and accurately communicated.&rdquo;
            </blockquote>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
