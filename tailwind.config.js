module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '90%': '90%',
        '85%': '85%',
        '20%': '20%',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        palette: {
          main: '#FFC700',
          gray: '#EEEEEE',
          blue: '#235DAB',
          'dark-gray': '#C4C4C4',
          'darkest-gray': '#272727',
          black: '#00000',
        },
      },
      width: (theme) => ({
        950: '950px',
        500: '500px',
        brand: '150px',
      }),
      height: (theme) => ({
        'screen/125vh': '125vh',
        'screen/0.5': '75vh',
        'screen/1': '65vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        90: '90px',
        125: '125px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
