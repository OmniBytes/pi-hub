import Link from "next/link";
import { format, parse } from "@formkit/tempo";

import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import { getAllPosts } from "~/lib/blog";

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-col gap-10">
      {allPosts.map((post) => {
        const date = format(parse(post.data.date), { date: "long" });

        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border-b border-solid border-primary">
              <Title className="mb-2">{post.data.title}</Title>

              <Text>{post.data.description}</Text>

              <Text>{date}</Text>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
