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
    "@omnibytes/ui",
    "@omnibytes/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
