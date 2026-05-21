import { motion } from 'framer-motion'
import { services, tests } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">हाम्रा सेवाहरू · Our Services</span>
          <h2 className="section-title">Complete diagnostic & pathology services</h2>
          <p className="text-slate-600 mt-4">सबै प्रकारका रगत परीक्षण, एक्स-रे, ECG, ECHO र डाक्टर परामर्श एकै ठाउँमा।</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card group hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 grid place-items-center text-2xl text-brand-700 mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <s.icon />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-900 mb-1.5">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Test list strip */}
        <div className="mt-16 bg-gradient-to-br from-brand-800 to-brand-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="relative">
            <span className="section-eyebrow !text-gold-400">उपलब्ध परीक्षण · Available Tests</span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-2">
              Common blood & diagnostic tests
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl">
              पूर्ण मूल्य सूचीको लागि WhatsApp मा सम्पर्क गर्नुहोस्। · For the full price list, message us on WhatsApp.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tests.map(t => (
                <div key={t.name} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 backdrop-blur border border-white/10">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold-400 shrink-0" />
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-white/60">{t.np}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
