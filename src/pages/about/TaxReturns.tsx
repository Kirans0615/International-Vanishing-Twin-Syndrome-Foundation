import { FileText, ShieldCheck } from 'lucide-react';
import { useReveal } from '../../hooks/useInView';
import { ParticleField } from '../../components/ParticleField';
import { AboutSubNav } from '../../components/AboutSubNav';

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
            <p className="text-[#1A1020]/65 text-lg leading-relaxed">
              As a 501(c)(3) public charity, the IVTSF files Form 990-PF annually with the IRS. These documents are available for public inspection in accordance with federal law and our commitment to organizational transparency.
            </p>
          </RevealDiv>

          <RevealDiv className="mb-4 reveal-delay-1">
            <div className="rounded-2xl p-8 flex items-center justify-between flex-wrap gap-4" style={{ background: '#F0EBF8' }}>
              <div className="flex items-center gap-4">
                <FileText size={32} color="#6B2DB5" aria-hidden />
                <div>
                  <h3 className="font-serif font-semibold text-[#1A1020] text-xl">Form 990-PF — 2025</h3>
                  <p className="text-sm text-[#1A1020]/50">Annual Filing — Internal Revenue Service</p>
                </div>
              </div>
              <a
                href="#"
                className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:brightness-110"
                style={{ background: '#4A1A8C' }}
                aria-label="View 2025 Form 990-PF document"
              >
                View Document
              </a>
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
