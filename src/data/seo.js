export const SITE_URL = 'https://josaa98.org'
export const sitePages = {
  '/': { title: 'Josaa98 Construction & Civil Works | Building Contractor in Kumasi', description: 'Josaa98 provides residential construction, commercial construction, civil works, renovation and project management in Kumasi, Ghana. Call 0249778376.' },
  '/gallery': { title: 'Construction Project Gallery | Josaa98, Kumasi', description: 'Explore real Josaa98 site photos: foundations, concrete structures, reinforcement, earthworks and our construction team in Ghana.' },
  '/services': { title: 'Construction, Renovation & Civil Works Services | Josaa98 Kumasi', description: 'Explore Josaa98 residential and commercial construction, drainage, earthworks, renovation and project management services. Discuss your project with our Kumasi team.' },
  '/privacy': { title: 'Privacy Policy | Josaa98 Construction and Civil Works', description: 'Read how Josaa98 Construction and Civil Works handles enquiries and personal information. Contact kwamenasackeyato@gmail.com with questions.' },
  '/terms': { title: 'Terms of Service | Josaa98 Construction and Civil Works', description: 'Read the terms for using the Josaa98 website and requesting construction and civil works services in Ghana.' },
}
export const notFoundSeo = { title: 'Page Not Found | Josaa98', description: 'This page could not be found. Explore Josaa98 construction services, project photos and contact information.', robots: 'noindex, follow' }
export function getPageSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return { ...(sitePages[path] || notFoundSeo), url: SITE_URL + (path === '/' ? '/' : path), robots: sitePages[path] ? 'index, follow, max-image-preview:large' : notFoundSeo.robots }
}
