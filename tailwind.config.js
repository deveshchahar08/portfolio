/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'bounce-slow-delay1': 'bounce 3s infinite 0.5s',
        'bounce-slow-delay2': 'bounce 3s infinite 1s',
      },
    },
  },
  plugins: [],
}