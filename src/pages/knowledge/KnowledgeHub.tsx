import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, MessageSquare, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { ParticleField } from '../../components/ParticleField';
import { GlowOrbs } from '../../components/GlowOrbs';
import { KnowledgeSubNav } from '../../components/KnowledgeSubNav';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

const SUB_NAV = [
  { label: 'Literature Repository', href: '/knowledge-hub/literature' },
  { label: 'Partners & Resources', href: '/knowledge-hub/partners' },
  { label: 'Peer Support', href: '/knowledge-hub/peer-support' },
  { label: 'Stories of Loss', href: '/knowledge-hub/stories' },
];

const SECTIONS = [
  { Icon: BookOpen, color: '#6B2DB5', bg: 'linear-gradient(135deg, #4A1A8C, #2D1060)', title: 'Literature Repository', desc: 'Peer-reviewed publications and ongoing scholarly projects advancing VTS research.', href: '/knowledge-hub/literature' },
  { Icon: Users, color: '#4DB8E8', bg: 'linear-gradient(135deg, #1A0A3D, #4A1A8C)', title: 'Partners & Resources', desc: 'External organizations supporting VTS families, research, and clinical practice.', href: '/knowledge-hub/partners' },
  { Icon: Heart, color: '#C2408C', bg: 'linear-gradient(135deg, #2D1060, #9B2D6E)', title: 'Peer Support', desc: 'Community resources and mutual aid networks for those affected by VTS.', href: '/knowledge-hub/peer-support' },
  { Icon: MessageSquare, color: '#87CEEB', bg: 'linear-gradient(135deg, #1A0A3D, #6B2DB5)', title: 'Stories of Loss', desc: 'Personal narratives shared with permission, honoring diverse experiences of loss.', href: '/knowledge-hub/stories' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function KnowledgeHub() {
  return (
    <>
      <div className="relative h-[60vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.knowledgeHero} fallbackGradient={FALLBACKS.darkNebula} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <ParticleField count={50} />
        <GlowOrbs />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-6xl mb-4 tracking-[-0.02em]">Knowledge Hub</h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-8">Evidence-based resources for families, providers, and researchers.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SUB_NAV.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="border border-white/25 text-white/80 hover:border-[#4DB8E8] hover:text-[#4DB8E8] rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <KnowledgeSubNav />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <RevealDiv className="mb-12 text-center">
            <p className="text-[#1A1020]/55 text-xl max-w-2xl mx-auto leading-relaxed">
              IVTSF's Knowledge Hub brings together the latest research, community resources, and personal narratives related to vanishing twin syndrome.
            </p>
          </RevealDiv>

          <div className="grid gap-6 sm:grid-cols-2">
            {SECTIONS.map(({ Icon, color, bg, title, desc, href }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <Link to={href} className="block h-full">
                  <div className="card-hover rounded-2xl min-h-64 relative overflow-hidden h-full">
                    <div className="absolute inset-0" style={{ background: bg }} />
                    <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-64">
                      <Icon size={32} color={color} aria-hidden />
                      <div>
                        <h3 className="font-serif font-semibold text-white text-2xl mb-3">{title}</h3>
                        <p className="text-white/65 text-sm leading-relaxed mb-4">{desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color }}>
                          Explore <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
