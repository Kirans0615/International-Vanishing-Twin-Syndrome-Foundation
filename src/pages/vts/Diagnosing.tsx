import { CheckCircle, Search, FileText, FlaskConical, AlertTriangle } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

const DIAGNOSTIC_TERMS = [
  { term: 'Blighted Ovum', desc: 'A fertilized egg that did not develop into an embryo, or stopped developing very early.' },
  { term: 'IUFD (Intrauterine Fetal Demise)', desc: 'The death of a fetus at any stage. When one twin dies in utero, this is a form of VTS.' },
  { term: 'Fetus Papyraceous', desc: 'A fetus compressed into the placental membranes. Found at delivery when VTS occurred in the second trimester.' },
  { term: 'Missed Miscarriage', desc: 'A miscarriage where the fetus has died but the body has not yet expelled the pregnancy tissue.' },
  { term: 'Complete Miscarriage', desc: 'All pregnancy tissue has been naturally expelled. In VTS, this applies to the lost twin.' },
];

const SYMPTOMS = [
  'Empty gestational sac on ultrasound',
  'Crown-rump length discordance between twins',
  'Absent heartbeat in one embryo',
  'Presence of a second sac or mass',
  'Pathological findings on placental examination',
  'Chorionicity determination challenges',
  'Amnionicity discordance',
  'Fetus papyraceous visible at delivery',
];

const POSTPARTUM_METHODS = [
  { Icon: Search, title: 'Placental Findings', points: ['Examination reveals compressed fetal tissue', 'Evidence of twin gestational sac', 'Pathological analysis of placental tissue'] },
  { Icon: FileText, title: 'Prenatal Records Review', points: ['Early ultrasound showing two sacs', 'Documented crown-rump discordance', 'Provider notes on evolving pregnancy'] },
  { Icon: FlaskConical, title: 'Genetic & Lab Clues', points: ['Chimerism identified postnatally', 'Unexpected cfDNA results in singleton', 'Genetic testing inconsistencies'] },
  { Icon: CheckCircle, title: 'Neonatal Clues', points: ['Birthmarks or skin differences', 'Asymmetric growth patterns', 'Neonatal phenotype inconsistencies'] },
];

const REGIONS = [
  { flag: '🇺🇸', region: 'United States', desc: 'Early ultrasound is common, increasing the likelihood of VTS detection. However, there are no standardized guidelines for documenting or disclosing VTS to families.' },
  { flag: '🇬🇧', region: 'UK / Europe', desc: 'ISUOG guidelines inform clinical practice. The NHS provides some guidance, but provider communication about VTS remains inconsistent.' },
  { flag: '🌍', region: 'Limited-Resource Regions', desc: 'Early ultrasound may not be available. VTS often goes completely undetected and undocumented, meaning rates are almost certainly higher than reported.' },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Diagnosing() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.diagnosingHero} fallbackGradient={FALLBACKS.darkNebula} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Diagnosing VTS</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Understanding how VTS is identified — prenatally and postpartum.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Prenatal Diagnosis</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed">
              VTS is most commonly identified through early ultrasound, typically in the first trimester. The following terms describe conditions that may indicate VTS or contribute to its diagnosis.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-3 mb-10">
            {DIAGNOSTIC_TERMS.map(({ term, desc }, i) => (
              <RevealDiv key={term} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: '#F0EBF8' }}>
                  <span className="text-lg font-bold flex-shrink-0" style={{ fontFamily: 'DM Mono, monospace', color: '#6B2DB5' }}>{i + 1}</span>
                  <div>
                    <span className="font-serif font-semibold text-[#1A1020] text-base">{term} — </span>
                    <span className="text-sm text-[#1A1020]/65">{desc}</span>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-10">
            <div className="rounded-xl p-6 border-l-4 border-[#4DB8E8]" style={{ background: '#F0EBF8' }}>
              <p className="text-[#1A1020]/70 text-sm leading-relaxed">
                <strong className="text-[#1A1020]">Note:</strong> While ISUOG has guidelines for identifying certain outcomes, no official guidelines currently exist for diagnosing VTS specifically. This represents a significant clinical gap that IVTSF advocates to address.
              </p>
            </div>
          </RevealDiv>

          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Possible Signs &amp; Symptoms</h2>
          </RevealDiv>
          <div className="grid gap-3 sm:grid-cols-2 mb-16">
            {SYMPTOMS.map((s) => (
              <RevealDiv key={s}>
                <div className="flex items-center gap-3 rounded-lg px-4 py-2.5 border border-[#8B3FD4]/20" style={{ background: '#fff' }}>
                  <CheckCircle size={14} color="#C2408C" aria-hidden />
                  <span className="text-sm text-[#1A1020]/75">{s}</span>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Postpartum Diagnosis</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-8">
              When VTS is not identified prenatally, it may be discovered after birth through a variety of clinical and pathological findings. Families deserve to know this information regardless of when it is identified.
            </p>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-2 mb-16">
            {POSTPARTUM_METHODS.map(({ Icon, title, points }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="card-hover rounded-2xl p-7 h-full" style={{ background: '#F0EBF8' }}>
                  <Icon size={28} color="#6B2DB5" className="mb-4" aria-hidden />
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">{title}</h3>
                  <ul className="space-y-2">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-[#1A1020]/65">
                        <span className="text-[#8B3FD4] mt-0.5">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-8">Global Variations</h2>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-3 mb-12">
            {REGIONS.map(({ flag, region, desc }) => (
              <RevealDiv key={region}>
                <div className="card-hover rounded-2xl p-6 h-full" style={{ background: '#F0EBF8' }}>
                  <span className="text-3xl mb-3 block" aria-hidden>{flag}</span>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">{region}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="rounded-2xl p-8 border-2" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
              <AlertTriangle size={24} color="#D97706" className="mb-3" aria-hidden />
              <p className="text-[#92400E] text-base leading-relaxed">
                Families are often not told about VTS during or after their pregnancy. When communication does occur, it is frequently inadequate, minimizing, or uses unclear language. IVTSF advocates for clear, compassionate, and timely disclosure of VTS to all affected families.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
