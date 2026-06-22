import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';

const LOGO_TRANSPARENT = `${import.meta.env.BASE_URL}Logo Without Background.png`;

export function Footer() {
  return (
    <footer style={{ background: '#0D0520' }}>
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(to right, #6B2DB5, #4DB8E8, #C2408C)' }} />
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1.2fr_1fr]">
          <div>
            <Link to="/" aria-label="IVTSF home" className="inline-block mb-5 rounded-2xl overflow-hidden" style={{ background: 'rgba(250,248,255,0.97)', padding: '10px 16px' }}>
              <img src={LOGO_TRANSPARENT} alt="IVTSF" style={{ height: 72, width: 'auto', display: 'block' }} />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs italic mb-5" style={{ fontFamily: 'Lora, serif' }}>
              &ldquo;A world where VTS is recognized, supported, and accurately communicated.&rdquo;
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/vanishingtwinsyndromefoundation', label: 'Facebook' },
                { href: 'https://www.instagram.com/vanishingtwinsyndrome', label: 'Instagram' },
                { href: 'https://www.linkedin.com/company/ivtsf', label: 'LinkedIn' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white/80 hover:border-white/30 hover:bg-white/5 transition-all text-[10px] font-bold"
                >
                  {label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Our Team', href: '/about/team' },
                { label: 'Our Ethics', href: '/about/ethics' },
                { label: 'Tax Returns', href: '/about/tax-returns' },
                { label: 'Newsletters', href: '/about/newsletters' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'What is VTS', href: '/what-is-vts' },
                { label: 'Diagnosing VTS', href: '/what-is-vts/diagnosing' },
                { label: 'Treatment', href: '/what-is-vts/treatment' },
                { label: 'Key Terms', href: '/what-is-vts/key-terms' },
                { label: 'Knowledge Hub', href: '/knowledge-hub' },
                { label: 'Literature', href: '/knowledge-hub/literature' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Connect</h4>
            <a
              href="mailto:contact@vanishingtwinsyndrome.org"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#4DB8E8] transition-colors mb-3"
            >
              <Mail size={14} aria-hidden />
              contact@vanishingtwinsyndrome.org
            </a>
            <a
              href="https://vanishingtwinsyndrome.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#4DB8E8] transition-colors mb-6"
            >
              <Globe size={14} aria-hidden />
              vanishingtwinsyndrome.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/25">
          <p>&copy; 2025&ndash;2026 International Vanishing Twin Syndrome Foundation. All rights reserved.</p>
          <p>501(c)(3) Nonprofit Organization</p>
        </div>
      </div>
    </footer>
  );
}
