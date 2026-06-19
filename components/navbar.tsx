"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/components/nav-links";
import { ButterflySVG } from "@/components/ui/butterfly-svg";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#1A0A3D]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 lg:h-20 items-center">
        {/* Logo */}
        <div className="flex-none">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="IVTSF home"
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
            >
              <ButterflySVG size={36} animated={false} />
            </motion.div>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-sm text-white">IVTSF</span>
              <span className="text-[10px] uppercase tracking-wider text-white/70">
                Vanishing Twin Syndrome Foundation
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop nav links — centered */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center gap-0.5"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  active
                    ? "text-[#4DB8E8]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#4DB8E8]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Donate + mobile toggle */}
        <div className="flex-none flex items-center gap-3 ml-auto lg:ml-0">
          <Button
            asChild
            size="sm"
            className="hidden lg:inline-flex text-white border-0 font-semibold"
            style={{
              background:
                "linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)",
            }}
          >
            <Link href="/donate">
              <Heart className="h-3.5 w-3.5" aria-hidden />
              Donate
            </Link>
          </Button>
          <button
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-[#1A0A3D] pt-20 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col items-center mb-10">
              <ButterflySVG size={80} animated phase="floating" />
              <p className="text-white/50 text-xs uppercase tracking-widest mt-3">
                IVTSF
              </p>
            </div>
            <nav
              className="flex flex-col gap-1 flex-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                      active
                        ? "bg-[#6B2DB5]/30 text-[#4DB8E8]"
                        : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              asChild
              size="lg"
              className="mt-6 w-full text-white border-0"
              style={{
                background:
                  "linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)",
              }}
            >
              <Link href="/donate">
                <Heart className="h-4 w-4" aria-hidden />
                Donate Now
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
