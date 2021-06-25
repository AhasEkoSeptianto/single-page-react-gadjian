module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      green: '#1DCBBA',
      gray: '#f3f4f6',
      gray_more: '#D1D5DB',
      white: '#ffffff',
      heading: '#494E58',
      font: '#6B7280',
    },
    fontFamily: {
      title: ['nicla_demonicla_demo'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
