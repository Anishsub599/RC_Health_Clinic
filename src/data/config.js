// Single source of truth for contact info — edit here to update site-wide.
export const LAB = {
  name: 'R.C. Health Clinic',
  shortName: 'R.C. Health Clinic',
  tagline: 'Kiran Gurung Medical साँगै',
  fullTagline: 'General Health Check up · जनरल स्वास्थ्य परीक्षण',
  regNo: '9832-070-71',
  address: 'Pokhara-10, Rambazar, Kaski',
  phones: ['061-434903', '061-434798'],
  mobile: '9856027074',
  whatsapp: '9779856027074',       // include 977 country code, no '+' for wa.me
  viber: '9779856027074',
  facebookUrl: 'https://facebook.com/',  // TODO: replace with your actual FB page URL
  email: 'rclabpokhara@gmail.com',
  hours: 'Sun – Fri: 7:00 AM – 8:00 PM  |  Sat: 8:00 AM – 2:00 PM',
  // Map embed — search-based fallback that lands at Rambazar, Pokhara.
  // To pin the exact spot: open Google Maps → search your clinic → Share → Embed a map → copy the `src` URL → paste it here.
  mapEmbed: 'https://www.google.com/maps?q=R.C.+Medical+Hall,+Rambazar+10,+Pokhara&output=embed'
}

export const waLink = (text) =>
  `https://wa.me/${LAB.whatsapp}?text=${encodeURIComponent(text)}`

export const viberLink = (text) =>
  `viber://chat?number=%2B${LAB.viber}&text=${encodeURIComponent(text)}`
