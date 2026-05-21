import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { LAB, waLink } from '../data/config.js'

const SLIDE_MS = 6000

// Cinematic stagger — eyebrow → titles → sub → CTAs → pills appear in sequence.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
}
const itemVariants = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: 0.35, ease: 'easeIn' } }
}

// Hero carousel — auto-advances every ~5.5s.
// `fit: 'contain'` lets a slide show the full image without cropping
// (used for the services panel which has text we don't want to lose).
const slides = [
  {
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80',
    fit: 'cover',
    eyebrow: 'Accurate · Trusted · Modern',
    titleNp: 'भरपर्दो परीक्षण,',
    titleEn: 'Trusted Care.',
    sub: 'कम्प्युटराइज्ड प्याथोलोजी, डिजिटल एक्स-रे र अनुभवी स्टाफ। · Computerised pathology, digital X-Ray & expert staff.'
  },
  {
    img: '/lab-board.jpg',
    fit: 'cover',
    eyebrow: 'R.C. Health Clinic · Rambazar',
    titleNp: 'जनरल स्वास्थ्य परीक्षण',
    titleEn: 'General Health Checkup.',
    sub: 'Kiran Gurung Medical साँगै, रामबजार, पोखरा-१०। · Located alongside Kiran Gurung Medical, Pokhara-10.'
  },
  {
    img: '/lab-services.jpg',
    fit: 'cover',
    eyebrow: 'Our Services · हाम्रा सेवाहरू',
    titleNp: '२५+ परीक्षण',
    titleEn: 'One Package.',
    sub: 'होल बडी चेकअप मात्र NPR 3,500 बाट सुरु। · Whole Body Checkup from NPR 3,500.'
  }
]

const trustPills = [
  { en: 'Computerised Pathology', np: 'कम्प्युटराइज्ड' },
  { en: 'Digital X-Ray',          np: 'डिजिटल एक्स-रे' },
  { en: 'ECG & ECHO',             np: 'मुटु जाँच' },
  { en: 'Doctor on Site',         np: 'डाक्टर उपलब्ध' }
]

export default function Hero() {
  const [i, setI] = useState(0)

  // Preload every slide image once on mount — without this, the browser only
  // fetches each image when its slide first renders, which causes a visible
  // hitch (decode + paint) the first time the carousel reaches a heavy image.
  useEffect(() => {
    slides.forEach(s => {
      const img = new Image()
      img.decoding = 'async'
      img.src = s.img
    })
  }, [])

  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  const slide = slides[i]

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background slides — slow ken-burns zoom + cinematic crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt=""
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full h-full object-cover animate-slow-zoom"
            style={{ willChange: 'transform, opacity' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/60 to-brand-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — staggered reveal each time the slide changes */}
      <div className="container-x relative z-10 py-20 md:py-28 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl"
          >
            <motion.span variants={itemVariants} className="inline-block bg-gold-400 text-brand-900 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              {slide.eyebrow}
            </motion.span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.1] mb-5">
              <motion.span variants={itemVariants} className="block text-gold-400">{slide.titleNp}</motion.span>
              <motion.span variants={itemVariants} className="block">{slide.titleEn}</motion.span>
            </h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-white/90 mb-8 max-w-xl">
              {slide.sub}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <a href="#book" className="btn-accent">
                अपोइन्टमेन्ट · Book Now <FaArrowRight />
              </a>
              <a href={waLink('नमस्ते! म R.C. Health Clinic मा परीक्षण बुक गर्न चाहन्छु।')}
                 target="_blank" rel="noreferrer" className="btn-whatsapp">
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>
              <a href="#packages" className="btn-outline">
                प्याकेज · Packages
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 text-sm">
              {trustPills.map(t => (
                <div key={t.en} className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                  <FaCheckCircle className="text-accent-400 shrink-0" />
                  <span>{t.en} <span className="text-white/60">· {t.np}</span></span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${idx === i ? 'w-10 bg-gold-400' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide progress bar — refills with each slide so users can see the rotation cadence */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-10">
        <motion.div
          key={i}
          className="h-full bg-gradient-to-r from-gold-400 to-accent-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
        />
      </div>
    </section>
  )
}
