/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-black/70"
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'spin-once': 'spinOnce 0.5s ease-in-out', 
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },

      },

      fontFamily: {
        jomhuria: ['Jomhuria', 'sans-serif'],
        jeju: ['Jeju Hallasan', 'cursive'],
      },
      colors : {
        darkRed : '#721616',
        greenHover :'#4C6051',
        redHover : '#4B1919',
        softGreen : '#87A08E', 
        softMint: '#CBEAD4',   // Warna hijau mint
        grayish: '#717171',    // Warna abu-abu
        brightRed: '#FF0000',  // Warna merah terang
        backgroundG: '#2D8C75',
        backgroundH: '#081512',

      },
      boxShadow: {
        'text': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
