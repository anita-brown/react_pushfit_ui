/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
        fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         sm: "480px",
//         md: "768px",
//         lg: "976px",
//         xl: "1440px",
//       },
//       fontFamily: {
//         sans: ["Graphik", "sans-serif"],
//         serif: ["Merriweather", "serif"],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/line-clamp")],
// };
