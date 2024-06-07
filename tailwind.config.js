/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["Clash Display", "sans-serif"],
      },
      colors: {
        "nav-red": "#FF5555",
      },
    },
  },
  plugins: [],
};
