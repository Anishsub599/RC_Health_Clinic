import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCalendarAlt, FaUser, FaPhone, FaFlask, FaCommentDots } from 'react-icons/fa'
import { LAB, waLink } from '../data/config.js'
import { tests } from '../data/services.js'
import { packages } from '../data/packages.js'

const allOptions = [
  ...packages.map(p => `${p.name} (Package - ${p.price})`),
  ...tests.map(t => t.name),
  'Other / Custom — I\'ll describe in message'
]

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: '', phone: '', test: '', date: '', time: '', notes: '', collection: 'visit'
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const buildMsg = () => {
    return [
      `*नयाँ अपोइन्टमेन्ट · New Appointment — R.C. Health Clinic*`,
      ``,
      `👤 नाम / Name: ${form.name || '-'}`,
      `📞 फोन / Phone: ${form.phone || '-'}`,
      `🧪 परीक्षण / Test: ${form.test || '-'}`,
      `📅 मिति / Date: ${form.date || '-'}`,
      `⏰ समय / Time: ${form.time || '-'}`,
      `📍 सेवा / Service: ${form.collection === 'home' ? 'घरमै स्याम्पल सेवा · Home Sample Collection' : 'ल्याबमा आउँदै · Visit Lab'}`,
      form.notes ? `📝 थप / Notes: ${form.notes}` : null,
      ``,
      `कृपया मेरो बुकिङ् पुष्टि गर्नुहोस्। धन्यवाद!`
    ].filter(Boolean).join('\n')
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      alert('कृपया नाम र फोन नम्बर भर्नुहोस्। · Please fill in your name and phone number.')
      return
    }
    window.open(waLink(buildMsg()), '_blank')
  }

  return (
    <section id="book" className="section-pad bg-gradient-to-br from-brand-800 via-brand-800 to-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -z-0" />

      <div className="container-x relative z-10 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left: pitch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="section-eyebrow !text-gold-400">अपोइन्टमेन्ट · Book Appointment</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            30 सेकेन्डमा बुक गर्नुहोस्।
          </h2>
          <p className="text-xl text-white/90 mb-5">Book in 30 seconds — straight to WhatsApp.</p>
          <p className="text-white/80 mb-8 leading-relaxed">
            तलको फारम भर्नुहोस्, तपाईंको विवरण सिधै हाम्रो WhatsApp मा आउँछ। हामी समय पुष्टि गर्छौं
            र रिपोर्ट तपाईंको फोनमा पठाउँछौं।
          </p>

          <ul className="space-y-3 text-white/90">
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-400 rounded-full shrink-0" /> उही दिनको समय उपलब्ध · Same-day slots</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-400 rounded-full shrink-0" /> पोखरामा घरमै स्याम्पल · Home collection in Pokhara</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-400 rounded-full shrink-0" /> WhatsApp मा डिजिटल रिपोर्ट</li>
          </ul>

          <div className="mt-10 p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-sm text-white/70 mb-1">फोन गर्न मन छ? · Prefer to call?</div>
            <a href={`tel:${LAB.phones[0]}`} className="font-display text-2xl font-extrabold text-gold-400">
              {LAB.phones[0]}
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={submit}
          className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-9 shadow-soft text-slate-800"
        >
          <h3 className="font-display font-extrabold text-brand-900 text-xl md:text-2xl mb-1">अपोइन्टमेन्ट विवरण · Appointment Details</h3>
          <p className="text-sm text-slate-500 mb-6">हामीले यो विवरण हाम्रो WhatsApp मा पाउँछौं — कुनै खाता वा साइनअप चाहिँदैन।</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field icon={<FaUser />} label="नाम · Full Name *">
              <input required value={form.name} onChange={set('name')} type="text" placeholder="तपाईंको नाम / Your name" className="input" />
            </Field>
            <Field icon={<FaPhone />} label="फोन · Phone Number *">
              <input required value={form.phone} onChange={set('phone')} type="tel" placeholder="98XXXXXXXX" className="input" />
            </Field>

            <Field icon={<FaFlask />} label="परीक्षण वा प्याकेज · Test or Package" className="sm:col-span-2">
              <select value={form.test} onChange={set('test')} className="input">
                <option value="">-- रोज्नुहोस् / Choose --</option>
                <optgroup label="स्वास्थ्य प्याकेज · Health Packages">
                  {packages.map(p => (
                    <option key={p.name} value={`${p.name} (Package - ${p.price})`}>
                      {p.name} — {p.price}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="व्यक्तिगत परीक्षण · Individual Tests">
                  {tests.map(t => (
                    <option key={t.name} value={t.name}>{t.name} · {t.np}</option>
                  ))}
                </optgroup>
                <option value="Other / Custom">अन्य / Other — I'll describe in message</option>
              </select>
            </Field>

            <Field icon={<FaCalendarAlt />} label="मिति · Preferred Date">
              <input value={form.date} onChange={set('date')} type="date" className="input" />
            </Field>
            <Field icon={<FaCalendarAlt />} label="समय · Preferred Time">
              <select value={form.time} onChange={set('time')} className="input">
                <option value="">-- रोज्नुहोस् / Select --</option>
                <option>बिहान · Morning (7AM – 10AM)</option>
                <option>दिउँसो अघि · Late Morning (10AM – 12PM)</option>
                <option>दिउँसो · Afternoon (12PM – 4PM)</option>
                <option>साँझ · Evening (4PM – 8PM)</option>
              </select>
            </Field>

            <Field label="सेवा प्रकार · Service Type" className="sm:col-span-2">
              <div className="flex gap-3">
                <label className={`flex-1 cursor-pointer px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all text-center
                  ${form.collection === 'visit' ? 'border-accent-500 bg-accent-500/10 text-brand-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                  <input type="radio" name="collection" value="visit" checked={form.collection === 'visit'} onChange={set('collection')} className="hidden" />
                  🏥 ल्याबमा आउने · Visit Lab
                </label>
                <label className={`flex-1 cursor-pointer px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all text-center
                  ${form.collection === 'home' ? 'border-accent-500 bg-accent-500/10 text-brand-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                  <input type="radio" name="collection" value="home" checked={form.collection === 'home'} onChange={set('collection')} className="hidden" />
                  🏠 घरमै स्याम्पल · Home Collection
                </label>
              </div>
            </Field>

            <Field icon={<FaCommentDots />} label="थप जानकारी · Additional Notes" className="sm:col-span-2">
              <textarea value={form.notes} onChange={set('notes')} rows="3" placeholder="अरू केही भन्नुपर्ने भए लेख्नुहोस्। · Anything else?" className="input resize-none" />
            </Field>
          </div>

          <button type="submit" className="btn-whatsapp w-full mt-6 !py-3.5 text-base">
            <FaWhatsapp className="text-xl" /> WhatsApp मा पठाउनुहोस् · Send Booking
          </button>

          <p className="text-xs text-slate-500 text-center mt-3">
            पठाउनेबित्तिकै WhatsApp खुल्छ। · Your details open in WhatsApp — review once, then tap send.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, icon, children, className = '' }) {
  return (
    <div className={className}>
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
        {icon && <span className="text-accent-600">{icon}</span>} {label}
      </label>
      {children}
    </div>
  )
}
