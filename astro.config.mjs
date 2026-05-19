// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://60nn13.is-a.dev',
  redirects: {
    '/[...slug]': 'https://boni.surge.sh/[slug]'
  }
});
