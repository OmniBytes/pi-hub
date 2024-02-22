import type { Post } from "~/lib/blog";
import { MdxContent } from "~/app/blog/_components/mdx-content";

interface PostPreviewProps {
  post: Post;
}

export function PostView(props: PostPreviewProps) {
  const { post } = props;

  return (
    <div>
      <MdxContent content={post.content} />
    </div>
  );
}
