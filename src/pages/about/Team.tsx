import { Info } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { AboutSubNav } from '../../components/AboutSubNav';

const BASE = import.meta.env.BASE_URL;

const LEADERSHIP = [
  {
    photo: `${BASE}Nichole-Cubbage.jpg`,
    name: 'Nichole Cubbage',
    creds: 'DHSc',
    role: 'Founder & Executive Director',
    roleColor: '#6B2DB5',
    bio: [
      'Nichole is the Founding Executive Director of the IVTSF. As a health scientist, researcher, and advocate, she is dedicated to improving care for families affected by vanishing twin syndrome (VTS) and other multifetal pregnancy complications. She leads a research initiative focused on patient-provider communication gaps in VTS and works to translate evidence into practice through partnerships with organizations such as Multiples of America.',
      'Nichole holds a Doctor of Health Science (DHSc), a Master of Science in Biotechnology with a specialization in Bioinformatics, a Bachelor of Arts in Philosophy, and two additional undergraduate degrees. Her work bridges public health, maternal-fetal medicine, and patient advocacy, with a strong emphasis on global collaboration. As a mother of two, she brings both professional expertise and lived VTS experience to her mission.',
    ],
  },
  {
    photo: `${BASE}Andrea-Greenwich.jpg`,
    name: 'Andrea Greenwich Heffner',
    creds: 'MAEd.',
    role: 'Chair',
    roleColor: '#C2408C',
    bio: [
      'Andrea serves as Chair of the IVTSF, bringing a professional foundation in education and the nonprofit sector. She has a strong background in professional writing, grant management, teaching, and community engagement. As both a writer and artist, Andrea creates meaningful content that engages diverse audiences while ensuring clarity and impact.',
      'She holds a Master of Arts in Education in Curriculum and Instruction from The College of William and Mary, and a BA in American Government from The University of Virginia. Andrea is a mother with lived experience of VTS, and is passionate about creating opportunities for connection, education, and inspiration — values she channels into guiding IVTSF\'s mission.',
    ],
  },
  {
    photo: `${BASE}Whitney-Young.jpg`,
    name: 'Whitney Young',
    creds: '',
    role: 'Secretary & Foreign Affairs Officer',
    roleColor: '#4DB8E8',
    bio: [
      'Whitney serves as the Secretary and Foreign Affairs Officer of the IVTSF. She is a U.S. Navy veteran and attended The George Washington University\'s Elliot School of International Affairs. She brings strong organizational discipline and attention to detail.',
      'As Secretary, Whitney ensures accurate documentation of board proceedings, manages official records, and supports effective communication across IVTSF\'s leadership and volunteer teams. Her background in military administration and project coordination equips her to uphold the Foundation\'s governance standards and operational excellence.',
    ],
  },
  {
    photo: `${BASE}Allison-Groff.jpg`,
    name: 'Allison Groff',
    creds: 'MD, FACOG',
    role: 'Clinical Advisor',
    roleColor: '#8B3FD4',
    bio: [
      'Dr. Groff serves as a Clinical Advisor for the IVTSF. She is a board-certified obstetrician-gynecologist based in Frederick, Maryland, USA. She is passionate about offering patient-centered care and advocating for women\'s health, empowering her patients through education and evidence-based practice.',
      'Dr. Groff completed a Master of Public Health (MPH) at Emory University (2005) and a BA in Psychology at Cornell University (2002), followed by medical school and residency at the State University of New York (2006–2014).',
    ],
  },
  {
    photo: `${BASE}Brent-Babcock.jpg`,
    name: 'Brent H. Babcock',
    creds: 'DC',
    role: 'Clinical Advisor',
    roleColor: '#4A1A8C',
    bio: [
      'Dr. Babcock serves as a Clinical Advisor for the IVTSF. He is a seasoned chiropractor based in Oklahoma City, Oklahoma, with over 40 years of experience in the field and founder of Babcock Chiropractic Clinic. He studied at Brigham Young University and Texas Chiropractic College, where he earned his Doctor of Chiropractic.',
      'Beyond his clinical work, Dr. Babcock is an internationally recognized author and speaker on VTS and shares his own experience as a survivor of the syndrome. He has cared for hundreds of VTS survivors and lectured internationally. His book, My Twin Vanished: Did Yours?, explores the psychological and emotional impacts of VTS.',
    ],
    book: true,
  },
];

const ADVISORS = [
  {
    photo: `${BASE}Dr.Shu`,
    name: 'Xinyu (Alice) Shu',
    creds: 'MD',
    country: 'China',
    flag: '🇨🇳',
    institution: 'OBGYN & Maternal–Fetal Medicine Researcher, Beijing',
    bio: 'Dr. Shu is an OBGYN and maternal–fetal medicine researcher based in Beijing, China, with research in gestational diabetes, fetal growth trajectories, and twin pregnancies. She supports the Foundation\'s efforts to strengthen global research infrastructure, improve clinical understanding of multifetal pregnancy, and enhance evidence-based guidance for families and providers.',
  },
  {
    photo: `${BASE}Asma-Khalil.jpg`,
    name: 'Asma Khalil',
    creds: 'MD',
    country: 'England',
    flag: '🇬🇧',
    institution: 'Maternal-Fetal Medicine Specialist & Clinical Researcher',
    bio: 'Professor Khalil is a globally recognized maternal-fetal medicine specialist whose work focuses on multiple pregnancies, fetal growth restriction, and pregnancy complications. She serves as Immediate Past Vice President of the RCOG, Obstetric Lead of the UK\'s National Maternity and Perinatal Audit, Trustee of ISUOG, Founder of the GEFOG Health Foundation, and Editor-in-Chief of Best Practice & Research: Clinical Obstetrics and Gynaecology.',
  },
  {
    photo: `${BASE}Jeff-Craig.png`,
    name: 'Jeff Craig',
    creds: 'PhD',
    country: 'Australia',
    flag: '🇦🇺',
    institution: 'Professor of Genomics, Deakin University',
    bio: 'Dr. Craig is a molecular epidemiologist and Professor of Genomics at Deakin University in Geelong, Australia. His research focuses on epigenetics, early human development, and twin studies, advancing understanding of how environmental and biological factors shape health trajectories from the earliest stages of life. He contributes expertise in twin biology and developmental genomics to the IVTSF.',
  },
  {
    photo: `${BASE}Mr.Silva`,
    name: 'Alvaro Silva',
    creds: 'DMA Candidate (exp. 2026)',
    country: 'United States',
    flag: '🇺🇸',
    institution: 'Doctor of Musical Arts Candidate, Boston University',
    bio: 'Mr. Silva is a music teacher, musician, and father who experienced VTS with one of his children. Originally from Chile, he is a researcher and DMA Candidate at Boston University. His work explores the intersection of music, meaning-making, and human experience, and he brings a lived-parent perspective to the IVTSF\'s efforts to center compassionate communication and long-term psychosocial understanding of twin loss.',
  },
  {
    photo: `${BASE}Ms.Kapoor`,
    name: 'Kopal Kapoor',
    creds: 'PhD Candidate (exp. 2026)',
    country: 'India',
    flag: '🇮🇳',
    institution: 'DST INSPIRE Fellow, National Forensic Sciences University',
    bio: 'Ms. Kapoor is a forensic genomics researcher at the National Forensic Sciences University in Gandhinagar, India, and a competitively selected DST INSPIRE Fellow funded by India\'s Department of Science & Technology. Her work integrates twin biology and molecular methods through a forensic lens, supporting IVTSF priorities related to twinning mechanisms, biomarker plausibility, and molecular translation into clinical understanding.',
  },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Team() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[40vh] overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #4A1A8C 0%, #1A0A3D 60%, #2D1060 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(194,64,140,0.18) 0%, transparent 60%)' }} aria-hidden />
        <div className="relative z-10">
          <p className="text-[11px] tracking-[0.3em] font-medium uppercase mb-4" style={{ color: '#4DB8E8', fontFamily: 'DM Mono, monospace' }}>Our People</p>
          <h1 className="font-serif font-semibold text-white text-5xl md:text-6xl mb-3 tracking-[-0.02em]">Our Team</h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">Led by parents, researchers, and clinicians — all volunteer.</p>
        </div>
      </div>

      <AboutSubNav />

      {/* Leadership */}
      <section className="bg-[#FAF8FF] px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">Foundation Leadership</h2>
            <p className="text-[#1A1020]/50 text-base">The people who guide IVTSF's mission every day.</p>
          </RevealDiv>

          <div className="flex flex-col gap-8">
            {LEADERSHIP.map(({ photo, name, creds, role, roleColor, bio, book }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${Math.min(i + 1, 4)}`}>
                <div
                  className="rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 20px rgba(74,26,140,0.06)' }}
                >
                  {/* Photo */}
                  <div
                    className="sm:w-52 flex-shrink-0 relative"
                    style={{ minHeight: '220px', background: `linear-gradient(135deg, ${roleColor}22, ${roleColor}11)` }}
                  >
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full object-cover object-top"
                      style={{ minHeight: '220px', maxHeight: '280px' }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div
                      className="absolute inset-0 sm:hidden"
                      style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.5) 0%, transparent 40%)' }}
                      aria-hidden
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7">
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <div>
                        <h3 className="font-serif font-semibold text-[#1A1020] text-xl leading-tight">
                          {name}{creds ? <span className="text-base font-normal text-[#1A1020]/50">, {creds}</span> : null}
                        </h3>
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap mt-0.5"
                        style={{ background: `${roleColor}18`, color: roleColor, border: `1px solid ${roleColor}30` }}
                      >
                        {role}
                      </span>
                    </div>
                    {bio.map((para, j) => (
                      <p key={j} className="text-sm text-[#1A1020]/65 leading-relaxed mb-3 last:mb-0">{para}</p>
                    ))}
                    {book && (
                      <p className="text-sm font-medium mt-3" style={{ color: '#6B2DB5' }}>
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

      {/* Research Advisory Group */}
      <section className="bg-[#FAF8FF] px-6 pt-12 pb-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">Research Advisory Group</h2>
            <p className="text-[#1A1020]/50 text-base max-w-2xl">
              International researchers and clinicians who contribute expertise on an advisory basis.
            </p>
          </RevealDiv>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {ADVISORS.map(({ photo, name, creds, country, flag, institution, bio }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-2xl p-6 flex flex-col h-full"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 16px rgba(74,26,140,0.05)' }}
                >
                  {/* Photo + name row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(107,45,181,0.2)' }}>
                      <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = 'none';
                          el.parentElement!.style.background = 'linear-gradient(135deg, #6B2DB5, #4DB8E8)';
                          el.parentElement!.innerHTML = `<span style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-size:1.25rem;font-family:Lora,serif;font-weight:600">${name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-[#1A1020] text-base leading-tight">{name}</h3>
                      {creds && <p className="text-xs font-medium mt-0.5" style={{ color: '#6B2DB5' }}>{creds}</p>}
                      <p className="text-xs text-[#1A1020]/40 mt-0.5">{flag} {country}</p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#8B3FD4', fontFamily: 'DM Mono, monospace' }}>
                    {institution}
                  </p>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1">{bio}</p>

                  <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }}>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{ background: '#F0EBF8', color: '#6B2DB5' }}>
                      Research Advisor
                    </span>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer note */}
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
