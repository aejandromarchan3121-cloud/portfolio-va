/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-blue": "#00d2ff",
        "cyber-purple": "#9245ff",
        "dark-bg": "#0a0b10",
        "card-bg": "#161b22",
      },
    },
  },
  plugins: [],
}