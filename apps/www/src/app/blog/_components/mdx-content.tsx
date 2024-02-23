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
      <MDXRemote {...content} components={components} />
    </article>
  );
}
