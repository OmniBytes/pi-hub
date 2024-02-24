import type { RenderOptions } from "@testing-library/react";
import type { FC, ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";

interface Component {
  children: ReactNode;
}

interface RenderWithOptions extends RenderOptions {
  example?: string;
}

//? use this to wrap needed providers for testing
export function Wrapper(props: Component) {
  return props.children;
}

function render(ui: ReactElement, options: RenderWithOptions = {}) {
  const { example: _example, ...renderOptions } = options;

  const wrapper: FC<Component> = ({ children }) => (
    <Wrapper>{children}</Wrapper>
  );

  return rtlRender(ui, { wrapper, ...renderOptions });
}

//? re-export everything and override render
export * from "@testing-library/react";
export { render };
