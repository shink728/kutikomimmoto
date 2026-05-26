import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3387F5",
          dark: "#1265D4",
          pale: "#EEF6FF",
        },
        line: {
          DEFAULT: "#06C755",
          dark: "#05A847",
          pale: "#EDFBF2",
        },
        ink: "#071427",
        promo: {
          DEFAULT: "#FFD400",
          dark: "#E9B900",
          red: "#E62E24",
        },
      },
      boxShadow: {
        card: "0 18px 50px rgba(19, 45, 31, 0.07)",
        phone: "0 28px 80px rgba(12, 45, 27, 0.16)",
        promo: "0 16px 32px rgba(255, 212, 0, 0.22)",
        float: "0 14px 38px rgba(21, 89, 183, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
