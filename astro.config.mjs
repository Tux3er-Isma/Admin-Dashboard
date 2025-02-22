// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  output: 'server',
  adapter: vercel()
});