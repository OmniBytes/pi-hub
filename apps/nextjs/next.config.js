import _jiti from "jiti";
import nPwa from "next-pwa";

import { nextConfig } from "@omnibytes/next-config";

const jiti = _jiti(new URL(import.meta.url).pathname);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");
jiti("@omnibytes/auth/env");

/** @type {import("next").NextConfig} */
const config = {
  ...nextConfig,
};

const withPWA = nPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(config);
