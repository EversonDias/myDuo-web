/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        background: "url('/img/background.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 10%, #43E7AD 70%, #E1D55D )',
        'card-shadow': 'linear-gradient(180deg, #00000000, #000000E5  67.88%)',
      },
    },
  },
  plugins: [],
}
