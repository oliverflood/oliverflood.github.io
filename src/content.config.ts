import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      tags: z.array(z.string()).default([]),
      // Hand-drawn doodle shown next to the post in lists and at the top of the post.
      // Until one exists, a placeholder blob is drawn instead.
      doodle: image().optional(),
      author: z.string().optional(),
    }),
});

export const collections = { blog };
