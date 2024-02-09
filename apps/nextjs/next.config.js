import _jiti from "jiti";

const jiti = _jiti(new URL(import.meta.url).pathname);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");
jiti("@omnibytes/auth/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@omnibytes/api",
    "@omnibytes/auth",
    "@omnibytes/db",
    "@omnibytes/ui",
    "@omnibytes/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
