import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Download, ExternalLink, Stethoscope, Users, Baby, CheckCircle, ArrowRight, AlertCircle, Info, BookOpen } from 'lucide-react'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const DRIVE_VIEW = 'https://drive.google.com/file/d/1lT28TZtI6aaytH7OzM-6a9Fd6i8r8BNo/view'
const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1lT28TZtI6aaytH7OzM-6a9Fd6i8r8BNo'

const WHO = [
  {
    Icon: Stethoscope,
    color: '#4DB8E8',
    title: 'Ob/Gyn, MFM &amp; Midwifery Clinicians',
    desc: 'Seeking a quick, clinically oriented aid for use during prenatal visits, on the ward, or at the time of VTS diagnosis.',
  },
  {
    Icon: Users,
    color: '#6B2DB5',
    title: 'Nurses, Sonographers &amp; Bereavement Teams',
    desc: 'Coordinating patient education and support pathways, or communicating VTS findings to patients alongside the clinical team.',
  },
  {
    Icon: Baby,
    color: '#C2408C',
    title: 'Neonatology &amp; Pediatrics Teams',
    desc: 'Planning postnatal assessments after fetal demise in a multiple gestation, including neuroimaging, developmental surveillance, and family communication.',
  },
]

const WHATS_INSIDE = [
  {
    num: '01',
    title: 'Antenatal Diagnosis',
    detail: 'VTS definition, typical ultrasound patterns, and chorionicity assessment',
  },
  {
    num: '02',
    title: 'Risk &amp; Monitoring Cues',
    detail: 'What to prioritize for dichorionic vs monochorionic twins — including growth, MCA-PSV Dopplers, neurosonography, and fetal MRI when indicated',
  },
  {
    num: '03',
    title: 'Prenatal Preparation for Disposition &amp; Memorialization',
    detail: 'Clinical documentation, legal and institutional awareness, compassionate communications, and cultural sensitivity',
  },
  {
    num: '04',
    title: 'Postnatal Considerations',
    detail: 'Neonatal assessment, neuroimaging triggers, and placental pathology notes',
  },
  {
    num: '05',
    title: 'Family &amp; Psychosocial Care',
    detail: 'Language tips, bereavement resources, and follow-up planning',
  },
  {
    num: '06',
    title: 'Professional Guidelines',
    detail: 'References to relevant professional society guidelines (ISUOG, ACOG, SMFM, ISPD)',
  },
]

const SECTIONS = [
  {
    title: 'Antenatal Diagnosis',
    items: [
      'VTS: spontaneous demise of one or more fetuses in a multifetal pregnancy, typically identified by ultrasound in the first trimester',
      'No formal ISUOG-specific guidelines for VTS exist; diagnosis is made by confirmed absence, death, or cessation of development of one multiple following prior ultrasound confirmation of multiple gestation',
      'Diagnostic terms that may appear in records: blighted ovum, IUFD (intrauterine fetal demise), fetus papyraceous, missed miscarriage, complete miscarriage',
      'Ultrasound features: empty gestational sac, fetal pole without cardiac activity, or absent fetal pole adjacent to viable fetus; may show subchorionic hematoma at site of demised twin',
      'Resorption of demised fetus is usually complete by end of first trimester — no macroscopic remains at delivery in most VTS cases',
      'Chorionicity is best established at 11–14 weeks; document explicitly at the time of VTS diagnosis',
      'MCDA (monochorionic-diamniotic) vs DCDA (dichorionic-diamniotic) risk profiles differ substantially — see Risk & Monitoring section',
      'Document initial twin/multiple gestation and subsequent VTS finding in the medical record; include estimated gestational timing of loss',
    ],
  },
  {
    title: 'Risk & Monitoring Cues',
    items: [
      'DICHORIONIC (DC) — early first trimester loss (< 10 wks): standard obstetric care; confirm viability of remaining fetus',
      'DICHORIONIC — loss > 20 wks: consider increased frequency of growth ultrasounds; antenatal testing in 3rd trimester (NST/BPP); MFM consultation if clinically indicated',
      'MONOCHORIONIC (MC) — any gestational age: urgent MFM or neurology consultation after co-twin death; vascular shunting via shared placenta creates acute hemodynamic risk for survivor',
      'MC late loss: fetal brain MRI at 4–6 weeks post-demise; serial growth ultrasounds every 2 weeks; NST/BPP; plan for pediatric neurology follow-up before delivery',
      'MCA-PSV Dopplers: recommended in MC pregnancies to assess for fetal anemia following co-twin demise',
      'Neurosonography/fMRI: consider when MC co-twin death occurred after 20 weeks; assess for periventricular leukomalacia, parenchymal injury, or ventriculomegaly',
      'cfDNA / NIPT: residual DNA from demised twin can persist in maternal circulation for weeks; flag VTS status to laboratory; false-positive aneuploidy results possible; confirm with invasive testing before clinical action',
      'ACOG, ISPD, and SMFM recommend interpreting cfDNA results with caution following fetal demise in a twin pregnancy',
      'First-trimester serum screening (PAPP-A, beta-hCG): may be altered; ISUOG guidance recommends adjustments when VTS is known',
      'No universal monitoring protocol exists — individualize based on chorionicity, gestational age at loss, clinical presentation, and patient risk factors',
    ],
  },
  {
    title: 'Prenatal Preparation: Disposition & Memorialization',
    items: [
      'Counsel patients on options for disposition of fetal remains as early in the pregnancy as possible — these vary by institution, gestational age, state/national law, and patient preference',
      'Document that disposition options were discussed; provide written summary or institutional policy to patient',
      'Identify key contacts (bereavement coordinator, chaplain, social worker, legal/risk office) and communicate them to the family proactively',
      'If fetal demise is confirmed intrapartum or later in pregnancy: coordinate with pathology before any tissue processing to preserve family\'s options for remains',
      'Most VTS losses occur in first trimester with complete resorption — no macroscopic remains at delivery; still document VTS status in obstetric and delivery records',
      'Request placental pathology at delivery regardless of gestational timing — artifacts (fetus papyraceous, dense placental nodule) may be present even when no gross fetal tissue is visible',
      'Cultural sensitivity: anticipate diverse religious, cultural, and personal values around fetal remains; ask rather than assume; accommodate requests within institutional and legal constraints',
      'Purple Butterfly Program: if your institution participates, use room/chart symbols to communicate to all staff that a family has experienced a multiple-loss pregnancy',
      'See full guidance for families, providers, and institutions on the Memorialization page',
    ],
  },
  {
    title: 'Postnatal Considerations',
    items: [
      'Communicate VTS status to neonatal and pediatric teams at delivery — include chorionicity, gestational timing of loss, and any prenatal monitoring findings',
      'MC late loss: neonatal neurology consult recommended; cranial ultrasound or MRI in the neonatal period to assess for ischemic injury',
      'Monitor surviving neonate for signs of ischemic sequelae: tone abnormalities, feeding difficulties, seizure activity, abnormal neurological reflexes',
      'Document placental pathology findings in the neonatal medical record — these are relevant to the child\'s long-term health profile',
      'Flag VTS status in the pediatric record: relevant to developmental monitoring, mental health surveillance, and future specialist referrals',
      'SMFM coding guidance available for VTS cases — apply appropriate ICD-10 codes to both maternal and neonatal records',
      'Newborn brain imaging is especially important after MC co-twin death ≥ 20 weeks — correlates with risk for cerebral palsy, cognitive delay, motor difficulties',
    ],
  },
  {
    title: 'Family & Psychosocial Care',
    items: [
      'Acknowledge the loss explicitly at every appropriate clinical encounter — parents anticipated a different family, and grief is real regardless of early gestational timing',
      'Preferred language: "the living twin" / "the baby who continued to develop" / "the remaining baby" — avoid "surviving twin" unless the patient uses this term first',
      'Avoid minimizing language (e.g., "it was just absorbed") — this is a recognized loss; clear, compassionate disclosure is associated with better patient outcomes',
      'Use trauma-informed communication: ask before sharing details, give the family space to respond, offer information in written form to reinforce what was said verbally',
      'Offer bereavement coordinator, social worker, or chaplain referral at the time of diagnosis — do not wait for the patient to ask',
      'Screen for depression, anxiety, and prolonged grief disorder at routine prenatal and postpartum visits — dual grief (simultaneous loss and ongoing pregnancy) is a distinct and underrecognized clinical presentation',
      'Partners, fathers, and surrogates also experience grief — include all caregivers in psychosocial conversations',
      'Share the IVTSF Prenatal Patient Question Checklist directly with patients — encourage them to bring it to prenatal visits to guide discussion of diagnosis, risks, follow-up, and emotional well-being',
      'Inform families that their child\'s VTS history is medically relevant for pediatric and adult care — encourage them to share it with future providers',
      'Grief may recur at meaningful milestones: the surviving child\'s birthdays, the would-be twin\'s due date, school milestones — normalize this in follow-up conversations',
    ],
  },
  {
    title: 'References & Professional Guidelines',
    items: [
      'ISUOG Practice Guidelines: role of ultrasound in twin pregnancy (consult current version at isuog.org)',
      'ACOG Practice Bulletin: medically indicated late-preterm and early-term deliveries; multifetal gestations (consult current version at acog.org)',
      'SMFM Consult Series: evaluation and management of fetal growth restriction; coding guidance for VTS (consult current version at smfm.org)',
      'ISPD: prenatal diagnosis in multiple pregnancies; cfDNA and NIPT in twin/multiple gestations',
      'ISUOG / SMFM / ACOG: cell-free DNA screening considerations following fetal demise in multiple gestation',
      'PLIDA / ACOG: bereavement care standards for perinatal loss',
      'IVTSF Literature Repository: curated peer-reviewed VTS research — available at /knowledge-hub/literature',
    ],
  },
]

export function PrenatalProviderReference() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) =>
    setOpen(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <>
      {/* Hero */}
      <div className="relative h-[48vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.literatureHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.92) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Prenatal Provider<br />Reference Guide
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Clinical reference for healthcare professionals
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Clinical disclaimer */}
          <div
            className="rounded-r-2xl p-5 border-l-4 mb-12"
            style={{ background: '#F0EBF8', borderLeftColor: '#4DB8E8' }}
          >
            <p className="text-[#1A1020]/70 text-sm leading-relaxed">
              Resources on this page are intended for licensed healthcare professionals. The IVTSF does not provide clinical decision support or replace institutional guidelines. Always apply clinical judgment and consult current evidence-based standards.
            </p>
          </div>

          {/* ── Featured guide card ── */}
          <div className="mb-16">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1A0A3D 0%, #2D1060 60%, #1A0855 100%)',
                border: '1px solid rgba(139,63,212,0.25)',
                boxShadow: '0 8px 48px rgba(74,26,140,0.25)',
              }}
            >
              {/* Header bar */}
              <div
                className="flex items-center gap-3 px-8 py-5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(77,184,232,0.2)' }}
                >
                  <Stethoscope size={20} color="#4DB8E8" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4DB8E8', fontFamily: 'DM Mono, monospace' }}>
                    Clinical Reference — 4 Pages
                  </p>
                  <h2 className="font-serif font-semibold text-white text-2xl leading-tight">
                    VTS Provider Quick Reference
                  </h2>
                </div>
              </div>

              <div className="px-8 pt-7 pb-8">
                <p className="text-white/80 text-base font-medium mb-3 leading-snug">
                  Fast-access clinical aid for the clinic and the ward
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  This four-page reference guide was made for fast use in the clinic or on the ward. It distills practical points on ultrasound patterns, differential risks by chorionicity, recommended surveillance, and family-centered communication. This quick reference complements evidence-based protocols and published guidelines and reviews.
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Providers can keep a copy of both the VTS Provider Quick Reference and the Prenatal VTS Patient Checklist in clinical settings. Encourage patients to bring the checklist to visits to guide open discussion about diagnosis, risks, follow-up, and emotional well-being.
                </p>

                {/* Download / View buttons */}
                <div
                  className="flex flex-wrap gap-3 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <a
                    href={DRIVE_VIEW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #4A1A8C, #4DB8E8)' }}
                  >
                    <ExternalLink size={15} />
                    Download Here
                  </a>
                  <a
                    href={DRIVE_DOWNLOAD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-125"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <Download size={15} />
                    Save PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Who This Is For ── */}
          <div className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-6">Who This Is For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {WHO.map(({ Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)', boxShadow: '0 2px 12px rgba(74,26,140,0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} aria-hidden />
                  </div>
                  <h3
                    className="font-serif font-semibold text-[#1A1020] text-base leading-snug mb-2"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── What's Inside ── */}
          <div className="mb-10">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-6">What's Inside</h2>
            <div className="flex flex-col gap-3">
              {WHATS_INSIDE.map(({ num, title, detail }) => (
                <div
                  key={num}
                  className="rounded-xl p-5 flex gap-4"
                  style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.08)' }}
                >
                  <span
                    className="text-xl font-bold flex-shrink-0 leading-none mt-0.5"
                    style={{ fontFamily: 'DM Mono, monospace', color: '#4DB8E8', opacity: 0.7 }}
                  >
                    {num}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-[#1A1020]/85" dangerouslySetInnerHTML={{ __html: title }} />
                    <span className="text-sm text-[#1A1020]/55 leading-relaxed"> — {detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Why It Matters ── */}
          <div className="mb-8">
            <div
              className="rounded-2xl p-7"
              style={{ background: 'rgba(74,26,140,0.05)', border: '1px solid rgba(107,45,181,0.15)' }}
            >
              <div className="flex items-start gap-3">
                <Info size={18} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">Why It Matters</h3>
                  <p className="text-sm text-[#1A1020]/65 leading-relaxed">
                    VTS is often unseen but impactful. Clear, consistent communication and chorionicity-aware monitoring can improve clinical decision-making and help families feel acknowledged and supported during ongoing pregnancy and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── What Is Not Included ── */}
          <div className="mb-14">
            <div
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: '#FFFBEB', border: '1px solid rgba(217,119,6,0.2)' }}
            >
              <AlertCircle size={18} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-semibold text-amber-800 text-sm mb-1">What Is Not Included</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Detailed information on the memorialization and legal disposition of fetal remains is not covered within this guide.{' '}
                  <Link
                    to="/knowledge-hub/partners/memorialization"
                    className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                    style={{ color: '#92400E' }}
                  >
                    See full guidance for families, providers, and institutions here.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: 'rgba(107,45,181,0.12)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B2DB5', fontFamily: 'DM Mono, monospace', opacity: 0.6 }}>
              Clinical Reference Detail
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(107,45,181,0.12)' }} />
          </div>

          {/* ── Accordion ── */}
          <div className="flex flex-col gap-3">
            {SECTIONS.map((section, i) => (
              <div key={i} className="checklist-section">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-4 px-6 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: '#fff',
                    border: `1px solid ${open.has(i) ? 'rgba(77,184,232,0.35)' : 'rgba(139,63,212,0.1)'}`,
                    boxShadow: open.has(i) ? '0 2px 12px rgba(77,184,232,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: 'DM Mono, monospace', color: '#4DB8E8' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif font-semibold text-[#1A1020] text-base">
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="#4DB8E8"
                    style={{
                      transform: open.has(i) ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: open.has(i) ? '1400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <div className="pt-2 pb-4 px-2 flex flex-col gap-2">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 px-5 py-3 rounded-xl"
                        style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.06)' }}
                      >
                        <CheckCircle
                          size={14}
                          color="#4DB8E8"
                          className="flex-shrink-0 mt-0.5"
                          style={{ marginTop: 3 }}
                          aria-hidden
                        />
                        <span className="text-sm text-[#1A1020]/70 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 print-hide">
            <a
              href={DRIVE_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #4A1A8C, #4DB8E8)' }}
            >
              <ExternalLink size={16} />
              View Reference Guide
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:brightness-95 active:scale-95"
              style={{ background: 'rgba(74,26,140,0.1)', color: '#4A1A8C', border: '1px solid rgba(74,26,140,0.25)' }}
            >
              <Download size={16} />
              Print This Page
            </button>
          </div>

          {/* Companion resource prompt */}
          <div className="mt-10 rounded-2xl p-7" style={{ background: '#1A0A3D' }}>
            <div className="flex items-start gap-4">
              <BookOpen size={22} color="#4DB8E8" className="flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1">
                <h3 className="font-serif font-semibold text-white text-lg mb-2">
                  Companion Patient Resource
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Encourage patients to bring the Prenatal VTS Patient Checklist to their visits. It helps guide open discussion about diagnosis, risks, follow-up, and emotional well-being — and gives families language for the questions that matter most.
                </p>
                <Link
                  to="/knowledge-hub/partners/families/prenatal-checklist"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#4DB8E8' }}
                >
                  View Patient Checklist <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-[#1A1020]/40 italic mt-8 leading-relaxed">
            © 2025–2026 International Vanishing Twin Syndrome Foundation. For licensed healthcare professionals. Not a substitute for clinical guidelines.{' '}
            <a href="mailto:contact@vanishingtwinsyndrome.org" className="underline">
              contact@vanishingtwinsyndrome.org
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
