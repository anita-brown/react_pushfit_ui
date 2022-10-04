/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
