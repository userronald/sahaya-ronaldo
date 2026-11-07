/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F2EC",
        taupe: "#B9A895",
        charcoal: "#292827",
        muted: "#858585",
        sage: "#92978C",
      },
    },
  },
  plugins: [],
};
