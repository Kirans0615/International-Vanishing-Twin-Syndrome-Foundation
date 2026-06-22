import { ExternalLink } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { KnowledgeSubNav } from '../../components/KnowledgeSubNav';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

const SCHOLARLY = [
  { num: '1', title: 'Systematic Literature Review on VTS', status: 'Ongoing', statusColor: 'green', desc: 'Comprehensive review of existing VTS literature to identify gaps in research and clinical practice across all gestational ages.' },
  { num: '2', title: 'Prevalence & Outcomes Study', status: 'Ongoing', statusColor: 'green', desc: 'Investigating the true prevalence of VTS across different gestational ages and assisted reproductive technology (ART) procedures.' },
  { num: '3', title: 'Communication Standards Development', status: 'Ongoing', statusColor: 'green', desc: 'Developing evidence-based language guidelines for healthcare providers discussing VTS with patients and families.' },
  { num: '4', title: 'Healthcare Provider Survey', status: 'Ongoing', statusColor: 'green', desc: 'Assessing awareness and knowledge of VTS among OB/GYNs, midwives, fertility specialists, and allied health professionals.' },
  { num: '5', title: 'Patient Experience Registry', status: 'Under Development', statusColor: 'amber', desc: 'A registry to collect and analyze experiences of VTS from affected individuals across multiple countries.' },
  { num: '6', title: 'Educational Curriculum for Medical Schools', status: 'Conceptual', statusColor: 'purple', desc: 'Developing VTS-specific curriculum for medical and nursing school integration.' },
  { num: '7', title: 'VTS and Long-term Psychological Impact', status: 'Conceptual', statusColor: 'purple', desc: 'Exploring the psychological effects of VTS loss on survivors, cotwins, parents, and families across the life course.' },
  { num: '8', title: 'Global VTS Awareness Campaign', status: 'Ongoing', statusColor: 'green', desc: 'Coordinating international awareness efforts and provider education across multiple languages and regions.' },
];

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  green: { bg: '#DCFCE7', text: '#15803D' },
  amber: { bg: '#FEF3C7', text: '#92400E' },
  purple: { bg: '#F0EBF8', text: '#6B2DB5' },
};

const ACCENT_COLORS = ['#C2408C', '#4DB8E8', '#8B3FD4', '#6B2DB5', '#4A1A8C', '#C2408C', '#4DB8E8', '#8B3FD4'];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Literature() {
  return (
    <>
      <div className="relative h-[45vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.literatureHero} fallbackGradient={FALLBACKS.darkNebula} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Literature Repository</h1>
          <p className="text-white/70 text-lg max-w-xl">Scholarly contributions and ongoing research projects.</p>
        </div>
      </div>

      <KnowledgeSubNav />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">Current Scholarly Contributions &amp; Projects</h2>
          </RevealDiv>
          <div className="grid gap-5 md:grid-cols-2">
            {SCHOLARLY.map(({ num, title, status, statusColor, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-7 border-l-4 h-full relative" style={{ background: '#F0EBF8', borderLeftColor: ACCENT_COLORS[i] }}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl font-bold" style={{ fontFamily: 'DM Mono, monospace', color: '#6B2DB5', lineHeight: 1 }}>{num}</span>
                    <span
                      className="text-xs font-medium rounded-full px-3 py-1 flex-shrink-0 ml-2"
                      style={{ background: STATUS_STYLES[statusColor].bg, color: STATUS_STYLES[statusColor].text }}
                    >
                      {status}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-3">{title}</h3>
                  <p className="text-sm text-[#1A1020]/65 leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">Past Contributions</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed">IVTSF members and collaborators have contributed to peer-reviewed scholarship on VTS.</p>
          </RevealDiv>

          <RevealDiv className="mb-5 reveal-delay-1">
            <div className="card-hover rounded-2xl p-8" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-xl mb-2">Navigating the Loss of a Vanishing Twin</h3>
              <p className="text-white/50 text-sm mb-4" style={{ fontFamily: 'DM Mono, monospace' }}>
                McTurk Cubbage, N. et al. (2025). Twin Research and Human Genetics.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A mixed-methods study exploring how parents experience the loss of a vanishing twin, the language used by providers, and the impact on family wellbeing. Published in Twin Research and Human Genetics.
              </p>
              <a
                href="https://doi.org/10.1017/thg.2025.10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                <ExternalLink size={14} />
                View Publication
              </a>
              <p className="text-white/30 text-xs mt-4 italic">
                &copy; Cambridge University Press 2025. Shared here for informational purposes only under fair use for educational reference.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
