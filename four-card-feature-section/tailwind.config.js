/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "416px",
      },
      extend: {
        fontFamily: { custom: ["Overpass", "sans-sarif"] },
        fontWeight: { normal: 200, medium: 400, bold: 600 },
      },
    },
  },
  plugins: [],
};
