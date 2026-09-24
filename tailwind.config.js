/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dbe5f2',
          200: '#b8cde4',
          300: '#8baed2',
          400: '#5c8bbe',
          500: '#3c6ea6',
          600: '#2b5488',
          700: '#22436d',
          800: '#173051',
          850: '#0f2240',
          900: '#0B1B3D', // Core Deep Navy Blue from brief
          950: '#060f22',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9E7',
          200: '#FDF0C5',
          300: '#FCE49E',
          400: '#FCD34D',
          500: '#F59E0B', // Core Golden Yellow from brief
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(11, 27, 61, 0.08), 0 4px 6px -2px rgba(11, 27, 61, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(11, 27, 61, 0.16), 0 8px 12px -3px rgba(11, 27, 61, 0.08)',
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.35)',
        'navy-glow': '0 10px 30px -5px rgba(11, 27, 61, 0.45)',
      }
    },
  },
  plugins: [],
}
