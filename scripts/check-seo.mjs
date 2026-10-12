import assert from 'node:assert/strict'
import fs from 'node:fs'

const pages = ['index.html', 'services/index.html', 'gallery/index.html', 'privacy/index.html', 'terms/index.html', '404.html']
const titles = new Set()
for (const page of pages) {
  const html = fs.readFileSync(`dist/${page}`, 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title), `Missing or duplicate title: ${page}`)
  titles.add(title)
  assert.match(html, /<h1[\s>]/, `No readable prerendered heading: ${page}`)
  assert.match(html, /<a[^>]+href=/, `No discoverable links: ${page}`)
  assert(!html.includes('josaa98.com'), `Old domain: ${page}`)
  assert.match(html, /rel="canonical" href="https:\/\/josaa98\.org\//)
  assert.match(html, /name="description" content="[^" ]/)
  if (page === '404.html') assert.match(html, /name="robots" content="noindex, follow"/)
  else assert(!html.includes('content="noindex'), `Unexpected indexing block: ${page}`)
  for (const schema of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(schema[1])
  for (const asset of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    const url = asset[1]
    if (/\.(png|jpeg|svg|js|css|webmanifest)$/.test(url)) assert(fs.existsSync(`dist${url}`), `Missing asset: ${url}`)
  }
}
const gallery = fs.readFileSync('dist/gallery/index.html', 'utf8')
assert.equal((gallery.match(/class="gallery-card group"/g) || []).length, 22, 'Gallery content missing from HTML')
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8')
assert.equal((sitemap.match(/<image:loc>/g) || []).length, 22, 'Image sitemap incomplete')
assert(!sitemap.includes('/404'), '404 included in sitemap')
assert.match(fs.readFileSync('dist/robots.txt', 'utf8'), /Sitemap: https:\/\/josaa98.org\/sitemap.xml/)
const flyer = fs.readFileSync('dist/images/brand/josaa98-social-flyer.png')
assert.equal(flyer.readUInt32BE(16), 1200)
assert.equal(flyer.readUInt32BE(20), 630)
console.log('SEO checks passed: rendered content, unique metadata, crawlable links, JSON-LD, images, sitemap, robots and noindex on 404.')
