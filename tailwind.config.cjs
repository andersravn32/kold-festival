/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/bg.jpg')"
      },
      fontFamily: {
        'header': ['roc-grotesk', 'sans-serif'],
        'body': ['open-sans', 'sans-serif']
      },
      colors: {
        'midnight': '#00132F'
      },
    },
  },
  plugins: [],
}
