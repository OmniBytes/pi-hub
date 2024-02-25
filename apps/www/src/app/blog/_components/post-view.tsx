import Image from "next/image";

import { Title } from "@omnibytes/ui/title";
import { TracingScrollBeam } from "@omnibytes/ui/tracing-scroll-beam";

import type { Post } from "~/lib/blog";
import { MdxContent } from "~/app/blog/_components/mdx-content";

interface PostViewProps {
  post: Post;
}

export function PostView(props: PostViewProps) {
  const { post } = props;
  if (!post) return;
  const imageSource = post.content.frontmatter.previewImage;

  return (
    <TracingScrollBeam>
      <article className="prose py-6 dark:prose-invert">
        <Title>{post.content.frontmatter.title}</Title>

        {!!imageSource && (
          <Image
            src={imageSource}
            alt="blog preview image"
            width="718"
            height="404"
          />
        )}

        <MdxContent content={post.content} />
      </article>
    </TracingScrollBeam>
  );
}
