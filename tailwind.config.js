/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Poppins:["Poppins","sans-serif"],
      Manrope:["Manrope","sans-serif"]
    },
    colors:{
      secondary:"#2C444E",
      defaultgray:"#6E7685",
      white:"#ffffff",
      black:"#000000",
      red:"#F28383",
      themeblue:"#1485D6",
      green:"#2AA020",
      title:"#484848",
      dateblue:"#1A85D6",
      lightGray:"#F0F0F0",
      tableb:"#DADADA",
      brightwhite:"#FAFAFA"
    },

    
    
  },
  plugins: [],
}