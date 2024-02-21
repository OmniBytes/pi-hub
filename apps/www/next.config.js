// import nPwa from "next-pwa";
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import mdx from "@next/mdx";
import _jiti from "jiti";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

import { nextConfig } from "@omnibytes/next-config";

const jiti = _jiti(new URL(import.meta.url).pathname);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  ...nextConfig,

  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

// const withPWA = nPwa({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
// });

const withMDX = mdx({
  extension: /\.mdx?$/,
  rehypePlugins: [
    rehypeAutolinkHeadings,
    rehypeSectionize,
    rehypeSlug,
    rehypeToc,
  ],
});

export default withMDX(config);