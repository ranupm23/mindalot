/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the 'font-inter' class to the Inter font you imported
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}