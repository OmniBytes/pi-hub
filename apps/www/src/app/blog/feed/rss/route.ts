import { generateRssFeed } from "~/lib/rss";

export async function GET(_request: Request) {
  const feed = await generateRssFeed();

  const response = new Response(feed.rss2(), {
    status: 200,
    statusText: "ok",
  });
  response.headers.append("content-type", "text/xml");

  return response;
}
