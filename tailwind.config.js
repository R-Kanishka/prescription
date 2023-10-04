/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'purple': '#3f3cbb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#ecebff',
    'bubble-gum': '#ff77e9',
    'bermuda': '#78dcca',
    'green':'#16a34a',
    'lowWhite':'#e2e8f0',
  },
    extend: {},
  },
  plugins: [require("daisyui")],
}