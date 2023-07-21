/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-black': '#252525',
      'secondary-black': '#313236',
      'primary-white': '#F3F3FB',
      'primary-blue': '#00518F',
      'secondary-blue': '#0062AB',
      'primary-bordeaux': '#82204A',
      'primary-yellow': '#F9B614',
      'primary-orange': '#EB5D29',
    },
  },
  plugins: [],
};
