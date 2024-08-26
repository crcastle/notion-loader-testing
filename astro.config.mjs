import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true
  },
  output: "server",
  adapter: netlify()
});