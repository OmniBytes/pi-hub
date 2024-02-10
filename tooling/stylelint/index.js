const camelCase = "^[a-zA-Z][a-zA-Z0-9]*$";

/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-idiomatic-order"],

  rules: {
    "selector-class-pattern": [
      camelCase,
      {
        message: (selector) => `${selector} must be camelCase`,
      },
    ],

    "declaration-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment",
          "after-declaration",
          "first-nested",
          "inside-single-line-block",
        ],
      },
    ],
  },
};

export default stylelintConfig;
