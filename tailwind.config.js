/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#0b071a",
        surface: "#0e0922",

        "surface-container-lowest": "#080514",
        "surface-container-low": "#120d2a",
        "surface-container": "#191238",
        "surface-container-high": "#22194b",
        "surface-container-highest": "#2e2262",

        "on-background": "#f1f5f9",
        "on-surface": "#f1f5f9",
        "on-surface-variant": "#cbd5e1",

        outline: "#94a3b8",
        "outline-variant": "rgba(216, 180, 254, 0.18)",

        primary: "#e9d5ff",
        "primary-container": "#3b137a",
        "on-primary": "#24005b",
        "on-primary-container": "#f3e8ff",

        secondary: "#a855f7",
        "secondary-container": "#7e22ce",
        "on-secondary": "#ffffff",

        tertiary: "#facc15",
        "tertiary-container": "#ca8a04",
        "on-tertiary": "#422006",

        "tertiary-fixed": "#fef08a",
        "tertiary-fixed-dim": "#fde047",
      },

      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },

      spacing: {
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",

        "gutter-mobile": "1rem",
        "gutter-tablet": "1.5rem",
        "gutter-desktop": "2rem",

        "container-max": "75rem",
      },

      fontFamily: {
        "headline-sm": ["Quicksand", "sans-serif"],
        "headline-md": ["Quicksand", "sans-serif"],
        "headline-lg": ["Quicksand", "sans-serif"],
        "display-lg": ["Quicksand", "sans-serif"],

        "body-sm": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],

        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-caps": ["Plus Jakarta Sans", "sans-serif"],
      },

      fontSize: {
        "headline-sm": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],

        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],

        "display-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "body-sm": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],

        "label-md": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],

        "label-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],

        "label-caps": [
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0.08em",
            fontWeight: "700",
          },
        ],
      },
    },
  },

  plugins: [],
};