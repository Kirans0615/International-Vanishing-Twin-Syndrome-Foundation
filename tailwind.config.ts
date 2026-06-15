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
        ink: "#1F2A30",
        muted: "#5E6E76",
        line: "#E4E1DA",
        paper: "#FAF7F2",
        ivory: "#FBFAF6",
        cloud: "#F2EFE8",

        // Primary — calming teal
        brand: {
          DEFAULT: "#4F7C82",
          deep: "#2F5A60",
          soft: "#E8F0F0",
          ink: "#1F2A30",
          muted: "#5E6E76",
          line: "#E4E1DA",
          paper: "#FAF7F2",
        },
        // Accent — sage
        sage: {
          DEFAULT: "#8FA68E",
          deep: "#5B7459",
          soft: "#ECEFE8",
        },
        // Accent — soft lavender (used sparingly)
        lavender: {
          DEFAULT: "#B5A9CC",
          deep: "#7C6E97",
          soft: "#EFEBF4",
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
        card: "0 4px 24px -8px rgba(31, 42, 48, 0.08), 0 2px 8px -4px rgba(31, 42, 48, 0.04)",
        soft: "0 14px 44px -12px rgba(79, 124, 130, 0.22)",
        ring: "0 0 0 1px rgba(228, 225, 218, 0.8), 0 12px 32px -10px rgba(31, 42, 48, 0.1)",
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
