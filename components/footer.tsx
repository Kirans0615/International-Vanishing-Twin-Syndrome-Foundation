import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_LINKS } from "@/components/nav-links";

export function Footer() {
  return (
    <footer className="bg-brand-paper border-t border-brand-line mt-24">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-5"
              aria-label="IVTSF home"
            >
              <Image
                src="/logo.png"
                alt="IVTSF logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-brand-ink">IVTSF</span>
                <span className="text-xs text-brand-muted uppercase tracking-wider">
                  Vanishing Twin Syndrome Foundation
                </span>
              </span>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-md">
              A 501(c)(3) nonprofit dedicated to advancing research, raising
              awareness, and supporting families touched by Vanishing Twin
              Syndrome.
            </p>
            <a
              href="mailto:contact@vanishingtwinsyndrome.org"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-brand-deep hover:text-brand transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden />
              contact@vanishingtwinsyndrome.org
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-ink mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-ink mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/shop", label: "Shop" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-line flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-brand-muted">
          <p>
            © 2025–2026 International Vanishing Twin Syndrome Foundation. A
            501(c)(3) nonprofit organization.
          </p>
          <p>EIN pending • US-based • All gifts tax-deductible.</p>
        </div>
      </div>
    </footer>
  );
}
