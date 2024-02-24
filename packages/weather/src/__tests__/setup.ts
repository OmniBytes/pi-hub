import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

beforeAll(() => {
  //   global.ResizeObserver = class ResizeObserver {
  //     observe() {}
  //     unobserve() {}
  //     disconnect() {}
  //   };

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: unknown) => ({
      matches: false,
      media: query,
      onchange: null,

      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
