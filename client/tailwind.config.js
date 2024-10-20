/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#13CB5C",
        NavyN900: "#000119",
        NavyN800: "#0D0E25",
        NavyN750: "#15162D",
        NavyN600: "#2E2F42",
        NavyN500: "#3B3B4E",
        NavyN300: "#575767",
        NavyN80: "#94949E",
        NavyN70: "#A3A4AC",
        NavyN50: "#BFC0C6",
        "navy-400": "#4A4B5C",
        "navy-70": "#bfc0c6",
        "navy-900": "#000119",
        "navy-800": "#0D0E25",
        "navy-50": "#BFC0C6",
        "navy-100": "#757683",
        "primary": "#13CB5C",
        "navy-600": "#2E2F42",
        "navy-700": "#1C1D32",
      },
      spacing: {
        '26px': '26.06px',
        '538px': '538.06px',
        '346px': '346.06px',
        '154px': '154.06px',
      },
      backgroundImage: {
        "subscription-gradient": "url('/BG.png')",
        main: "url('/main-bg.svg')", // Kept from the 'develop' branch
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'image': "url('/assets/background_image.png')",
      },
      backgroundColor: {
        "primary": "#13CB5C",
        "navy-600": "#2E2F42",
        "navy-900": "#000119",
        "navy-700": "#1C1D32",
      },
      borderColor: {
        "navy-300": "#575767",
        "navy-700": "#1C1D32",
      },
      fontFamily: {
        'inter': ['Inter', 'sans'], // Added from 'develop' branch
      },
    },
  },
  plugins: [],
};
