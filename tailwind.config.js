/** @type {import('tailwindcss').Config} */

// import defaultTheme from 'tailwindcss/defaultTheme'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      // use custom font open sans as the first
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-gray-2': '#f8f9fa',
        'brand-gray-3': '#80868b',
        'brand-blue-1': '#1967d2',
        'brand-blue-2': '#4285f4',
        'brand-green-1': '#137333'
      },
      boxShadow: {
        blue: '0 0 0 3px #4285f4'
      }
    }
  },
  plugins: []
}
