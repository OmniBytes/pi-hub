//! this is server only code
import fs from "fs";
import { join } from "path";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { format } from "@formkit/tempo";

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
  > & {
    frontmatter: {
      author: Author;

      title: string;
      description: string;
      date: string;
      previewImage: string | undefined;

      tags: string[];
      emojis: string[];
    };
  };

  slug: string;
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

  const mdxContent = await markdownToHtml(fileContents);
  const meta = mdxContent.frontmatter as Post["content"]["frontmatter"];
  if (meta.date > format(new Date(), "YYYY-MM-DDTHH:mm:ss")) {
    //? if date in future, dont return post
    return;
  }

  return { content: mdxContent, slug: realSlug } as Post;
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
      firstPost.content.frontmatter.date > secondPost.content.frontmatter.date
        ? -1
        : 1,
    );

  return posts;
}
