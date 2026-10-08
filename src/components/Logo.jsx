import { Link } from 'react-router-dom'

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Josaa98 home">
      <svg viewBox="0 0 64 56" className="h-11 w-12" aria-hidden="true">
        <rect x="8" y="14" width="10" height="30" fill="#2F6FE4" />
        <rect x="20" y="6" width="12" height="38" fill="#2F6FE4" />
        <rect x="34" y="20" width="10" height="24" fill="#FF9A0A" />
        <path d="M2 46 L32 26 L62 46" stroke="#FF9A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M40 4h22M52 4v12" stroke="#2F6FE4" strokeWidth="3" />
      </svg>
      <span className="leading-none">
        <span className="block text-2xl font-extrabold tracking-tight">
          <span className="text-brand-blue">JOSAA</span><span className="text-brand-orange">98</span>
        </span>
        <span className={`block text-[10px] font-bold tracking-wide mt-1 ${light ? 'text-white/80' : 'text-navy/70'}`}>
          CONSTRUCTION AND CIVIL WORKS
        </span>
      </span>
    </Link>
  )
}
