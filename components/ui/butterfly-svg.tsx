"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ButterflySVGProps {
  size?: number;
  animated?: boolean;
  opacity?: number;
  className?: string;
  phase?: "opening" | "floating" | "static";
  delay?: number;
}

export function ButterflySVG({
  size = 300,
  animated = true,
  opacity = 1,
  className,
  phase = "floating",
  delay = 0,
}: ButterflySVGProps) {
  const prefersReduced = useReducedMotion();
  const [openingDone, setOpeningDone] = React.useState(phase !== "opening");

  const wingSpring = { type: "spring" as const, stiffness: 55, damping: 14 };

  const leftWingVariants = {
    closed: { scaleX: 0 },
    open: { scaleX: 1, transition: { ...wingSpring, delay: delay + 0.05 } },
  };
  const rightWingVariants = {
    closed: { scaleX: 0 },
    open: { scaleX: 1, transition: { ...wingSpring, delay: delay + 0.2 } },
  };
  const leftLowerVariants = {
    closed: { scaleX: 0 },
    open: { scaleX: 1, transition: { ...wingSpring, delay: delay + 0.15 } },
  };
  const rightLowerVariants = {
    closed: { scaleX: 0 },
    open: { scaleX: 1, transition: { ...wingSpring, delay: delay + 0.3 } },
  };

  const isAnimating = animated && !prefersReduced;

  return (
    <motion.div
      className={className}
      style={{ width: size, height: (size * 270) / 300, opacity }}
      animate={
        isAnimating && (openingDone || phase === "floating")
          ? { y: [0, -18, 0] }
          : undefined
      }
      transition={
        isAnimating
          ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      <svg
        viewBox="0 0 300 270"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* ── LEFT WINGS ───────────────────── */}
        <motion.g
          style={{ transformOrigin: "150px 130px" }}
          variants={phase === "opening" ? leftWingVariants : undefined}
          initial={phase === "opening" && isAnimating ? "closed" : "open"}
          animate="open"
          onAnimationComplete={() =>
            phase === "opening" && setOpeningDone(true)
          }
        >
          {/* Upper left wing */}
          <path
            d="M 148,80 C 120,60 62,18 22,28 C -2,38 -2,76 28,91 C 60,107 115,106 148,104 Z"
            fill="#6B2DB5"
          />
          {/* Upper left inner highlight */}
          <path
            d="M 146,87 C 120,72 78,50 50,56 C 32,62 30,80 54,89 C 82,98 120,98 146,101 Z"
            fill="#8B3FD4"
            opacity="0.6"
          />
          {/* Blue teardrop accent */}
          <ellipse
            cx="50"
            cy="50"
            rx="6"
            ry="11"
            transform="rotate(-32 50 50)"
            fill="#4DB8E8"
          />
          <ellipse
            cx="72"
            cy="65"
            rx="4"
            ry="7"
            transform="rotate(-26 72 65)"
            fill="#87CEEB"
            opacity="0.75"
          />

          {/* Lower left wing */}
          <path
            d="M 148,108 C 110,120 36,150 18,188 C 4,214 30,232 74,218 C 110,207 144,178 148,156 Z"
            fill="#C2408C"
          />
          {/* Lower left inner highlight */}
          <path
            d="M 147,116 C 115,126 60,150 46,178 C 38,196 56,208 86,200 C 114,192 145,166 147,148 Z"
            fill="#9B2D6E"
            opacity="0.55"
          />
        </motion.g>

        {/* ── RIGHT UPPER WING ─────────────── */}
        <motion.g
          style={{ transformOrigin: "150px 130px" }}
          variants={phase === "opening" ? rightWingVariants : undefined}
          initial={phase === "opening" && isAnimating ? "closed" : "open"}
          animate="open"
        >
          <path
            d="M 152,80 C 180,60 238,18 278,28 C 302,38 302,76 272,91 C 240,107 185,106 152,104 Z"
            fill="#6B2DB5"
          />
          <path
            d="M 154,87 C 180,72 222,50 250,56 C 268,62 270,80 246,89 C 218,98 180,98 154,101 Z"
            fill="#8B3FD4"
            opacity="0.6"
          />
          <ellipse
            cx="250"
            cy="50"
            rx="6"
            ry="11"
            transform="rotate(32 250 50)"
            fill="#4DB8E8"
          />
          <ellipse
            cx="228"
            cy="65"
            rx="4"
            ry="7"
            transform="rotate(26 228 65)"
            fill="#87CEEB"
            opacity="0.75"
          />
        </motion.g>

        {/* ── RIGHT LOWER WING ─────────────── */}
        <motion.g
          style={{ transformOrigin: "150px 130px" }}
          variants={phase === "opening" ? rightLowerVariants : undefined}
          initial={phase === "opening" && isAnimating ? "closed" : "open"}
          animate="open"
        >
          <path
            d="M 152,108 C 190,120 264,150 282,188 C 296,214 270,232 226,218 C 190,207 156,178 152,156 Z"
            fill="#C2408C"
          />
          <path
            d="M 153,116 C 185,126 240,150 254,178 C 262,196 244,208 214,200 C 186,192 155,166 153,148 Z"
            fill="#9B2D6E"
            opacity="0.55"
          />
        </motion.g>

        {/* ── BODY & HEAD ─────────────────── */}
        <ellipse cx="150" cy="132" rx="9" ry="60" fill="#4A1A8C" />
        <circle cx="150" cy="73" r="8" fill="#4A1A8C" />

        {/* ── ANTENNAE ────────────────────── */}
        <path
          d="M 146,68 C 128,48 106,28 88,10"
          stroke="#4A1A8C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 154,68 C 172,48 194,28 212,10"
          stroke="#4A1A8C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="86" cy="9" r="4" fill="#4A1A8C" />
        <circle cx="214" cy="9" r="4" fill="#4A1A8C" />

        {/* ── SUBTLE WING FLAP OVERLAY ──── */}
        {isAnimating && openingDone && (
          <>
            <motion.g
              style={{ transformOrigin: "150px 95px" }}
              animate={{ scaleX: [1, 0.82, 1] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M 148,80 C 120,60 62,18 22,28 C -2,38 -2,76 28,91 C 60,107 115,106 148,104 Z"
                fill="#4A1A8C"
                opacity="0.18"
              />
            </motion.g>
            <motion.g
              style={{ transformOrigin: "150px 95px" }}
              animate={{ scaleX: [1, 0.82, 1] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.05,
              }}
            >
              <path
                d="M 152,80 C 180,60 238,18 278,28 C 302,38 302,76 272,91 C 240,107 185,106 152,104 Z"
                fill="#4A1A8C"
                opacity="0.18"
              />
            </motion.g>
          </>
        )}
      </svg>
    </motion.div>
  );
}
