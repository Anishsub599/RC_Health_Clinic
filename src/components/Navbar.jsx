import { useEffect, useState } from 'react'
import { FaWhatsapp, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { LAB, waLink } from '../data/config.js'

const links = [
  { href: '#home',     en: 'Home',         np: 'गृह' },
  { href: '#about',    en: 'About',        np: 'हाम्रोबारे' },
  { href: '#services', en: 'Services',     np: 'सेवाहरू' },
  { href: '#packages', en: 'Packages',     np: 'प्याकेज' },
  { href: '#book',     en: 'Book',         np: 'अपोइन्टमेन्ट' },
  { href: '#contact',  en: 'Contact',      np: 'सम्पर्क' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-900 text-white text-sm">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-5 opacity-90">
            <span>📍 {LAB.address}</span>
            <span>🕒 {LAB.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${LAB.phones[0]}`} className="hover:text-gold-400 flex items-center gap-2">
              <FaPhoneAlt className="text-xs" /> {LAB.phones[0]}
            </a>
            <a href={waLink('Hi, I want to know more about R.C. Health Clinic services.')}
               target="_blank" rel="noreferrer"
               className="hover:text-gold-400 flex items-center gap-2">
              <FaWhatsapp /> {LAB.mobile}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav — sticky stays glued to top as you scroll the hero away */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft border-b border-slate-100/60' : 'bg-white border-b border-transparent'}`}>
        <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}>
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="R.C. Health Clinic"
              width="64"
              height="64"
              className="h-12 w-12 md:h-16 md:w-16 object-contain shrink-0 select-none"
              draggable="false"
            />
            <div className="leading-tight border-l-2 border-slate-100 pl-3">
              <div className="font-display font-extrabold text-brand-900 text-lg md:text-xl tracking-tight">R.C. Health Clinic</div>
              <div className="text-[11px] md:text-xs text-slate-500 -mt-0.5">Kiran Gurung Medical सँगै</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-7 font-medium text-slate-700">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand-700 transition-colors group">
                  <span>{l.en}</span>
                  <span className="block text-[10px] text-slate-400 group-hover:text-brand-600 -mt-0.5">{l.np}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="#book" className="btn-primary !py-2.5 !px-5 text-sm">Book Now · बुक</a>
            <a href={waLink('नमस्ते! म R.C. Health Clinic मा एउटा परीक्षण बुक गर्न चाहन्छु।')}
               target="_blank" rel="noreferrer"
               className="btn-whatsapp !py-2.5 !px-5 text-sm">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <button className="lg:hidden text-2xl text-brand-900" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <ul className="container-x flex flex-col gap-1 py-4">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}
                     className="block py-2 text-slate-700 font-medium hover:text-brand-700">
                    {l.en} <span className="text-xs text-slate-400">· {l.np}</span>
                  </a>
                </li>
              ))}
              <li className="flex gap-2 mt-3">
                <a href="#book" onClick={() => setOpen(false)} className="btn-primary !py-2.5 !px-4 text-sm flex-1">Book Now</a>
                <a href={waLink('नमस्ते! म एउटा परीक्षण बुक गर्न चाहन्छु।')} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2.5 !px-4 text-sm flex-1">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
