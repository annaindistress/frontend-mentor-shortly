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
        teal: {
          250: "#9ae3e3",
          450: "#2bd0d0",
        },
        violet: {
          100: "#4b3f6b",
          200: "#3a3054",
          300: "#34313d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
