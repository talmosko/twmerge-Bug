/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '@/components/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      borderRadius: {
        default: '4px',
      },
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        'primary-blue': '#3B82F6',
        'primary-black': '#000A2B',
        'primary-turquoise': '#24E2CB',
        'secondary-blue': '#333B55',
        'secondary-gray': '#808595',
        'secondary-turquoise': '#66EBDB',
        'secondary-turquoise-light': '#A7F3EA',
        'secondary-red': '#F44747',
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      screens: {
        '3xl': '1601px',
      },
      fontSize: {
        'big-title': [
          '28px',
          {
            lineHeight: '28px',
            fontWeight: '600',
            color: '#000000',
          },
        ],
        title: [
          '22px',
          { fontWeight: '600', lineHeight: '28px', color: '#000000' },
        ],
        h1: [
          '16px',
          { lineHeight: '20px', fontWeight: '600', color: '#020617' },
        ],
        h2: [
          '15px',
          { lineHeight: '20px', fontWeight: '600', color: '#020617' },
        ],
        h3: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '600',
            color: '#020617',
          },
        ],
        h4: [
          '12px',
          { lineHeight: '18px', fontWeight: '600', color: '#020617' },
        ],
        body: [
          '14px',
          { lineHeight: '20px', fontWeight: '400', color: '#020617' },
        ],
        time: [
          '12px',
          { lineHeight: '18px', fontWeight: '400', color: '#020617' },
        ],

        'tag-lg': [
          '14px',
          { lineHeight: '18px', fontWeight: '500', color: '#020617' },
        ],
        'tag-md': [
          '13px',
          { lineHeight: '18px', fontWeight: '400', color: '#020617' },
        ],
        'tag-sm': [
          '10px',
          { lineHeight: '10px', fontWeight: '400', color: '#020617' },
        ],
      },
    },
  },
};
