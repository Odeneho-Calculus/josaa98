import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const PHONE = '0249778376'

const NAV = [
  ['Home', '/#home'],
  ['Services', '/#services'],
  ['About', '/#about'],
  ['Why Us', '/#why'],
  ['Projects', '/#projects'],
  ['Contact', '/#contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="text-sm font-semibold hover:text-brand-orange transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="clip-btn hidden lg:inline-flex items-center gap-2 bg-brand-orange py-3 pl-6 pr-10 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <Phone size={16} /> {PHONE}
        </a>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="h-1.5 bg-brand-orange" />
      {open && (
        <nav className="lg:hidden border-t border-navy/10 bg-white px-5 pb-4" aria-label="Mobile">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/10 py-3 text-sm font-semibold"
            >
              {label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex items-center justify-center gap-2 bg-brand-orange py-3 text-sm font-bold"
          >
            <Phone size={16} /> Call {PHONE}
          </a>
        </nav>
      )}
    </header>
  )
}
