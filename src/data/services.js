import {
  FaMicroscope, FaHeartbeat, FaXRay, FaTint, FaUserMd, FaPills, FaEye, FaStethoscope
} from 'react-icons/fa'

export const services = [
  { icon: FaMicroscope, title: 'Computerized Pathology', desc: 'Modern computerised pathology with accurate, fast reporting.' },
  { icon: FaUserMd,    title: 'Whole Body Checkup',     desc: 'Comprehensive health screening — 25+ tests in one package.' },
  { icon: FaEye,        title: 'Eye Checkup',            desc: 'Vision check and eye health evaluation by experienced staff.' },
  { icon: FaStethoscope,title: 'Doctor Consultation',    desc: 'On-site doctor evaluation and counselling for your reports.' },
  { icon: FaTint,       title: 'Blood Tests',            desc: 'CBC, Lipid, Diabetic, Thyroid, LFT, RFT — all under one roof.' },
  { icon: FaXRay,       title: 'X-Ray (Digital & 500MA)',desc: 'Digital X-Ray & 500MA CR system for clear, instant imaging.' },
  { icon: FaHeartbeat,  title: 'ECG & ECHO',             desc: 'Heart health diagnostics — ECG and Echo cardiography.' },
  { icon: FaPills,      title: 'Pharmacy',               desc: 'In-house pharmacy with genuine medicines and prescriptions.' }
]

export const tests = [
  { name: 'Complete Blood Count (CBC)',  np: 'सम्पूर्ण कोश सम्बन्धी' },
  { name: 'Lipid Profile',                np: 'बोसो सम्बन्धी' },
  { name: 'Diabetic Profile',             np: 'मधुमेह परीक्षण' },
  { name: 'Renal Function Test (RFT)',    np: 'मिर्गौला सम्बन्धी' },
  { name: 'Bone Profile',                 np: 'हड्डी सम्बन्धी' },
  { name: 'Thyroid Profile',              np: 'थाइराइड सम्बन्धी' },
  { name: 'Liver Function Test (LFT)',    np: 'कलेजो सम्बन्धी' },
  { name: 'Uric Acid & RA Factor',        np: 'बाथ रोग सम्बन्धी' },
  { name: 'PSA',                          np: 'प्रोस्टेट सम्बन्धी' },
  { name: 'Vitamin D',                    np: 'भिटामिन डी' },
  { name: 'Hormone Tests',                np: 'हर्मोन परीक्षण' },
  { name: 'HIV / Hepatitis Screening',    np: 'एच.आइ.भि / हेपाटाइटिस' },
  { name: 'Urine R/E',                    np: 'पिसाब परीक्षण' },
  { name: 'PAP Smear',                    np: 'महिला स्वास्थ्य' },
  { name: 'USG / Abdomen',                np: 'पेटको भिडियो एक्स-रे' },
  { name: 'Digital X-Ray (Chest etc.)',   np: 'छाती एक्स-रे' },
  { name: 'ECG & ECHO',                   np: 'मुटु सम्बन्धी' }
]
