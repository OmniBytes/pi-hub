import { fileURLToPath } from "url";
import _jiti from "jiti";
import nPwa from "next-pwa";

import { nextConfig } from "@omnibytes/next-config";

const jiti = _jiti(fileURLToPath(import.meta.url));

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  ...nextConfig,
};

const withPWA = nPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(config);
