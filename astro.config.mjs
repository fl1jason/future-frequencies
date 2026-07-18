import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
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
