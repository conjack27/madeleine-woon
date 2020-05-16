module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    fontFamily: {
      body: ['Whyte-Book', 'sans-serif'],
      heading: ['Whyte-Medium', 'sans-serif']
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
      pink: '#F2D0C9',
      white: '#FFFFFF',
      black: '#000000',
    },
    inset: {
      '50': '50px',
      '0': '0px'
    },
    height: {
      md: '500px',
      lg: '700px',
      full: '100%',
      auto: 'auto'
    }
  },
  variants: {},
  plugins: [],
}
