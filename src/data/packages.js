// Real packages for R.C. Health Clinic (NPR). All packages are eligible for
// 20–30% walk-in discount when the patient comes directly to the lab.
export const packages = [
  {
    name: 'Essential Wellness',
    nameNp: 'आधारभूत स्वास्थ्य',
    price: 'NPR 5,000',
    tagline: '16 tests · No doctor consultation',
    taglineNp: '१६ परीक्षण · डाक्टर परामर्श बाहेक',
    popular: false,
    color: 'from-brand-500 to-brand-700',
    includes: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'Renal Function Test (RFT)',
      'Thyroid Function Test (TFT)',
      'Uric Acid',
      'RA Factor',
      'Cross Matching',
      'Calcium',
      'HbA1c',
      'CRP',
      'Troponin-I',
      'ESR',
      'Urine R/E',
      'S. Amylase'
    ]
  },
  {
    name: 'Comprehensive Health Checkup',
    nameNp: 'पूर्ण स्वास्थ्य परीक्षण',
    price: 'NPR 9,000',
    tagline: '22 tests + Doctor consultation',
    taglineNp: '२२ परीक्षण + डाक्टर परामर्श',
    popular: true,
    color: 'from-accent-500 to-accent-600',
    includes: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'Renal Function Test (RFT)',
      'Thyroid Function Test (TFT)',
      'Uric Acid',
      'RA Factor',
      'Cross Matching',
      'Calcium',
      'HbA1c',
      'CRP',
      'Troponin-I',
      'ESR',
      'Urine R/E',
      'S. Amylase',
      'USG (Ultrasound)',
      'ECG',
      'HBsAg (Hepatitis B)',
      'HIV',
      'HCV (Hepatitis C)',
      'VDRL',
      'Doctor Consultation'
    ]
  },
  {
    name: 'Premium Plus Checkup',
    nameNp: 'प्रिमियम प्लस परीक्षण',
    price: 'NPR 16,500',
    tagline: '25 tests + Vitamin profile + Doctor',
    taglineNp: '२५ परीक्षण + भिटामिन + डाक्टर',
    popular: false,
    color: 'from-gold-400 to-gold-500',
    includes: [
      'All Comprehensive Package tests',
      'Vitamin D',
      'Vitamin B12',
      'Iron Profile',
      'Doctor Consultation'
    ]
  }
]
