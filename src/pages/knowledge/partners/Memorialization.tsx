import { Link } from 'react-router-dom'
import { Info, AlertCircle, FileText, ArrowRight, Circle } from 'lucide-react'
import { useReveal } from '../../../hooks/useInView'
import { HiggsVideo } from '../../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../../assets/higgsfield'

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function Memorialization() {
  return (
    <>
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
            <div
              className="rounded-2xl border-2 border-amber-300 p-6"
              style={{ background: '#FFFBEB' }}
            >
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

          {/* Purple butterfly */}
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">The Purple Butterfly Symbol</h2>
            <div
              className="rounded-2xl p-8"
              style={{ background: '#F0EBF8' }}
            >
              <p className="text-[#1A1020]/65 text-base leading-relaxed">
                The purple butterfly is the international symbol for twin loss. It helps bring visibility to families who have experienced the loss of a twin or multiple during pregnancy, particularly in healthcare settings. Many hospitals now use a purple butterfly symbol on medical records and room doors to alert staff that a family has experienced a multiple-loss pregnancy — ensuring sensitive, informed care.
              </p>
            </div>
          </RevealDiv>

          {/* Memorial Wind Chime */}
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">Memorial Wind Chime</h2>
            <div
              className="rounded-2xl p-8"
              style={{ background: '#F0EBF8' }}
            >
              <p className="text-[#1A1020]/65 text-base leading-relaxed mb-4">
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

          {/* Hospital & Clinical Memorialization */}
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-6">
              Hospital &amp; Clinical Memorialization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Ask Your Hospital',
                  desc: 'Many hospitals offer bereavement support, memory boxes, and documentation services for families experiencing pregnancy loss. Ask your care team or social worker what is available at your facility.',
                },
                {
                  title: 'Placental Documentation',
                  desc: 'Requesting pathological examination of the placenta following delivery can provide important documentation of the pregnancy. Discuss this with your provider prior to delivery when possible.',
                },
                {
                  title: 'Butterfly Symbol Programs',
                  desc: 'The purple butterfly room symbol program is used in hospitals worldwide to discreetly communicate that a family has experienced a multiple-loss pregnancy. Ask whether your hospital participates.',
                },
              ].map(card => (
                <div key={card.title} className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-3">{card.title}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Disposal of Remains */}
          <RevealDiv className="mb-12">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">
              Disposal of Remains
            </h2>

            {/* Amber warning */}
            <div
              className="rounded-xl border border-amber-200 p-5 mb-6"
              style={{ background: '#FFFBEB' }}
            >
              <div className="flex items-start gap-3">
                <Info size={18} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
                <p className="text-amber-700 text-sm leading-relaxed">
                  Information about the disposal of fetal remains varies by jurisdiction and gestational age. This section provides general guidance only. Please consult your healthcare provider and local regulations.
                </p>
              </div>
            </div>

            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-6">
              When a twin or multiple is lost during pregnancy, the remains may be resorbed naturally (most common in early VTS), or in some cases, physical remains may be present at delivery (fetus papyraceous). Families may have options for how remains are handled, depending on gestational age, clinical setting, and regional laws.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl p-6" style={{ background: '#F0EBF8' }}>
                <Circle size={24} color="#6B2DB5" className="mb-4" aria-hidden />
                <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">Early First Trimester</h3>
                <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                  In most early VTS cases, complete resorption occurs naturally. No physical remains are typically present and no decisions regarding disposal are required.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: '#F0EBF8' }}>
                <Info size={24} color="#4DB8E8" className="mb-4" aria-hidden />
                <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">Later in Pregnancy</h3>
                <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                  When loss occurs in the second or third trimester, visible remains may be present. Hospitals typically provide guidance on options for families, which may include burial, cremation, or hospital disposition depending on local regulations and gestational age.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: '#F0EBF8' }}>
                <FileText size={24} color="#C2408C" className="mb-4" aria-hidden />
                <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">Documentation</h3>
                <p className="text-sm text-[#1A1020]/60 leading-relaxed">
                  Requesting documentation of the loss and any pathology findings can be an important step for families seeking to honor and acknowledge the pregnancy. Ask your provider or hospital.
                </p>
              </div>
            </div>

            {/* Legal note */}
            <div
              className="rounded-xl p-5 mt-6 flex items-start gap-3"
              style={{ background: '#F0EBF8' }}
            >
              <AlertCircle size={20} color="#C2408C" className="flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-[#1A1020]/65 leading-relaxed">
                Laws regarding fetal remains vary significantly by country, state/province, and gestational age. The IVTSF does not provide legal advice. Please consult your healthcare provider, hospital social worker, or a local legal professional for guidance specific to your situation.
              </p>
            </div>
          </RevealDiv>

          {/* Stories link */}
          <RevealDiv>
            <div className="rounded-2xl p-8 text-center" style={{ background: '#1A0A3D' }}>
              <h3 className="font-serif font-semibold text-white text-2xl mb-3">
                Stories of Multiple Loss
              </h3>
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
