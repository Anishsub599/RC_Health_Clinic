# R.C. Health Clinic — Website

Modern React website for **R.C. Health Clinic, Pokhara**. Single-page site with WhatsApp-driven
appointment booking (no backend required).

## Tech
- Vite + React 18
- Tailwind CSS 3
- Framer Motion (animations)
- React Icons

## Run locally

```bash
cd ~/Desktop/RC_labs/website
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to **Vercel**, **Netlify**, or any static host.

## Where to edit common things

| Want to change… | Edit this file |
|---|---|
| Phone / WhatsApp / Viber / FB / address / hours | `src/data/config.js` |
| Services list | `src/data/services.js` |
| Health packages & prices | `src/data/packages.js` |
| Hero carousel slides | `src/components/Hero.jsx` (top of file) |
| Lab logo / favicon | `public/favicon.svg` |
| Lab images | replace `public/lab-banner.jpg`, `public/lab-services.jpg` |

## TODO before going live

1. **Update Facebook page URL** in `src/data/config.js` (`facebookUrl`) — currently a placeholder.
2. **Verify WhatsApp number** in `src/data/config.js` (`whatsapp`). Format is `977<10-digit-number>` — no `+`, no spaces.
3. **Update Google Maps embed** in `src/data/config.js` (`mapEmbed`) — go to maps.google.com, search your lab, click *Share → Embed* and paste the `src=` URL.
4. **Add real lab photos** — replace files in `public/` and update hero slide image paths in `src/components/Hero.jsx`.
5. **Set up WhatsApp Business App** on the phone number used here, add a Greeting Message so the auto-reply works (see the digital strategy chat).

## Deploy (Vercel — easiest, free)

```bash
npm install -g vercel
vercel
```

Follow prompts. You get a public URL in ~30 seconds.
