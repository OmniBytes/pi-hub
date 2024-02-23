"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@omnibytes/ui/table";
import { Title } from "@omnibytes/ui/title";

interface MdxContentProps {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

export function MdxContent(props: MdxContentProps) {
  const { content } = props;

  const components = {
    Image,

    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
  };

  return (
    <article className="prose py-6 dark:prose-invert">
      <Title>{content.frontmatter.title as string}</Title>

      <Image
        src={content.frontmatter.previewImage as string}
        alt="blog preview image"
        width="718"
        height="404"
      />

      <MDXRemote {...content} components={components} />
    </article>
  );
}
