#!/usr/bin/env node
import { chromium } from 'playwright';
const url = process.argv[2];
const selector = process.argv[3] || 'main';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'domcontentloaded' });
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.waitForTimeout(800);
const info = await page.evaluate((sel) => {
  const out = [];
  document.querySelectorAll(sel).forEach((el) => {
    const r = el.getBoundingClientRect();
    out.push({
      tag: el.tagName,
      class: el.className.slice(0, 200),
      x: Math.round(r.x), y: Math.round(r.y),
      w: Math.round(r.width), h: Math.round(r.height),
      cs: { display: getComputedStyle(el).display, gridTemplateColumns: getComputedStyle(el).gridTemplateColumns },
    });
  });
  return out;
}, selector);
console.log(JSON.stringify(info, null, 2));
await browser.close();
