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
      colors: {
        'local-gray-b': '#F6F5F5',
        'local-gray-t': '#7F807E',
        'local-gray-act': '#F3F3F3',
        'local-gray-act-2': '#E6E6E6',
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