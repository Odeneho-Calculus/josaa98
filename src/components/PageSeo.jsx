import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo } from '../data/seo'

export function PageSeo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = getPageSeo(pathname)
    document.title = seo.title
    const update = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)
    update('meta[name="description"]', seo.description)
    update('meta[name="robots"]', seo.robots)
    update('meta[property="og:title"]', seo.title)
    update('meta[property="og:description"]', seo.description)
    update('meta[property="og:url"]', seo.url)
    update('meta[name="twitter:title"]', seo.title)
    update('meta[name="twitter:description"]', seo.description)
    update('meta[name="twitter:url"]', seo.url)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.url)
    // Static page markup describes its original route; remove it after client navigation.
    document.querySelectorAll('script[data-page-schema]').forEach(element => {
      if (element.dataset.pageSchema !== pathname) element.remove()
    })
  }, [pathname])
  return null
}
