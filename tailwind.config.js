/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #5C5C5C, #5C5C5C)',
        'pros-card-bg': 'linear-gradient(180deg, #27C5D0 0%, rgba(39, 197, 208, 0.40) 48.05%, rgba(39, 197, 208, 0.01) 100%)',
        'header-ads-gradient':'linear-gradient(102.35deg, #FF553D 0%, #FF7F6E 100%)',
        'banner-gradient':'linear-gradient(105.88deg, #27C5D0 46.43%, #04AAB6 99.29%)'
      },
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl':'1536px'
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

