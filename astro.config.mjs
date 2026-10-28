import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { createCssVariablesTheme } from "shiki";

// https://astro.build/config
export default defineConfig({
  site: "https://margit.dev",
  integrations: [mdx(), sitemap()],
  // Code colors come from --shiki-* variables in global.css
  markdown: {
    shikiConfig: {
      theme: createCssVariablesTheme({ name: "shu", fontStyle: true }),
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Shippori Mincho",
      cssVariable: "--font-mincho",
      weights: ["400", "500"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Hiragino Mincho ProN", "Yu Mincho", "Georgia", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Zen Kaku Gothic New",
      cssVariable: "--font-gothic",
      weights: ["400", "500"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  redirects: {
    // Home now holds the bio and the post list
    "/about": "/",
    "/blog": "/",
    // Retired posts
    "/blog/dynamic-form-using-ant-design": "/",
    "/blog/how-to-use-feature-flags-with-react": "/",
    "/blog/what-is-lazy-state-and-when-to-use-it": "/",
  },
});
