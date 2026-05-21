import { motion } from 'framer-motion'
import { FaAward, FaUserMd, FaFlask, FaSmile } from 'react-icons/fa'

const stats = [
  { icon: FaSmile,  num: '10,000+', en: 'Happy Patients',     np: 'खुसी बिरामीहरू' },
  { icon: FaFlask,  num: '50+',     en: 'Tests Available',    np: 'परीक्षण उपलब्ध' },
  { icon: FaUserMd, num: '5+',      en: 'Expert Staff',       np: 'अनुभवी स्टाफ' },
  { icon: FaAward,  num: 'Years',   en: 'Of Trust in Pokhara',np: 'पोखरामा भरोसा' }
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-gradient-to-b from-white to-brand-50">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <img src="/lab-services.jpg" alt="R.C. Health Clinic Services"
                 className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden md:block bg-white rounded-2xl shadow-soft p-5 w-56 border border-slate-100">
            <div className="text-3xl font-display font-extrabold text-brand-800">100%</div>
            <div className="text-sm text-slate-600">Accurate computerised reporting</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-eyebrow">हाम्रोबारे · About Us</span>
          <h2 className="section-title mb-3">
            Pokhara's trusted name in <span className="text-accent-600">diagnostic care.</span>
          </h2>
          <p className="text-brand-700 font-semibold mb-5">पोखराको भरपर्दो प्याथोलोजी ल्याब।</p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong>रामबजार, पोखरा-१०</strong> मा अवस्थित R.C. Health Clinic एक पूर्ण रूपमा कम्प्युटराइज्ड
            प्याथोलोजी र डायग्नोस्टिक केन्द्र हो। साधारण रगत परीक्षणदेखि एडभान्स स्क्रिनिङ सम्म —
            Thyroid, Diabetic, Vitamin D, मिर्गौला, कलेजो, मुटु (ECG/ECHO) र Digital X-Ray सबै एकै ठाउँमा।
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We combine accurate machines, experienced technicians, and an on-site doctor for
            evaluation and counselling — so you don't just get a report, you get answers.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.label} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-card border border-slate-100">
                <s.icon className="text-2xl text-accent-600 shrink-0" />
                <div>
                  <div className="font-display font-extrabold text-brand-900 text-xl leading-none">{s.num}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.en} <span className="text-slate-400">· {s.np}</span></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
