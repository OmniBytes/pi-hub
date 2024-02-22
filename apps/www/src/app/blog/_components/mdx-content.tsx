"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";

interface MdxContentProps {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

export function MdxContent(props: MdxContentProps) {
  const { content } = props;

  return (
    <article className="prose py-6 dark:prose-invert">
      <MDXRemote {...content} />
    </article>
  );
}
