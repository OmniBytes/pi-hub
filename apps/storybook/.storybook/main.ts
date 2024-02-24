import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/nextjs";

function getAbsolutePath(path: string): any {
  return dirname(require.resolve(join(path, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-pseudo-states"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  docs: {
    autodocs: "tag",
  },
};

export default config;
