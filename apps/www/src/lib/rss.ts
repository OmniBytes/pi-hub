import { Feed } from "feed";

import { getAllPosts } from "~/lib/blog";

const BLOG_ROUTE = "https://omnibytes.io/blog";

export async function generateRssFeed() {
  const posts = await getAllPosts();

  const feed = new Feed({
    title: "Ombibytes Blog",
    description: "Developer blog",
    id: BLOG_ROUTE,
    link: BLOG_ROUTE,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    // image: "http://example.com/image.png",
    // favicon: "http://example.com/favicon.ico",
    copyright: "All rights reserved 2024, Omnibytes",
    // updated: new Date(2013, 6, 14), // optional, default = today
    generator: "Feed for dev blog", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${BLOG_ROUTE}/feed/json`,
      atom: `${BLOG_ROUTE}/feed/atom`,
      rss: `${BLOG_ROUTE}/feed/rss`,
    },
    author: {
      name: "Omnibytes",
      email: "contact+blog@omnibytes.com",
      link: "https://omnibytes.io/about",
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: post.slug,
      link: `${BLOG_ROUTE}/${post.slug}`,
      description: post.data.description,
      content: post.content.compiledSource,
      author: [
        {
          name: post.data.author.name,
          //   email: "janedoe@example.com",
          link: `https://twitter.com/${post.data.author.twitterHandle}`,
        },
      ],
      contributor: [],
      date: new Date(post.data.date),
      image: post.data.previewImage,
    });
  });

  feed.addCategory("Blog");
  feed.addCategory("React");
  feed.addCategory("Software Development");
  feed.addCategory("Technology");
  feed.addCategory("Typescript");

  feed.addContributor({
    name: "Michael Funk",
    // email: "johancruyff@example.com",
    link: "https://twitter.com/funkstyr",
  });

  return feed;
}
