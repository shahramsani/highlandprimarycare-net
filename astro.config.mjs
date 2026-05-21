import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://highlandprimarycare.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false, // we manage our own base styles
    }),
    react(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/preview/') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/medicalweightloss/'),
      serialize(item) {
        // Boost priority for high-value commercial pages
        const highValue = [
          'https://highlandprimarycare.net/',
          'https://highlandprimarycare.net/medical-weight-loss/',
          'https://highlandprimarycare.net/testosterone-replacement-therapy/',
          'https://highlandprimarycare.net/semaglutide-pricing-sherman-tx/',
        ];
        if (highValue.includes(item.url)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['lucide-astro'],
    },
  },
  image: {
    domains: ['highlandprimarycare.net'],
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
