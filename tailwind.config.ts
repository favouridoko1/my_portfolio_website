import type { Config } from "tailwindcss";
const fonFamily = require("tailwindcss/defaultTheme").fontFamily;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Update these paths as needed
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        secondary: "#CFF480",
        secondary2: "#FFEDCC",
        "mint-dark": "#FBE4B9",
        dark: "#0F0F0F",
        gray: "#A1A1A1",
        "gray-main": "#D9D9D9",
        "mint": "#F5FAFD"
      },
      fontFamily: {
        inter: ["var(--fonts-inter)", ...fonFamily.sans],
        poppins: ["var(--fonts-poppins)", ...fonFamily.serif],
        Ordinary: "Ordinary",
        SF: ["SF", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
