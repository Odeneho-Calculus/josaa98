import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToHash } from './components/ScrollToHash'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import { PageSeo } from './components/PageSeo'
import Services from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  )
}

export function SiteRoutes() {
  return (
    <>
      <PageSeo />
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
