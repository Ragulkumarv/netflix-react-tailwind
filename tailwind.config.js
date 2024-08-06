/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "885px", // Adds a custom breakpoint
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".font-size-inherit": {
          "font-size": "inherit",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
