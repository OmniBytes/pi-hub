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

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
};
