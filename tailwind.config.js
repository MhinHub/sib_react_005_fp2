/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "Raleway", "Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        'marquee': 'marquee-horizontal 15s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'black': {
          'primary': '#ffffff',
          'primary-focus': '#ffffff',
          'primary-content': '#000000',

          'secondary': '#ffffff',
          'secondary-focus': '#ffffff',
          'secondary-content': '#000000',

          'accent': '#ffffff',
          'accent-focus': '#ffffff',
          'accent-content': '#000000',

          'neutral': '#333333',
          'neutral-focus': '#4d4d4d',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#333333',
          'base-300': '#4d4d4d',
          'base-content': '#000000',

          'info': '#0000ff',
          'success': '#008000',
          'warning': '#ffff00',
          'error': '#ff0000',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--animation-btn': '0',
          '--animation-input': '0',

          '--btn-text-case': 'lowercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
}
