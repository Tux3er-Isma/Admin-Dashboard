// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://pymewebteam-reservation.netlify.app',
  outDir: './dist',
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  })
});