import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import { galleryImages } from '../data/gallery'

const categories = ['All photos', 'Foundations', 'Structures', 'Reinforcement', 'Earthworks', 'Our team']

function GalleryCard({ photo, index, onOpen }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!window.IntersectionObserver) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <button ref={ref} className="gallery-card group" onClick={event => onOpen(event.currentTarget)} aria-label={`View ${photo.title}`} style={{ '--reveal-delay': `${(index % 3) * 65}ms` }}>
      <div className="gallery-card-image">
        <img src={`/images/${photo.file}`} alt={photo.alt} loading="lazy" decoding="async" />
        <span className="gallery-expand"><Expand size={19} /></span>
        <span className="gallery-image-category">{photo.category}</span>
      </div>
      <div className="flex items-center justify-between gap-3 px-1 py-5">
        <h3 className="text-sm font-semibold sm:text-base">{photo.title}</h3>
        <ArrowUpRight size={19} className="shrink-0 text-navy/50 transition-colors group-hover:text-brand-orange" />
      </div>
    </button>
  )
}

function PhotoViewer({ photos, index, setIndex, onClose, returnFocus }) {
  const dialog = useRef(null)
  const photo = photos[index]
  const move = (direction) => setIndex(current => (current + direction + photos.length) % photos.length)
  useEffect(() => {
    const previousFocus = returnFocus
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current.showModal()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])
  return (
    <dialog ref={dialog} className="gallery-dialog" aria-labelledby="photo-title" aria-describedby="photo-description" onCancel={onClose}
      onClick={event => { if (event.target === dialog.current) onClose() }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
      }}>
      <div className="gallery-viewer">
        <div className="flex items-center justify-between gap-4 pb-4 text-white">
          <span className="text-xs font-semibold uppercase tracking-[.2em]">Josaa98 / {photo.category}</span>
          <button onClick={onClose} autoFocus className="gallery-viewer-button" aria-label="Close photo viewer"><X size={24} /></button>
        </div>
        <div className="gallery-viewer-image">
          <img key={photo.file} src={`/images/${photo.file}`} alt={photo.alt} />
        </div>
        <div className="flex items-center justify-between gap-4 pt-5 text-white">
          <div><h2 id="photo-title" className="text-lg font-semibold">{photo.title}</h2><p id="photo-description" className="mt-1 max-w-xl text-xs leading-relaxed text-white/60">{photo.alt}</p></div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <button className="gallery-viewer-button" aria-label="Previous photo" onClick={() => move(-1)}><ChevronLeft /></button>
            <span className="text-xs tabular-nums text-white/70">{index + 1} / {photos.length}</span>
            <button className="gallery-viewer-button" aria-label="Next photo" onClick={() => move(1)}><ChevronRight /></button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default function Gallery() {
  const [category, setCategory] = useState('All photos')
  const [activeIndex, setActiveIndex] = useState(null)
  const opener = useRef(null)
  const photos = category === 'All photos' ? galleryImages : galleryImages.filter(photo => photo.category === category)
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Project Gallery | Josaa98 Construction and Civil Works'
    return () => { document.title = previousTitle }
  }, [])
  return (
    <>
      <section className="gallery-hero relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div className="gallery-intro relative z-10">
            <Link to="/" className="text-xs text-white/60 hover:text-brand-orange">Home</Link><span className="mx-3 text-white/30">/</span><span className="text-xs text-white/80">Gallery</span>
            <p className="mb-5 mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-brand-orange"><span className="h-px w-9 bg-brand-orange" /> Behind the build</p>
            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Real work.<br /><span className="text-brand-orange">Solid foundations.</span></h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">Step onto our sites. Explore the groundwork, structures and people that bring each build to life.</p>
            <a href="#collection" className="mt-8 inline-flex items-center gap-3 border-b border-brand-orange pb-2 text-sm font-semibold">Explore our gallery <ArrowDown size={17} className="text-brand-orange" /></a>
            <div className="mt-10 flex gap-8 border-t border-white/15 pt-6"><div><span className="text-2xl font-bold">22</span><p className="mt-1 text-xs text-white/60">Moments on site</p></div><div><span className="text-2xl font-bold">5</span><p className="mt-1 text-xs text-white/60">Collections to explore</p></div></div>
          </div>
          <div className="gallery-hero-collage" aria-hidden="true">
            <img className="gallery-hero-main" src="/images/concrete-frame-construction-overview.jpeg" alt="" fetchPriority="high" />
            <img className="gallery-hero-detail" src="/images/team-tying-column-reinforcement.jpeg" alt="" />
            <div className="gallery-hero-note"><span className="block text-xs uppercase tracking-[.2em] text-brand-orange">From the ground up</span><span className="mt-2 block text-sm font-semibold">Every stage. Every detail.</span></div>
          </div>
        </div>
      </section>

      <section id="collection" className="bg-[#F3F5F9] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-blue">Our company gallery</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A closer look at our work</h2></div><p className="text-sm text-navy/60">From preparation to progress.</p></div>
          <div className="mb-9 mt-8 flex flex-wrap items-center gap-2 border-b border-navy/10 pb-6" role="group" aria-label="Filter gallery by collection">
            {categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`gallery-filter ${category === item ? 'is-active' : ''}`}>{item}<span className="ml-2 text-xs opacity-60">{item === 'All photos' ? galleryImages.length : galleryImages.filter(photo => photo.category === item).length}</span></button>)}
          </div>
          <p className="mb-5 text-xs text-navy/60" role="status">Showing {photos.length} {photos.length === 1 ? 'photo' : 'photos'} · {category}</p>
          <div key={category} className="gallery-grid">
            {photos.map((photo, index) => <GalleryCard key={photo.file} photo={photo} index={index} onOpen={element => { opener.current = element; setActiveIndex(index) }} />)}
          </div>
        </div>
      </section>
      <section className="bg-white py-14"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-blue">Your project, our priority</p><h2 className="mt-3 text-3xl font-bold">Let’s build your next chapter.</h2><p className="mt-3 text-sm text-navy/65">Talk to us about your construction or civil works project.</p></div><Link to="/#contact" className="clip-btn inline-flex items-center gap-3 bg-brand-orange py-4 pl-7 pr-10 text-sm font-bold transition-colors hover:bg-navy hover:text-white">Start a conversation <ArrowRight size={18} /></Link></div></section>
      {activeIndex !== null && <PhotoViewer photos={photos} index={activeIndex} setIndex={setActiveIndex} returnFocus={opener.current} onClose={() => setActiveIndex(null)} />}
    </>
  )
}
