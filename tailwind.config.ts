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
        brand: {
          DEFAULT: "#6D28D9",
          accent: "#7C3AED",
          soft: "#F5F3FF",
          deep: "#4C1D95",
          ink: "#111827",
          muted: "#6B7280",
          line: "#E5E7EB",
          paper: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(17, 24, 39, 0.08), 0 2px 8px -4px rgba(17, 24, 39, 0.04)",
        soft: "0 10px 40px -12px rgba(109, 40, 217, 0.18)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        flicker: "flicker 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
