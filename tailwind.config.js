module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '1800px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        "xl": "20rem",
        "2xl": "24rem",
        "3xl": "32rem"
      },
      colors: {
        "bastionblue": {
          "500":"#3350DE"
        },
        "bastionorange": "#E63300",
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar-hide")
  ],
  enabled: process.env.NODE_ENV === "production"
}
