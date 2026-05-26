const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const DIST = path.join(__dirname, '..', 'dist');
const PORT = 5000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.json', '.svg', '.xml', '.txt']);

function resolvePath(urlPath) {
  let p = path.join(DIST, decodeURIComponent(urlPath));
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    p = path.join(p, 'index.html');
  }
  return p;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url.split('?')[0]);
  if (!fs.existsSync(filePath)) {
    const notFound = path.join(DIST, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404); res.end('Not found');
    }
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const acceptsGzip = /gzip/.test(req.headers['accept-encoding'] || '');
  const canCompress = COMPRESSIBLE.has(ext);

  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  if (ext === '.html') res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', mime);

  if (acceptsGzip && canCompress) {
    res.setHeader('Content-Encoding', 'gzip');
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => console.log('Serving dist on http://localhost:' + PORT));
