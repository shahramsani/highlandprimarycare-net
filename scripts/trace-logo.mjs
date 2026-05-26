import sharp from 'sharp';
import potrace from 'potrace';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const INPUT = path.resolve('tmp/original-logo.png');
const OUT = path.resolve('public/images/logo.svg');

const COLORS = [
  { name: 'red',  hex: '#D52B3D', match: (r, g, b) => r > 150 && g < 90 && b < 90 },
  { name: 'blue', hex: '#2C8AC9', match: (r, g, b) => b > 140 && r < 120 && g > 90 && g < 200 },
  { name: 'black', hex: '#111111', match: (r, g, b) => r < 70 && g < 70 && b < 70 },
];

function traceMask(buffer, width, height) {
  return new Promise((resolve, reject) => {
    const tracer = new potrace.Potrace({
      threshold: 128,
      turdSize: 8,
      alphaMax: 1.0,
      optCurve: true,
      optTolerance: 0.4,
    });
    tracer.loadImage({ data: buffer, width, height, channels: 4 }, (err) => {
      if (err) return reject(err);
      resolve(tracer.getPathTag(''));
    });
  });
}

async function main() {
  const img = sharp(INPUT).ensureAlpha();
  const meta = await img.metadata();
  const { width, height } = meta;
  const raw = await img.raw().toBuffer();

  const layerPaths = [];
  for (const color of COLORS) {
    // build a monochrome mask: matching pixels => opaque black, else white
    const mask = Buffer.alloc(width * height * 4);
    for (let i = 0; i < width * height; i++) {
      const r = raw[i * 4];
      const g = raw[i * 4 + 1];
      const b = raw[i * 4 + 2];
      const a = raw[i * 4 + 3];
      const matched = a > 128 && color.match(r, g, b);
      const v = matched ? 0 : 255;
      mask[i * 4]     = v;
      mask[i * 4 + 1] = v;
      mask[i * 4 + 2] = v;
      mask[i * 4 + 3] = 255;
    }
    // potrace expects a PNG path or buffer for loadImage. Convert mask to PNG via sharp.
    const maskPng = await sharp(mask, { raw: { width, height, channels: 4 } }).png().toBuffer();
    const pathTag = await new Promise((resolve, reject) => {
      potrace.trace(maskPng, {
        threshold: 128,
        turdSize: 8,
        alphaMax: 1.0,
        optCurve: true,
        optTolerance: 0.4,
        color: color.hex,
        background: 'transparent',
      }, (err, svg) => {
        if (err) return reject(err);
        // potrace.trace returns a full svg; extract just the path
        const m = svg.match(/<path[^>]*\/>/);
        resolve(m ? m[0] : '');
      });
    });
    layerPaths.push(pathTag);
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Highland Primary Care">
  <title>Highland Primary Care</title>
${layerPaths.map((p) => '  ' + p).join('\n')}
</svg>
`;
  await fs.writeFile(OUT, svg, 'utf8');
  console.log('wrote', OUT, svg.length, 'bytes');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
