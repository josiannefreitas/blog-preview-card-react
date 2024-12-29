/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: '#f4d04e',
      gray: {
        950: '#111111',
        500: '#6b6b6b'
      },
      white: '#ffffff'
    },
    fontFamily: {
      serif: ['Figtree', 'serif']
    },
    extend: {
      boxShadow: {
        shadow: '8px 8px 0px 0px #000'
      }
    }
  },
  plugins: []
}
