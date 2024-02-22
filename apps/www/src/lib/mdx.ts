import rehypeSectionize from "@hbsnow/rehype-sectionize";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

// import remarkGfm from "remark-gfm";

export async function markdownToHtml(markdown: string) {
  const mdx = await serialize(markdown, {
    parseFrontmatter: true,
    mdxOptions: {
      format: "mdx",
      remarkRehypeOptions: {},
      remarkPlugins: [],
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
