/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        twelve: ['12px', '16px'],
        fourteen: ['14px', '140%'],
        sexteen: ['16px', '145%'],
        eighteen: ['18px', '120%'],
        twenty: ['20px', '24px'],
        thirtyfour: ['34px', '120%'],
        twentyfive: ['25px', '130%'],
        forty: ['40px', '120%'],
        fifty: ['50px', '120%'],
      },
      colors: {
        // main
        'fill-blue': '#36568B',
        'text-lightblue': '#EFF6FF',
        'd-blue': ' #4B76BC',
        // preparationschool
        'fill-pink': '#FFD8D2',
        'text-brown': '#B18882',
        'hover-brown': '#99564C',
        'd-brown': '#FFE9E6',
        // english
        'fill-yelow': '#FCF1BE',
        'text-yellow': '#B0A36A',
        'hover-yellow': '#C3A411',
        'd-yellow': '#FFF9DE',
        // robotics
        'fill-cyan': '#D8E9FF',
        'tetx-cyan': '#89898A',
        'hover-cyan': '#36568B',
        'd-cyan': '#EBF4FF',
        // firstgradestudent
        'fill-green': '#DAFFD8',
        'text-green': '#89AD87',
        'hover-green': '#349B46',
        'd-green': '#EBFEEA',
        // programming
        'fill-violet': '#E2CBFF',
        'tetx-violet': '#9783B0',
        'hover-violet': '#724DA1',
        'd-violet': '#ECDDFF',

        'fill-medium': '#9CA4B1',
        'text-light': '#B2B2B2',
        'blue-dark': '#3D4A56',
        'red-mistake': '#E0474E',

        'local-gray-b': '#F6F5F5',
        'local-gray-b-2': '#F8F8F8',
        'local-gray-t': '#7F807E',
        'local-gray-t-2': '#EBE7E4',
        'local-gray-act': '#F3F3F3',
        'local-gray-act-2': '#E6E6E6',
        'local-gray-act-3': '#7F817E',
        'local-grey-act-t': '#515151',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
