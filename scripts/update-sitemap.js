import fs from 'fs';
import path from 'path';

const today = new Date().toISOString().split('T')[0];

const sitemapPath = path.resolve('public/sitemap.xml');
const robotsPath = path.resolve('public/robots.txt');

// Update sitemap.xml with current date
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
sitemap = sitemap.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(sitemapPath, sitemap);
console.log(`✅ Updated sitemap.xml with date: ${today}`);

// Ensure robots.txt has sitemap reference
let robots = fs.readFileSync(robotsPath, 'utf-8');
const sitemapLine = 'Sitemap: https://www.cloudwithstephen.com/sitemap.xml';

if (!robots.includes('Sitemap:')) {
  robots = robots.trim() + '\n\n' + sitemapLine + '\n';
  fs.writeFileSync(robotsPath, robots);
  console.log('✅ Added sitemap reference to robots.txt');
} else {
  console.log('✅ robots.txt already has sitemap reference');
}

console.log('🚀 SEO files updated for build!');
