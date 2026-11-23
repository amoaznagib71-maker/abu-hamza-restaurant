/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#050505',
          900: '#0a0a0c',
          850: '#111114',
          800: '#18181c',
          700: '#23232a',
          600: '#34343e',
        },
        ember: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
