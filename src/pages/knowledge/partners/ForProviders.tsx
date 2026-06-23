import { Link } from 'react-router-dom'
import { ArrowRight, Activity, FileText, AlertCircle, CheckCircle, Info, BookOpen, Heart, Users, Microscope, MessageCircle, Shield } from 'lucide-react'
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle size={15} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
          <span className="text-sm text-[#1A1020]/65 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
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

export function ForProviders() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.diagnosingHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.92) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">For Providers</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Clinical guidance for healthcare professionals supporting patients through VTS and multifetal pregnancy loss.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Clinical disclaimer */}
          <RevealDiv className="mb-12">
            <div
              className="rounded-r-2xl p-6 border-l-4"
              style={{ background: '#F0EBF8', borderLeftColor: '#4DB8E8' }}
            >
              <p className="text-[#1A1020]/70 text-sm leading-relaxed">
                Resources on this page are intended for licensed healthcare professionals. The IVTSF does not provide clinical decision support or replace institutional guidelines. Always apply clinical judgment and consult current evidence-based standards.
              </p>
            </div>
          </RevealDiv>

          {/* Intro */}
          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              Vanishing Twin Syndrome (VTS) affects an estimated 10–30% of twin pregnancies diagnosed in the first trimester, yet dedicated clinical guidance remains limited in most obstetric and neonatal settings. The IVTSF's mission is to close this gap — supporting providers with the knowledge, language, and frameworks needed to deliver accurate, compassionate, and trauma-informed care to patients and families experiencing VTS.
            </p>
          </RevealDiv>

          {/* ── Clinical Essentials ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Clinical Overview
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { stat: '10–30%', label: 'of twin pregnancies end in first-trimester loss of one twin' },
              { stat: '~1 in 8', label: 'singleton births may have begun as a multiple pregnancy' },
              { stat: '≤13 wks', label: 'gestational window when most VTS resorptions are complete' },
            ].map(({ stat, label }) => (
              <RevealDiv key={stat}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: '#1A0A3D' }}
                >
                  <p className="font-serif font-bold text-4xl mb-2" style={{ color: '#C2408C' }}>{stat}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{label}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="rounded-2xl p-7" style={{ background: '#F0EBF8' }}>
              <p className="text-[#1A1020]/65 text-sm leading-relaxed mb-4">
                VTS occurs when one or more fetuses in a multifetal pregnancy spontaneously demises, typically during the first trimester. The demised fetus is subsequently resorbed into the placenta, uterine wall, or surviving twin, usually leaving no macroscopic trace by the time of delivery. VTS may be diagnosed incidentally on early ultrasound or, in some cases, retrospectively through placental pathology or abnormal prenatal screening results.
              </p>
              <p className="text-[#1A1020]/65 text-sm leading-relaxed">
                While VTS most often occurs without clinical consequence for the surviving fetus, outcomes vary substantially by timing of loss and placental architecture. Providers should be equipped to counsel families accurately, document chorionicity, monitor appropriately, and refer to bereavement resources when indicated.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Chorionicity ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Chorionicity: The Critical Variable
            </h2>
            <p className="text-[#1A1020]/50 text-base leading-relaxed">
              Chorionicity is the single most important factor in determining risk after a co-twin loss.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: 'Monochorionic (MC) Pregnancies',
                color: '#C2408C',
                bg: '#fff',
                items: [
                  'Shared placenta creates direct vascular communication between twins',
                  'Co-twin death can cause sudden acute blood pressure/volume shifts in the survivor',
                  'Risk of neurological injury (e.g., periventricular leukomalacia, cerebral palsy) or death in surviving twin is substantially elevated',
                  'Enhanced surveillance (serial anatomy surveys, fetal MRI, neurodevelopmental monitoring postpartum) should be strongly considered',
                  'Deaths later in gestation in MC pregnancies carry the highest risk of survivor morbidity',
                ],
              },
              {
                title: 'Dichorionic (DC) Pregnancies',
                color: '#4DB8E8',
                bg: '#fff',
                items: [
                  'Separate placentas limit direct fetal vascular communication',
                  'Outcomes for the surviving twin are generally more favorable than MC losses',
                  'Risk is still gestational age–dependent: losses after 20 weeks in DC pregnancies warrant closer monitoring than early first-trimester losses',
                  'Early first-trimester DC losses (< 10 weeks) typically require standard obstetric care only',
                  'Placental pathology may still provide useful documentation even in DC cases',
                ],
              },
            ].map(({ title, color, bg, items }) => (
              <RevealDiv key={title}>
                <div
                  className="rounded-2xl p-7 h-full"
                  style={{ background: bg, border: `2px solid ${color}30` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden />
                    <h3 className="font-serif font-semibold text-[#1A1020] text-lg">{title}</h3>
                  </div>
                  <BulletList items={items} color={color} />
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: '#FFFBEB', border: '1px solid rgba(217,119,6,0.25)' }}
            >
              <AlertCircle size={17} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-amber-700 leading-relaxed">
                <strong>Clinical note:</strong> Chorionicity is best established by ultrasound at 11–14 weeks. Providers should document chorionicity explicitly in the patient's record at the time of VTS diagnosis — this information will be important for both obstetric management and long-term health monitoring of the surviving child.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Diagnosis & Documentation ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Diagnosis &amp; Documentation
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <RevealDiv>
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(107,45,181,0.1)' }}>
                    <Microscope size={20} color="#6B2DB5" aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg">Ultrasound Findings</h3>
                </div>
                <BulletList items={[
                  'Early VTS: empty gestational sac or fetal pole without cardiac activity adjacent to a viable fetus',
                  'Fetal resorption is usually complete by the end of the first trimester',
                  'A subchorionic hematoma or dense placental region may persist and indicate the prior site of the demised twin',
                  'Providers should note the initial twin diagnosis, the subsequent loss finding, and the estimated gestational timing in records',
                ]} />
              </div>
            </RevealDiv>

            <RevealDiv>
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(77,184,232,0.1)' }}>
                    <FileText size={20} color="#4DB8E8" aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg">Placental Pathology</h3>
                </div>
                <BulletList items={[
                  'Request placental pathology at delivery whenever VTS was diagnosed — even when no gross tissue is visible',
                  'Artifacts such as a hard nodule (fetus papyraceous) on the placental surface, or a shrunken disc of tissue, may be the only remaining evidence',
                  'Note: pathological findings may indicate artifacts consistent with VTS rather than naming VTS explicitly',
                  'Document findings and provide a copy to the family for their medical records',
                ]} />
              </div>
            </RevealDiv>
          </div>

          <RevealDiv>
            <div className="rounded-2xl p-7" style={{ background: '#F0EBF8' }}>
              <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">Key Documentation Points</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {[
                  'Date of initial multiple-pregnancy diagnosis',
                  'Chorionicity (MC or DC) at time of VTS diagnosis',
                  'Estimated gestational age at time of loss',
                  'Whether cause of death could be determined',
                  'Ultrasound images/reports confirming the demise',
                  'Placental pathology ordered and resulting reports',
                  'Birth/death certificate considerations discussed',
                  'Options for disposition of remains (if applicable)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: '1px solid rgba(107,45,181,0.07)' }}>
                    <CheckCircle size={13} color="#6B2DB5" className="flex-shrink-0" aria-hidden />
                    <span className="text-sm text-[#1A1020]/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Prenatal Screening ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Prenatal Screening Implications
            </h2>
          </RevealDiv>

          <RevealDiv>
            <div className="flex flex-col gap-4">
              {[
                {
                  Icon: AlertCircle,
                  color: '#C2408C',
                  title: 'cfDNA / NIPT Interference',
                  desc: 'Cell-free DNA from the demised twin can persist in maternal circulation for weeks after fetal demise and may cause false-positive or misleading NIPT results (e.g., apparent chromosomal aneuploidy not present in the surviving fetus). Providers should inform laboratories when a VTS pregnancy is known, and consider confirmatory diagnostic testing (e.g., amniocentesis) before clinical action when results are unexpected.',
                },
                {
                  Icon: Activity,
                  color: '#6B2DB5',
                  title: 'First-Trimester Screening',
                  desc: 'Nuchal translucency measurements and serum analytes (PAPP-A, beta-hCG) may be altered in VTS pregnancies. When reviewing combined screening results, providers should account for the demised twin\'s contribution when it cannot be distinguished. Document the twin loss status on any referral for genetics consultation.',
                },
                {
                  Icon: Shield,
                  color: '#4DB8E8',
                  title: 'Fetal Anatomy Survey',
                  desc: 'If VTS occurred after organogenesis was underway (particularly in MC pregnancies), a detailed second-trimester anatomy survey of the surviving fetus is warranted. The survey should assess for signs of ischemic injury, structural anomaly, or growth restriction that may be attributable to the prior co-twin\'s death.',
                },
              ].map(({ Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-7 flex gap-5"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
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
              ))}
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Monitoring ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Monitoring Guidance
            </h2>
            <p className="text-[#1A1020]/50 text-base">
              Surveillance intensity should be calibrated to chorionicity and timing of loss.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              {
                tier: 'Low Complexity',
                color: '#4DB8E8',
                bg: '#F0EBF8',
                scenario: 'DC loss < 10 weeks (first trimester)',
                items: ['Standard obstetric surveillance', 'Routine growth scans', 'Confirm viability of surviving fetus', 'Provide counseling and bereavement support'],
              },
              {
                tier: 'Moderate',
                color: '#6B2DB5',
                bg: '#F0EBF8',
                scenario: 'DC loss > 20 weeks or any loss with uncertainty',
                items: ['Increased frequency of growth ultrasounds', 'Serial fetal anatomy assessment', 'Antenatal testing in the 3rd trimester (NST / BPP) as indicated', 'Consider MFM consultation'],
              },
              {
                tier: 'High Complexity',
                color: '#C2408C',
                bg: '#fff',
                scenario: 'MC pregnancy loss at any gestational age',
                items: ['Urgent neurology or MFM consultation after co-twin death', 'Fetal brain MRI (if late loss)', 'Serial growth ultrasounds every 2 weeks', 'NST / fetal wellbeing assessment', 'Pediatric neurology follow-up planned prior to delivery'],
              },
            ].map(({ tier, color, bg, scenario, items }) => (
              <RevealDiv key={tier}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: bg, border: `1px solid ${color}30` }}
                >
                  <div
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold self-start mb-3"
                    style={{ background: `${color}18`, color }}
                  >
                    {tier}
                  </div>
                  <p className="text-xs italic text-[#1A1020]/45 mb-4 leading-relaxed">{scenario}</p>
                  <CheckList items={items} />
                </div>
              </RevealDiv>
            ))}
          </div>

          <SectionDivider />

          {/* ── Patient Communication ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Communicating with Patients and Families
            </h2>
          </RevealDiv>

          <RevealDiv className="mb-6">
            <div className="rounded-2xl p-7" style={{ background: '#F0EBF8' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(107,45,181,0.15)' }}>
                  <MessageCircle size={20} color="#6B2DB5" aria-hidden />
                </div>
                <h3 className="font-serif font-semibold text-[#1A1020] text-xl">The Three Key Data Points</h3>
              </div>
              <p className="text-sm text-[#1A1020]/65 leading-relaxed mb-5">
                Research supports that families should leave every clinical encounter with at least these three pieces of information about their VTS pregnancy. These facts shape both the medical risk profile of the surviving child and the family's understanding of the loss.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { num: '01', label: 'Chorionicity', detail: 'Was the pregnancy monochorionic or dichorionic? This determines the level of biological connection between twins and the degree of shared risk.' },
                  { num: '02', label: 'Timing of death in gestation', detail: 'At what gestational age was the demise estimated to have occurred? Timing shapes risk level and options for documentation or remains.' },
                  { num: '03', label: 'Cause of death (if determinable)', detail: 'In most VTS cases the cause is unknown, often presumed chromosomal. When cause can be determined, communicate it clearly and offer genetics consultation if appropriate.' },
                ].map(({ num, label, detail }) => (
                  <div
                    key={num}
                    className="rounded-xl p-5 flex gap-4"
                    style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
                  >
                    <span
                      className="text-xl font-bold flex-shrink-0 leading-none mt-0.5"
                      style={{ fontFamily: 'DM Mono, monospace', color: '#6B2DB5', opacity: 0.4 }}
                    >
                      {num}
                    </span>
                    <div>
                      <p className="font-semibold text-[#1A1020] text-sm mb-1">{label}</p>
                      <p className="text-xs text-[#1A1020]/55 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          <RevealDiv>
            <div className="flex flex-col gap-3">
              {[
                {
                  title: 'Acknowledge the loss explicitly',
                  desc: 'Even when a surviving baby is healthy, families who anticipated a twin or multiple pregnancy have experienced a real loss. Acknowledging that loss — by name, if the family has one — validates the grief many parents experience while expecting a healthy delivery.',
                },
                {
                  title: 'Use precise, consistent terminology',
                  desc: '"Vanishing Twin Syndrome" is the accepted clinical and patient-facing term. Avoid language that minimizes the loss (e.g., "just absorbed") or creates false urgency. Tailor the depth of explanation to the patient\'s clinical literacy and emotional readiness.',
                },
                {
                  title: 'Address survivorship identity early',
                  desc: 'Surviving children of VTS pregnancies may one day ask about their beginnings. Providers can help families begin thinking about how to frame the child\'s story with age-appropriate language over time. Referring families to the IVTSF\'s resources for parents can support this process.',
                },
                {
                  title: 'Document conversations',
                  desc: 'Note in the medical record that the VTS diagnosis was discussed with the patient, what information was provided, and what resources were shared. This supports continuity of care across providers.',
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-6 flex gap-4"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.09)' }}
                >
                  <Info size={16} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <span className="text-sm font-semibold text-[#1A1020]/85">{title} </span>
                    <span className="text-sm text-[#1A1020]/55 leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Psychosocial & Bereavement ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Psychosocial &amp; Bereavement Support
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <RevealDiv>
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(194,64,140,0.1)' }}>
                    <Heart size={20} color="#C2408C" aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg">Grief is Real and Valid</h3>
                </div>
                <p className="text-sm text-[#1A1020]/60 leading-relaxed mb-4">
                  Parents expecting multiples grieve not only a fetus but an anticipated family configuration, a future sibling relationship, and a different version of their family's story. This grief can coexist with joy about the surviving child — and providers should expect and normalize both.
                </p>
                <BulletList items={[
                  'Screen for prolonged grief disorder, depression, and anxiety in the postpartum period',
                  'Fathers, partners, and surrogates also experience grief — include them in counseling conversations',
                  'Grief may resurface around the surviving child\'s milestones and the would-be twin\'s due date',
                ]} color="#C2408C" />
              </div>
            </RevealDiv>

            <RevealDiv>
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(74,26,140,0.1)' }}>
                    <Users size={20} color="#4A1A8C" aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg">Referral &amp; Support Resources</h3>
                </div>
                <p className="text-sm text-[#1A1020]/60 leading-relaxed mb-4">
                  Providers should be prepared to offer or coordinate:
                </p>
                <BulletList items={[
                  'In-hospital bereavement coordinator, chaplain, or social worker referral',
                  'Outpatient perinatal mental health counseling',
                  'Peer support groups for parents of surviving multiples',
                  'Memory-making services (e.g., photography, molds, memory boxes)',
                  'Information about the Purple Butterfly Program if your institution participates',
                ]} />
              </div>
            </RevealDiv>
          </div>

          <RevealDiv>
            <div
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: '#FFFBEB', border: '1px solid rgba(217,119,6,0.2)' }}
            >
              <Info size={18} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-amber-700 leading-relaxed">
                Bereavement support following VTS is distinct from singleton loss grief: families are simultaneously grieving and expecting. Standard bereavement protocols designed for stillbirth or neonatal death may not fully address this dual experience. Consider integrating VTS-specific guidance into your institution's bereavement pathways.
              </p>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Neonatal & Pediatric ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Neonatal &amp; Pediatric Follow-Up
            </h2>
            <p className="text-[#1A1020]/50 text-base leading-relaxed">
              Surviving children of VTS pregnancies may benefit from enhanced monitoring across the developmental lifespan.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-4 mb-6">
            {[
              {
                Icon: Activity,
                color: '#6B2DB5',
                title: 'Neonatal Period',
                items: [
                  'Ensure VTS status is communicated to the neonatal and pediatric team at delivery',
                  'For MC losses — especially late in gestation — consider neonatal neurology consult and early brain imaging (cranial ultrasound or MRI)',
                  'Monitor for signs of ischemic injury: tone abnormalities, feeding difficulties, seizure activity',
                  'Document placental findings in the neonatal record',
                ],
              },
              {
                Icon: Users,
                color: '#4DB8E8',
                title: 'Pediatric Development',
                items: [
                  'VTS survivors — particularly those from MC pregnancies — may face higher rates of developmental delay, motor difficulties, or cognitive differences',
                  'Standard developmental surveillance (ASQ, M-CHAT, MCHAT-R) should be applied with attention to risk history',
                  'Early referral to developmental pediatrics, occupational therapy, or early intervention should be low-threshold in high-risk cases',
                  'Inform families that their child\'s VTS history is medically relevant and should be shared with future providers',
                ],
              },
              {
                Icon: Heart,
                color: '#C2408C',
                title: 'Psychosocial &amp; Identity Development',
                items: [
                  'Research indicates elevated rates of anxiety, depression, and emotional disorders in VTS survivors compared to unexposed singletons',
                  'Identity questions (e.g., "Was I a twin?", "What happened to my sibling?") may emerge in childhood, adolescence, and adulthood',
                  'Pediatric mental health providers should be aware of VTS status when relevant to a patient\'s presenting concerns',
                  'Encourage parents to have age-appropriate conversations about the pregnancy early and consistently',
                ],
              },
            ].map(({ Icon, color, title, items }) => (
              <RevealDiv key={title}>
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
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                    <CheckList items={items} />
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          <SectionDivider />

          {/* ── Memorialization ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Memorialization &amp; Disposition of Remains
            </h2>
          </RevealDiv>

          <RevealDiv className="mb-4">
            <div className="rounded-2xl p-7" style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}>
              <p className="text-sm text-[#1A1020]/65 leading-relaxed mb-5">
                Most VTS losses occur in the first trimester, and by delivery no macroscopic fetal remains are present. However, providers should proactively inform families about the range of possibilities — particularly in second-trimester losses, MC pregnancies, or when families specifically ask. The following are key points for clinical teams:
              </p>
              <CheckList items={[
                'Publish and communicate your institution\'s policy on fetal remains disposition in writing, and offer a point of contact',
                'Give families information on memorialization options before they are asked to make decisions under stress at the bedside',
                'Involve the bereavement coordinator or social worker when families express a desire to memorialize',
                'Coordinate with pathology early if families wish to receive remains — fixation processes may limit options',
                'Understand that laws on disposition vary by state and country and change over time — designate a legal or risk office contact for families who need guidance',
              ]} />
              <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(107,45,181,0.08)' }}>
                <Link
                  to="/knowledge-hub/partners/memorialization"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#6B2DB5' }}
                >
                  View full Memorialization &amp; Disposal guidance <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </RevealDiv>

          <SectionDivider />

          {/* ── Research & Literature ── */}
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-2">
              Research &amp; Literature
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                Icon: BookOpen,
                color: '#6B2DB5',
                title: 'Literature Repository',
                desc: 'Access our curated collection of peer-reviewed research on VTS diagnosis, management, fetal outcomes, and long-term survivor health.',
                href: '/knowledge-hub/literature',
                label: 'Browse Literature',
              },
              {
                Icon: FileText,
                color: '#4DB8E8',
                title: 'Terminology Guidelines',
                desc: 'Evidence-based terminology for use in VTS documentation, patient communication, and clinical notes — supporting consistency across providers.',
                href: '/what-is-vts/key-terms',
                label: 'View Key Terms',
              },
              {
                Icon: MessageCircle,
                color: '#C2408C',
                title: 'Contact the IVTSF',
                desc: 'Clinicians seeking to collaborate on research, contribute resources, or integrate IVTSF materials into institutional protocols are welcome to reach out.',
                href: '/contact',
                label: 'Get in Touch',
              },
            ].map(({ Icon, color, title, desc, href, label }) => (
              <RevealDiv key={title}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1 mb-4">{desc}</p>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color }}
                  >
                    {label} <ArrowRight size={13} />
                  </Link>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Patient resource prompt */}
          <RevealDiv>
            <div className="rounded-2xl p-8 text-center" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-2xl mb-3">Share Resources with Your Patients</h3>
              <p className="text-white/55 text-base leading-relaxed mb-6 max-w-lg mx-auto">
                The IVTSF's patient-facing resources — including the Prenatal Patient Question Checklist and the For Families guide — are designed to be shared directly by providers in the clinical encounter.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/knowledge-hub/partners/families/prenatal-checklist"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
                >
                  Patient Checklist <ArrowRight size={14} />
                </Link>
                <Link
                  to="/knowledge-hub/partners/families"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:brightness-125"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  For Families Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </RevealDiv>

        </div>
      </section>
    </>
  )
}
