/** @type {import('postcss').Config} */
const postcssConfig = {
  plugins: {
    "postcss-import": {},
    "postcss-flexbugs-fixes": {},

    "postcss-preset-env": {
      stage: 1,
    },

    autoprefixer: {
      "postcss-nested": {},
      "postcss-simple-vars": {
        variables: {},
      },
    },

    tailwindcss: {},
  },
};

module.exports = { postcssConfig };
