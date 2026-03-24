/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // covers all files inside /src, including pages/components
  ],
  theme: {
    screens: {
      resSm: { min: "360px", max: "767px" },      // regular phones
      resMd: { min: "768px", max: "1366px" },     // tablets
      resLg: { min: "1280px" },                    // laptops and desktops (1280px and above)
    },
    fontSize: {
        // HD Desktop
          
        // LG Desktop 
          
        // MD Tablets
          
        // SM Phones
          
      },
    extend: {
      // You can use scale in the keyframes config but use transform 
      keyframes: 
      {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.98)' },
        },
      },
      animation: 
      {
          fadeIn: 'fadeIn 1200ms ease-in-out forwards',
          fadeOut: 'fadeOut 1200ms ease-in-out forwards',
      },
      colors: 
      {
        // Original Color Palette
        main_text: "#141415",
        primary: "#1C6AB4",
        secondary: "#0c0c0d",
        highlight: "#14BAE6",
        background_lightTxt: "#F3F4F7",
        accent: "#1373B9",

        cards_overlay: "#6F5229" // 80% Opacity,
      },
      fontFamily: 
      {
        AnticDidone: ["'Antic Didone'", "serif"],
        Raleway: ["'Raleway'", "sans-serif"],
        Montserrat: ["'Montserrat'", "sans-serif"],
        Nunito: ["'Nunito'", "sans-serif"],
        Libre: ["'Libre Baskerville'", "serif"],
      },
      fontWeight: {
        Thin: 100,
        ExtraLi: 200,
        Light: 300,
        Regular: 400,
        Medium: 500,
        SemiB: 600,
        Bold: 700,
        ExtraBo: 800,
        Black: 900,
        ExtraBla: 950,
      }
    },
  },
  plugins: [],
};