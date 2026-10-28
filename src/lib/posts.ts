import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. Drafts only show up in `astro dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft
  );
  return posts.sort(
    (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
  );
}

export const postUrl = (post: Post) => `/posts/${post.id}/`;

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
