/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          linkedin: {
            50: '#EFF6FF',
            100: '#DBEEFF',
            200: '#BFE0FF',
            300: '#8FC8FF',
            400: '#49A8FF',
            500: '#0A66C2', // primary LinkedIn blue
            600: '#095BB0',
            700: '#084691',
            800: '#06366E',
            900: '#04264B'
          }
        }
      },
    },
    plugins: [],
  }