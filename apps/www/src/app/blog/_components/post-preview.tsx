import Link from "next/link";
import { format, parse } from "@formkit/tempo";

import { Badge } from "@omnibytes/ui/badge";
import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import type { Post } from "~/lib/blog";

interface PostPreviewProps {
  post: Post;
}

export function PostPreview(props: PostPreviewProps) {
  const { post } = props;
  const {
    title,
    description,
    date,
    tags = [],
    emojis = [],
  } = post.content.frontmatter;

  const href = `/blog/${post.slug}`;
  const formattedDate = format(parse(date), { date: "long" });

  return (
    <Link href={href}>
      <div className="border-b border-solid border-green-500">
        <Title className="mb-1">{title}</Title>

        <Text variant="muted">{description}</Text>

        {!!tags.length && (
          <div className="mt-2 flex gap-1">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-green-500">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="align-center mt-2 flex justify-between">
          <Text>{formattedDate}</Text>

          <div className="flex gap-1">
            {emojis.map((e) => (
              <span key={e}>{e}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
