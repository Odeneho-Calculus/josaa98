import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Logo } from './Logo'

const PHONE = '0249778376'
const EMAIL = 'kwamenasackeyato@gmail.com'
const ADDRESS = 'Kumasi, Ghana'
const WHATSAPP = '233249778376'

const NAV = [
  ['Home', '/#home'],
  ['Services', '/#services'],
  ['About', '/#about'],
  ['Why Us', '/#why'],
  ['Projects', '/#projects'],
  ['Gallery', '/gallery'],
  ['Contact', '/#contact'],
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange" />
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Building your dreams with quality and reliability. Residential, commercial, and civil construction services in Ghana.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange">Quick Links</h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-white/80" aria-label="Footer">
              {NAV.map(([label, href]) => (
                <Link key={href} to={href} className="hover:text-brand-orange transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange">Legal</h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <Link to="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-orange">Contact Info</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <a href={`tel:${PHONE}`} className="hover:text-brand-orange transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-orange transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">
              Mon – Sat: 8:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 md:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Josaa98 Construction and Civil Works. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Your Project, Our Priority
          </p>
        </div>
      </div>
    </footer>
  )
}
