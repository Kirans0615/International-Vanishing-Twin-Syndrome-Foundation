import { Link } from 'react-router-dom';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { ParticleField } from '../../components/ParticleField';
import { VtsSubNav } from '../../components/VtsSubNav';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

const OUTCOMES = [
  { num: '1', title: 'Loss Before 10 Weeks', desc: 'One embryo is resorbed, leaving little or no trace. This is the most common scenario and often goes undetected without early ultrasound.', color: '#6B2DB5' },
  { num: '2', title: 'Loss Between 10–20 Weeks', desc: 'The fetus may be compressed into the placenta (fetus papyraceous). Physical evidence may be present at delivery.', color: '#4DB8E8' },
  { num: '3', title: 'Loss After 20 Weeks', desc: 'The pregnancy continues as a singleton with documented twin loss. Grief responses at this stage are often more pronounced.', color: '#C2408C' },
];

const STAT_CARDS = [
  { value: 35, suffix: '%+', label: 'of twin pregnancies', sub: 'may involve VTS', color: 'linear-gradient(135deg, #6B2DB5, #4A1A8C)' },
  { value: 50, suffix: '%+', label: 'of triplet pregnancies', sub: 'are estimated to involve VTS', color: 'linear-gradient(135deg, #C2408C, #9B2D6E)' },
  { value: 30, suffix: '%', label: 'of ART pregnancies', sub: 'may be affected by VTS', color: 'linear-gradient(135deg, #4DB8E8, #6B2DB5)' },
];


function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function WhatIsVTS() {
  return (
    <>
      <div className="relative h-[65vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.vtsHero} fallbackGradient={FALLBACKS.heroDark} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <ParticleField count={40} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            What is Vanishing<br />Twin Syndrome?
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Understanding a common, often unacknowledged pregnancy experience.</p>
        </div>
      </div>

      <VtsSubNav />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              Vanishing twin syndrome (VTS) occurs when one twin (or a multiple) is lost during a multiple pregnancy, most often through miscarriage or resorption. The loss can occur at any point in the pregnancy — from early embryonic stages to later fetal development. VTS is estimated to affect more than 35% of twin pregnancies
              <sup><a href="https://doi.org/10.1017/thg.2025.10" target="_blank" rel="noopener noreferrer" className="text-[#4DB8E8] text-xs hover:underline">¹</a></sup>,
              approximately 50% of triplet pregnancies
              <sup><a href="https://doi.org/10.1017/thg.2025.10" target="_blank" rel="noopener noreferrer" className="text-[#4DB8E8] text-xs hover:underline">²</a></sup>,
              and 20–30% of assisted reproductive technology (ART) pregnancies
              <sup><a href="https://doi.org/10.1017/thg.2025.10" target="_blank" rel="noopener noreferrer" className="text-[#4DB8E8] text-xs hover:underline">³</a></sup>.
            </p>
          </RevealDiv>

          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {STAT_CARDS.map(({ value, suffix, label, sub, color }) => (
              <RevealDiv key={label}>
                <div className="rounded-2xl p-8 text-white text-center min-h-40 flex flex-col items-center justify-center" style={{ background: color }}>
                  <div className="text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'DM Mono, monospace' }}>
                    {value}{suffix}
                  </div>
                  <div className="text-white/80 font-medium text-sm uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white/55 text-xs">{sub}</div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Three Possible Outcomes</h2>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-3 mb-16">
            {OUTCOMES.map(({ num, title, desc, color }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${i + 1}`}>
                <div className="card-hover rounded-2xl p-7 border-t-4 h-full" style={{ background: '#F0EBF8', borderTopColor: color }}>
                  <span className="text-sm font-bold mb-3 inline-block" style={{ fontFamily: 'DM Mono, monospace', color }}>0{num}</span>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">{title}</h3>
                  <p className="text-sm text-[#1A1020]/65 leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Contributing Factors</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed">
              VTS can result from chromosomal abnormalities, suboptimal implantation, poor placentation, or umbilical cord complications. It is often not preventable, and in many cases, no clear cause is identified. Understanding this is an important part of how providers can communicate compassionately with affected families.
            </p>
          </RevealDiv>

          <RevealDiv>
            <div className="rounded-2xl p-8" style={{ background: '#1A0A3D' }}>
              <AlertCircle size={28} color="#C2408C" className="mb-3" aria-hidden />
              <h3 className="font-serif font-semibold text-white text-xl mb-3">A Critical Communication Gap</h3>
              <p className="text-white/75 text-base leading-relaxed">
                Perhaps most concerning is that families often are not told about VTS during or after their pregnancy. When they do hear about it, the language used may minimize or dismiss the significance of the loss. IVTSF exists in part to change this — to ensure families receive timely, accurate, and compassionate information.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing', color: '#6B2DB5' },
              { label: 'Treatment', href: '/what-is-vts/treatment', color: '#4DB8E8' },
              { label: 'Key Terms', href: '/what-is-vts/key-terms', color: '#C2408C' },
            ].map(({ label, href, color }) => (
              <Link key={href} to={href}>
                <div className="card-hover group rounded-2xl p-7 flex items-center justify-between" style={{ background: '#F0EBF8' }}>
                  <span className="font-serif font-semibold text-[#1A1020] text-xl group-hover:text-[#6B2DB5] transition-colors">{label}</span>
                  <ChevronRight size={20} color={color} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
