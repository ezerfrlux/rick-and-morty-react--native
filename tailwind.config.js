/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Colores inspirados en la imagen
        rickGreen: "#32FF7E", // Verde portal
        portalDarkGreen: "#0F3D1A", // Fondo oscuro del portal
        mortyYellow: "#FFD93D", // Camisa de Morty
        rickHairBlue: "#9AD1F5", // Cabello de Rick
        portalPurple: "#A078D1", // Tonos del portal/misteriosos
        backgroundDark: "#0B0C10", // Fondo general oscuro
        textLight: "#EAEAEA", // Texto claro
        textAccent: "#FF6B6B", // Detalles o alertas
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Profesional y legible
      },
    },
  },
  plugins: [],
};
