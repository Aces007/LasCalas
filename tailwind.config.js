/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // covers all files inside /src, including pages/components
  ],
  theme: {
    screens: {
      resSm: { min: "360px", max: "480px" },      // regular phones
      resMd: { min: "768px", max: "1120px" },     // tablets
      resLg: { min: "1280px", max: "1366px" },    // laptops (your native res)
      resHD: { min: "1920px", max: "2560px" },    // full HD monitors
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

      fontSize: {
        // HD Desktop

          // -- PACKAGES -- //
          slide_h1: "80px",
          // -- FOOTER -- //
          location_p: "18px",
          contacts_p: "16px",

          foot_display: "24px",
          foot_display2: "16px",
          foot_display3: "12px",
          foot_h3s: "20px",
          foot_body_links: "16px",

          gal_modal_close: "24px",
          gal_modal_h1: "56px",

          packages_h2: "20px",
          packages_name: "18px",
          packages_btn: "20px",
          packages_hover_p: "20px",
          packages_hover_a: "24px",
          
          explore_tab_active: "40px",
          explore_tab_inactive: "40px",
          explore_label: "40px",
          explore_name: "18px",
          explore_btn: "20px",
          explore_hover_p: "20px",
          explore_hover_a: "24px",


        // LG Desktop 
          // -- FOOTER -- //
        // MD Tablets
          // -- FOOTER -- //
        // SM Phones
          // -- FOOTER -- //
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