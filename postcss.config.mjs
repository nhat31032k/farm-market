const config = {
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        secondary: "#f1faee",
        accent: "#a8dadc",
        dark: "#1d3557",
        light: "#f8f9fa",
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
