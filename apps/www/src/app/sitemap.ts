import type { MetadataRoute } from "next";

import { getAllPosts } from "~/lib/blog";
import { getAllPages } from "~/lib/page";

const BASE_URL = "https://omnibytes.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const pages = await getAllPages();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    })),

    ...pages.map((page) => ({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    })),
  ];
}
