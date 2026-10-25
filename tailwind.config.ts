import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pj: {
          purple: {
            DEFAULT: "#54228A",
            light: "#6E33B0",
            dark: "#3B1463",
            deep: "#241333",
            surface: "#FAF7FC",
            subtle: "rgba(84, 34, 138, 0.08)",
          },
          gold: {
            DEFAULT: "#C6A04A",
            light: "#E0BF72",
            dark: "#9E7B2D",
            soft: "#F5EED9",
            shimmer: "linear-gradient(135deg, #E0BF72 0%, #C6A04A 50%, #9E7B2D 100%)",
          },
          neutral: {
            DEFAULT: "#F7F5F8",
            light: "#FDFAFF",
            muted: "#ECE8F0",
            border: "#E2DCE8",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "luxury": "0 20px 40px -15px rgba(36, 19, 51, 0.08)",
        "luxury-hover": "0 25px 50px -12px rgba(84, 34, 138, 0.16)",
        "gold-glow": "0 0 25px rgba(198, 160, 74, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
