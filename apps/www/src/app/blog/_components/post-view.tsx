import type { Post } from "~/lib/blog";
import { MdxContent } from "~/app/blog/_components/mdx-content";

interface PostViewProps {
  post: Post;
}

export function PostView(props: PostViewProps) {
  const { post } = props;

  return (
    <div className="">
      <MdxContent content={post.content} />
    </div>
  );
}
