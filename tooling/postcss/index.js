/** @type {import('postcss').Config} */
const postcssConfig = {
  plugins: {
    "postcss-import": {},
    "postcss-flexbugs-fixes": {},

    "postcss-preset-env": {
      stage: 1,
    },

    tailwindcss: {},
  },
};

module.exports = { postcssConfig };
