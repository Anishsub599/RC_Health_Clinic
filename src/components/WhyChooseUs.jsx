import { motion } from 'framer-motion'
import { FaClock, FaShieldAlt, FaMobileAlt, FaHome, FaUserMd, FaRupeeSign } from 'react-icons/fa'

const reasons = [
  { icon: FaShieldAlt, title: 'Accurate Reports',       np: 'सही रिपोर्ट',          desc: 'कम्प्युटराइज्ड प्याथोलोजी, कडा गुणस्तर नियन्त्रण — Results you can trust.' },
  { icon: FaClock,     title: 'Same-Day Results',       np: 'दिनकै रिपोर्ट',         desc: 'अधिकांश परीक्षण उही दिन। · Most routine tests reported the same day.' },
  { icon: FaUserMd,    title: 'Doctor Consultation',    np: 'डाक्टर परामर्श',         desc: 'On-site डाक्टर तपाईंको रिपोर्ट बुझाउनुहुन्छ — not just a piece of paper.' },
  { icon: FaMobileAlt, title: 'Reports on WhatsApp',    np: 'WhatsApp मा रिपोर्ट',   desc: 'PDF रिपोर्ट सिधै तपाईंको फोनमा। No need to come back.' },
  { icon: FaRupeeSign, title: 'Fair, Honest Prices',    np: 'उचित मूल्य',            desc: 'पारदर्शी दर र हरेक बजेटको लागि प्याकेज। Transparent rates for all.' },
  { icon: FaHome,      title: 'Home Sample Collection', np: 'घरमै स्याम्पल सेवा',     desc: 'आउन सक्नुहुन्न? हामी तपाईंको घर आउँछौं — within Pokhara city limits.' }
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">किन हामी? · Why Choose Us</span>
          <h2 className="section-title">Why families in Pokhara trust R.C. Health Clinic</h2>
          <p className="text-slate-600 mt-3">पोखराका परिवारहरूले R.C. Health Clinic लाई किन रोज्छन्।</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 grid place-items-center text-xl shrink-0">
                <r.icon />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-900 mb-0.5">{r.title} <span className="text-sm font-normal text-slate-500">· {r.np}</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
