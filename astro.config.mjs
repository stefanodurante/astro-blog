import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://aesthetic-centaur-861f29.netlify.app/",
  integrations: [preact()]
});