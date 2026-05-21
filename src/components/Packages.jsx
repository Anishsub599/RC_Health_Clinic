import { motion } from 'framer-motion'
import { FaCheck, FaWhatsapp, FaStar } from 'react-icons/fa'
import { packages } from '../data/packages.js'
import { waLink } from '../data/config.js'

export default function Packages() {
  return (
    <section id="packages" className="section-pad bg-brand-50/50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">स्वास्थ्य प्याकेज · Health Packages</span>
          <h2 className="section-title">Affordable bundled health checkups</h2>
          <p className="text-slate-600 mt-4">प्याकेजमा बचत गर्नुहोस् — धेरै परीक्षण, एकै मूल्य, र डाक्टर परामर्श निःशुल्क।</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative bg-white rounded-3xl p-6 shadow-card border ${p.popular ? 'border-accent-500 ring-2 ring-accent-400/30 lg:-translate-y-3' : 'border-slate-100'}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-gold-400" /> Most Popular
                </div>
              )}
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${p.color} mb-5`} />
              <h3 className="font-display font-extrabold text-xl text-brand-900">{p.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{p.tagline}</p>
              <div className="font-display text-3xl font-extrabold text-brand-800 mb-1">{p.price}</div>
              <div className="text-xs text-slate-500 mb-5">One-time, all tests included</div>

              <ul className="space-y-2.5 mb-6">
                {p.includes.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <FaCheck className="text-accent-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`नमस्ते! म R.C. Health Clinic मा *${p.name}* प्याकेज (${p.price}) बुक गर्न चाहन्छु। कृपया उपलब्धता बताउनुहोस्।`)}
                target="_blank" rel="noreferrer"
                className="w-full btn-whatsapp !py-2.5 text-sm"
              >
                <FaWhatsapp /> बुक गर्नुहोस् · Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          आफ्नो आवश्यकता अनुसार प्याकेज चाहिन्छ? <a href="#book" className="text-brand-700 font-semibold underline">हामीलाई भन्नुहोस् →</a>
        </p>
      </div>
    </section>
  )
}
