import { NextResponse } from "next/server";

import { generateRssFeed } from "~/lib/rss";

export async function GET(_request: Request) {
  const feed = await generateRssFeed();

  return NextResponse.json(feed.json1());
}
