/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "416px",
    },
    extend: {
      fontFamily: { custom: ["Overpass", "sans-sarif"] },
      fontWeight: { normal: 400, bold: 700 },
    },
  },
  plugins: [],
};
