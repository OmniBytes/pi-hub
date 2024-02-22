import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "~/lib/blog";
import { markdownToHtml } from "~/lib/mdx-to-html";
import { MdxContent } from "../_components/mdx-content";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage(props: PageProps) {
  const { params } = props;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);
  return <MdxContent content={content} />;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(props.params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.data.title} | Omnibytes`;

  return {
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
