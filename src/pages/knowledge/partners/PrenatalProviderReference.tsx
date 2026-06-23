import { useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const SECTIONS = [
  {
    title: 'Diagnosing VTS in Clinical Practice',
    items: [
      'VTS definition and diagnostic criteria overview',
      'No official ISUOG guidelines currently exist for VTS diagnosis',
      'VTS informally identified via confirmed absence/death/cessation of one or more multiples following prior ultrasound confirmation',
      'Diagnostic terms that may apply: blighted ovum, IUFD, fetus papyraceous, missed miscarriage, complete miscarriage',
      'Timing considerations: most occur in the first trimester',
      'Chorionicity matters: MCDA vs DCDA risk profiles differ',
      'Recommend documenting twin/multiple gestation in medical record even when only one baby survives',
    ],
  },
  {
    title: 'Communicating VTS to Patients',
    items: [
      'Research shows many patients are not informed of VTS',
      'Communication gaps associated with confusion, grief, and distress',
      'Recommended approach: clear, compassionate disclosure',
      'Avoid assuming what the loss means to the patient',
      'Use trauma-informed language — see IVTSF terminology guidance',
      'Do not use "surviving twin" unless patient uses this term first',
      'Preferred phrasing: "the living twin" / "the baby who continued to develop" / "the remaining baby"',
      'Offer written summary of findings',
      'Connect patient with support resources proactively',
    ],
  },
  {
    title: 'Monitoring Recommendations',
    items: [
      'No universal monitoring protocol for VTS pregnancies currently exists',
      'ISUOG guidance on screening in twin pregnancies with VTS: combination of maternal age, NT measurement, serum free beta-hCG; PAPP-A use after appropriate adjustment',
      'ACOG, ISPD, SMFM recommend interpreting cfDNA results with caution following fetal demise — residual DNA from deceased twin may yield inaccurate results',
      'SMFM provides coding guidance for VTS cases',
      'Individual risk assessment essential — no one-size-fits-all protocol',
      'Consider additional ultrasound monitoring based on: gestational age at loss, chorionicity, and clinical presentation',
    ],
  },
  {
    title: 'Documentation & Coding',
    items: [
      'Document twin/multiple gestation in obstetric records',
      'Document in newborn/pediatric records where possible',
      'SMFM coding guidance available (consult current SMFM resources)',
      'Pathology examination of placenta recommended when possible',
      'cfDNA / NIPT result interpretation note should be flagged in records',
      'Review ICD-10 coding considerations for your jurisdiction',
    ],
  },
  {
    title: 'Referral & Support Resources',
    items: [
      'Refer patients to perinatal bereavement counseling when appropriate',
      'IVTSF resources available for patient handout — see Peer Support and For Families pages',
      'Peer support information available at /knowledge-hub/peer-support',
      'Consider referral to maternal-fetal medicine specialist for complex or later-gestation VTS cases',
      'Consult current guidelines from ISUOG, ACOG, and SMFM for updates to clinical standards',
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
      <div className="relative h-[45vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.literatureHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Prenatal Provider<br />Reference Guide
          </h1>
          <p className="text-white/70 text-lg max-w-xl">Clinical reference for healthcare professionals</p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div
            className="rounded-r-2xl p-5 border-l-4 mb-10"
            style={{ background: '#F0EBF8', borderLeftColor: '#4DB8E8' }}
          >
            <p className="text-[#1A1020]/70 text-sm leading-relaxed">
              Resources on this page are intended for licensed healthcare professionals. The IVTSF does not provide clinical decision support or replace institutional guidelines. Always apply clinical judgment and consult current evidence-based standards.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {SECTIONS.map((section, i) => (
              <div key={i} className="checklist-section">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-4 px-6 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: '#fff',
                    border: `1px solid ${open.has(i) ? 'rgba(77,184,232,0.35)' : 'rgba(139,63,212,0.1)'}`,
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
                    maxHeight: open.has(i) ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <div className="pt-2 pb-4 px-2 flex flex-col gap-2">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 px-4 py-2.5 rounded-lg"
                        style={{ background: '#F0EBF8' }}
                      >
                        <span
                          className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                          style={{ background: '#4DB8E8', marginTop: 6 }}
                        />
                        <span className="text-sm text-[#1A1020]/75 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Print button */}
          <div className="flex justify-center mt-10 print-hide">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #4A1A8C, #6B2DB5)' }}
            >
              <Download size={16} />
              Download Reference Guide
            </button>
          </div>

          {/* Disclaimer footer */}
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
