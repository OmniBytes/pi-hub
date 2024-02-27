import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "@formkit/tempo";
import { Github, Twitter } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@omnibytes/ui/avatar";
import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import type { Post } from "~/lib/blog";

interface PostViewProps {
  post: Post;
}

export function PostHeader(props: PostViewProps) {
  const { post } = props;
  if (!post) return;

  const imageSource = post.content.frontmatter.previewImage;
  const postAuthor = post.content.frontmatter.author;

  // @ts-expect-error git better at ts
  const initials = (postAuthor.name || "")
    .match(/(\b\S)?/g)
    .join("")
    .toUpperCase();

  const twitterUrl = `https://twitter.com/${postAuthor.twitterHandle}`;
  const githubUrl = `https://github.com/${postAuthor.githubHandle}`;
  const imgSrc = `${githubUrl}.png?size=50`;

  const date = format(post.content.frontmatter.date, "short");

  return (
    <Fragment>
      <Title className="mb-0">{post.content.frontmatter.title}</Title>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <Avatar className="mt-4">
            <AvatarImage src={imgSrc} className="mt-0" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <Text>{postAuthor.name}</Text>
        </div>

        <div className="flex gap-4 pt-6">
          {postAuthor.twitterHandle && (
            <Link href={twitterUrl} target="_blank">
              <Twitter size={24} />
            </Link>
          )}

          {postAuthor.githubHandle && (
            <Link href={githubUrl} target="_blank">
              <Github size={24} />
            </Link>
          )}

          <div className="inline-block h-6 w-0.5 self-stretch bg-green-500 opacity-100 dark:opacity-50" />

          <Text className="align-top [&:not(:first-child)]:mt-[-2px]">
            {date}
          </Text>
        </div>
      </div>

      {!!imageSource && (
        <Image
          src={imageSource}
          alt="blog preview image"
          width="718"
          height="404"
        />
      )}
    </Fragment>
  );
}
