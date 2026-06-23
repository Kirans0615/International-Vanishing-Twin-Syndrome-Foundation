import { Link } from 'react-router-dom'
import { Info, AlertCircle, FileText, ArrowRight, Heart, Users, Activity, Shield, Brain, CheckCircle, Building2, Home, BookOpen } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

function SectionDivider() {
  return <div className="my-14" style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }} />
}

function BulletList({ items, color = '#6B2DB5' }: { items: string[]; color?: string }) {
  return (
    <ul className="flex flex-col gap-2.5 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden />
          <span className="text-sm text-[#1A1020]/65 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

const CHORIONICITY_CARDS = [
  {
    Icon: Activity,
    color: '#6B2DB5',
    title: 'Shared Physiological Risks In Utero and Early Life',
    desc: 'In multiple pregnancies, the fetuses often face higher rates of complications (i.e., growth discordance, placental insufficiency, twin-to-twin transfusion, cord complications, nutrient competition) compared to singleton pregnancies. Surviving twins are more likely than singletons to have had exposures to stressors in utero (e.g., lower nutrient or oxygenation margins, restricted growth) that can influence long-term health trajectories.',
  },
  {
    Icon: Brain,
    color: '#4DB8E8',
    title: 'Genetic and Epigenetic Linkage',
    desc: 'Twins share biological and epigenetic environments, more or less to varying degrees; the intrauterine milieu, shared placenta (i.e., in monozygotic or monochorionic twins), and common exposures tie their developmental paths closely together. Loss of one twin may change the intrauterine environment (e.g., shifts in vascular flow, inflammatory responses) and affect the survivor\'s physiology.',
  },
  {
    Icon: Users,
    color: '#C2408C',
    title: 'Greater Potential Vulnerability to Psychosocial Stress',
    desc: 'Research shows that surviving twins who lost a co-twin have elevated risk for psychiatric disorders (i.e., emotional disorders, anxiety, depression) compared to unexposed twins or singletons, even when controlling for familial and birth variables. The social, emotional, and identity disruption of having had a twin — and then losing the twin — can contribute to long-term mental health burden.',
  },
]

const FIRST_STEPS = [
  {
    num: '01',
    title: 'Request Disposition Options Early',
    desc: 'Ask your care team for a summary of disposition options available in the hospital and state where birth is intended. This information may be available at your birthing institution or via prenatal care providers. Be prepared to answer questions like, "What was the timing of death in gestation?" Providers may ask questions of this nature to discern what options will be specifically available for a given patient. This information will also help discern how birth/death certificates may be handled.',
  },
  {
    num: '02',
    title: 'Request Time for Memory-Making',
    desc: 'Request time for memory-making (holding, bathing, naming, photographing) before transport or processing of remains if desired/able, as most hospitals permit this unless constrained by pathology deadlines. Some hospitals have cooling cots that allow families to spend extra time with babies lost later in gestation and postpartum.',
  },
  {
    num: '03',
    title: 'Understand Deadlines and Storage Limits',
    desc: 'Hospitals often have policies about how long they can store remains before disposition or must move them to a pathology lab. Understanding these timelines early gives families more time to make informed decisions.',
  },
  {
    num: '04',
    title: 'Ask for Key Contacts',
    desc: 'Ask for contact names (i.e., bereavement coordinator, hospital chaplain, legal or risk office) who can assist you in navigating regulations or advocacy in your jurisdiction.',
  },
]

const LEGAL_OPTIONS = [
  {
    Icon: Building2,
    color: '#6B2DB5',
    bg: '#F0EBF8',
    title: 'Hospital Communal or Shared Burial/Cremation',
    desc: 'The hospital (or health system) periodically arranges respectful collective burial or cremation of fetal remains (often without individual return of ashes). Common in many systems (e.g., in the US and UK, many hospitals use "sensitive disposal" policies for losses under 24 weeks).',
  },
  {
    Icon: Heart,
    color: '#C2408C',
    bg: '#F0EBF8',
    title: 'Individual Cremation or Burial via Funeral Services',
    desc: 'Families may engage a funeral director or mortuary to cremate or bury remains, with the option of returning ashes, pending the fetal loss occurs after approximately 24 weeks gestation, at which point there is a sufficient amount of bone matter for cremation in most locations. Requires that local law and hospital policy permit transfer and that relevant permits (burial, cremation, transit) be obtained. A death certificate will most likely be issued.',
  },
  {
    Icon: Home,
    color: '#4DB8E8',
    bg: '#F0EBF8',
    title: 'Home Burial or Natural Burial',
    desc: 'In locations where laws permit, remains may be interred on private property, in a woodland burial, or in a meaningful personal location. Many jurisdictions have strict environmental, zoning, or health restrictions. Some require advanced approval.',
  },
  {
    Icon: Shield,
    color: '#8B3FD4',
    bg: '#F0EBF8',
    title: 'Hospital Respectful Disposition (Default)',
    desc: 'If no private arrangement is made, hospitals may perform a "respectful disposition" per policy (e.g., cremation or incineration, as part of or separate from other medical waste). If a hospital treats early fetal remains as general medical waste, families may need to inquire about making special requests. Policies vary by hospital, state, and nation.',
  },
  {
    Icon: FileText,
    color: '#4A1A8C',
    bg: '#F0EBF8',
    title: 'Release to Family',
    desc: 'In some settings, fetal remains may be released to the family (enclosed in a container) for private arrangement. This depends heavily on hospital policy, law, and whether a pathological analysis or autopsy has occurred.',
  },
]

const RITUALS = [
  'Naming the lost multiple(s)',
  'Spiritual or cultural rituals',
  'Ceremonies (bedside, chapel, cemetery, scattering if law permits in desired jurisdiction)',
  'Memory garden, trees, plaques, stones',
  'Memory boxes, keepsake items (e.g., those offered by the Skye High Foundation, Footprints, and others)',
  'Online memorial pages, events, or journaling (such as those offered by Footprints, RTZ Hope, Chasing the Rainbows, and others)',
  'Anniversary rituals on birthdays, due dates, death dates, etc. (lighting candles, letters)',
]

const FOR_PROVIDERS = [
  {
    title: 'Affirm the legitimacy of grief and identity disruption.',
    desc: 'Even when a twin death occurs very early, the surviving baby is part of a multiple, and that relationship (however brief) may have meaning (i.e., emotional as well as biological) for both families and surviving children.',
  },
  {
    title: 'Know VTS status may not be obvious.',
    desc: 'As most VTS cases occur in the first trimester of pregnancy, understand that the VTS status of an early twin/triplet loss may not be at the forefront of a patient\'s medical profile by the time they arrive at their respective birthing institutions, where they may or may not require advanced neonatal care.',
  },
  {
    title: 'Policy transparency is crucial.',
    desc: 'Hospitals should publish or provide written policies on fetal remains disposition, including how to request alternate options.',
  },
  {
    title: 'Informed consent and clear communication.',
    desc: 'Families should be told of options ahead of time, including timelines, costs, and whether remains may or may not be available for private arrangement. OBGYNs, midwives, NICU & L&D nurses, bereavement coordinators, chaplains, social workers, and other relevant personnel should understand what the birthing institution can provide.',
  },
  {
    title: 'Coordination with pathology.',
    desc: 'If diagnostic testing is needed, it may limit the kind of disposition possible (e.g., remains must stay in the lab or be fixed). It is also important to note that pathological diagnosis of placental findings may not denote VTS specifically, but may denote artifacts that may be indicative of VTS (e.g., a hard nodule on the outside of the placenta).',
  },
  {
    title: 'Cost & funding.',
    desc: 'Some hospitals or jurisdictions subsidize shared disposition; private services can be expensive, and cost may limit choices that may be offered to families.',
  },
  {
    title: 'Cultural and religious sensitivity.',
    desc: 'Some families may want immediate burial, rapid cremation, or specific ritual timing — these should be anticipated and accommodated where feasible.',
  },
  {
    title: 'Flexibility and advocacy.',
    desc: 'Families (or advocates) may need to request exceptions or deviations from default institutional policies, especially in jurisdictions with less clear law.',
  },
  {
    title: 'Highlight follow-up vigilance.',
    desc: 'Clinicians caring for surviving multiples should be aware that those children might benefit from enhanced developmental, psychosocial, and mental health monitoring over time.',
  },
  {
    title: 'Encourage integration of multiple-loss awareness in bereavement support.',
    desc: 'Support services (counseling, peer groups) should explicitly acknowledge twin loss as a distinct grief experience, not simply subsumed under "loss of child."',
  },
  {
    title: 'Promote research and registry efforts.',
    desc: 'Collecting data on surviving multiples (i.e., growth, neurodevelopment, mental health) after twin loss can help generate evidence for best practices in monitoring and intervention.',
  },
]

export function Memorialization() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.storiesHero}
          fallbackGradient={FALLBACKS.magentaDeep}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.92) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 leading-tight">
            Memorialization /<br />Disposal of Remains
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Honoring babies lost in multiple pregnancies
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Sensitive content notice */}
          <RevealDiv className="mb-12">
            <div className="rounded-2xl border-2 border-amber-300 p-6" style={{ background: '#FFFBEB' }}>
              <div className="flex items-start gap-4">
                <Info size={22} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h2 className="font-semibold text-amber-800 text-base mb-2">Sensitive Content</h2>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Grief following pregnancy loss is deeply personal. This page provides information and resources — not prescriptions for how to grieve. All experiences are valid.
                  </p>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* ── Information Matters ── */}
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-6">
              Information Matters. Experience Matters.
            </h2>
            <div className="flex flex-col gap-5 text-[#1A1020]/65 text-base leading-relaxed">
              <p>
                No matter what policies a hospital or system uses to classify or dispose of remains, the experience of losing a twin or multiple at any point in pregnancy or postpartum is itself meaningful. Some families may wish to commemorate a fetus lost via traditional customs or ways that are uniquely meaningful for them. Some families may have no desire to commemorate a fetal death/cessation of development. Whatever the views of VTS and other patients of multifetal loss may be, they are valid, and it is essential families are equipped with as much information as possible so they can make the choices that are best for them.
              </p>
              <p>
                The surviving children may carry biological, psychological, and developmental implications associated with having shared in a multiple gestation even when VTS occurs as early as 6–8 weeks gestation. If they don't already have it by the time they arrive at their birthing institution, families should leave with an understanding of the chorionicity of their VTS multiples, the assumed time period of death in gestation (if possible), and the cause of death (if possible). Research shows these 3 factors can be important pieces of information as surviving children navigate their health profiles throughout their lives. In addition, families should be given information on legal options for memorialization and disposal of fetal remains (see below for more), as well as any bereavement or religious resources that may be helpful given the patients' individual needs and desires.
              </p>
            </div>
          </RevealDiv>

          {/* 3 key data points callout */}
          <RevealDiv className="mb-2">
            <div
              className="rounded-2xl p-6 border-l-4 flex items-start gap-4"
              style={{ background: 'rgba(74,26,140,0.05)', borderLeftColor: '#6B2DB5' }}
            >
              <Info size={20} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-[#1A1020]/80 mb-2">Three key pieces of clinical information for families:</p>
                <ol className="flex flex-col gap-1.5 ml-1">
                  {['Chorionicity (shared vs. separate placenta)', 'Timing of death in gestation (if possible)', 'Cause of death/cessation of development (if possible)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#1A1020]/65 leading-relaxed">
                      <span className="font-bold text-xs mt-0.5 flex-shrink-0" style={{ color: '#6B2DB5', fontFamily: 'DM Mono, monospace' }}>0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Why Chorionicity Matters ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Why Chorionicity Deserves Explicit Acknowledgment
            </h2>
            <p className="text-[#1A1020]/50 text-base leading-relaxed">
              Below are key reasons chorionicity deserves explicit acknowledgment:
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
            {CHORIONICITY_CARDS.map(({ Icon, color, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${i + 1}`}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 16px rgba(74,26,140,0.05)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={22} color={color} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg leading-snug mb-3">{title}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <SectionDivider />

          {/* ── Purple Butterfly Symbol ── */}
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-4">The Purple Butterfly Symbol</h2>
            <div className="rounded-2xl p-8" style={{ background: '#F0EBF8' }}>
              <p className="text-[#1A1020]/65 text-base leading-relaxed">
                The purple butterfly is the international symbol for twin loss. It helps bring visibility to families who have experienced the loss of a twin or multiple during pregnancy, particularly in healthcare settings. Many hospitals now use a purple butterfly symbol on medical records and room doors to alert staff that a family has experienced a multiple-loss pregnancy — ensuring sensitive, informed care.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── First Steps ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              First Steps: Partnering with Care Providers
            </h2>
          </RevealDiv>

          <div className="flex flex-col gap-4 mb-10">
            {FIRST_STEPS.map(({ num, title, desc }) => (
              <RevealDiv key={num}>
                <div
                  className="rounded-2xl p-7 flex gap-5"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
                >
                  <span
                    className="text-2xl font-bold flex-shrink-0 leading-none mt-0.5"
                    style={{ fontFamily: 'DM Mono, monospace', color: '#6B2DB5', opacity: 0.35 }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">{title}</h3>
                    <p className="text-sm text-[#1A1020]/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Hospital memorialization quick cards */}
          <RevealDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Ask Your Hospital', desc: 'Many hospitals offer bereavement support, memory boxes, and documentation services for families experiencing pregnancy loss. Ask your care team or social worker what is available at your facility.' },
                { title: 'Placental Documentation', desc: 'Requesting pathological examination of the placenta following delivery can provide important documentation of the pregnancy. Discuss this with your provider prior to delivery when possible.' },
                { title: 'Butterfly Symbol Programs', desc: 'The purple butterfly room symbol program is used in hospitals worldwide to discreetly communicate that a family has experienced a multiple-loss pregnancy. Ask whether your hospital participates.' },
              ].map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}>
                  <h3 className="font-semibold text-[#1A1020] text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-[#1A1020]/55 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Baseline & Caveats ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Baseline &amp; Caveats on Handling of Fetal Remains
            </h2>
          </RevealDiv>

          {/* Amber disclaimer */}
          <RevealDiv className="mb-8">
            <div className="rounded-xl border border-amber-200 p-5" style={{ background: '#FFFBEB' }}>
              <div className="flex items-start gap-3">
                <Info size={18} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
                <p className="text-amber-700 text-sm leading-relaxed">
                  Information about the disposal of fetal remains varies by jurisdiction and gestational age. This section provides general guidance only. Please consult your healthcare provider and local regulations.
                </p>
              </div>
            </div>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* US Context */}
            <RevealDiv className="reveal-left">
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">🇺🇸</span>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl">U.S. Context</h3>
                </div>
                <BulletList items={[
                  'States differ on whether they mandate burial or cremation of fetal remains (some do, many do not) and on what gestational thresholds (e.g., ≥ 20 weeks, or ≥ 350 g) trigger certain reporting or disposition rules.',
                  'Some states classify fetal remains (especially early ones) as medical waste unless a parent requests a different disposition, while others require hospitals or clinics to offer burial or cremation options.',
                  'For example, Texas law requires that embryonic or fetal remains not be treated as pathological waste and allows (or mandates) interment, cremation, or steam disinfection plus interment.',
                  'U.S. hospitals increasingly adopt principles of "respectful disposition" (sometimes called "sensitive disposal") to centralize family choice, clear communication, and flexibility within legal constraints.',
                ]} />
              </div>
            </RevealDiv>

            {/* International Context */}
            <RevealDiv className="reveal-right">
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">🌍</span>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl">International Context</h3>
                </div>
                <BulletList items={[
                  'In many countries, no legal requirement exists for burial or cremation of early pregnancy loss, and hospitals may treat fetal remains as clinical waste unless the family requests otherwise (e.g., in the UK for losses before 24 weeks).',
                  'In the UK, policies often use the term "sensitive disposal": fetal remains are collected separately from other waste and either cremated or interred; hospitals often offer parents a choice of private service, shared service, or letting the trust arrange disposition.',
                  'In England, hospitals may have policies that allow individual incineration or cremation with a unique tag number, organized through their clinical waste contractor with tracking.',
                  'In settings where regulatory oversight is limited, actual practice often reflects hospital norms and institutional culture more than strict law.',
                  'In some countries, cultural or religious practices may dictate very different norms; hospitals in those regions often adopt flexible or hybrid policies to accommodate cultural respect.',
                ]} />
              </div>
            </RevealDiv>
          </div>

          {/* Laws change note */}
          <RevealDiv>
            <div
              className="rounded-xl p-5 flex items-start gap-3 mb-2"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.15)' }}
            >
              <AlertCircle size={18} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-[#1A1020]/65 leading-relaxed italic">
                It is important to note that laws and protocols often change and may limit or expand what memorialization and remain disposal options are feasible.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Legal Options ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">
              Legal Options for Memorialization and Disposal
            </h2>
            <p className="text-[#1A1020]/50 text-base leading-relaxed">
              Below are categories of how fetal remains might be handled. Some will be routine in certain jurisdictions; others may be optional or unavailable depending on local law.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-4 mb-8">
            {LEGAL_OPTIONS.map(({ Icon, color, title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${Math.min(i + 1, 4)}`}>
                <div
                  className="rounded-2xl p-7 flex gap-5"
                  style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">{title}</h3>
                    <p className="text-sm text-[#1A1020]/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Formalin note */}
          <RevealDiv>
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: '#FFFBEB', border: '1px solid rgba(217,119,6,0.25)' }}
            >
              <Info size={17} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-amber-700 leading-relaxed">
                <strong>Note:</strong> In some jurisdictions, remains that have undergone fixation (e.g., in formalin for pathology) may no longer be acceptable for burial in certain forms because of chemical safety rules.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Memorialization Rituals ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-4">
              Memorialization Rituals and Remembrance
            </h2>
            <div className="rounded-2xl p-8" style={{ background: '#F0EBF8' }}>
              <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-5">
                Whether or not remains are accessible or used in burial/cremation, there are many meaningful ways to remember:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RITUALS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-[#1A1020]/65 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#1A1020]/50 leading-relaxed mt-5 italic">
                Institutions should encourage families to consider planning these even when the disposition of remains may be managed by others.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── For Providers and Institutions ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              For Providers and Institutions
            </h2>
          </RevealDiv>

          <div className="flex flex-col gap-3 mb-4">
            {FOR_PROVIDERS.map(({ title, desc }, i) => (
              <RevealDiv key={title} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-xl p-6 flex gap-4"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.09)' }}
                >
                  <BookOpen size={16} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <span className="text-sm font-semibold text-[#1A1020]/85">{title} </span>
                    <span className="text-sm text-[#1A1020]/55 leading-relaxed">{desc}</span>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <SectionDivider />

          {/* ── Memorial Wind Chime ── */}
          <RevealDiv className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Memorial Wind Chime</h2>
            <div className="rounded-2xl p-8" style={{ background: '#F0EBF8' }}>
              <p className="text-[#1A1020]/65 text-base leading-relaxed mb-6">
                IVTSF partners with Wind River Chimes to offer the Loss of Multiples Memorial Chime — a 27-inch purple butterfly chime crafted as a meaningful tribute for families who have experienced twin loss. A portion of proceeds supports IVTSF's mission.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>

          {/* ── Stories link ── */}
          <RevealDiv>
            <div className="rounded-2xl p-8 text-center" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-2xl mb-3">Stories of Multiple Loss</h3>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.7 }}>
                Hearing from others who have experienced similar losses can be a source of comfort and community.
              </p>
              <Link
                to="/knowledge-hub/stories"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Read Stories <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>

        </div>
      </section>
    </>
  )
}
