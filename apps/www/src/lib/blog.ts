//! this is server only code
import fs from "fs";
import { join } from "path";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { format } from "@formkit/tempo";
import matter from "gray-matter";

import { markdownToHtml } from "~/lib/mdx";

interface Author {
  name: string;

  twitterHandle: string | undefined;
  githubHandle: string | undefined;
}

export interface Post {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  slug: string;

  data: {
    author: Author;

    title: string;
    description: string;
    date: string;
    previewImage: string | undefined;

    tags: string[];
    emojis: string[];
  };
}

const blogDirectory = join(process.cwd(), "/src/app/blog/_posts");

async function getPostSlugs() {
  "use server";

  return fs
    .readdirSync(blogDirectory, { withFileTypes: true })
    .map((file) => file.name);
}

export async function getPostBySlug(slug: string) {
  "use server";

  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { content, data } = matter(fileContents);
  if (data.date > format(new Date(), "YYYY-MM-DDTHH:mm:ss")) {
    //? if date in future, dont return post
    return;
  }

  const htmlContent = await markdownToHtml(content);
  return { content: htmlContent, data, slug: realSlug } as Post;
}

export async function getAllPosts() {
  "use server";
  const slugs = await getPostSlugs();

  const unsortedPosts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)),
  );

  //? sort by date in desc order, rm undefined
  const posts = unsortedPosts
    .filter(Boolean)
    .sort((firstPost, secondPost) =>
      firstPost.data.date > secondPost.data.date ? -1 : 1,
    );

  return posts;
}
