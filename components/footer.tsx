import Link from "next/link";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/components/nav-links";
import { ButterflySVG } from "@/components/ui/butterfly-svg";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/vanishingtwinsyndromefoundation",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/vanishingtwinsyndrome",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/ivtsf",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const NAV_COL_1 = NAV_LINKS.slice(0, 4);
const NAV_COL_2 = [
  ...NAV_LINKS.slice(4),
  { href: "/donate", label: "Donate" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#1A0A3D]">
      {/* Gradient top border */}
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #6B2DB5 0%, #4DB8E8 50%, #C2408C 100%)",
        }}
      />
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-5"
              aria-label="IVTSF home"
            >
              <ButterflySVG size={48} animated={false} />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-white">IVTSF</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  Vanishing Twin Syndrome Foundation
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-serif italic mb-5">
              &ldquo;A world where VTS is recognized, supported, and accurately
              communicated.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.08] border border-white/10 text-white/50 hover:text-[#4DB8E8] hover:border-[#4DB8E8]/30 transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_COL_1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {NAV_COL_2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Contact
            </h4>
            <a
              href="mailto:contact@vanishingtwinsyndrome.org"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#4DB8E8] transition-colors mb-4"
            >
              <Mail className="h-4 w-4" aria-hidden />
              contact@vanishingtwinsyndrome.org
            </a>
            <p className="text-xs text-white/35 leading-relaxed mt-4">
              Nichole McTurk Cubbage, DHSc, MS
              <br />
              Founder &amp; Executive Director
            </p>
            <p className="text-xs text-white/35 mt-4 leading-relaxed">
              501(c)(3) nonprofit &middot; US-based
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08] text-xs text-white/30">
          <p>
            &copy; 2025&ndash;2026 International Vanishing Twin Syndrome
            Foundation. All rights reserved. Materials may not be reproduced
            without permission except for limited educational or personal use
            with proper attribution.
          </p>
        </div>
      </div>
    </footer>
  );
}
