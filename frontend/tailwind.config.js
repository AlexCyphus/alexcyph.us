const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        red: {
          website: 'rgba(255, 128, 128, 0.75)',
          'website-dark': 'rgba(255, 128, 128)',
        },
        blue: {
          website: 'rgba(128, 163, 255, 0.75)',
          'website-dark': 'rgba(128, 163, 255)',
        },
        yellow: {
          website: 'rgba(246, 199, 67, 0.75)',
          'website-dark': 'rgba(246, 199, 67)',
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
