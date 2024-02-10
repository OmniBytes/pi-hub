import { colors as themeColors } from "@omnibytes/colors";

export const colors = {
  ...themeColors,

  primary: {
    ...themeColors.primary,
    DEFAULT: themeColors.primary[500],
  },

  red: {
    ...themeColors.red,
    DEFAULT: themeColors.red[500],
  },

  orange: {
    ...themeColors.orange,
    DEFAULT: themeColors.orange[500],
  },

  yellow: {
    ...themeColors.yellow,
    DEFAULT: themeColors.yellow[500],
  },

  green: {
    ...themeColors.green,
    DEFAULT: themeColors.green[500],
  },

  blue: {
    ...themeColors.blue,
    DEFAULT: themeColors.blue[500],
  },

  purple: {
    ...themeColors.purple,
    DEFAULT: themeColors.purple[500],
  },
};
