module.exports = {
  env: {
    browser: true, // Si estás trabajando con Vue en el navegador
    es2021: true,
    node: true,
    jest: true // Si estás usando Jest para pruebas
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended", // Puedes agregar 'plugin:vue/vue3-recommended' si estás usando Vue 3
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2], // Cambia a 4 si prefieres 4 espacios
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
