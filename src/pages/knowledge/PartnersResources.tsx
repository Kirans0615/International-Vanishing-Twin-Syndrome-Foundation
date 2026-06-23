import { Link } from 'react-router-dom'
import { Heart, Sparkles, Stethoscope, ArrowRight } from 'lucide-react'
import { useReveal } from '../../hooks/useInView'
import { HiggsVideo } from '../../components/HiggsVideo'
import { KnowledgeHubSubNav } from '../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../components/Breadcrumb'
import { HIGGSFIELD, FALLBACKS } from '../../assets/higgsfield'

const BASE = import.meta.env.BASE_URL

const PARTNERS = [
  {
    logo: `${BASE}icombo.png`,
    abbr: 'ICOMBO',
    name: 'International Council of Multiple Birth Organizations (ICOMBO)',
    desc: 'ICOMBO is a global, voluntary organization that works to raise awareness of the unique needs of multiple birth individuals (infants, children, and adults) and their families, by promoting their health, education, and welfare. Since 1980, ICOMBO has been bringing together communities from around the world, with the common goal of improving the lives of twins, triplets, and more, and their families.',
  },
  {
    logo: `${BASE}butterfly-project.png`,
    abbr: 'BP',
    name: 'The Butterfly Project',
    desc: 'The Butterfly Project is an initiative designed by a team of neonatologists and researchers to improve hospital recognition and support for families experiencing the loss of one or more babies in a multiple pregnancy. By using the purple butterfly symbols within maternity and neonatal units, the program helps healthcare providers communicate sensitively while acknowledging the surviving baby or babies and the family\'s loss. The project also provides educational resources to support compassionate care and awareness among healthcare staff and the broader community.',
  },
  {
    logo: `${BASE}PWF.png`,
    abbr: 'PWF',
    name: 'PreemieWorld Foundation (PWF)',
    desc: 'PreemieWorld Foundation (PWF), Inc. seeks to create and curate equitable access of underserved populations to patient education, advocacy tools, and outcomes data specific to the preemie population.',
  },
]

const ORGANIZATIONS = [
  {
    logo: `${BASE}multiples.jpeg`,
    abbr: 'MOA',
    name: 'Multiples of America',
    desc: 'Multiples of America (also known as the National Organization of Mothers of Twins Clubs) connects and supports families with twins, triplets, and higher-order multiples through education, resources, and community programs.',
  },
  {
    logo: `${BASE}ispd.jpeg`,
    abbr: 'ISPD',
    name: 'International Society for Prenatal Diagnosis (ISPD)',
    desc: 'The International Society for Prenatal Diagnosis (ISPD) brings together professionals in genetics and fetal care to advance the science and practice of prenatal screening, diagnosis, and therapy worldwide.',
  },
  {
    logo: `${BASE}acog.jpeg`,
    abbr: 'ACOG',
    name: 'American College of Obstetricians and Gynecologists (ACOG)',
    desc: 'The American College of Obstetricians and Gynecologists (ACOG) is a leading professional organization in the United States dedicated to improving women\'s health through education, practice guidelines, advocacy, and support for obstetricians and gynecologists.',
  },
  {
    logo: `${BASE}FIGO.png`,
    abbr: 'FIGO',
    name: 'International Federation of Gynecology and Obstetrics (FIGO)',
    desc: 'The International Federation of Gynecology and Obstetrics (FIGO) is a global organization representing obstetricians and gynecologists, working to improve women\'s health and rights through advocacy, education, and international collaboration.',
  },
  {
    logo: `${BASE}chasing-rainbows.jpeg`,
    abbr: 'CTR',
    name: 'Chasing the Rainbows',
    desc: 'Chasing the Rainbows is a nonprofit offering free trauma-informed therapy with licensed professionals, peer support, and remembrance services to families impacted by infertility, miscarriage, stillbirth, and infant loss.',
  },
  {
    logo: `${BASE}isuog.jpeg`,
    abbr: 'ISUOG',
    name: 'International Society of Ultrasound in Obstetrics and Gynecology (ISUOG)',
    desc: 'The International Society of Ultrasound in Obstetrics and Gynecology (ISUOG) promotes high-quality clinical practice, education, and research in ultrasound and imaging for obstetrics and gynecology across the globe.',
  },
  {
    logo: `${BASE}taps-support-foundation.png`,
    abbr: 'TAPS',
    name: 'TAPS Support Foundation',
    desc: 'The TAPS Support Foundation supports families and advances awareness of Twin Anemia Polycythemia Sequence (TAPS), providing education, resources, and international research collaboration.',
  },
  {
    logo: `${BASE}plida.png`,
    abbr: 'PLIDA',
    name: 'Pregnancy Loss and Infant Death Alliance (PLIDA)',
    desc: 'Pregnancy Loss and Infant Death Alliance (PLIDA) is a professional and advocacy group dedicated to improving bereavement care through education, networking, and evidence-based practice for perinatal and neonatal loss.',
  },
  {
    logo: `${BASE}tprints-baby-loss.jpeg`,
    abbr: 'FBL',
    name: 'Footprints Baby Loss',
    desc: 'Footprints Baby Loss is a UK-based charity that provides resources, remembrance, and community connection to families grieving the loss of twins, triplets, or higher-order multiples.',
  },
  {
    logo: `${BASE}return-to-zero.png`,
    abbr: 'RTZ',
    name: 'Return to Zero (RTZ) H.O.P.E.',
    desc: 'Return to Zero (RTZ) H.O.P.E. is a community of bereaved parents, families, and providers offering inclusive resources and holistic support for anyone whose life has been touched by loss, including infertility, secondary infertility, miscarriage, ending a wanted pregnancy, stillbirth, infant or toddler death, loss through surrogacy or failed adoption.',
  },
  {
    logo: `${BASE}first-candle.png`,
    abbr: 'FC',
    name: 'First Candle',
    desc: 'First Candle is a nonprofit that works to eliminate sudden infant death syndrome (SIDS) and other sleep-related infant deaths while providing bereavement support and resources to affected families.',
  },
  {
    logo: `${BASE}skye-high.jpeg`,
    abbr: 'SHF',
    name: 'The Skye High Foundation',
    desc: 'The Skye High Foundation is dedicated to supporting families who have experienced the loss of a multiple through family fundraising opportunities and awareness initiatives.',
  },
  {
    logo: `${BASE}tears-foundation.jpeg`,
    abbr: 'TEARS',
    name: 'TEARS Foundation',
    desc: 'TEARS Foundation provides emotional support, community, and financial assistance to families after the loss of a child.',
  },
  {
    logo: `${BASE}NILMDTS.jpeg`,
    abbr: 'NILMDTS',
    name: 'Now I Lay Me Down to Sleep (NILMDTS)',
    desc: 'Now I Lay Me Down to Sleep (NILMDTS) is a global nonprofit that mobilizes thousands of trained volunteer photographers and medical affiliates across more than 40 countries and has provided over 80,000 FREE remembrance photography sessions to families experiencing the loss of a baby in hospitals and care settings.',
  },
]

function LogoImg({ src, alt, abbr }: { src: string; alt: string; abbr: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
      onError={(e) => {
        const el = e.target as HTMLImageElement
        el.style.display = 'none'
        const parent = el.parentElement
        if (parent) {
          parent.style.background = 'linear-gradient(135deg, #6B2DB5, #4DB8E8)'
          parent.innerHTML = `<span style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-size:0.75rem;font-family:DM Mono,monospace;font-weight:600;text-align:center;padding:4px">${abbr}</span>`
        }
      }}
    />
  )
}

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function PartnersResources() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[52vh] overflow-hidden">
        <HiggsVideo
          src={HIGGSFIELD.videos.knowledgeHero}
          fallbackGradient={FALLBACKS.darkNebula}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }}
          aria-hidden
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4 tracking-[-0.02em]">
            Trusted Partners &amp; Resources
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            It takes teamwork to make the dream work.
          </p>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      {/* Intro */}
      <section className="bg-[#FAF8FF] px-6 pt-16 pb-4">
        <div className="max-w-4xl mx-auto">
          <RevealDiv>
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              The International Vanishing Twin Syndrome Foundation (IVTSF) recognizes that great things rarely happen alone. It takes teamwork to make the dream work. Please find our partners below in addition to other organizations and resources we proudly support.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#FAF8FF] px-6 pt-12 pb-4">
        <div className="max-w-4xl mx-auto">
          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl">Partners</h2>
          </RevealDiv>

          <div className="flex flex-col gap-6">
            {PARTNERS.map(({ logo, abbr, name, desc }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${Math.min(i + 1, 3)}`}>
                <div
                  className="rounded-2xl overflow-hidden flex flex-col sm:flex-row"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(107,45,181,0.1)',
                    boxShadow: '0 2px 20px rgba(74,26,140,0.06)',
                  }}
                >
                  {/* Logo panel */}
                  <div
                    className="sm:w-48 flex-shrink-0 flex items-center justify-center p-6"
                    style={{ background: '#F8F5FF', borderRight: '1px solid rgba(107,45,181,0.08)' }}
                  >
                    <div className="w-28 h-28 flex items-center justify-center">
                      <LogoImg src={logo} alt={name} abbr={abbr} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-7">
                    <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-3 leading-snug">{name}</h3>
                    <p className="text-sm text-[#1A1020]/65 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations & Resources */}
      <section className="bg-[#FAF8FF] px-6 pt-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <RevealDiv className="mb-4">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl md:text-4xl mb-3">
              Organizations and Resources Supported by the IVTSF
            </h2>
            <p className="text-[#1A1020]/55 text-base leading-relaxed max-w-3xl">
              In addition to our partners above, the following contain valuable resources for families of multiples, clinicians, researchers, and others. For more information on clinical guidelines, see the{' '}
              <Link to="/knowledge-hub/literature" className="underline underline-offset-2" style={{ color: '#6B2DB5' }}>
                IVTSF Literature Repository
              </Link>.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {ORGANIZATIONS.map(({ logo, abbr, name, desc }, i) => (
              <RevealDiv key={name} className={`reveal-delay-${(i % 3) + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{
                    background: '#F0EBF8',
                    border: '1px solid rgba(107,45,181,0.08)',
                  }}
                >
                  {/* Logo */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: '#fff', border: '1px solid rgba(107,45,181,0.1)' }}
                  >
                    <LogoImg src={logo} alt={name} abbr={abbr} />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-base leading-snug mb-2">{name}</h3>
                  <p className="text-sm text-[#1A1020]/60 leading-relaxed flex-1">{desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-section nav */}
      <section className="bg-[#FAF8FF] px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <RevealDiv className="mb-6">
            <h2 className="font-serif font-semibold text-[#1A1020] text-2xl">Explore by Category</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Heart, color: '#C2408C', bg: '#F0EBF8', title: 'For Families & Patients', href: '/knowledge-hub/partners/families' },
              { Icon: Sparkles, color: '#4DB8E8', bg: '#1A0A3D', title: 'Memorialization / Disposal of Remains', href: '/knowledge-hub/partners/memorialization', dark: true },
              { Icon: Stethoscope, color: '#6B2DB5', bg: '#F0EBF8', title: 'For Providers', href: '/knowledge-hub/partners/providers' },
            ].map(({ Icon, color, bg, title, href, dark }) => (
              <RevealDiv key={href}>
                <Link to={href} className="block rounded-2xl p-7 h-full flex flex-col card-hover" style={{ background: bg }}>
                  <Icon size={28} color={color} className="mb-4" aria-hidden />
                  <h3
                    className="font-serif font-semibold text-lg mb-2 flex-1"
                    style={{ color: dark ? 'white' : '#1A1020' }}
                  >
                    {title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color }}>
                    Explore <ArrowRight size={13} />
                  </span>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
