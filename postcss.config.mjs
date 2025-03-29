const config = {
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#8BC34A",
        accent: "#FFC107",
        dark: "#2E7D32",
        light: "#F1F8E9",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
