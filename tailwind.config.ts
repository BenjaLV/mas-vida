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
        primaryGreen: "#CCD5AE",
        secondaryGreen: "#E9EDC9",
        darkGreen: "#216B39",
        ligthGreen: "#C1FF72",
        primaryBrown: "#FAEDCD",
        secondaryBrown: "#D4A373",
        light: "#FEFAE0",
        ligthGray: "#E0E0E0",
      },
    },
    screens: {
      xs: { max: "337px" },
      sm: { min: "338px", max: "549px" },
      md: { min: "550px", max: "909px" },
      lg: { min: "910px", max: "1279px" },
      xl: { min: "1280px", max: "2001px" },
    },
  },
  plugins: [],
};
export default config;
