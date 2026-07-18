import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.resonanceevents.co.uk',
  integrations: [react(), sitemap()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  output: 'static',
  vite: {
    ssr: {
      external: ['three'],
    },
    preview: {
      allowedHosts: ['future-frequencies.onrender.com', 'www.resonanceevents.co.uk', 'resonanceevents.co.uk', 'localhost'],
    },
  },
});
