const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'fadeIn 5s ease-in-out',
        'fade-in-bottom': 'fadeInBottom 1s ease-out',
      },

      keyframes: theme => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.animate-fill-none': {
          'animation-fill-mode': 'none',
        },
        '.animate-fill-forwards': {
          'animation-fill-mode': 'forwards',
        },
        '.animate-fill-backwards': {
          'animation-fill-mode': 'backwards',
        },
        '.animate-fill-both': {
          'animation-fill-mode': 'both',
        },
      })
    })
  ]
}
