/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A1326', 800: '#0F1B33', 700: '#16264A' },
        brand: { orange: '#FF9A0A', blue: '#2F6FE4' },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Kaushan Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
