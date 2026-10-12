import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'
import { getPageSeo, sitePages, SITE_URL } from '../src/data/seo.js'
import { galleryImages } from '../src/data/gallery.js'

const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))
const template = await fs.readFile('dist/index.html', 'utf8')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
  for (const pathname of [...Object.keys(sitePages), '/404']) {
    const seo = getPageSeo(pathname)
    let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(seo.title)}</title>`)
    const tags = {
      'name="description"': seo.description, 'name="robots"': seo.robots,
      'property="og:title"': seo.title, 'property="og:description"': seo.description, 'property="og:url"': seo.url,
      'name="twitter:title"': seo.title, 'name="twitter:description"': seo.description, 'name="twitter:url"': seo.url,
    }
    for (const [attribute, value] of Object.entries(tags)) {
      html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*("\\s*/?>)`), `$1${escape(value)}$2`)
    }
    html = html.replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${seo.url}$2`)
    html = html.replace('<div id="root"></div>', `<div id="root">${render(pathname)}</div>`)
    if (pathname !== '/404') {
      const page = {
        '@context': 'https://schema.org', '@type': pathname === '/gallery' ? 'ImageGallery' : 'WebPage',
        '@id': `${seo.url}#webpage`, url: seo.url, name: seo.title, description: seo.description,
        isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': `${SITE_URL}/#business` },
        ...(pathname === '/gallery' ? { image: galleryImages.map(photo => ({ '@type': 'ImageObject', contentUrl: `${SITE_URL}/images/${photo.file}`, caption: photo.title, description: photo.alt })) } : {}),
      }
      html = html.replace('</head>', `<script type="application/ld+json" data-page-schema="${pathname}">${JSON.stringify(page).replace(/</g, '\\u003c')}</script>\n</head>`)
    }
    const destination = pathname === '/' ? 'dist/index.html' : pathname === '/404' ? 'dist/404.html' : `dist${pathname}/index.html`
    await fs.mkdir(path.dirname(destination), { recursive: true })
    await fs.writeFile(destination, html)
    console.log(`Prerendered ${pathname}: content, metadata and canonical URL`)
  }
  const imageEntries = galleryImages.map(photo => `<image:image><image:loc>${SITE_URL}/images/${photo.file}</image:loc></image:image>`).join('')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${Object.keys(sitePages).map(route => `<url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc>${route === '/gallery' ? imageEntries : ''}</url>`).join('\n')}\n</urlset>\n`
  await fs.writeFile('dist/sitemap.xml', sitemap)
} finally {
  await server.close()
}
