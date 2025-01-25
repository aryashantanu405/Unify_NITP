/** @type {import('tailwindcss').Config} */
const flowbite= require('flowbite-react/tailwind');
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        header_bg:'rgba(249, 250, 252, 1)',
        bodybg:'rgba(255, 255, 255, 1)',
      },
      width:{
        'username_width':'300px',
        'about_width':'400px',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};

