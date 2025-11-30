import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <--- ADICIONE ISSO PARA FORÇAR O MODO CLARO
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        malu: {
          purple: "#6a5acd",
          gold: "#b8860b",
          blue: "#b0c4de",
          bg: "#F8F8FF",
          text: "#2D2A4A",
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;