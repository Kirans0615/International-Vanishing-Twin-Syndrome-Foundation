import { Link } from 'react-router-dom'
import { AlertTriangle, Heart, ArrowRight } from 'lucide-react'
import { useReveal } from '../../hooks/useInView'
import { HiggsVideo } from '../../components/HiggsVideo'
import { ParticleField } from '../../components/ParticleField'
import { KnowledgeHubSubNav } from '../../components/KnowledgeHubSubNav'
import { Breadcrumb } from '../../components/Breadcrumb'
import { HIGGSFIELD } from '../../assets/higgsfield'

const STORIES = [
  {
    quote: 'We had no idea we were ever carrying twins until my daughter was born and the doctor mentioned it offhand. I grieved something I didn\'t know I had lost, and I still grieve today — years later.',
    name: 'A VTS parent',
    context: 'Loss discovered at delivery',
    color: '#C2408C',
  },
  {
    quote: 'The ultrasound technician said "you lost one" and moved on without another word. I didn\'t know what I was supposed to feel. IVTSF helped me understand that what I felt was real and that my baby had a name — even if they were never born.',
    name: 'A VTS parent',
    context: 'First trimester loss',
    color: '#6B2DB5',
  },
  {
    quote: 'As a surviving twin, I always felt something was missing. Finding out about my cotwin at age 32 changed everything for me. The grief was real, even across decades.',
    name: 'An adult cotwin survivor',
    context: 'Late discovery of VTS',
    color: '#4DB8E8',
  },
  {
    quote: 'We lost one of our boys at 24 weeks. There were no words for what that meant — to grieve one child while celebrating the other. This community helped me see I wasn\'t alone.',
    name: 'A VTS parent',
    context: 'Second trimester loss',
    color: '#8B3FD4',
  },
]

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal()
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>
}

export function Stories() {
  return (
    <>
      <div className="relative h-[40vh] overflow-hidden">
        <HiggsVideo src={HIGGSFIELD.videos.storiesHero} fallbackGradient="linear-gradient(135deg, #2D1060 0%, #9B2D6E 60%, #4A1A8C 100%)" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.85) 0%, rgba(10,4,28,0.3) 100%)' }} aria-hidden />
        <ParticleField count={25} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Stories of Multiple Loss</h1>
          <p className="text-white/70 text-lg max-w-xl mb-5">Personal narratives shared with permission, honoring diverse experiences.</p>
          <Link
            to="/knowledge-hub/stories/share"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold border border-white/30 hover:border-white/60 transition-all"
          >
            Share Your Story <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <KnowledgeHubSubNav />
      <Breadcrumb />

      {/* SENSITIVE CONTENT NOTICE */}
      <section className="px-6 py-6">
        <div className="max-w-3xl mx-auto rounded-2xl border-2 border-amber-400 p-6" style={{ background: '#FFFBEB' }}>
          <div className="flex items-start gap-4">
            <AlertTriangle size={22} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h2 className="font-semibold text-amber-800 text-base mb-2">Sensitive Content Notice</h2>
              <p className="text-amber-700 text-sm leading-relaxed">
                This page contains personal accounts of pregnancy loss, infant loss, and grief. These stories may be emotionally difficult to read. Please care for yourself as you engage with this content. If you are experiencing a mental health crisis, please call or text <strong>988</strong> (US) or visit{' '}
                <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="underline">findahelpline.com</a> for international resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20 pt-8">
        <div className="max-w-3xl mx-auto">
          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              Each story on this page has been shared with the explicit permission of the individual. Names are withheld or given in general terms to protect privacy. These accounts represent a fraction of the many diverse experiences of VTS — no two are alike.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-8 mb-16">
            {STORIES.map(({ quote, name, context, color }, i) => (
              <RevealDiv key={i} className={`reveal-delay-${(i % 4) + 1}`}>
                <div className="rounded-2xl p-8 border-l-4" style={{ background: '#F0EBF8', borderLeftColor: color }}>
                  <blockquote>
                    <p className="font-serif italic text-[#1A1020] text-lg leading-relaxed mb-5">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <footer>
                      <cite className="not-italic">
                        <span className="block font-semibold text-sm" style={{ color }}>{name}</span>
                        <span className="block text-xs text-[#1A1020]/50 mt-0.5">{context}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Share Your Story section */}
          <RevealDiv className="mb-10">
            <div className="rounded-2xl p-8" style={{ background: '#1A0A3D' }}>
              <Heart size={24} color="#C2408C" className="mb-4" aria-hidden />
              <h2 className="font-serif font-semibold text-white text-2xl mb-3">Share Your Story</h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">
                If you would like to share your experience with VTS — as a parent, surviving twin, provider, or loved one — we would be honored to receive it. All submissions are reviewed with care. You will never be asked to share more than you are comfortable with, and your privacy will always be protected.
              </p>
              <Link
                to="/knowledge-hub/stories/share"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                Submit Your Story <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>

          {/* Your Story Matters CTA band */}
          <RevealDiv className="mb-10">
            <div
              className="rounded-2xl p-12 text-center"
              style={{ background: 'linear-gradient(to right, #4A1A8C, #9B2D6E)' }}
            >
              <h2 className="font-serif font-semibold text-white text-4xl mb-4">Your Story Matters</h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Sharing your experience can help others feel less alone — and helps IVTSF understand the diverse ways VTS affects families.
              </p>
              <Link
                to="/knowledge-hub/stories/share"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-[#F0EBF8]"
                style={{ background: 'white', color: '#4A1A8C' }}
              >
                Share Your Story <ArrowRight size={14} />
              </Link>
            </div>
          </RevealDiv>

          <RevealDiv>
            <div className="rounded-xl p-5 border border-[#8B3FD4]/15" style={{ background: '#F0EBF8' }}>
              <p className="text-xs text-[#1A1020]/45 leading-relaxed text-center">
                Stories are shared for community support and awareness only. IVTSF does not provide clinical, legal, or therapeutic advice. If you are in need of professional support, please contact a licensed mental health provider.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  )
}
