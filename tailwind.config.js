/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8f9fb',
          100: '#f0f3f7',
          200: '#dce4ef',
          300: '#b8c8df',
          400: '#8fa8d0',
          500: '#6488c1',
          600: '#4a6bb3',
          700: '#3d5596',
          800: '#2d4074',
          900: '#1a2a4a',
          950: '#0f1929',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a2a4a',
            h1: {
              color: '#1a2a4a',
              fontFamily: 'Playfair Display, serif',
            },
            h2: {
              color: '#1a2a4a',
              fontFamily: 'Playfair Display, serif',
            },
            h3: {
              color: '#2d4074',
              fontFamily: 'Playfair Display, serif',
            },
            strong: {
              color: '#1a2a4a',
            },
            a: {
              color: '#4a6bb3',
              '&:hover': {
                color: '#3d5596',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
