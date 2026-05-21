import { FaWhatsapp, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { SiViber } from 'react-icons/si'
import { LAB, waLink, viberLink } from '../data/config.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-6">
      <div className="container-x grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            {/* Black-ink stamp logo inverted to white so it renders cleanly on the dark footer */}
            <img
              src="/logo.png"
              alt="R.C. Health Clinic"
              width="72"
              height="72"
              className="h-16 w-16 md:h-[72px] md:w-[72px] object-contain shrink-0 select-none"
              draggable="false"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="leading-tight border-l-2 border-white/15 pl-3">
              <div className="font-display font-extrabold text-xl tracking-tight">R.C. Health Clinic</div>
              <div className="text-xs text-white/60 mt-0.5">{LAB.tagline}</div>
              <div className="text-[11px] text-white/40">Regd. No: {LAB.regNo}</div>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed max-w-md">
            पोखराको भरपर्दो स्वास्थ्य र डायग्नोस्टिक केन्द्र। कम्प्युटराइज्ड रिपोर्ट,
            डिजिटल एक्स-रे, ECG/ECHO र डाक्टर परामर्श एकै ठाउँमा।
          </p>
          <div className="flex gap-3 mt-5">
            <a href={waLink('नमस्ते R.C. Health Clinic')} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-[#25D366] grid place-items-center hover:scale-110 transition"><FaWhatsapp /></a>
            <a href={viberLink('नमस्ते R.C. Health Clinic')} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-[#7360F2] grid place-items-center hover:scale-110 transition"><SiViber /></a>
            <a href={LAB.facebookUrl} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-[#1877F2] grid place-items-center hover:scale-110 transition"><FaFacebookF /></a>
            <a href={`tel:${LAB.phones[0]}`}
               className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition"><FaPhoneAlt /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold-400">द्रुत लिङ्क · Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#about" className="hover:text-white">हाम्रोबारे · About</a></li>
            <li><a href="#services" className="hover:text-white">सेवाहरू · Services</a></li>
            <li><a href="#packages" className="hover:text-white">प्याकेज · Packages</a></li>
            <li><a href="#book" className="hover:text-white">अपोइन्टमेन्ट · Book</a></li>
            <li><a href="#contact" className="hover:text-white">सम्पर्क · Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold-400">सम्पर्क · Contact</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 shrink-0 text-accent-400" /> {LAB.address}</li>
            <li className="flex items-start gap-2"><FaPhoneAlt className="mt-1 shrink-0 text-accent-400" />
              <span>
                {LAB.phones.join(' · ')}<br />
                <span className="text-white/60">Mobile: {LAB.mobile}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 container-x flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-white/60">
        <div>© {year} R.C. Health Clinic · सर्वाधिकार सुरक्षित।</div>
        <div>Made with care in Pokhara · पोखरामा बनाइएको।</div>
      </div>
    </footer>
  )
}
