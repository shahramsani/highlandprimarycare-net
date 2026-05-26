#!/usr/bin/env node
// Headless screenshot helper for visual verification during development.
// Usage:
//   node scripts/screenshot.mjs <url> <output-path> [width=1440] [height=900] [fullPage=false]
//
// Example:
//   node scripts/screenshot.mjs http://localhost:4321/ tmp/home.png
//   node scripts/screenshot.mjs http://localhost:4321/about-us/ tmp/about.png 1440 900 true

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const [, , urlArg, outArg, wArg = '1440', hArg = '900', fullPageArg = 'false'] = process.argv;
if (!urlArg || !outArg) {
  console.error('Usage: node scripts/screenshot.mjs <url> <output> [width=1440] [height=900] [fullPage=false]');
  process.exit(2);
}

const out = resolve(outArg);
await mkdir(dirname(out), { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: Number(wArg), height: Number(hArg) },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
});
const page = await ctx.newPage();
await page.goto(urlArg, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForLoadState('domcontentloaded');
// Let fonts/animations settle
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: out, fullPage: fullPageArg === 'true' });
await browser.close();
console.log(out);
