/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lovePink: "#ffb6c1",
        softPurple: "#c3b1e1",
        pastelYellow: "#fff8dc",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
}
