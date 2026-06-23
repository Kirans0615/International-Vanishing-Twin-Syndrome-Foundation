import { useState } from 'react'
import { CheckSquare, ChevronDown, Download, ExternalLink } from 'lucide-react'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const DRIVE_VIEW = 'https://drive.google.com/file/u/0/d/1-Mhy4hf2SQ_Yray50-noE6WMlAt2Qbkz/view'
const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1-Mhy4hf2SQ_Yray50-noE6WMlAt2Qbkz'

interface ChecklistItem {
  question: string
  note: string
}

const SECTIONS: { title: string; items: ChecklistItem[] }[] = [
  {
    title: 'Pregnancy Details',
    items: [
      {
        question: 'Was my pregnancy monochorionic (shared placenta) or dichorionic (separate placentas)?',
        note: 'Chorionicity affects how closely your babies shared blood flow. This can influence risks for the surviving twin or twins (in cases of higher-order pregnancies).',
      },
      {
        question: 'At what stage of pregnancy did the loss occur, and why is the timing important?',
        note: 'Early losses are often absorbed without harm before 13 weeks gestation. Later losses may require additional monitoring.',
      },
    ],
  },
  {
    title: 'Understanding the Loss',
    items: [
      {
        question: 'Is it possible to know what caused the death of the twin(s) in utero?',
        note: 'Typically, the reason is unknown, but largely thought to occur as a result of chromosomal abnormalities. Ask your care provider if it is possible to discern the cause of death/cessation of development.',
      },
      {
        question: 'Does this affect the health or development of the surviving twin(s)?',
        note: 'Your provider can explain any risks based on timing, chorionicity, your pregnancy history, and other factors (e.g., maternal age, etc.).',
      },
    ],
  },
  {
    title: 'Monitoring & Testing',
    items: [
      {
        question: 'How should my pregnancy be monitored going forward?',
        note: 'Ask about ultrasounds, lab tests, and checkups to ensure you and your baby(-ies) are safe. The need for monitoring will vary from patient to patient, based on individual circumstances. Serial growth ultrasounds or antenatal testing (e.g., fetal heart rate tracings/non-stress tests or ultrasound assessments) may especially be recommended in the 3rd trimester.',
      },
      {
        question: 'Could VTS affect prenatal screening like Cell-free DNA (cfDNA) screening, also known as non-invasive prenatal testing (NIPT)?',
        note: 'The presence of a vanished twin can sometimes cause confusing test results. Your provider may suggest repeating or confirming tests.',
      },
    ],
  },
  {
    title: 'Risks & Care Plan',
    items: [
      {
        question: 'What are the risks for me (bleeding, infection, placental issues)?',
        note: 'Your provider may be able to explain what to watch for. Symptoms will vary based on patient anatomy, timing of death in gestation, cause of death, and other factors.',
      },
      {
        question: 'Are there special risks for my baby based on chorionicity and timing of loss?',
        note: 'Your provider may adjust your care plan if the loss happened later or in a shared placenta pregnancy. Monochorionic pregnancies usually face the highest risks and require more extensive prenatal and postnatal care.',
      },
      {
        question: 'Will this change my delivery plan?',
        note: 'In most cases, no, especially with VTS losses occurring in the first trimester — but in some situations, extra planning may be needed.',
      },
      {
        question: 'How could the timing of my VTS case impact birth/death certificates at delivery, as well as the options for memorialization/disposition of any fetal remains that may be present at the time of delivery?',
        note: 'In most VTS cases, no fetal remains will be present at birth as full resorption typically happens by the end of the first trimester. Speak to your care provider about what you may be able to expect and what your options may be, given your individual circumstances.',
      },
    ],
  },
  {
    title: 'Emotional & Supportive Care',
    items: [
      {
        question: 'What resources are available for emotional support after a loss of multiples (i.e., twins, triplets, and higher-order)?',
        note: 'Many parents feel grief even while celebrating the surviving baby(-ies). Ask your provider what resources they may have available, or see our Resources and Partners page.',
      },
      {
        question: 'Can you refer me or my loved ones to counseling or support groups?',
        note: 'If desired, consider asking for referrals to bereavement counselors, peer groups (e.g., for mothers, fathers, surrogates, etc.), or organizations focused on twin and multiple loss.',
      },
    ],
  },
]

export function PrenatalChecklist() {
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
            Prenatal Patient<br />Question Checklist
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Questions to ask your prenatal provider(s) about Vanishing Twin Syndrome.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Medical disclaimer callout */}
          <div
            className="rounded-r-2xl p-6 mb-8 border-l-4"
            style={{ background: '#F0EBF8', borderLeftColor: '#6B2DB5' }}
          >
            <p className="text-[#1A1020]/70 text-sm leading-relaxed">
              This checklist supports patients in having informed conversations with their licensed healthcare providers. It is not a substitute for medical advice. Speak with your care team about questions specific to your circumstances.
            </p>
          </div>

          {/* Intro */}
          <p className="text-[#1A1020]/65 text-base leading-relaxed mb-6">
            The questions below are designed to help patients and families talk with their healthcare providers and understand what VTS may mean for them and their baby. These questions are based on current research that suggests a need for families and providers to know <strong className="text-[#1A1020]/80">1) chorionicity</strong>, <strong className="text-[#1A1020]/80">2) timing of death in gestation</strong>, if possible, and <strong className="text-[#1A1020]/80">3) cause of death/cessation of development in gestation</strong>, if possible. These 3 pieces of information can help determine potential risks for pregnant individuals and surviving children of VTS pregnancies, and may be helpful for navigating the health profiles of VTS survivors as they navigate their health profiles in the postnatal period, pediatrics, and into adulthood.
          </p>

          {/* Download / View buttons */}
          <div className="flex flex-wrap gap-3 mb-10 print-hide">
            <a
              href={DRIVE_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
              style={{ background: '#4A1A8C' }}
            >
              <ExternalLink size={14} />
              View Checklist
            </a>
            <a
              href={DRIVE_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:brightness-95"
              style={{ background: 'rgba(74,26,140,0.1)', color: '#4A1A8C', border: '1px solid rgba(74,26,140,0.25)' }}
            >
              <Download size={14} />
              Download PDF
            </a>
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
                    border: `1px solid ${open.has(i) ? 'rgba(139,63,212,0.3)' : 'rgba(139,63,212,0.1)'}`,
                    boxShadow: open.has(i) ? '0 2px 12px rgba(107,45,181,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: 'DM Mono, monospace', color: '#6B2DB5' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif font-semibold text-[#1A1020] text-base">
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="#6B2DB5"
                    style={{
                      transform: open.has(i) ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                <div
                  style={{
                    maxHeight: open.has(i) ? '1200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <div className="pt-2 pb-4 px-2 flex flex-col gap-2">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex flex-col gap-2 px-4 py-4 rounded-xl"
                        style={{ background: '#F0EBF8', border: '1px solid rgba(139,63,212,0.08)' }}
                      >
                        {/* Question */}
                        <div className="flex items-start gap-3">
                          <CheckSquare
                            size={16}
                            color="#6B2DB5"
                            className="flex-shrink-0 mt-0.5"
                            aria-hidden
                          />
                          <span className="text-sm font-semibold text-[#1A1020]/85 leading-relaxed">
                            {item.question}
                          </span>
                        </div>
                        {/* Explanatory note */}
                        <div
                          className="flex items-start gap-2 pl-7 pt-1"
                          style={{ borderTop: '1px solid rgba(107,45,181,0.1)' }}
                        >
                          <span
                            className="text-xs font-bold flex-shrink-0 mt-0.5"
                            style={{ color: '#8B3FD4' }}
                            aria-hidden
                          >
                            →
                          </span>
                          <span className="text-xs text-[#1A1020]/60 leading-relaxed italic">
                            {item.note}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom action buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 print-hide">
            <a
              href={DRIVE_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
            >
              <ExternalLink size={16} />
              View Full Checklist
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

          {/* Disclaimer */}
          <p className="text-center text-xs text-[#1A1020]/40 italic mt-8 leading-relaxed">
            © 2025–2026 International Vanishing Twin Syndrome Foundation. May be printed for personal or educational use with proper attribution. Not a substitute for medical advice.{' '}
            <a href="mailto:contact@vanishingtwinsyndrome.org" className="underline">
              contact@vanishingtwinsyndrome.org
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
