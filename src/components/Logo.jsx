import { Link } from 'react-router-dom'

export function Logo({ light = false }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Josaa98 home">
      <img src={light ? '/images/brand/josaa98-logo-horizontal-light.png' : '/images/brand/josaa98-logo-horizontal.png'} alt="Josaa98 Construction and Civil Works" className={light ? 'h-auto w-64 max-w-full object-contain object-left' : 'h-auto w-56 max-w-[65vw] object-contain object-left sm:w-60'} />
    </Link>
  )
}
