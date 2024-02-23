//! this is server only code
import fs from "fs";
import { join } from "path";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { format } from "@formkit/tempo";

import { markdownToHtml } from "~/lib/mdx";

export interface Page {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  > & {
    frontmatter: {
      title: string;
      description: string;
      date: string;
      previewImage: string | undefined;
    };
  };

  slug: string;
}

const pagesDirectory = join(process.cwd(), "/src/app/_pages");

export async function getPageBySlug(slug: string) {
  "use server";

  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(pagesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const mdxContent = await markdownToHtml(fileContents);
  const meta = mdxContent.frontmatter as Page["content"]["frontmatter"];
  if (meta.date > format(new Date(), "YYYY-MM-DDTHH:mm:ss")) {
    //? if date in future, dont return page
    return;
  }

  return { content: mdxContent, slug: realSlug } as Page;
}

async function getPagesSlugs() {
  "use server";

  return fs
    .readdirSync(pagesDirectory, { withFileTypes: true })
    .map((file) => file.name);
}

export async function getAllPages() {
  "use server";
  const slugs = await getPagesSlugs();

  const unfilterdPages = await Promise.all(
    slugs.map(async (slug) => await getPageBySlug(slug)),
  );

  const pages = unfilterdPages.filter(Boolean);
  return pages;
}
