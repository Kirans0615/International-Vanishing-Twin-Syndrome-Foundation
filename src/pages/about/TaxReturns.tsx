import { FileText, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { ParticleField } from '../../components/ParticleField';
import { AboutSubNav } from '../../components/AboutSubNav';

const DRIVE_VIEW_URL = 'https://drive.google.com/file/d/1fAVKPjvd8wf0o6yXtMZJpSIG0XX9CU4h/view';
const DRIVE_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1fAVKPjvd8wf0o6yXtMZJpSIG0XX9CU4h';

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function TaxReturns() {
  return (
    <>
      <div
        className="relative h-[35vh] overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ background: 'linear-gradient(135deg, #4A1A8C 0%, #1A0A3D 100%)' }}
      >
        <ParticleField count={20} />
        <h1 className="relative z-10 font-serif font-semibold text-white text-5xl mb-4">Financial Accountability</h1>
        <p className="relative z-10 text-white/70 text-lg">Transparency is foundational to our mission.</p>
      </div>

      <AboutSubNav />

      <section className="bg-[#FAF8FF] px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <RevealDiv className="mb-10">
            <p className="text-[#1A1020]/65 text-lg leading-relaxed mb-5">
              IVTSF is dedicated not only to advancing research and support in vanishing twin syndrome and multifetal loss, but also to maintaining the highest standards of financial accountability. Our annual Form 990-PF filings reflect how funds are allocated to research initiatives, educational resources, patient-provider tools, and organizational development. We encourage community members and supporters to review these filings as part of our ongoing commitment to openness and ethical governance.
            </p>
            <p className="text-[#1A1020]/55 text-base leading-relaxed">
              As a 501(c)(3) public charity, the IVTSF files Form 990-PF annually with the IRS. These documents are available for public inspection in accordance with federal law.
            </p>
          </RevealDiv>

          <RevealDiv className="mb-4 reveal-delay-1">
            <div className="rounded-2xl p-8" style={{ background: '#F0EBF8', border: '1px solid rgba(107,45,181,0.15)' }}>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(107,45,181,0.12)' }}
                >
                  <FileText size={24} color="#6B2DB5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl mb-1">Form 990-PF — 2025</h3>
                  <p className="text-sm text-[#1A1020]/50">Annual Filing — Internal Revenue Service</p>
                  <p className="text-xs text-[#1A1020]/40 mt-1">Available for public inspection per IRC §6104</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={DRIVE_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110"
                  style={{ background: '#4A1A8C' }}
                  aria-label="View 2025 Form 990-PF document"
                >
                  <ExternalLink size={14} />
                  View Document
                </a>
                <a
                  href={DRIVE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-95"
                  style={{ background: 'rgba(74,26,140,0.1)', color: '#4A1A8C', border: '1px solid rgba(74,26,140,0.25)' }}
                  aria-label="Download 2025 Form 990-PF"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </RevealDiv>

          <RevealDiv className="reveal-delay-2">
            <p className="text-sm text-[#1A1020]/50 italic mt-4">
              Additional years will be posted as filings become available.
            </p>
          </RevealDiv>

          <RevealDiv className="mt-12 reveal-delay-3">
            <div
              className="rounded-2xl p-8 border flex gap-4 items-start"
              style={{ background: 'rgba(74,26,140,0.05)', borderColor: 'rgba(107,45,181,0.2)' }}
            >
              <ShieldCheck size={24} color="#6B2DB5" className="flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-serif font-semibold text-[#1A1020] text-lg mb-2">Our Transparency Pledge</h3>
                <p className="text-sm text-[#1A1020]/65 leading-relaxed">
                  The IVTSF is committed to full financial transparency. We operate as lean as possible so that donations go directly toward our research, education, and advocacy mission. All board members and leadership serve in volunteer capacities.
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
