import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

export const webConfig = defineConfig({
  plugins: [react()],

  test: {
    include: ["**/*.{test,spec,unit}.{ts,tsx}"],
    exclude: [...configDefaults.exclude],

    environment: "jsdom",
    setupFiles: "./__tests__/web.setup.ts",

    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["json"],
    },
  },
});
