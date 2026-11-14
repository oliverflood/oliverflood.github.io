import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.url,
  integrations: [mdx(), sitemap()],
  // Old post URLs keep working
  redirects: {
    "/posts/clouds_1": "/posts/clouds",
  },
  markdown: {
    remarkPlugins: [remarkToc],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
    },
  },
});
