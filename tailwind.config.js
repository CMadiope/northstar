/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
