import { Users, ExternalLink, ArrowRight, Heart, BookOpen, Megaphone, Globe, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '../hooks/useInView';
import { HiggsVideo } from '../components/HiggsVideo';
import { HIGGSFIELD } from '../assets/higgsfield';

const BOARD_APPLY = 'https://docs.google.com/forms/d/e/1FAIpQLSfSWCQjCUeex0xXkV6Ou5RjVH_GnAVwyf25LcerV25Fc4wNKg/viewform'
const RESEARCH_APPLY = 'https://docs.google.com/forms/d/e/1FAIpQLSfSWCQjCUeex0xXkV6Ou5RjVH_GnAVwyf25LcerV25Fc4wNKg/viewform'
const VOLUNTEER_FORM = 'https://forms.gle/x66RL7aZjxM7PffSA'

const WHY_VOLUNTEER = [
  {
    Icon: Heart,
    color: '#C2408C',
    title: 'Support Families',
    desc: 'Provide comfort, community, and resources to those navigating multiple pregnancy loss.',
  },
  {
    Icon: Megaphone,
    color: '#6B2DB5',
    title: 'Raise Awareness',
    desc: 'Help educate the public, healthcare providers, and policymakers about VTS.',
  },
  {
    Icon: BookOpen,
    color: '#4DB8E8',
    title: 'Advance Research',
    desc: 'Assist in sharing study opportunities and spreading evidence-based findings.',
  },
  {
    Icon: Globe,
    color: '#8B3FD4',
    title: 'Strengthen Community',
    desc: 'Join a network of compassionate advocates around the world.',
  },
]

const BOARD_POSITIONS = [
  {
    title: 'Social Media Manager',
    desc: 'Manage and grow our digital presence across platforms, including Instagram, Facebook, LinkedIn, and X. Develop content calendars, engage with the community, and amplify IVTSF\'s mission and research.',
    skills: ['Social media strategy and platform management', 'Content creation and copywriting', 'Health communication or nonprofit experience preferred'],
  },
  {
    title: 'Legal Advisor',
    desc: 'Provide legal guidance and support to IVTSF\'s leadership and board. Ideal for a law student seeking practical nonprofit experience, a certified paralegal, or a licensed attorney based in Maryland.',
    skills: ['Law student, certified paralegal, or licensed attorney', 'Based in the United States (Maryland preferred)', 'Interest in nonprofit governance, healthcare, or advocacy law'],
  },
  {
    title: 'Treasurer',
    desc: 'Oversee financial stewardship, reporting, and compliance for IVTSF. Support budgeting, grant tracking, and ensure the organization maintains sound fiscal governance.',
    skills: ['Financial management or accounting background', 'Nonprofit finance or compliance experience preferred', 'Detail-oriented with strong organizational skills'],
  },
  {
    title: 'Clinical Advisor',
    desc: 'Offer clinical expertise and help ensure that IVTSF\'s research, programs, and communications align with current medical standards and practices. Serve as a bridge between the Foundation and the clinical community.',
    skills: ['Licensed healthcare professional (Ob/Gyn, MFM, neonatology, or related specialty preferred)', 'Experience with perinatal or reproductive medicine', 'Interest in patient advocacy and family-centered care'],
  },
]

const VOLUNTEER_AREAS = [
  'Outreach & awareness campaigns',
  'Social media and communications',
  'Event planning and support',
  'Fundraising and donor engagement',
  'Translation and international outreach',
  'Research assistance and data organization',
  'Administrative or technical support',
]

function BoardCard({ title, desc, skills }: { title: string; desc: string; skills: string[] }) {
  const [open, setOpen] = useState(false)
  const { ref, className } = useReveal()
  return (
    <div ref={ref} className={className}>
      <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.12)', boxShadow: '0 2px 12px rgba(74,26,140,0.05)' }}>
        <button
          className="w-full flex items-center justify-between px-7 py-5 text-left transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <h3 className="font-serif font-semibold text-[#1A1020] text-lg">{title}</h3>
          {open
            ? <ChevronUp size={18} color="#6B2DB5" />
            : <ChevronDown size={18} color="#6B2DB5" />
          }
        </button>
        <div style={{ maxHeight: open ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
          <div className="px-7 pb-6">
            <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-5">{desc}</p>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-3" style={{ color: '#6B2DB5', fontFamily: 'DM Mono, monospace' }}>Skills &amp; Background</h4>
            <ul className="flex flex-col gap-2">
              {skills.map(s => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C2408C' }} aria-hidden />
                  <span className="text-sm text-[#1A1020]/55 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={BOARD_APPLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Apply for This Position <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

function SectionDivider() {
  return <div className="my-14" style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }} />
}

export function Volunteer() {
  return (
    <>
      <div className="relative h-[52vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.volunteerHero}
          fallbackGradient="linear-gradient(135deg, #4A1A8C 0%, #2D1060 50%, #9B2D6E 100%)"
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.35) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <Users size={36} color="#4DB8E8" className="mb-5" aria-hidden />
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">
            Interested in Volunteering?
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Join the International Vanishing Twin Syndrome Foundation team.
          </p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* ── Intro ── */}
          <RevealDiv className="mb-14">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-5">
              Join the IVTSF Team
            </h2>
            <p className="text-[#1A1020]/65 text-lg leading-relaxed max-w-3xl">
              The IVTSF is growing, and we're inviting passionate individuals to help guide our next chapter of impact and research. Whether you have lived experience, professional expertise, or simply a passion for helping others, there's a place for you here.
            </p>
          </RevealDiv>

          {/* ── Why Volunteer ── */}
          <RevealDiv className="mb-5">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl">Why Volunteer with IVTSF?</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {WHY_VOLUNTEER.map(({ Icon, color, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${i + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={22} color={color} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-base mb-2">{title}</h3>
                  <p className="text-sm text-[#1A1020]/55 leading-relaxed flex-1">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-2">
            <div
              className="rounded-xl p-5 flex items-center justify-between gap-4"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.12)' }}
            >
              <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                Click below to see how you can get involved — open board positions, research advisory roles, and general volunteer opportunities await.
              </p>
              <ArrowRight size={16} color="#6B2DB5" className="flex-shrink-0" aria-hidden />
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Board Positions ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Board Positions Open
            </h2>
            <p className="text-[#1A1020]/55 text-base leading-relaxed max-w-2xl">
              The IVTSF is currently seeking passionate individuals for the following leadership roles. Board members serve in a volunteer capacity and contribute to IVTSF's governance, programs, and mission.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-3 mb-8">
            {BOARD_POSITIONS.map(pos => (
              <BoardCard key={pos.title} {...pos} />
            ))}
          </div>

          <RevealDiv>
            <a
              href={BOARD_APPLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
            >
              Apply for a Board Position <ExternalLink size={14} />
            </a>
          </RevealDiv>

          <SectionDivider />

          {/* ── Research Advisors ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Research Advisors
            </h2>
          </RevealDiv>

          <RevealDiv className="mb-8">
            <div
              className="rounded-2xl p-8"
              style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
            >
              <p className="text-[#1A1020]/65 text-base leading-relaxed mb-5">
                The IVTSF is expanding our Research Advisory Group. These are non-board, volunteer consulting roles for individuals with research, medical, scientific, or related expertise who wish to contribute on an ad hoc basis.
              </p>
              <p className="text-[#1A1020]/65 text-base leading-relaxed mb-6">
                If you're committed to advancing understanding, advocacy, and responsible governance around vanishing twin syndrome and multifetal pregnancy loss, we'd love to hear from you.
              </p>
              <a
                href={RESEARCH_APPLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #4A1A8C, #4DB8E8)' }}
              >
                Apply for a Research Advisor Position <ExternalLink size={14} />
              </a>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── General Volunteers ── */}
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              General Volunteers
            </h2>
            <p className="text-[#1A1020]/55 text-base leading-relaxed max-w-2xl">
              We are always gathering interest from individuals who would like to be part of our mission. Future volunteer opportunities may include:
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {VOLUNTEER_AREAS.map((area, i) => (
              <RevealDiv key={area} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-xl p-4 flex items-start gap-3 h-full"
                  style={{ background: '#F0EBF8' }}
                >
                  <CheckCircle size={15} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-[#1A1020]/65 leading-relaxed">{area}</span>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-10">
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.12)' }}
            >
              <span className="text-[#6B2DB5] text-lg flex-shrink-0" aria-hidden>✦</span>
              <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                <strong className="text-[#1A1020]/80">Don't see your skills listed?</strong> We'd still love to hear from you. There's always room for new ideas and collaboration requests. If you'd like to join our volunteer list, please complete our Volunteer Interest Form — we'll connect you with opportunities that best match your interests, skills, and availability.
              </p>
            </div>
          </RevealDiv>

          {/* ── CTA ── */}
          <RevealDiv>
            <div className="rounded-2xl p-10 text-center" style={{ background: '#1A0A3D' }}>
              <Users size={32} color="#4DB8E8" className="mx-auto mb-5" aria-hidden />
              <h2 className="font-serif font-semibold text-white text-3xl mb-3">Ready to Join Us?</h2>
              <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                We welcome volunteers and collaborators with diverse skills and backgrounds. Fill out our Volunteer Interest Form and we will be in touch to discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={VOLUNTEER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                >
                  Volunteer Interest Form <ExternalLink size={16} />
                </a>
                <a
                  href={BOARD_APPLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/70 font-medium text-base border border-white/20 hover:border-white/50 hover:text-white transition-all"
                >
                  Board Applications <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </RevealDiv>

        </div>
      </section>
    </>
  )
}
