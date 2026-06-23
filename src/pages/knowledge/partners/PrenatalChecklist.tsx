import { useState } from 'react'
import { CheckSquare, ChevronDown, Download } from 'lucide-react'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

const SECTIONS = [
  {
    title: 'Understanding Your Diagnosis',
    items: [
      'What exactly happened in my pregnancy?',
      'Was a vanishing twin or multiple confirmed on ultrasound?',
      'At what gestational age did the loss occur?',
      'What type of multiples were we expecting?',
      'Was this monochorionic or dichorionic?',
      'What does this mean for my current pregnancy?',
      'Will this be documented in my medical record?',
      'Should twin/multiple gestation be noted in my file?',
    ],
  },
  {
    title: 'Monitoring & Ongoing Care',
    items: [
      'Do I need additional ultrasounds or monitoring?',
      'How often should I be seen going forward?',
      'Are there additional risks for the surviving baby?',
      'Should I have any additional prenatal testing?',
      'Is my cfDNA or NIPT result affected by the vanishing twin?',
      'How will you interpret my prenatal screening results?',
      'Are there signs or symptoms to watch for at home?',
    ],
  },
  {
    title: 'About My Baby',
    items: [
      'Is my baby growing normally?',
      'Are there developmental concerns related to the vanishing twin?',
      "Should my baby's twin history be in their pediatric records?",
      'Are there long-term health considerations for my pediatrician?',
      'Are there genetic or epigenetic considerations?',
    ],
  },
  {
    title: 'Support & Resources',
    items: [
      'Can you refer me to a perinatal counselor or social worker?',
      'Are there support groups for families who experienced this?',
      'How do I talk to other children about what happened?',
      'Is it normal to feel grief even if my pregnancy is progressing?',
      'Can you recommend reputable organizations or resources?',
    ],
  },
  {
    title: 'Documentation & Records',
    items: [
      'Can I get a written summary of what was found?',
      'Will placental pathology be examined after delivery?',
      'How do I request copies of my ultrasound images and records?',
      'Who do I contact if I have questions after today?',
      "Can you note the twin pregnancy in my newborn's records?",
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
          <h1 className="font-serif font-semibold text-white text-4xl md:text-5xl mb-4">
            Prenatal Patient Question Checklist
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Questions to discuss with your healthcare provider.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      <section className="bg-[#FAF8FF] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Intro callout */}
          <div
            className="rounded-r-2xl p-6 mb-10 border-l-4"
            style={{ background: '#F0EBF8', borderLeftColor: '#6B2DB5' }}
          >
            <p className="text-[#1A1020]/70 text-sm leading-relaxed">
              This checklist supports patients in having informed conversations with their licensed healthcare providers. It is not a substitute for medical advice. Speak with your care team about questions specific to your circumstances.
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
                    border: `1px solid ${open.has(i) ? 'rgba(139,63,212,0.3)' : 'rgba(139,63,212,0.1)'}`,
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
                        <CheckSquare
                          size={16}
                          color="#6B2DB5"
                          className="flex-shrink-0 mt-0.5"
                          aria-hidden
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
              style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
            >
              <Download size={16} />
              Download / Print Checklist
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
