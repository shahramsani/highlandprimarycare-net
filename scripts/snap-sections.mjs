#!/usr/bin/env node
/**
 * Snapshot multiple viewports of a single page by scroll position.
 * Useful for reviewing a long page section-by-section.
 *
 * Usage:
 *   node scripts/snap-sections.mjs <url> <outDirOrPrefix> [width=1440] [height=900]
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const [, , urlArg, outArg, wArg = '1440', hArg = '900'] = process.argv;
if (!urlArg || !outArg) {
  console.error('Usage: node scripts/snap-sections.mjs <url> <outPrefix> [w] [h]');
  process.exit(2);
}
await mkdir(dirname(resolve(outArg)), { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: Number(wArg), height: Number(hArg) },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
});
const page = await ctx.newPage();
await page.goto(urlArg, { waitUntil: 'domcontentloaded', timeout: 20000 });
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.waitForTimeout(800);
// promote .reveal to visible so we don't capture mid-animation
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  document.querySelectorAll('[data-target]').forEach((el) => {
    const target = el.dataset.target;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (target != null) el.textContent = `${prefix}${target}${suffix}`;
  });
});
await page.waitForTimeout(400);

const total = await page.evaluate(() => document.documentElement.scrollHeight);
const vh = Number(hArg);
const steps = Math.ceil(total / vh);
for (let i = 0; i < steps; i++) {
  const y = i * vh;
  await page.evaluate((py) => window.scrollTo(0, py), y);
  await page.waitForTimeout(150);
  const out = `${outArg}-${String(i).padStart(2, '0')}.png`;
  await page.screenshot({ path: out, fullPage: false });
  console.log('✓', out);
}
await browser.close();
console.log('done');
