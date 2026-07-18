import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  base: '/future-frequencies/',
  integrations: [react()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  output: 'static',
  vite: {
    ssr: {
      external: ['three'],
    },
  },
});
