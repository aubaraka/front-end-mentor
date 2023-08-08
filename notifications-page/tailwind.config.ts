import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: { custom: ["Plus-Jakarta-Sans", "sans-sarif"] },
      fontWeight: { normal: "500", bold: "800" },
    },
  },
  plugins: [],
};
export default config;
