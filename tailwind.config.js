module.exports = {
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '20xl': '20rem',
        '30xl': '30rem',
      },
      fontFamily: {
        'riking': ['Riking', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  // ... rest of your config
} 