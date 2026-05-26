import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('public/images/logo.svg');
const LIGHT_OUT = path.resolve('public/images/logo-mono-light.svg');
const ICON_OUT = path.resolve('public/images/logo-icon.svg');

const svg = await readFile(SRC, 'utf8');

// 1) Monochrome white variant — recolor all fills to white. Used on dark surfaces.
const mono = svg.replace(/fill="#[0-9A-Fa-f]{3,8}"/g, 'fill="#ffffff"');
await writeFile(LIGHT_OUT, mono, 'utf8');

// 2) Icon-only variant — drop the wordmark (black) path. Keep the red + blue marks.
// Match the three colored paths and keep only first two (red, blue).
const pathRe = /<path\b[^>]*\/>/g;
const paths = svg.match(pathRe) || [];
const headerMatch = svg.match(/^[\s\S]*?<title[^>]*>[\s\S]*?<\/title>\s*/);
const header = headerMatch ? headerMatch[0] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 444">';
// Keep first two paths (red H + blue rectangles); drop wordmark.
const iconPaths = paths.slice(0, 2).join('\n  ');
// Tightly crop to icon area roughly 100..345 wide × 110..330 tall in the 1080×444 art
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 110 245 220" role="img" aria-label="Highland Primary Care icon">
  <title>Highland Primary Care</title>
  ${iconPaths}
</svg>
`;
await writeFile(ICON_OUT, iconSvg, 'utf8');

console.log('wrote', LIGHT_OUT);
console.log('wrote', ICON_OUT);
