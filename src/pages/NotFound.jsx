import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#F3F5F9] px-5 py-20">
      <div className="text-center">
        <AlertTriangle className="mx-auto text-brand-orange" size={64} />
        <h1 className="mt-6 text-6xl font-extrabold text-navy">404</h1>
        <p className="mt-4 text-lg font-semibold text-navy/80">Page Not Found</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-navy/60">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-brand-orange px-8 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
