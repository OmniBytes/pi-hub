import { PostPreview } from "~/app/blog/_components/post-preview";
import { getAllPosts } from "~/lib/blog";

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-col gap-10">
      {allPosts.map((post) => {
        return <PostPreview key={post.slug} post={post} />;
      })}
    </div>
  );
}
