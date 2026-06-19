"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButterflySVG } from "@/components/ui/butterfly-svg";
import { FlickeringGrid } from "@/components/flickering-grid";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  yOffset: number;
  delay: number;
  opacity: number;
}

const PARTICLE_COLORS = [
  "#4DB8E8",
  "#8B3FD4",
  "#C2408C",
  "#87CEEB",
  "#6B2DB5",
];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + ((i * 17.3) % 90),
    y: 5 + ((i * 23.7) % 90),
    size: 2 + (i % 3),
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    duration: 4 + (i % 5),
    yOffset: 8 + (i % 16),
    delay: (i * 0.18) % 3,
    opacity: 0.2 + ((i * 0.07) % 0.25),
  }));
}

const PARTICLES = generateParticles(48);

const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: d },
  }),
};

export function ButterflyHero() {
  const prefersReduced = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [butterflyPhase, setButterflyPhase] = React.useState<
    "opening" | "floating"
  >("opening");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const butterflyScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.18]);
  const butterflyY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const butterflyOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    [1, 0.8, 0]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  React.useEffect(() => {
    const timer = setTimeout(() => setButterflyPhase("floating"), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #2D1060 0%, #1A0A3D 50%, #0D0520 100%)",
      }}
    >
      {/* Flickering grid — very subtle */}
      <FlickeringGrid
        color="#8B3FD4"
        maxOpacity={0.06}
        squareSize={3}
        gridGap={8}
        flickerChance={0.08}
        className="absolute inset-0 z-0"
      />

      {/* Particles */}
      {!prefersReduced && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          aria-hidden
        >
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                opacity: p.opacity,
              }}
              animate={{ y: [0, -p.yOffset, 0] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Butterfly */}
      <motion.div
        className="relative z-10 mt-16 md:mt-20"
        style={
          !prefersReduced
            ? {
                scale: butterflyScale,
                y: butterflyY,
                opacity: butterflyOpacity,
              }
            : undefined
        }
      >
        <div className="w-[min(480px,55vw)]">
          <ButterflySVG
            size={480}
            animated={!prefersReduced}
            phase={butterflyPhase}
            delay={0}
          />
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto -mt-4 md:-mt-8"
        style={
          !prefersReduced ? { opacity: textOpacity, y: textY } : undefined
        }
      >
        <motion.p
          custom={0.85}
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          className="text-[#4DB8E8] uppercase tracking-[0.3em] text-[0.7rem] font-medium mb-5"
        >
          International Vanishing Twin Syndrome Foundation
        </motion.p>

        <motion.h1
          custom={1.0}
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-white mb-5 leading-[1.08]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
        >
          Understanding.{" "}
          <span className="italic text-[#C4B5D4]">Research.</span> Support.
        </motion.h1>

        <motion.p
          custom={1.15}
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          className="text-[#C4B5D4] text-lg md:text-xl leading-relaxed max-w-[580px] mx-auto mb-8"
        >
          Advancing research and compassionate support for families and
          providers worldwide.
        </motion.p>

        <motion.div
          custom={1.3}
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 justify-center pb-8"
        >
          <Button
            asChild
            size="lg"
            className="border-0 text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #6B2DB5, #8B3FD4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(107,45,181,0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <Link href="/what-is-vts">
              What is VTS?
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#4DB8E8] text-[#4DB8E8] bg-transparent hover:bg-[rgba(77,184,232,0.1)] hover:text-[#4DB8E8] hover:border-[#4DB8E8]"
          >
            <Link href="/about">Our Mission</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#4DB8E8] opacity-70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      )}
    </section>
  );
}
