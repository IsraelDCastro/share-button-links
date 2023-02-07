/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whatsapp: "#128C7E",
        telegram: "#229ED9",
        twitter: "#00ACEE",
        facebook: "#3B5998",
        line: "#00B900",
        email: "#34B7F1",
        tumblr: "#36465D",
        pinterest: "#E60023",
        linkedin: "#00A0DC",
        reddit: "#FF4500",
        pocket: "#EE4056",
        copy: "#10B981",
        "c-base": "#222",
        primary: {
          50: "#CAF0F8",
          100: "#ADE8F4",
          200: "#90E0EF",
          300: "#48CAE4",
          400: "#00B4D8",
          500: "#0096C7",
          600: "#0096C7",
          700: "#0077B6",
          800: "#023E8A",
          900: "#03045E"
        },
        secondary: {
          50: "#FFF6F5",
          100: "#FEE2DF",
          200: "#FDCFC9",
          300: "#FDBBB4",
          400: "#FCA79E",
          500: "#FB9488",
          600: "#FA8072",
          700: "#F96858",
          800: "#F8523F",
          900: "#F73B26"
        },
        tertiary: {
          50: "#FFFBF5",
          100: "#FEEED6",
          200: "#FDE2B6",
          300: "#FDD597",
          400: "#FCC877",
          500: "#FBBC58",
          600: "#FAAF38",
          700: "#F9A61F",
          800: "#F99C06",
          900: "#E08C06"
        },
        dark: {
          50: "#FAFAFA",
          100: "#DEDEDE",
          200: "#C2C2C2",
          300: "#A7A7A7",
          400: "#8B8B8B",
          500: "#6F6F6F",
          600: "#535353",
          700: "#383838",
          800: "#1C1C1C",
          900: "#000000"
        }
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms"
      },
      zIndex: {
        "-1": -1,
        1: 1,
        5: 5
      },
      inset: {
        "-100": "-100%"
      },
      screens: {
        tablet: "989px",
        "max-md": { max: "988px" },
        mb: { max: "500px" }
      },
      borderWidth: {
        6: "6px"
      },
      boxShadow: {
        base: "0 3px 20px rgba(0, 0, 0, 0.05)",
        alert: "0 6px 26px rgba(0, 0, 0, 0.1)",
        footer: "0 -3px 5px rgba(0, 0, 0, 0.02s)",
        header: "0 6px 5px rgba(0, 0, 0, 0.02)"
      },
      minHeight: {
        24: "6rem",
        "3-5": "14px"
      },
      listStyleType: {
        circle: "circle"
      }
    },
    fontFamily: {
      sans: [
        "Poppins",
        "Lato",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      body: ["Nunito", "Noto Sans", "Lato", '"Helvetica Neue"', "Helvetica ", "Arial", "sans-serif"]
    }
  },
  plugins: []
};
