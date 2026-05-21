import { useEffect, useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { waLink, LAB } from '../data/config.js'

const quickMsgs = [
  'नमस्ते! म रगत परीक्षण बुक गर्न चाहन्छु। · I want to book a blood test.',
  'मूल्य सूची पठाइदिनुहोस्। · Please share the price list.',
  'मलाई घरमै स्याम्पल चाहियो। · I need home sample collection.',
  'डाक्टर आज उपलब्ध हुनुहुन्छ? · Is the doctor available today?'
]

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 w-80 overflow-hidden animate-fade-in">
          <div className="bg-[#25D366] text-white p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/20 grid place-items-center text-xl">
              <FaWhatsapp />
            </div>
            <div className="flex-1">
              <div className="font-bold">R.C. Health Clinic</div>
              <div className="text-xs text-white/80">सामान्यतया मिनेटमै जवाफ · Replies in minutes</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><FaTimes /></button>
          </div>
          <div className="p-4">
            <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 mb-4">
              नमस्ते! 👋 कसरी मद्दत गर्न सकौं? · How can we help? Tap a quick message below or type your own.
            </div>
            <div className="space-y-2">
              {quickMsgs.map(m => (
                <a key={m}
                   href={waLink(m)}
                   target="_blank" rel="noreferrer"
                   className="block px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#25D366] hover:text-white text-sm text-slate-700 transition border border-slate-100">
                  {m}
                </a>
              ))}
            </div>
            <a href={waLink('नमस्ते R.C. Health Clinic, म ...')}
               target="_blank" rel="noreferrer"
               className="block w-full text-center mt-4 btn-whatsapp !py-2.5 text-sm">
              कुराकानी सुरु · Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-soft grid place-items-center text-2xl
                   hover:scale-110 transition-transform relative"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  )
}
