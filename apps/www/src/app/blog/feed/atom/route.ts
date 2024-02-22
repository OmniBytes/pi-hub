import { generateRssFeed } from "~/lib/rss";

export async function GET(_request: Request) {
  const _feed = await generateRssFeed();

  const response = new Response("", {
    status: 200,
    statusText: "ok",
  });

  response.headers.append("content-type", "text/xml");

  return response;
}
