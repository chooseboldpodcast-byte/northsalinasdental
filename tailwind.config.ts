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
          50: "#E6F7F7",
          100: "#CCF0EF",
          200: "#99E0DF",
          300: "#66D1CF",
          400: "#33C1BF",
          500: "#16938F",  // Primary Teal
          600: "#0D7C7A",  // Dark Teal (hover)
          700: "#0A6664",
          800: "#08504E",
          900: "#053A38",
        },
        secondary: {
          50: "#FFF5F3",
          100: "#FFEBE7",
          200: "#FFD7CF",
          300: "#FFB5A7",  // Coral Light
          400: "#FF8B7B",  // Coral Accent
          500: "#FF6B5B",
          600: "#E54B3B",
          700: "#CC3B2B",
          800: "#B32B1B",
          900: "#991B0B",
        },
        navy: {
          500: "#1B365D",  // Navy Text (headlines)
          600: "#152A4A",
          700: "#0F1E37",
          800: "#0A1324",
          900: "#050911",
        },
        neutral: {
          light: "#F7FAFC",  // Light Background
          cream: "#FFFBEB",
          white: "#FFFFFF",
        },
        gray: {
          text: "#4A5568",  // Gray Text (body)
        },
        cream: "#F7FAFC",
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
        soft: "0 2px 15px -3px rgba(22, 147, 143, 0.07), 0 10px 20px -2px rgba(22, 147, 143, 0.04)",
        card: "0 4px 25px -5px rgba(22, 147, 143, 0.1), 0 10px 30px -5px rgba(22, 147, 143, 0.04)",
        elevated: "0 25px 50px -12px rgba(22, 147, 143, 0.15)",
        coral: "0 2px 15px -3px rgba(255, 139, 123, 0.07), 0 10px 20px -2px rgba(255, 139, 123, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        ticker: "ticker 20s linear infinite",
        "ticker-smooth": "tickerSmooth 20s linear infinite",
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
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tickerSmooth: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
