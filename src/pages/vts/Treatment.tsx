import { AlertTriangle, ExternalLink, Heart } from 'lucide-react';
import { VideoBackground } from '../../components/VideoBackground';
import { useReveal } from '../../hooks/useInView';

// HIGGSFIELD ASSET
// Prompt: "Warm gentle light filtering through purple and white fabric, soft and healing, slow drift, cinematic, emotional warmth, seamless loop"
// Replace URL: https://d8j0ntlcm91z4.cloudfront.net/[ID].mp4
const TREATMENT_VIDEO: string | undefined = undefined;

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Treatment() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden rounded-b-3xl">
        <VideoBackground
          src={TREATMENT_VIDEO}
          className="absolute inset-0 w-full h-full"
          fallbackStyle={{ background: 'radial-gradient(ellipse at center, #4A1A8C 0%, #1A0A3D 60%, #0D0520 100%)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.9) 0%, rgba(10,4,28,0.4) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Treatment of VTS</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Understanding the clinical and supportive approaches available.</p>
        </div>
      </div>

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="font-serif italic text-[#6B2DB5] text-2xl text-center leading-relaxed">
              &ldquo;One size does not fit all. There is currently no universal treatment protocol for VTS.&rdquo;
            </p>
          </RevealDiv>

          <RevealDiv className="mb-8">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">No Universal Treatment</h2>
            <p className="text-[#1A1020]/65 text-base leading-relaxed mb-4">
              In most cases of VTS, particularly when the loss occurs early in the first trimester, no clinical treatment is needed. The surviving fetus often continues to develop normally. The primary care needs may be emotional and informational rather than medical.
            </p>
            <p className="text-[#1A1020]/65 text-base leading-relaxed">
              The absence of a universal protocol reflects both the variability of VTS and the significant gap in research on optimal management. IVTSF advocates for expanded research into these questions.
            </p>
          </RevealDiv>

          <RevealDiv className="mb-8 reveal-delay-1">
            <div className="rounded-2xl p-7 border-l-4 border-[#C2408C]" style={{ background: '#F0EBF8' }}>
              <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-3">When Treatment May Be Needed</h3>
              <ul className="space-y-3">
                {[
                  'When the surviving twin shows signs of compromise (growth restriction, cardiac abnormalities)',
                  'When the loss occurs after 20 weeks and monitoring is required',
                  'When maternal complications arise',
                  'When psychological support for grief and loss is needed',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1020]/65">
                    <Heart size={14} color="#C2408C" className="mt-0.5 flex-shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealDiv>

          <RevealDiv className="mb-8 reveal-delay-2">
            <h2 className="font-serif font-semibold text-[#1A1020] text-3xl mb-4">ISUOG Recommendations</h2>
            <blockquote className="border-l-4 border-[#4DB8E8] pl-6 py-2">
              <p className="text-[#1A1020]/65 text-base leading-relaxed italic mb-3">
                &ldquo;In monochorionic twin pregnancies complicated by single fetal demise after 14 weeks, monitoring with MRI and neurodevelopmental follow-up of the surviving twin is recommended. Management should be individualized based on gestational age, chorionicity, and clinical context.&rdquo;
              </p>
              <cite className="text-sm text-[#4DB8E8] not-italic font-medium">— ISUOG Clinical Standards Committee</cite>
            </blockquote>
          </RevealDiv>

          <RevealDiv className="mb-8 reveal-delay-3">
            <div className="rounded-2xl p-7 border-2" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
              <AlertTriangle size={20} color="#D97706" className="mb-3" aria-hidden />
              <h3 className="font-semibold text-[#92400E] text-base mb-2">cfDNA Screening Caution</h3>
              <p className="text-[#92400E]/80 text-sm leading-relaxed">
                ACOG, ISPD, and SMFM caution that cell-free DNA (cfDNA) results may be unreliable in pregnancies affected by VTS. Providers should use confirmatory diagnostic testing when cfDNA results appear inconsistent with other findings, as the vanished twin's DNA may affect screening accuracy.
              </p>
            </div>
          </RevealDiv>

          <RevealDiv className="mb-12 reveal-delay-4">
            <div className="rounded-xl p-5 border border-[#8B3FD4]/20" style={{ background: '#F0EBF8' }}>
              <p className="text-sm text-[#1A1020]/65 leading-relaxed">
                <strong className="text-[#1A1020]">SMFM Coding Guidance:</strong> The Society for Maternal-Fetal Medicine has published guidance on the appropriate documentation and coding of VTS in medical records. Consistent coding practices support accurate epidemiological data and improved future research.
                <a
                  href="https://www.smfm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 ml-2 text-[#6B2DB5] hover:underline"
                >
                  SMFM Resources <ExternalLink size={12} />
                </a>
              </p>
            </div>
          </RevealDiv>

          <RevealDiv>
            <div className="text-center">
              <p className="text-sm text-[#1A1020]/55 mb-4 leading-relaxed">
                Every pregnancy affected by VTS is unique. Speak with your healthcare provider about options specific to your situation.
              </p>
              <a
                href="https://www.smfm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #6B2DB5, #C2408C)' }}
              >
                <ExternalLink size={14} />
                SMFM Provider Resources
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
