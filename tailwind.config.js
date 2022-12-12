/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'hero': '16 / 4',
        'picture': '4 / 3',
        'portrait': '2 / 3',
      }
    },
  },
  plugins: [],
}
