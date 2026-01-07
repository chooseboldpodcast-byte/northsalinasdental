import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",  // Soft purple
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
        },
        secondary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",  // Fresh mint
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        neutral: {
          lavender: "#F5F3FF",
          mint: "#F0FDF4",
          cream: "#FFFBEB",
          white: "#FFFFFF",
        },
        // Legacy colors for gradual migration
        sage: {
          50: "#F4F6F3",
          100: "#E8EDE6",
          200: "#D1DBCD",
          300: "#B3C4AC",
          400: "#8FA785",
          500: "#6B8A5E",
          600: "#5C6B54",
          700: "#4A5548",
          800: "#3D463C",
          900: "#2F3630",
        },
        cream: "#FAFAF8",
        ivory: "#F5F5F0",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2" }],
        "heading-2": ["2rem", { lineHeight: "1.3" }],
        "heading-3": ["1.5rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(168, 85, 247, 0.07), 0 10px 20px -2px rgba(168, 85, 247, 0.04)",
        card: "0 4px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 30px -5px rgba(168, 85, 247, 0.04)",
        elevated: "0 25px 50px -12px rgba(168, 85, 247, 0.15)",
        mint: "0 2px 15px -3px rgba(16, 185, 129, 0.07), 0 10px 20px -2px rgba(16, 185, 129, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
