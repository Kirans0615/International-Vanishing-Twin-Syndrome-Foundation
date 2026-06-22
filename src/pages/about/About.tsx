import { Link } from 'react-router-dom';
import { FlaskConical, BookOpen, HeartHandshake, Scale, Lightbulb, ChevronRight } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

const SUB_PAGES = [
  { label: 'Overview', href: '/about' },
  { label: 'Our Team', href: '/about/team' },
  { label: 'Our Ethics', href: '/about/ethics' },
  { label: 'Tax Returns', href: '/about/tax-returns' },
  { label: 'Newsletters', href: '/about/newsletters' },
];

const PILLARS = [
  { Icon: FlaskConical, color: '#C2408C', num: '01', title: 'Research & Scientific Advancement', desc: 'We support and disseminate peer-reviewed research on VTS and its psychological, medical, and developmental implications across all gestational ages.' },
  { Icon: BookOpen, color: '#4DB8E8', num: '02', title: 'Education for Healthcare Providers', desc: 'We develop evidence-based educational materials and communication resources for clinicians and allied health professionals.' },
  { Icon: HeartHandshake, color: '#8B3FD4', num: '03', title: 'Family Support & Resources', desc: 'We provide information and referrals to support resources for those affected by VTS. The Foundation does not provide counseling or support groups directly.' },
  { Icon: Scale, color: '#6B2DB5', num: '04', title: 'Advocacy & Language Standards', desc: 'We advocate for globally consistent diagnostic criteria and trauma-informed communication standards for all providers discussing VTS with families.' },
  { Icon: Lightbulb, color: '#4A1A8C', num: '05', title: 'Global Awareness', desc: 'We collaborate with international partners to raise awareness of VTS and reduce the profound gap between its prevalence and public understanding.' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function About() {
  return (
    <>
      <div className="relative h-[60vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.aboutHero} fallbackGradient={FALLBACKS.heroDark} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.85) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl md:text-6xl mb-4 tracking-[-0.02em]">About the IVTSF</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A parent- and provider-led 501(c)(3) nonprofit advancing research, education, and support for vanishing twin syndrome worldwide.
          </p>
        </div>
      </div>

      <div className="sticky top-20 z-40 border-b border-[#8B3FD4]/15 bg-[#FAF8FF]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
          {SUB_PAGES.map(({ label, href }) => (
            <Link key={href} to={href} className="px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors text-[#1A1020]/60 hover:text-[#6B2DB5] hover:bg-[#8B3FD4]/5">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-start">
          <RevealDiv className="reveal-left">
            <h2 className="font-serif font-semibold text-[#1A1020] text-4xl leading-tight tracking-[-0.02em]">
              The International<br />Vanishing Twin<br />Syndrome Foundation
            </h2>
          </RevealDiv>
          <RevealDiv className="reveal-right">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed mb-5">
              The International Vanishing Twin Syndrome Foundation (IVTSF) is the leading global nonprofit dedicated to improving understanding, communication, and support around vanishing twin syndrome (VTS) across all gestational ages and life stages.
            </p>
            <p className="text-[#1A1020]/65 text-lg leading-relaxed mb-5">
              IVTSF was founded by Nichole McTurk Cubbage, DHSc, MS, a healthcare professional and VTS parent, alongside a team of parents, clinicians, and researchers who recognized the critical gap between the prevalence of VTS and the care and support available to those affected.
            </p>
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              All IVTSF leadership roles are volunteer positions. The Foundation is committed to transparency, equity, and evidence-based practice in every aspect of its work.
            </p>
          </RevealDiv>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">Our Mission Pillars</h2>
            <p className="text-[#1A1020]/55 text-lg">Five areas guide everything we do.</p>
          </RevealDiv>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ Icon, color, num, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-7 border-l-4 h-full relative" style={{ background: '#F0EBF8', borderLeftColor: color }}>
                  <span className="absolute top-5 right-5 text-xs font-bold text-white px-2 py-1 rounded-full" style={{ background: '#4A1A8C', fontFamily: 'DM Mono, monospace' }}>
                    {num}
                  </span>
                  <Icon size={28} color={color} className="mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-3">{title}</h3>
                  <p className="text-[#1A1020]/65 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Learn More</h2>
          </RevealDiv>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SUB_PAGES.slice(1).map(({ label, href }) => (
              <RevealDiv key={href}>
                <Link to={href} className="card-hover block rounded-2xl p-6 group" style={{ background: '#F0EBF8' }}>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-semibold text-[#1A1020] text-lg">{label}</span>
                    <ChevronRight size={18} color="#6B2DB5" />
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

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
