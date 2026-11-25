import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pages, render } from '../dist-ssr/entry-server.js';

const site = 'https://www.desentupidoraltec.com.br';
const social = site + '/assets/web/litoraltec-social.jpg';
const dist = 'dist';
const template = await readFile(join(dist, 'index.html'), 'utf8');
if (!template.includes('<!-- page-meta -->') || !template.includes('<!-- page-body -->')) {
  throw new Error('Marcadores de pré-renderização ausentes.');
}

const entities = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
const escape = (value) => value.replace(/[&"<>]/g, (char) => entities[char]);

for (const page of pages) {
  const { markup, meta } = render(page);
  const head = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}">`,
    `<meta name="robots" content="${escape(meta.robots)}">`,
    `<link rel="canonical" href="${site + meta.path}">`,
    `<meta property="og:type" content="${page.startsWith('/blog/') ? 'article' : 'website'}">`,
    `<meta property="og:title" content="${escape(meta.title)}">`,
    `<meta property="og:description" content="${escape(meta.description)}">`,
    `<meta property="og:url" content="${site + meta.path}">`,
    `<meta property="og:image" content="${social}">`,
    `<meta name="twitter:title" content="${escape(meta.title)}">`,
    `<meta name="twitter:description" content="${escape(meta.description)}">`,
    `<meta name="twitter:image" content="${social}">`,
  ];
  if (meta.jsonLd) {
    const data = JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c');
    head.push(`<script type="application/ld+json" id="jsonld-pagina">${data}</script>`);
  }
  const file = page === '/404' ? join(dist, '404.html') : join(dist, page.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, template
    .replace('<!-- page-meta -->', () => head.join('\n    '))
    .replace('<!-- page-body -->', () => markup));
}

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
const entries = pages.filter((page) => page !== '/404').map((page) => `  <url><loc>${site + page}</loc></url>`);
await writeFile(join(dist, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries, '</urlset>', '',
].join('\n'));

console.log(`${pages.length} páginas HTML geradas em ${dist}/`);
