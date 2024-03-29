/** @type {import("next").NextConfig} */
export const nextConfig = {
  output: "standalone",
  swcMinify: true,
  poweredByHeader: false,

  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@omnibytes/api",
    "@omnibytes/auth",
    "@omnibytes/db",
    "@omnibytes/db",
    "@omnibytes/ui",
    "@omnibytes/validators",
    "@omnibytes/weather",
  ],

  /** We already do linting and type-checking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
