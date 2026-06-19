import Link from "next/link";
import Image from "next/image";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/components/nav-links";
import { withBasePath } from "@/lib/basePath";

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
    <footer className="bg-cloud border-t border-line mt-24">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-4"
              aria-label="IVTSF home"
            >
              <Image
                src={withBasePath("/logo.png")}
                alt="IVTSF logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-ink">IVTSF</span>
                <span className="text-xs text-muted uppercase tracking-wider">
                  Vanishing Twin Syndrome Foundation
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm font-serif italic mb-5">
              "A world where VTS is recognized, supported, and accurately
              communicated."
            </p>
            <a
              href="mailto:contact@vanishingtwinsyndrome.org"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-deep hover:text-brand transition-colors mb-5"
            >
              <Mail className="h-4 w-4" aria-hidden />
              contact@vanishingtwinsyndrome.org
            </a>
            <div className="flex items-center gap-3 mt-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border border-line text-muted hover:text-brand hover:border-brand/30 transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_COL_1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-brand-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav column 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2">
              {NAV_COL_2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-brand-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted">
          <p>
            © 2025–2026 International Vanishing Twin Syndrome Foundation. All
            rights reserved. Materials may not be reproduced without permission
            except for limited educational or personal use with proper
            attribution.
          </p>
          <p className="flex-shrink-0">501(c)(3) nonprofit · US-based</p>
        </div>
      </div>
    </footer>
  );
}
