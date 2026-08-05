/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          deep: '#071A2E',
          soft: '#123A5E',
        },
        gold: {
          DEFAULT: '#C89B3C',
          light: '#E3C275',
        },
        surface: '#F8F9FA',
        ink: '#222222',
        muted: '#5B6472',
        line: '#E7E9EC',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        'card-sm': '10px',
      },
      boxShadow: {
        card: '0 14px 40px rgba(10,37,64,0.09)',
        soft: '0 6px 18px rgba(10,37,64,0.06)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
