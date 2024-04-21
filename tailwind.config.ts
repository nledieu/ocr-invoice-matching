import type {Config} from 'tailwindcss'
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        skyblue: {
          "100": "rgba(2, 182, 215, 0.9)",
          "200": "rgba(2, 182, 215, 0.8)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "6xl": "25px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      xl: "1.25rem",
      base: "1rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
