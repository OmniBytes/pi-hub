import rehypeSectionize from "@hbsnow/rehype-sectionize";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

export async function markdownToHtml(markdown: string) {
  const mdx = await serialize(markdown, {
    mdxOptions: {
      format: "mdx",
      rehypePlugins: [
        rehypeAutolinkHeadings,

        rehypeSectionize,
        rehypeSlug,
        rehypeToc,
      ],
    },
  });

  return mdx;
}
