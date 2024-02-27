import { TracingScrollBeam } from "@omnibytes/ui/tracing-scroll-beam";

import type { Post } from "~/lib/blog";
import { MdxContent } from "~/app/blog/_components/mdx-content";
import { PostHeader } from "./post-header";

interface PostViewProps {
  post: Post;
}

export function PostView(props: PostViewProps) {
  const { post } = props;
  if (!post) return;

  return (
    <TracingScrollBeam>
      <article className="prose py-6 dark:prose-invert">
        <PostHeader post={post} />

        <MdxContent content={post.content} />
      </article>
    </TracingScrollBeam>
  );
}
