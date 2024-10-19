/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ---------- Neutral ----------
        'neutralBlack': '#263238',
        'neutralDGrey': '#4D4D4D',
        'neutralGrey': '#717171',
        'neutralLGrey': '#89939E',
        'neutralGreyBlue': '#ABBED1',
        'neutralSilver': '#F5F7FA',
        'neutralWhite': '#FFFFFF',

        // ---------- Primary ----------
        'primaryPrimary': '#28CB8B',
        'primarySecondary': '#263238',
        'primaryInfo': '#2194f3',

        // ---------- Tint ----------
        'tintOne': '#66BB69',
        'tintTwo': '#81C784',
        'tintThree': '#A5D6A7',
        'tintFour': '#C8E6C9',
        'tintFive': '#E8F5E9',

        // ---------- Action ----------
        'actionWarning': '#FBC02D',
        'actionError': '#E53835',
        'actionSuccess': '#2E7D31',
      },
    },
  },
  plugins: [],
};
