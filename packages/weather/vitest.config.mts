import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],

  test: {
    include: ["**/*.{test,spec,unit}.{ts,tsx}"],
    exclude: [...configDefaults.exclude],

    environment: "jsdom",
    globals: true,
    setupFiles: "src/__tests__/setup.ts",

    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["json", "html"],
    },
  },
});
