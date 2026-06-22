import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { HiggsVideo } from '../../components/HiggsVideo';
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield';

type Category = 'All' | 'Clinical Terms' | 'Pregnancy & Development' | 'Genetic Terms' | 'Grief & Support';

const TERMS: { term: string; def: string; category: Exclude<Category, 'All'> }[] = [
  { term: 'Vanishing Twin Syndrome', def: 'The phenomenon in which a twin or multiple disappears during pregnancy, usually due to miscarriage of one fetus and subsequent resorption. The term was coined in 1945 and has been increasingly studied as early ultrasound became common.', category: 'Clinical Terms' },
  { term: 'Blighted Ovum', def: 'A fertilized egg that did not develop into an embryo, or stopped developing very early. One of the possible diagnoses associated with VTS.', category: 'Clinical Terms' },
  { term: 'Chorionicity', def: 'Refers to the number of chorionic sacs in a multiple pregnancy. Chorionicity is an important risk factor for VTS outcomes — monochorionic twins share a placenta and face different risks than dichorionic twins.', category: 'Clinical Terms' },
  { term: 'Amnionicity', def: 'Refers to the number of amniotic sacs in a multiple pregnancy. Determined by early ultrasound and important for assessing pregnancy risk and management.', category: 'Clinical Terms' },
  { term: 'Fetus Papyraceous', def: 'A fetus that has been compressed and dried between the membranes and the wall of the uterus, often found at delivery. Indicates VTS occurred in the second trimester.', category: 'Clinical Terms' },
  { term: 'IUFD', def: 'Intrauterine Fetal Demise — the death of a fetus at any stage after 20 weeks of gestation. When one twin dies in utero, this is considered a form of VTS.', category: 'Clinical Terms' },
  { term: 'Missed Miscarriage', def: 'A miscarriage where the fetus has died but the body has not yet expelled the pregnancy tissue. May be discovered on ultrasound without prior symptoms.', category: 'Clinical Terms' },
  { term: 'Cotwin', def: 'The surviving twin in a pregnancy where VTS has occurred. Research is ongoing into the long-term health, developmental, and psychological implications for surviving cotwins.', category: 'Pregnancy & Development' },
  { term: 'Heterotypic Pregnancy', def: 'A pregnancy involving embryos of different types, often resulting from ART. May include both intrauterine and ectopic pregnancies simultaneously.', category: 'Pregnancy & Development' },
  { term: 'Periviable', def: 'Refers to the gestational age at which survival outside the uterus is possible but uncertain, typically around 22–26 weeks. VTS occurring at periviable gestational ages presents unique clinical and ethical considerations.', category: 'Pregnancy & Development' },
  { term: 'Resorption', def: 'The process by which the body absorbs the tissue of a lost twin, most common in early pregnancy. When resorption is complete, no physical evidence of the lost twin remains.', category: 'Pregnancy & Development' },
  { term: 'Multifetal Pregnancy', def: 'A pregnancy involving more than one fetus. Multiple pregnancies have a higher baseline rate of VTS than singleton pregnancies.', category: 'Pregnancy & Development' },
  { term: 'Zygosity', def: 'Refers to the degree of genetic identity of the twins — monozygotic (identical, from one egg) or dizygotic (fraternal, from two eggs). Affects placentation, chorionicity, and VTS risk.', category: 'Genetic Terms' },
  { term: 'cfDNA', def: 'Cell-free DNA — DNA fragments from the placenta that circulate in maternal blood. Used in prenatal screening but may produce inaccurate results when VTS is present, as the vanished twin\'s DNA can affect the sample.', category: 'Genetic Terms' },
  { term: 'Peer Support', def: 'A system of giving and receiving help founded on key principles of respect, shared responsibility, and mutual agreement of what is helpful. Grounded in mutual understanding rather than professional authority.', category: 'Grief & Support' },
  { term: 'Disenfranchised Grief', def: 'Grief that is not openly acknowledged, publicly mourned, or socially supported. VTS loss is often disenfranchised — families may receive no formal recognition of the loss and may be told to simply be grateful for the surviving twin.', category: 'Grief & Support' },
  { term: 'Ambiguous Loss', def: 'A loss that remains unclear and lacks the finality of other types of loss. Common in VTS where there may be no formal acknowledgment, no funeral, and no social recognition of the baby who was lost.', category: 'Grief & Support' },
];

const CATEGORIES: Category[] = ['All', 'Clinical Terms', 'Pregnancy & Development', 'Genetic Terms', 'Grief & Support'];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function KeyTerms() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  const filtered = TERMS.filter((t) => {
    const matchCat = category === 'All' || t.category === category;
    const matchQ = !query || t.term.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <div className="relative h-[45vh] overflow-hidden rounded-b-3xl">
        <HiggsVideo src={HIGGSFIELD.videos.keyTermsHero} fallbackGradient={FALLBACKS.darkNebula} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Key Terms &amp; Definitions</h1>
          <p className="text-white/70 text-lg">A reference guide for clinical, developmental, and grief-related terms.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6">
            <Search size={18} color="#8B3FD4" className="absolute left-4 top-1/2 -translate-y-1/2" aria-hidden />
            <input
              type="search"
              placeholder="Search terms..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search key terms"
              className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-[#8B3FD4]/30 bg-white text-[#1A1020] outline-none transition-all text-base"
              style={{ ['focus:borderColor' as string]: '#6B2DB5' }}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: category === cat ? '#6B2DB5' : '#F0EBF8',
                  color: category === cat ? '#fff' : '#1A1020',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {filtered.length === 0 && (
              <p className="text-center text-[#1A1020]/40 py-10">No terms match your search.</p>
            )}
            {filtered.map(({ term, def, category: cat }) => (
              <RevealDiv key={term}>
                <div
                  className="rounded-xl border-l-4 overflow-hidden transition-all"
                  style={{ background: '#F0EBF8', borderLeftColor: openTerm === term ? '#6B2DB5' : 'rgba(107,45,181,0.3)' }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenTerm(openTerm === term ? null : term)}
                    aria-expanded={openTerm === term}
                  >
                    <div>
                      <span className="font-serif font-semibold text-[#1A1020] text-base">{term}</span>
                      <span className="ml-3 text-xs rounded-full px-2 py-0.5" style={{ background: '#E8DFF5', color: '#6B2DB5' }}>{cat}</span>
                    </div>
                    {openTerm === term ? <ChevronUp size={16} color="#6B2DB5" /> : <ChevronDown size={16} color="#6B2DB5" />}
                  </button>
                  <div style={{ maxHeight: openTerm === term ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                    <p className="px-6 pb-5 text-sm text-[#1A1020]/65 leading-relaxed">{def}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
