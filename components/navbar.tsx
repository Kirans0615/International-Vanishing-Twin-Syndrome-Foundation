"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/components/nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-ivory/90 backdrop-blur-xl border-b border-line shadow-[0_1px_0_0_rgba(232,228,222,0.7)]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 lg:h-20 items-center">
        {/* Logo — left */}
        <div className="flex-none">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="IVTSF home"
          >
            <Image
              src="/logo.png"
              alt="IVTSF logo"
              width={44}
              height={44}
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-sm text-ink">IVTSF</span>
              <span className="text-[10px] text-muted uppercase tracking-wider">
                Vanishing Twin Syndrome Foundation
              </span>
            </span>
          </Link>
        </div>

        {/* Nav links — centered */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center gap-0.5"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-full transition-colors",
                  active
                    ? "text-brand-deep"
                    : "text-ink hover:text-brand hover:bg-brand-soft/60"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Donate CTA — right */}
        <div className="flex-none hidden lg:block">
          <Button asChild size="sm">
            <Link href="/donate">
              <Heart className="h-3.5 w-3.5" aria-hidden />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button
            type="button"
            className="p-2 -mr-2 text-ink rounded-lg hover:bg-brand-soft transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-16 bg-ink/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed top-16 right-0 bottom-0 w-[82%] max-w-sm bg-ivory border-l border-line shadow-soft overflow-y-auto"
            >
              <nav
                className="flex flex-col p-6 gap-1"
                aria-label="Mobile primary"
              >
                {NAV_LINKS.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                          active
                            ? "bg-brand-soft text-brand-deep"
                            : "text-ink hover:bg-brand-soft/60 hover:text-brand-deep"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button asChild size="lg" className="w-full">
                    <Link href="/donate">
                      <Heart className="h-4 w-4" aria-hidden />
                      Donate
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
