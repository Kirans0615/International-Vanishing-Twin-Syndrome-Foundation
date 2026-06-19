"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

function ButterflyAnimatedSvg({ size }: { size: number }) {
  const h = Math.round(size * 0.9);
  return (
    <svg
      viewBox="0 0 400 360"
      width={size}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="ov-lu" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="60%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="ov-ll" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="ov-ru" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="60%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="ov-rl" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="ov-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D1B69" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>

      {/* Left wing group — folds toward body (right side of group) */}
      <motion.g
        style={{ transformOrigin: "right center" }}
        animate={{ scaleX: [1, 0.76, 1] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Left upper wing */}
        <path
          d="M 195,104 C 155,74 72,18 20,32 C -14,46 -8,96 32,116 C 76,138 148,134 195,128 Z"
          fill="url(#ov-lu)"
        />
        {/* Upper wing highlight */}
        <path
          d="M 192,112 C 158,94 100,62 64,68 C 40,74 38,98 68,110 C 104,124 158,122 192,122 Z"
          fill="#A78BFA"
          opacity={0.28}
        />
        {/* Teardrop marking */}
        <ellipse
          cx="68"
          cy="62"
          rx="8"
          ry="14"
          transform="rotate(-35 68 62)"
          fill="#60A5FA"
          opacity={0.85}
        />
        {/* Vein lines */}
        <line x1="192" y1="116" x2="120" y2="60" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.55} />
        <line x1="192" y1="116" x2="60" y2="100" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.55} />
        {/* Left lower wing */}
        <path
          d="M 195,134 C 144,152 48,192 24,240 C 4,272 38,296 92,278 C 144,262 188,226 195,196 Z"
          fill="url(#ov-ll)"
        />
        {/* Lower wing vein */}
        <line x1="193" y1="145" x2="70" y2="265" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.45} />
      </motion.g>

      {/* Right wing group — folds toward body (left side of group) */}
      <motion.g
        style={{ transformOrigin: "left center" }}
        animate={{ scaleX: [1, 0.76, 1] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.08,
        }}
      >
        {/* Right upper wing */}
        <path
          d="M 205,104 C 245,74 328,18 380,32 C 414,46 408,96 368,116 C 324,138 252,134 205,128 Z"
          fill="url(#ov-ru)"
        />
        <path
          d="M 208,112 C 242,94 300,62 336,68 C 360,74 362,98 332,110 C 296,124 242,122 208,122 Z"
          fill="#A78BFA"
          opacity={0.28}
        />
        <ellipse
          cx="332"
          cy="62"
          rx="8"
          ry="14"
          transform="rotate(35 332 62)"
          fill="#60A5FA"
          opacity={0.85}
        />
        <line x1="208" y1="116" x2="280" y2="60" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.55} />
        <line x1="208" y1="116" x2="340" y2="100" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.55} />
        {/* Right lower wing */}
        <path
          d="M 205,134 C 256,152 352,192 376,240 C 396,272 362,296 308,278 C 256,262 212,226 205,196 Z"
          fill="url(#ov-rl)"
        />
        <line x1="207" y1="145" x2="330" y2="265" stroke="#C4B5FD" strokeWidth="0.8" opacity={0.45} />
      </motion.g>

      {/* Body */}
      <ellipse cx="200" cy="180" rx="11" ry="76" fill="url(#ov-body)" />
      <circle cx="200" cy="104" r="10" fill="#1E1B4B" />

      {/* Antennae */}
      <path
        d="M 196,96 C 178,72 156,46 138,22"
        stroke="#6D28D9"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 204,96 C 222,72 244,46 262,22"
        stroke="#6D28D9"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="136" cy="20" r="4" fill="#6D28D9" />
      <circle cx="264" cy="20" r="4" fill="#6D28D9" />
    </svg>
  );
}

export function ButterflyOverlay() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // S-curve flight path mapped to viewport percentage offsets
  const xPct = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [62, 10, 72, 8, 55]
  );
  const yPct = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [10, 35, 55, 78, 90]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, 12, -10, 14, -5]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.9, 1.1, 0.95, 1.05, 0.85]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.9, 1],
    [0, 1, 1, 0.3]
  );

  const springCfg = { stiffness: 25, damping: 18 };
  const smoothX = useSpring(xPct, springCfg);
  const smoothY = useSpring(yPct, springCfg);
  const smoothRotate = useSpring(rotate, { stiffness: 20, damping: 20 });
  const smoothScale = useSpring(scale, springCfg);

  // Convert numeric MotionValues to CSS string MotionValues
  const left = useTransform(smoothX, (v) => `${v}vw`);
  const top = useTransform(smoothY, (v) => `${v}vh`);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (prefersReduced) {
    return (
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "12vh",
          right: "8vw",
          zIndex: 50,
          pointerEvents: "none",
          opacity: 0.3,
        }}
      >
        <ButterflyAnimatedSvg size={130} />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      style={{
        position: "fixed",
        left,
        top,
        zIndex: 50,
        pointerEvents: "none",
        rotate: smoothRotate,
        scale: smoothScale,
        opacity,
      }}
    >
      {/* Glow halo behind the butterfly */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 220,
          height: 180,
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.42) 0%, rgba(139,92,246,0.18) 40%, transparent 72%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      {/* Butterfly centered on the position point */}
      <div style={{ transform: "translate(-50%, -50%)" }}>
        <ButterflyAnimatedSvg size={130} />
      </div>
    </motion.div>
  );
}
