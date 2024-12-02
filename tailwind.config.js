/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      padding: {
        DEFAULT: '.5rem',
      },
    },
    extend: {
      keyframes: {
        scaling: {
          'from': { transform: 'scale(0)' },
          'to': { transform: 'scale(1)' },
        }
      },
      animation: {
        scaling: 'scaling .3s ease-in-out',
      }
    },
  },
  plugins: [],
}