import { defineConfig, mergeConfig } from "vitest/config";

import { webConfig } from "@omnibytes/vite-config";

export default mergeConfig(webConfig, defineConfig({}));
