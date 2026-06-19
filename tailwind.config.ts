import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: "#1A1020",
        muted: "#6B5F7A",
        line: "#DDD6EE",
        paper: "#FAF8FF",
        ivory: "#FAF8FF",
        cloud: "#F0EBF8",

        // Primary — deep purple (IVTSF butterfly)
        brand: {
          DEFAULT: "#6B2DB5",
          deep: "#4A1A8C",
          soft: "#EDE5F8",
          ink: "#1A1020",
          muted: "#6B5F7A",
          line: "#DDD6EE",
          paper: "#FAF8FF",
        },
        // Secondary — magenta (lower butterfly wings)
        rose: {
          DEFAULT: "#C2408C",
          deep: "#9B2D6E",
          soft: "#F8E8F2",
        },
        // Accent — bright blue (wing highlights)
        gold: {
          DEFAULT: "#4DB8E8",
          deep: "#2A9AC8",
          soft: "#E5F6FC",
        },

        // Full IVTSF palette namespace
        ivtsf: {
          "purple-deep": "#4A1A8C",
          "purple-royal": "#6B2DB5",
          "purple-violet": "#8B3FD4",
          "blue-bright": "#4DB8E8",
          "blue-sky": "#87CEEB",
          magenta: "#C2408C",
          "magenta-deep": "#9B2D6E",
          text: "#1A1020",
          bg: "#FAF8FF",
          surface: "#F0EBF8",
          muted: "#6B5F7A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "ui-serif", "serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-2": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(107, 45, 181, 0.08), 0 2px 8px -4px rgba(26, 16, 32, 0.04)",
        soft: "0 14px 44px -12px rgba(107, 45, 181, 0.18)",
        ring: "0 0 0 1px rgba(221, 214, 238, 0.8), 0 12px 32px -10px rgba(26, 16, 32, 0.1)",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
