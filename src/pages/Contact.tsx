import { AlertTriangle, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useInView';
import { HiggsVideo } from '../components/HiggsVideo';
import { HIGGSFIELD } from '../assets/higgsfield';

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/international-vanishing-twin-syndrome-foundation/',
    color: '#0A66C2',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/internationalvtsfoundation',
    color: '#E1306C',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576897190142',
    color: '#1877F2',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

function RevealDiv({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`}>{children}</div>;
}

export function Contact() {

  return (
    <>
      <div className="relative h-[45vh] overflow-hidden">
        <HiggsVideo src={HIGGSFIELD.videos.contactHero} fallbackGradient="linear-gradient(135deg, #2D1060 0%, #4A1A8C 60%, #9B2D6E 100%)" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,4,28,0.85) 0%, rgba(10,4,28,0.3) 100%)' }} aria-hidden />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif font-semibold text-white text-5xl mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">We are here to listen, collaborate, and help connect you with the right resources.</p>
        </div>
      </div>

      {/* PROMINENT CRISIS DISCLAIMER */}
      <section className="px-6 py-6">
        <div className="max-w-4xl mx-auto rounded-2xl border-2 border-amber-400 p-6" style={{ background: '#FFFBEB' }}>
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h2 className="font-semibold text-amber-800 text-base mb-2">Important: IVTSF Is Not a Crisis Service</h2>
              <p className="text-amber-700 text-sm leading-relaxed mb-3">
                IVTSF cannot provide emergency counseling, crisis support, or immediate mental health assistance. If you or someone you know is experiencing a mental health crisis, suicidal ideation, or thoughts of self-harm, please contact a crisis service immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: '#D97706' }}
                >
                  <Phone size={13} />
                  988 Suicide &amp; Crisis Lifeline
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-amber-800 text-sm font-semibold border border-amber-400 hover:bg-amber-50 transition-colors"
                >
                  <ExternalLink size={13} />
                  International Crisis Lines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF] px-6 pb-20 pt-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <RevealDiv className="reveal-left mb-8">
              <h2 className="font-serif font-semibold text-[#1A1020] text-2xl mb-4">Get in Touch</h2>
              <p className="text-[#1A1020]/55 text-sm leading-relaxed">
                We welcome inquiries from families, researchers, healthcare providers, journalists, and collaborators. We do our best to respond within 5 business days.
              </p>
            </RevealDiv>

            <RevealDiv className="reveal-left mb-6 reveal-delay-1">
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: '#F0EBF8' }}>
                <Mail size={20} color="#6B2DB5" className="flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-xs font-medium text-[#6B2DB5] uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:contact@vanishingtwinsyndrome.org" className="text-sm text-[#1A1020] hover:text-[#6B2DB5] transition-colors break-all">
                    contact@vanishingtwinsyndrome.org
                  </a>
                </div>
              </div>
            </RevealDiv>

            <RevealDiv className="reveal-left mb-6 reveal-delay-2">
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: '#F0EBF8' }}>
                <MapPin size={20} color="#C2408C" className="flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-xs font-medium text-[#C2408C] uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm text-[#1A1020]">United States (virtual-first organization)</p>
                </div>
              </div>
            </RevealDiv>

            <RevealDiv className="reveal-left reveal-delay-3">
              <div className="rounded-xl p-5 border border-[#8B3FD4]/15" style={{ background: '#F0EBF8' }}>
                <p className="text-xs text-[#1A1020]/45 leading-relaxed mb-4">
                  For media inquiries, research collaboration, or partnership opportunities, please include a brief description of your organization and the nature of your request.
                </p>
                <div className="flex items-center gap-3">
                  {SOCIALS.map(({ label, href, svg, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0"
                      style={{ background: color }}
                    >
                      {svg}
                    </a>
                  ))}
                  <span className="text-xs text-[#1A1020]/45 leading-snug">Follow us</span>
                </div>
              </div>
            </RevealDiv>
          </div>

          {/* Form */}
          <RevealDiv className="lg:col-span-3 reveal-right">
            <div className="rounded-2xl overflow-hidden" style={{ background: '#F0EBF8' }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXzVy1Q-QK2kVq25mBdk4P4RWAFzeYX-gYNY_tX--lkz3H9A/viewform?embedded=true"
                title="IVTSF Contact Form"
                width="100%"
                height="780"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="block"
              >
                Loading…
              </iframe>
            </div>
          </RevealDiv>
        </div>
      </section>
    </>
  );
}
