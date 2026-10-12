import { useState } from 'react'

export function Photo({ file, alt, className = '', priority = false }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`relative overflow-hidden blueprint ${className}`}>
      {ok && (
        <img
          src={`/images/${file}`}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
