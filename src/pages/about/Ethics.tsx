import { useState } from 'react';
import { ExternalLink, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { VideoBackground } from '../../components/VideoBackground';
import { useReveal } from '../../hooks/useInView';

// HIGGSFIELD ASSET
// Prompt: "Abstract gentle light rays in purple blue and gold filtering through soft clouds, hopeful and trustworthy, cinematic wide, slow motion drift"
// Replace URL: https://d8j0ntlcm91z4.cloudfront.net/[ID].mp4
const ETHICS_HERO_VIDEO: string | undefined = undefined;

const FRAMEWORKS = [
  { name: 'CIOMS International Ethical Guidelines for Health-Related Research Involving Humans', href: 'https://cioms.ch' },
  { name: 'Belmont Report Principles', href: 'https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html' },
  { name: 'APA Ethical Principles of Psychologists', href: 'https://www.apa.org/ethics/code' },
  { name: 'APHA Code of Ethics', href: 'https://www.apha.org' },
  { name: 'ICN Code of Ethics for Nurses', href: 'https://www.icn.ch' },
  { name: 'ISUOG Ethics Guidelines', href: 'https://www.isuog.org' },
  { name: 'UN Universal Declaration of Human Rights', href: 'https://www.un.org' },
  { name: 'GDPR Data Protection Principles', href: 'https://gdpr.eu' },
  { name: 'ADA Accessibility Standards', href: 'https://www.ada.gov' },
];

const COMMITMENTS = [
  { title: 'Privacy & Confidentiality', body: 'We protect the privacy and confidentiality of all individuals who share their experiences, participate in research, or contact IVTSF. Personal information is never shared without explicit consent.' },
  { title: 'Informed Consent', body: 'We obtain meaningful informed consent for participation in any research or data collection activities. Participants have the right to withdraw at any time without consequence.' },
  { title: 'Do No Harm', body: 'We are committed to the principle of non-maleficence — our work will not cause harm to the individuals and communities we serve. We center survivor and family perspectives in all content decisions.' },
  { title: 'Equity & Inclusion', body: 'We are committed to equitable representation in our research, advocacy, and leadership. We recognize that gender, race, disability, socioeconomic status, geography, and cultural context shape access to care and how loss is understood and treated.' },
  { title: 'Transparency', body: 'We are transparent about our funding, organizational structure, and decision-making processes. Financial information is available for public inspection as required by law.' },
  { title: 'Evidence-Based Practice', body: 'Our educational materials and advocacy positions are grounded in peer-reviewed evidence and updated regularly as new research emerges. We do not overstate or misrepresent existing evidence.' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Ethics() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="relative h-[50vh] overflow-hidden rounded-b-3xl">
        <VideoBackground
          src={ETHICS_HERO_VIDEO}
          className="absolute inset-0 w-full h-full"
          fallbackStyle={{ background: 'radial-gradient(ellipse at center, #4A1A8C 0%, #1A0A3D 60%, #0D0520 100%)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.85) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Our Ethics</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Guided by internationally recognized frameworks for human-centered practice.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <RevealDiv>
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The IVTSF is committed to conducting all activities in an ethically responsible manner, grounded in respect, transparency, and evidence. We adhere to internationally recognized frameworks for human-centered research, education, and organizational practice.
            </p>
          </RevealDiv>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Our Data Practices Are Grounded In</h2>
          </RevealDiv>
          <div className="grid gap-3 sm:grid-cols-2">
            {FRAMEWORKS.map(({ name, href }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 4) + 1}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex items-center gap-4 p-5 rounded-xl group"
                  style={{ background: '#F0EBF8' }}
                >
                  <ExternalLink size={18} color="#6B2DB5" className="flex-shrink-0" aria-hidden />
                  <span className="text-[#1A1020] font-medium text-sm leading-snug group-hover:text-[#6B2DB5] transition-colors">{name}</span>
                </a>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-3">Our Commitments</h2>
          </RevealDiv>
          <div className="flex flex-col gap-3">
            {COMMITMENTS.map(({ title, body }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="rounded-xl border border-[#8B3FD4]/15 overflow-hidden" style={{ background: '#F0EBF8' }}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    aria-expanded={openIdx === i}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold" style={{ fontFamily: 'DM Mono, monospace', color: '#4A1A8C' }}>0{i + 1}</span>
                      <span className="font-serif font-semibold text-[#1A1020] text-lg">{title}</span>
                    </div>
                    {openIdx === i ? <ChevronUp size={18} color="#6B2DB5" /> : <ChevronDown size={18} color="#6B2DB5" />}
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: openIdx === i ? '400px' : '0', transition: 'max-height 0.4s ease' }}
                  >
                    <p className="px-6 pb-5 text-[#1A1020]/65 text-sm leading-relaxed" style={{ paddingLeft: '4.5rem' }}>{body}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <RevealDiv>
            <div
              className="rounded-2xl p-8 border"
              style={{ background: 'linear-gradient(to right, rgba(74,26,140,0.08), rgba(194,64,140,0.08))', borderColor: 'rgba(139,63,212,0.2)' }}
            >
              <Scale size={28} color="#6B2DB5" className="mb-4" aria-hidden />
              <p className="text-[#1A1020]/75 text-base leading-relaxed">
                We recognize that gender, race, disability, socioeconomic status, geography, and cultural context shape access to care and how loss is understood and treated. IVTSF is committed to equity in all aspects of our work.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
