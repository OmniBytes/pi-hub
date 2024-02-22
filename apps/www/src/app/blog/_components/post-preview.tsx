import Link from "next/link";
import { format, parse } from "@formkit/tempo";

import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import type { Post } from "~/lib/blog";

interface PostPreviewProps {
  post: Post;
}

export function PostPreview(props: PostPreviewProps) {
  const { post } = props;
  const { title, description, date } = post.data;

  const href = `/blog/${post.slug}`;
  const formattedDate = format(parse(date), { date: "long" });

  // TODO: display tags & emojis; maybe photo if prop set
  return (
    <Link href={href}>
      <div className="border-b border-solid border-primary">
        <Title className="mb-2">{title}</Title>

        <Text>{description}</Text>

        <Text>{formattedDate}</Text>
      </div>
    </Link>
  );
}
