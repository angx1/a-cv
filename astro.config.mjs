import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://angx1.github.io/a-cv/',
    base: '/a-cv/',
    
    build: {
        assetsPrefix: './' // Ensure the asset URLs have the correct prefix
      },
});
