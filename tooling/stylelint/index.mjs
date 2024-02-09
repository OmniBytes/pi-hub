const camelCase = "^[a-zA-Z][a-zA-Z0-9]*$";

/** @type {import('stylelint').Config} */
export const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-idiomatic-order"],

  rules: {
    "selector-class-pattern": [
      camelCase,
      {
        message: (selector) => `${selector} must be camelCase`,
      },
    ],

    "declaration-emtpy-line-before": [
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
