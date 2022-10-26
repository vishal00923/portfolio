/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: { max: '398px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      xss: { max: '280px' },
      smh: { min: '410px' },
      smd: { min: '540px' },
      mdlg: { min: '824px' },
      surface: { min: '912px' },
      '2xl': { min: '1536px' },
    },
  },
  plugins: [],
};
