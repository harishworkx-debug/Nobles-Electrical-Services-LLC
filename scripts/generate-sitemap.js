import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = 'https://www.nobleselectricalservices.com';
const TODAY = new Date().toISOString().split('T')[0];

// Read services.ts to extract slugs
const servicesFilePath = path.join(rootDir, 'src', 'data', 'services.ts');
const servicesContent = fs.readFileSync(servicesFilePath, 'utf-8');
const serviceSlugMatches = [...servicesContent.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

// Read locations.ts to extract serviceSlug and slug pairs
const locationsFilePath = path.join(rootDir, 'src', 'data', 'locations.ts');
const locationsContent = fs.readFileSync(locationsFilePath, 'utf-8');
const locationBlockRegex = /\{[\s\S]*?slug:\s*'([^']+)'[\s\S]*?serviceSlug:\s*'([^']+)'[\s\S]*?\}/g;
const locationPages = [];
let match;
while ((match = locationBlockRegex.exec(locationsContent)) !== null) {
  const locSlug = match[1];
  const serviceSlug = match[2];
  const fullSlug = `${serviceSlug}-${locSlug}`;
  if (!serviceSlugMatches.includes(fullSlug) && !locationPages.includes(fullSlug)) {
    locationPages.push(fullSlug);
  }
}

const mainPages = [
  '',
  'services',
  'service-areas',
  'reviews',
  'about',
  'contact',
  'faqs',
  'sitemap',
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

xml += `  <!-- Main Core Pages -->\n`;
for (const p of mainPages) {
  const loc = p ? `${DOMAIN}/${p}` : `${DOMAIN}/`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>\n`;
}

xml += `\n  <!-- Service Pages -->\n`;
for (const slug of serviceSlugMatches) {
  xml += `  <url>\n    <loc>${DOMAIN}/${slug}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>\n`;
}

xml += `\n  <!-- Service Area / Location Pages -->\n`;
for (const slug of locationPages) {
  xml += `  <url>\n    <loc>${DOMAIN}/${slug}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>\n`;
}

xml += `</urlset>\n`;

const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`Successfully generated ${sitemapPath} with ${mainPages.length + serviceSlugMatches.length + locationPages.length} URLs.`);
