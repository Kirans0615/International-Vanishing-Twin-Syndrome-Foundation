import { Users, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '../hooks/useInView';

const BOARD_POSITIONS = [
  {
    title: 'Board Chair',
    desc: 'Provides strategic leadership for IVTSF\'s mission, governance, and organizational direction. Works closely with staff and board members to advance VTS awareness and research.',
    skills: ['Nonprofit governance experience', 'Strategic leadership', 'VTS or perinatal loss experience preferred'],
  },
  {
    title: 'Secretary',
    desc: 'Manages board meeting records, maintains organizational documents, and supports communication between board members and the executive team.',
    skills: ['Organizational detail', 'Written communication', 'Document management'],
  },
  {
    title: 'Treasurer',
    desc: 'Oversees financial reporting, budgeting, and compliance. Ensures fiscal responsibility and supports grant-writing efforts.',
    skills: ['Financial management', 'Nonprofit accounting experience preferred', 'Attention to compliance'],
  },
  {
    title: 'Director of Research',
    desc: 'Guides the scholarly and clinical research agenda of IVTSF, including literature reviews, partnerships with academic institutions, and public-facing research communications.',
    skills: ['Research background (clinical, public health, or social science)', 'Academic writing', 'MFM, genetics, or reproductive medicine background preferred'],
  },
  {
    title: 'Director of Community Engagement',
    desc: 'Leads outreach, peer support program development, and partnerships with patient advocacy organizations and support communities.',
    skills: ['Community organizing experience', 'Peer support background helpful', 'Strong interpersonal skills'],
  },
  {
    title: 'Director of Communications',
    desc: 'Manages IVTSF\'s public presence, social media, newsletter, and media relations.',
    skills: ['Writing and content creation', 'Social media management', 'Health communication experience preferred'],
  },
];

const VOLUNTEER_AREAS = [
  { label: 'Research Support', desc: 'Literature review, data collection, translation, and other academic support tasks.' },
  { label: 'Community Outreach', desc: 'Connecting with VTS families, support groups, and advocacy communities.' },
  { label: 'Communications & Design', desc: 'Graphic design, copywriting, social media content, and website support.' },
  { label: 'Event Support', desc: 'Virtual event coordination, webinar support, and awareness campaign assistance.' },
  { label: 'Translation & Accessibility', desc: 'Translating IVTSF materials into other languages to expand global reach.' },
];

function BoardCard({ title, desc, skills }: { title: string; desc: string; skills: string[] }) {
  const [open, setOpen] = useState(false);
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={className}>
      <div className="rounded-2xl overflow-hidden border border-[#8B3FD4]/15" style={{ background: '#F0EBF8' }}>
        <button
          className="w-full flex items-center justify-between px-7 py-5 text-left"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <h3 className="font-serif font-semibold text-[#1A1020] text-lg">{title}</h3>
          {open ? <ChevronUp size={18} color="#6B2DB5" /> : <ChevronDown size={18} color="#6B2DB5" />}
        </button>
        <div style={{ maxHeight: open ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
          <div className="px-7 pb-6">
            <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-4">{desc}</p>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#6B2DB5] mb-2">Skills &amp; Background</h4>
            <ul className="space-y-1">
              {skills.map((s) => (
                <li key={s} className="text-sm text-[#1A1020]/55 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2408C] flex-shrink-0" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Volunteer() {
  return (
    <>
      <div
        className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #4A1A8C 0%, #2D1060 50%, #9B2D6E 100%)' }}
      >
        <Users size={40} color="#4DB8E8" className="mb-5" aria-hidden />
        <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">Volunteer</h1>
        <p className="text-white/70 text-xl max-w-lg leading-relaxed">Join our team and help advance awareness, research, and support for VTS families worldwide.</p>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed max-w-2xl">
              IVTSF is a volunteer-led nonprofit. Our team includes researchers, healthcare professionals, communications specialists, and individuals with personal experience of VTS. We believe in the power of community to drive change.
            </p>
          </RevealDiv>

          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl">Board Positions</h2>
            <p className="text-[#1A1020]/55 text-base mt-2 leading-relaxed">
              We are actively seeking passionate individuals for the following leadership roles. Board members serve in a volunteer capacity and contribute to IVTSF's governance, research, and mission.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-3 mb-16">
            {BOARD_POSITIONS.map((pos) => (
              <BoardCard key={pos.title} {...pos} />
            ))}
          </div>

          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl">General Volunteering</h2>
            <p className="text-[#1A1020]/55 text-base mt-2 leading-relaxed">
              Not looking for a board position? We also welcome volunteers in the following areas.
            </p>
          </RevealDiv>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-16">
            {VOLUNTEER_AREAS.map(({ label, desc }, i) => (
              <RevealDiv key={label} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-xl p-6 h-full" style={{ background: '#F0EBF8' }}>
                  <h3 className="font-semibold text-[#1A1020] text-base mb-2">{label}</h3>
                  <p className="text-sm text-[#1A1020]/55 leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#1A0A3D' }}>
              <div className="p-10 text-center">
                <h2 className="font-serif font-semibold text-white text-3xl mb-4">Ready to Join Us?</h2>
                <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                  Fill out our volunteer interest form and we will be in touch to discuss how your skills and experience can contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://forms.gle/x66RL7aZjxM7PffSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:brightness-110"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                  >
                    Volunteer Interest Form <ExternalLink size={16} />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/70 font-medium text-base border border-white/20 hover:border-white/50 hover:text-white transition-all"
                  >
                    Contact Us <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
