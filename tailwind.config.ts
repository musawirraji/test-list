import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateColumns: {
        twoCols: "repeat(2, 1fr)",
        threeCols: "repeat(3, 1fr)",
        fourCols: "repeat(4, 1fr)",
      },
      colors: {
        background: "#E5F1F1",
        green: {
          50: "#4C9F9F",
          100: "#007777",
          200: "#006666",
          300: "#005555",
          400: "#004444",
          500: "#003333",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
