/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#b9e7e7",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
