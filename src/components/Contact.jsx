import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaEnvelope, FaClock } from 'react-icons/fa'
import { SiViber } from 'react-icons/si'
import { LAB, waLink, viberLink } from '../data/config.js'

const channels = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    sub: 'सबैभन्दा छिटो जवाफ',
    value: LAB.mobile,
    href: waLink('नमस्ते! म R.C. Health Clinic बारे जान्न चाहन्छु।'),
    color: 'bg-[#25D366]'
  },
  {
    icon: SiViber,
    label: 'Viber',
    sub: 'भाइबरमा सम्पर्क',
    value: LAB.mobile,
    href: viberLink('नमस्ते! म R.C. Health Clinic बारे जान्न चाहन्छु।'),
    color: 'bg-[#7360F2]'
  },
  {
    icon: FaPhoneAlt,
    label: 'फोन · Call',
    sub: 'सिधै फोन गर्नुहोस्',
    value: LAB.phones[0],
    href: `tel:${LAB.phones[0]}`,
    color: 'bg-brand-700'
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    sub: 'FB मा सन्देश',
    value: 'फेसबुक पेज',
    href: LAB.facebookUrl,
    color: 'bg-[#1877F2]'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">सम्पर्क · Get in Touch</span>
          <h2 className="section-title">हामी तपाईंलाई स्वस्थ राख्न यहाँ छौं</h2>
          <p className="text-slate-600 mt-4">तपाईंलाई मन पर्ने माध्यमबाट सम्पर्क गर्नुहोस् — हामी मिनेटमै जवाफ दिन्छौं।</p>
        </div>

        {/* Channel cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group card text-center hover:-translate-y-1 transition-transform"
            >
              <div className={`w-14 h-14 rounded-2xl ${c.color} text-white grid place-items-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <c.icon />
              </div>
              <div className="font-display font-bold text-brand-900">{c.label}</div>
              <div className="text-xs text-slate-500">{c.sub}</div>
              <div className="text-sm text-slate-700 mt-1 font-medium">{c.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Address + map */}
        <div className="grid md:grid-cols-2 gap-6 bg-brand-50/60 rounded-3xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-10">
            <h3 className="font-display text-2xl font-extrabold text-brand-900 mb-6">हाम्रो ल्याबमा आउनुहोस् · Visit Our Lab</h3>

            <InfoLine icon={<FaMapMarkerAlt />} title="ठेगाना · Address">
              {LAB.address}
            </InfoLine>
            <InfoLine icon={<FaPhoneAlt />} title="फोन · Phone">
              <div className="flex flex-col">
                {LAB.phones.map(p => (
                  <a key={p} href={`tel:${p}`} className="hover:text-brand-700">{p}</a>
                ))}
                <a href={`tel:${LAB.mobile}`} className="hover:text-brand-700">{LAB.mobile} (मोबाइल / WhatsApp)</a>
              </div>
            </InfoLine>
            <InfoLine icon={<FaEnvelope />} title="इमेल · Email">
              <a href={`mailto:${LAB.email}`} className="hover:text-brand-700">{LAB.email}</a>
            </InfoLine>
            <InfoLine icon={<FaClock />} title="समय · Opening Hours">
              {LAB.hours}
            </InfoLine>
          </div>
          <div className="min-h-[320px]">
            <iframe
              title="R.C. Health Clinic Location"
              src={LAB.mapEmbed}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoLine({ icon, title, children }) {
  return (
    <div className="flex gap-4 mb-5">
      <div className="w-10 h-10 rounded-xl bg-white text-accent-600 grid place-items-center shrink-0 shadow-card">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-0.5">{title}</div>
        <div className="text-slate-800 font-medium">{children}</div>
      </div>
    </div>
  )
}
