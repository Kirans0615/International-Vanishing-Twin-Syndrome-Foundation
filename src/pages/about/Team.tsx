import { Info } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsImage } from '../../components/HiggsImage';
import { HIGGSFIELD } from '../../assets/higgsfield';

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

const LEADERSHIP = [
  {
    name: 'Nichole McTurk Cubbage',
    creds: 'DHSc, MS',
    role: 'Founder & Executive Director',
    bio: 'A Vanishing Twin parent and healthcare professional who founded IVTSF to bridge the critical gap in care, support, and awareness. Leads all organizational operations and strategic direction.',
    initial: 'N',
  },
  {
    name: 'Andrea Greenwich Heffner',
    creds: '',
    role: 'Co-Founder & Director of Marketing & Brand Strategy',
    bio: 'A VTS parent who co-founded IVTSF and leads all marketing, brand, and communications efforts to increase awareness of vanishing twin syndrome worldwide.',
    initial: 'A',
  },
  {
    name: 'Whitney Young',
    creds: 'JD',
    role: 'Co-Founder & Director of Legal',
    bio: 'A VTS parent and attorney who handles all legal matters for IVTSF, including intellectual property, organizational compliance, and governance.',
    initial: 'W',
  },
  {
    name: 'Allison Groff',
    creds: '',
    role: 'Co-Founder & Director of Community & Events',
    bio: "A VTS parent who oversees community engagement, events, and organizational partnerships. Ensures IVTSF's community presence reflects its trauma-informed values.",
    initial: 'A',
  },
  {
    name: 'Brent Babcock',
    creds: '',
    role: 'Research Advisory Group Board Member',
    bio: 'A VTS parent and author of "My Twin Vanished: Did Yours?" — one of the first books written about vanishing twin syndrome from a survivor\'s perspective. Bridges the personal and scientific dimensions of VTS.',
    initial: 'B',
    book: true,
  },
];

const ADVISORS = [
  { name: 'Xinyu Shu', country: 'China', flag: '🇨🇳', institution: 'Professor, Maternal-Fetal Medicine', bio: 'Researcher in maternal-fetal medicine with expertise in multiple pregnancy outcomes and prenatal diagnostics.' },
  { name: 'Asma Khalil', country: 'United Kingdom', flag: '🇬🇧', institution: 'Professor of Obstetrics & MFM, St George\'s University of London', bio: 'Leading expert in fetal medicine, multiple pregnancy, and perinatal outcomes with extensive published research.' },
  { name: 'Jeff Craig', country: 'Australia', flag: '🇦🇺', institution: 'Professor of Epigenetics, Deakin University', bio: 'Expert in epigenetics and developmental biology, investigating how early pregnancy events shape long-term health outcomes.' },
  { name: 'Alvaro Silva', country: 'Portugal', flag: '🇵🇹', institution: 'Fetal Medicine Specialist', bio: 'Specialist in fetal medicine with clinical expertise in multifetal pregnancy diagnostics and management.' },
  { name: 'Kopal Kapoor', country: 'India', flag: '🇮🇳', institution: 'Obstetrician & Gynecologist', bio: 'Clinician and researcher focused on obstetric care for complex pregnancies including those affected by VTS.' },
];

export function Team() {
  return (
    <>
      <div className="relative h-[45vh] overflow-hidden" style={{ background: 'linear-gradient(135deg, #4A1A8C 0%, #1A0A3D 100%)' }}>
        <HiggsImage src={HIGGSFIELD.images.teamBg} alt="" fallbackGradient="transparent" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.06 }} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Our Team</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Led by parents, researchers, and clinicians. All roles are volunteer.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">Foundation Leadership</h2>
          </RevealDiv>
          <div className="flex flex-col gap-6">
            {LEADERSHIP.map(({ name, creds, role, bio, initial, book }) => (
              <RevealDiv key={name}>
                <div className="card-hover rounded-2xl p-8 flex gap-6 items-start" style={{ background: '#F0EBF8' }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-serif font-semibold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                    aria-hidden
                  >
                    {initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-3 mb-1">
                      <h3 className="font-serif font-semibold text-[#1A1020] text-xl">{name}{creds ? `, ${creds}` : ''}</h3>
                      <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: 'rgba(74,26,140,0.1)', color: '#4A1A8C' }}>{role}</span>
                    </div>
                    <p className="text-sm text-[#1A1020]/65 leading-relaxed mb-2">{bio}</p>
                    {book && (
                      <p className="text-sm text-[#6B2DB5] font-medium">
                        📖 Author: <em>My Twin Vanished: Did Yours?</em>
                      </p>
                    )}
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">Research Advisory Group</h2>
          </RevealDiv>
          <RevealDiv className="mb-10 reveal-delay-1">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed max-w-2xl">
              IVTSF researchers and clinicians from around the world contribute expertise on an advisory basis.
            </p>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map(({ name, country, flag, institution, bio }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-6 border border-[#8B3FD4]/15 h-full" style={{ background: '#fff' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-serif font-semibold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #6B2DB5, #4DB8E8)' }}
                      aria-hidden
                    >
                      {name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-[#1A1020] text-base leading-tight">{name}</h3>
                      <span className="text-xs text-[#1A1020]/40">{flag} {country}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B2DB5] font-medium mb-2">{institution}</p>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed">{bio}</p>
                  <span className="inline-block mt-3 rounded-full px-3 py-1 text-xs" style={{ background: '#F0EBF8', color: '#6B2DB5' }}>Research Advisor</span>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: '#FFF8E7', border: '1px solid #FDE68A' }}>
            <Info size={20} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-[#92400E] leading-relaxed">
              IVTSF leaders are not compensated for their volunteer efforts, including the Executive Director and Board Members. All organizational work is carried out on a voluntary basis in service of the Foundation's mission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
