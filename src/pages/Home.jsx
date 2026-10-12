import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home as HomeIcon, Building2, HardHat, Hammer, ClipboardList,
  ShieldCheck, Clock, Handshake, Users, Send, ArrowRight,
  Phone, Mail, MapPin, Star, Quote
} from 'lucide-react'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'

const PHONE = '0249778376'
const WHATSAPP = '233249778376'
const EMAIL = 'kwamenasackeyato@gmail.com'
const ADDRESS = 'Accra, Ghana'

const SERVICES = [
  { icon: HomeIcon, title: 'Residential Construction', tag: 'Design | Build | Finish', img: 'residential.png' },
  { icon: Building2, title: 'Commercial Construction', tag: 'Offices | Shops | Warehouses', img: 'commercial.jpeg' },
  { icon: HardHat, title: 'Civil Works', tag: 'Roads | Drainage | Earthworks', img: 'civil.jpeg' },
  { icon: Hammer, title: 'Renovation & Remodeling', tag: 'Upgrade | Restore | Improve', img: 'renovation.jpeg' },
  { icon: ClipboardList, title: 'Project Management', tag: 'Planning | Supervision | Delivery', img: 'planning.jpeg' },
]

const VALUES = [
  { icon: ShieldCheck, title: 'Quality Workmanship', text: 'Solid construction built with care at every stage, from foundation to finish.' },
  { icon: Clock, title: 'On-Time Delivery', text: 'Careful planning and supervision to keep your project on schedule.' },
  { icon: Handshake, title: 'Affordable Rates', text: 'Fair pricing for residential, commercial and civil projects.' },
  { icon: Users, title: 'Experienced Team', text: 'A skilled team that takes your project from concept to completion.' },
]

const TESTIMONIALS = [
  {
    name: 'Kwame Asante',
    role: 'Homeowner',
    text: 'Josaa98 built our family home from foundation to finish. The quality of work exceeded our expectations and they finished right on schedule. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Ama Serwaa',
    role: 'Business Owner',
    text: 'They handled the full renovation of our retail shop. Professional team, transparent pricing, and excellent finishing. Our customers always compliment the new space.',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'Project Manager',
    text: 'We contracted Josaa98 for civil works on our estate development. Their earthworks and drainage systems were executed with precision. A reliable partner.',
    rating: 5,
  },
]

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute -left-24 -top-24 h-64 w-64 rotate-45 bg-brand-orange/90" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative z-10 pt-10 lg:pt-0">
          <h1 className="font-script text-5xl leading-tight sm:text-6xl xl:text-7xl">
            Building <span className="block text-brand-orange">Your Dreams</span>
            <span className="block text-3xl sm:text-4xl">With Quality &amp; Reliability</span>
          </h1>
          <div className="mt-4 h-1 w-40 rounded-full bg-brand-orange" />
          <p className="mt-8 max-w-md border-l-4 border-brand-orange pl-4 text-base leading-relaxed text-white/85">
            We deliver solid construction solutions for residential, commercial and civil projects.
            From concept to completion, we build with excellence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="clip-btn bg-brand-orange py-4 pl-8 pr-12 text-sm font-bold text-navy hover:bg-white transition-colors">
              Get a Free Quote
            </a>
            <a href="#services" className="border-2 border-white/70 px-8 py-[14px] text-sm font-bold hover:bg-white hover:text-navy transition-colors">
              Our Services
            </a>
          </div>
        </div>
        <div className="relative">
          <Photo file="hero.png" alt="Modern two-storey house built by Josaa98" className="clip-hero h-80 sm:h-[26rem] lg:h-[32rem]" />
          <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-orange" />
        </div>
      </div>
      <div className="relative bg-navy-800">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-3 lg:justify-center">
              <Icon className="text-brand-orange" size={30} strokeWidth={1.6} />
              <span className="text-sm font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle sub="Solid construction solutions for every stage of your project.">Our Services</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, tag, img }) => (
            <article key={title} className="group overflow-hidden border border-navy/10 bg-white transition-shadow hover:shadow-xl">
              <Photo file={img} alt={title} className="h-48" />
              <div className="relative p-6 pt-10">
                <span className="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-navy text-brand-orange">
                  <Icon size={28} strokeWidth={1.6} />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-navy/70">{tag}</p>
                <div className="mt-4 h-0.5 w-12 bg-brand-orange transition-all group-hover:w-full" />
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between bg-navy p-8 text-white">
            <div>
              <h3 className="font-script text-3xl text-brand-orange">Your Project, Our Priority</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">Tell us what you plan to build and we will take it from concept to completion.</p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-orange">
              Start your project <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <Photo file="commercial.jpeg" alt="Building under construction" className="col-span-2 h-64" />
          <Photo file="planning.jpeg" alt="Hard hat, blueprints and tape measure" className="h-44" />
          <Photo file="civil.jpeg" alt="Road construction with a roller" className="h-44" />
        </div>
        <div>
          <SectionTitle dark>About Josaa98</SectionTitle>
          <p className="-mt-4 max-w-xl leading-relaxed text-white/85">
            Josaa98 Construction and Civil Works delivers solid construction solutions for residential,
            commercial and civil projects. From concept to completion, we build with excellence.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">
            Whether you are designing a home, opening a shop, draining a site or grading a road,
            our team plans, supervises and delivers the work with quality and reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 font-bold text-brand-orange">
              <Phone size={20} /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 font-bold text-brand-orange">
              <Mail size={20} /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle sub="What you can expect when you build with us.">Why Choose Us</SectionTitle>
        <div className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-8">
              <Icon className="text-brand-orange" size={40} strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    ['hero.png', 'Residential', 'sm:col-span-2 sm:row-span-2 h-72 sm:h-full'],
    ['commercial.jpeg', 'Commercial', 'h-56'],
    ['civil.jpeg', 'Civil Works', 'h-56'],
    ['renovation.jpeg', 'Renovation', 'h-56 sm:col-span-2'],
  ]
  return (
    <section id="projects" className="bg-[#F3F5F9] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle sub="A look at the kind of work we build.">Our Work</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-4 sm:grid-rows-[14rem_14rem]">
          {items.map(([file, label, cls]) => (
            <figure key={label} className={`relative ${cls}`}>
              <Photo file={file} alt={label} className="h-full w-full" />
              <figcaption className="absolute bottom-0 left-0 bg-brand-orange px-4 py-2 text-sm font-bold text-navy">{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/gallery" className="inline-flex items-center gap-3 bg-navy px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange hover:text-navy">Explore our company gallery <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle sub="Hear from clients who have trusted us with their projects.">What Clients Say</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="relative border border-navy/10 bg-[#F3F5F9] p-8">
              <Quote className="absolute right-6 top-6 text-brand-orange/20" size={40} />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/80">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-navy/60">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', phone: '', service: SERVICES[0].title, message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const text = `Hello Josaa98, my name is ${f.name} (${f.phone}). I need: ${f.service}. ${f.message}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  const field = 'w-full border border-navy/20 bg-white px-4 py-3 text-sm focus:border-brand-orange'
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionTitle sub="Tell us about your project and we will get back to you.">Contact Us Today</SectionTitle>
          <a href={`tel:${PHONE}`} className="flex items-center gap-4 bg-navy p-6 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy"><Phone /></span>
            <span>
              <span className="block text-sm font-semibold text-brand-orange">Call us</span>
              <span className="block text-3xl font-extrabold">{PHONE}</span>
            </span>
          </a>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 border border-navy/10 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Mail size={20} />
              </span>
              <div>
                <span className="block text-xs font-semibold text-navy/60">Email</span>
                <a href={`mailto:${EMAIL}`} className="text-sm font-bold hover:text-brand-orange transition-colors">{EMAIL}</a>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-navy/10 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <MapPin size={20} />
              </span>
              <div>
                <span className="block text-xs font-semibold text-navy/60">Office Address</span>
                <span className="text-sm font-bold">{ADDRESS}</span>
              </div>
            </div>
          </div>
          <p className="mt-8 font-script text-3xl text-brand-blue">Your Project, Our Priority</p>
        </div>
        <form onSubmit={submit} className="space-y-4 border-t-4 border-brand-orange bg-[#F3F5F9] p-8">
          <label className="block text-sm font-semibold">Your name
            <input required value={f.name} onChange={set('name')} className={`${field} mt-1 font-normal`} />
          </label>
          <label className="block text-sm font-semibold">Phone number
            <input required type="tel" value={f.phone} onChange={set('phone')} className={`${field} mt-1 font-normal`} />
          </label>
          <label className="block text-sm font-semibold">Service needed
            <select value={f.service} onChange={set('service')} className={`${field} mt-1 font-normal`}>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Project details
            <textarea rows="4" value={f.message} onChange={set('message')} className={`${field} mt-1 font-normal`} />
          </label>
          <button className="clip-btn inline-flex items-center gap-2 bg-brand-orange py-4 pl-8 pr-12 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors">
            <Send size={16} /> Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Why />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
