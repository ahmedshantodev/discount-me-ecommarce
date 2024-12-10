/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      backgroundImage: {
        "product-details-top-part-bg" : "url('/images/product-details-top-part-bg-image.png')",
        "coupon-card-bg" : "url('/images/coupon-card-bg.png')"
      },
      colors: {
        // color
        "primary-color": "#FF7D29",
        "secondary-color": "#00B047",
        // text color
        "primary-text": "#0C0C0C",
        "secondary-text": "#334A55",
        "tertiary-text": "#758888",
        // border color
        "primary-border": "#959697",
        "secondary-border": "#e4d9da",
      },
      fontFamily: {
        "primary-font": [`var(--font-primary)`],
        "secondary-font": [`var(--font-secondary)`],
      },
    },
  },
  plugins: [],
};
