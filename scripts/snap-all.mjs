#!/usr/bin/env node
// Batch screenshot every page at desktop + mobile, save to tmp/screenshots/<label>/.
// Usage:
//   node scripts/snap-all.mjs                   # default label "current"
//   node scripts/snap-all.mjs after-hero        # label this round of screenshots
//   node scripts/snap-all.mjs --pages=home,about
//
// Runs Playwright Chromium in parallel for speed.

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const BASE = process.env.SITE_BASE || 'http://localhost:4321';

const ROUTES = [
  { slug: 'home', path: '/' },
  { slug: 'about', path: '/about-us/' },
  { slug: 'services', path: '/our-services/' },
  { slug: 'weight-loss', path: '/medical-weight-loss/' },
  { slug: 'trt', path: '/testosterone-replacement-therapy/' },
  { slug: 'location', path: '/primary-care-sherman-tx-location/' },
  { slug: 'contact', path: '/contact-us/' },
  { slug: 'articles', path: '/health-articles/' },
  { slug: 'provider-sani', path: '/dr-shahram-sani/' },
  { slug: 'provider-keahey', path: '/diane-keahey/' },
  { slug: 'provider-warke', path: '/dr-amit-warke/' },
  { slug: 'svc-preventive', path: '/preventive-services/' },
  { slug: 'svc-chronic', path: '/management-of-chronic-conditions/' },
  { slug: 'svc-acute', path: '/acute-care-for-short-term-illnesses/' },
  { slug: 'svc-mental', path: '/mental-health-services/' },
  { slug: 'svc-elderly', path: '/elderly-care/' },
  { slug: 'svc-mens', path: '/mens-health-services/' },
  { slug: 'svc-nutrition', path: '/nutrition-counseling/' },
  { slug: 'svc-referrals', path: '/referrals-to-specialists/' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const args = process.argv.slice(2);
let label = 'current';
let onlyPages = null;
for (const a of args) {
  if (a.startsWith('--pages=')) onlyPages = a.slice(8).split(',');
  else if (!a.startsWith('--')) label = a;
}
const routes = onlyPages
  ? ROUTES.filter((r) => onlyPages.includes(r.slug))
  : ROUTES;

const outRoot = join('tmp', 'screenshots', label);
await mkdir(outRoot, { recursive: true });

const browser = await chromium.launch();

await Promise.all(
  routes.flatMap((route) =>
    VIEWPORTS.map(async (vp) => {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      try {
        // Don't wait for networkidle — the GHL booking iframe can hold network open
        // indefinitely. Use domcontentloaded + a brief font/animation settle.
        await page.goto(BASE + route.path, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await page.evaluate(() => document.fonts && document.fonts.ready);
        await page.waitForTimeout(800);
        // For fullPage screenshots, force animations to their final state so we don't
        // capture mid-flight across a long page.
        await page.evaluate(async () => {
          // Reveal: promote everything to its final visible state.
          document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
          // AnimatedStat: write the final value directly (skip count-up).
          document.querySelectorAll('[data-target]').forEach((el) => {
            const target = el.dataset.target;
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            if (target != null) el.textContent = `${prefix}${target}${suffix}`;
          });
          await new Promise((r) => setTimeout(r, 250));
        });
        const out = join(outRoot, `${route.slug}-${vp.name}.png`);
        await page.screenshot({ path: out, fullPage: true });
        console.log('✓', out);
      } catch (e) {
        console.error('✗', route.path, vp.name, e.message);
      } finally {
        await ctx.close();
      }
    }),
  ),
);

await browser.close();
console.log(`\nDone. ${routes.length * VIEWPORTS.length} shots in ${outRoot}/`);
