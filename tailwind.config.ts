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
        ink: "#1A1A1A",
        muted: "#6B6560",
        line: "#E8E4DE",
        paper: "#FAF8F5",
        ivory: "#FAF8F5",
        cloud: "#F2EFE9",

        // Primary — deep teal (trust, medical, warm)
        brand: {
          DEFAULT: "#0D7A6E",
          deep: "#085C52",
          soft: "#E0F2EF",
          ink: "#1A1A1A",
          muted: "#6B6560",
          line: "#E8E4DE",
          paper: "#FAF8F5",
        },
        // Secondary — dusty rose/mauve (grief-sensitive, gentle)
        rose: {
          DEFAULT: "#C2848A",
          deep: "#9E5A62",
          soft: "#F8EDEE",
        },
        // Accent — warm gold (hope, advocacy)
        gold: {
          DEFAULT: "#C9973A",
          deep: "#A67C2A",
          soft: "#FDF3E0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "ui-serif", "serif"],
      },
      fontSize: {
        "display-2": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(13, 122, 110, 0.08), 0 2px 8px -4px rgba(26, 26, 26, 0.04)",
        soft: "0 14px 44px -12px rgba(13, 122, 110, 0.18)",
        ring: "0 0 0 1px rgba(232, 228, 222, 0.8), 0 12px 32px -10px rgba(26, 26, 26, 0.1)",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
