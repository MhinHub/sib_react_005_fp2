/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      animation: {
        marquee: "marquee-horizontal 15s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          primary: "#ffffff",
          "primary-focus": "#ffffff",
          "primary-content": "#000000",

          secondary: "#ffffff",
          "secondary-focus": "#ffffff",
          "secondary-content": "#000000",

          accent: "#ffffff",
          "accent-focus": "#ffffff",
          "accent-content": "#000000",

          neutral: "#333333",
          "neutral-focus": "#4d4d4d",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#333333",
          "base-300": "#4d4d4d",
          "base-content": "#000000",

          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",

          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",

          "--animation-btn": "0",
          "--animation-input": "0",

          "--btn-text-case": "lowercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
        wireframe: {
          primary: "#b8b8b8",
          "primary-focus": "#b8b8b8",
          "primary-content": "#000000",

          secondary: "#b8b8b8",
          "secondary-focus": "#b8b8b8",
          "secondary-content": "#000000",

          accent: "#b8b8b8",
          "accent-focus": "#b8b8b8",
          "accent-content": "#000000",

          neutral: "#ebebeb",
          "neutral-focus": "#ebebeb",
          "neutral-content": "#000000",

          "base-100": "#ffffff",
          "base-200": "#ffffff",
          "base-300": "#ffffff",
          "base-content": "#000000",

          info: "#0000ff",
          success: "#008000",
          warning: "#a6a659",
          error: "#ff0000",

          "--rounded-box": "0",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0.2rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
