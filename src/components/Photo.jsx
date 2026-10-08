import { useState } from 'react'

export function Photo({ file, alt, className = '' }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`relative overflow-hidden blueprint ${className}`}>
      {ok && (
        <img
          src={`/images/${file}`}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
