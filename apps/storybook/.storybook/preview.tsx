import type { Preview } from "@storybook/react";
import React from "react";

import "../stories/globals.css";

function Wrapper(props: { children: React.ReactNode }) {
  return props.children;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (renderStory: Function) => <Wrapper>{renderStory()}</Wrapper>,
];
