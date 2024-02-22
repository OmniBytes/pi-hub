import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostView } from "~/app/blog/_components/post-view";
import { getAllPosts, getPostBySlug } from "~/lib/blog";

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

  return <PostView post={post} />;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(props.params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.content.frontmatter.title} | Omnibytes`;

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
