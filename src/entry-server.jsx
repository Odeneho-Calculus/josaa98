import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { SiteRoutes } from './App'

export function render(pathname) {
  return renderToString(<StaticRouter location={pathname}><SiteRoutes /></StaticRouter>)
}
