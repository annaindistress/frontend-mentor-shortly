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
          100: "#9ae3e3",
          200: "#2bd0d0",
        },
        secondary: {
          100: "#4b3f6b",
          200: "#3a3054",
          300: "#34313d",
          400: "#232127",
        },
      },
      backgroundImage: {
        "cta-mobile-pattern":
          "url('/frontend-mentor-shortly/cta-mobile-pattern.svg')",
        "cta-desktop-pattern":
          "url('/frontend-mentor-shortly/cta-desktop-pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
