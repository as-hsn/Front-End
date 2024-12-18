/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00AEEF',
        'custom-dark-blue':'#003B6D',
        'custom-nave-blue': '#003B6D',
        'custom-light-blue':'#00AEEF'
      },
    },
  },
  plugins: [],
}
