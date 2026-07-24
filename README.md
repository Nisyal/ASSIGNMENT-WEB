# NorthPeak Digital

A one-page site for a fictional digital agency, built with plain HTML, CSS, and
JavaScript — no page builders, no frameworks, no build step.

**Live URL:** _add after deploying, see below_
**Repo:** _add your GitHub URL here_

## Stack

- Semantic HTML5
- Hand-written CSS (custom properties, CSS Grid/Flexbox, `clamp()` for fluid type)
- Vanilla JS (~130 lines): mobile nav toggle, scroll-reveal via `IntersectionObserver`,
  contact form validation
- Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels), loaded
  from Google Fonts with `preconnect` + `font-display: swap`

No build tools are required — it's static files you can open directly or serve as-is.

## Local preview

```bash
cd northpeak-digital
python3 -m http.server 8080
# visit http://localhost:8080
```

## Project structure

```
northpeak-digital/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/favicon.svg
└── README.md
```

## Design system (short version)

- **Palette:** ink `#161B22`, surface `#1F2733`, paper `#EDEFF2`, muted `#97A1AD`,
  accent blue `#5B9BD5`, accent ember `#E88A4A`
- **Type:** Space Grotesk for headings, Inter for body copy, IBM Plex Mono for
  stats/eyebrows/pricing figures
- **Signature motif:** topographic contour lines in the hero and pricing tiers
  named after a real climb — Basecamp / Ridge / Summit — tying the visual and
  copy back to "NorthPeak" instead of a generic accent color or stock icon set

## Contact form

Validation (required fields, email format, minimum message length, inline error
messages, no page reload) is fully client-side in `js/main.js`. **No backend is
wired up** — on successful validation it shows a success message but does not
send an email. To make it actually deliver messages, either:

- **Netlify:** add `data-netlify="true"` and a hidden `form-name` input to the
  `<form>` tag, then redeploy on Netlify — no server code needed.
- **Formspree / similar:** point the form's `action` at your Formspree endpoint
  and let it POST normally, or call `fetch()` to it from `main.js`.

## Deploying

### Option A — GitHub Pages (simplest for a static site)

```bash
cd northpeak-digital
git init
git add .
git commit -m "NorthPeak Digital: initial build"
git branch -M main
git remote add origin https://github.com/<your-username>/northpeak-digital.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: `main` branch, `/ (root)`**.
Your live URL will be `https://<your-username>.github.io/northpeak-digital/`.

### Option B — Netlify

```bash
npm install -g netlify-cli
cd northpeak-digital
netlify deploy --prod
```
Point the publish directory at the project root when prompted.

### Option C — Vercel

```bash
npm install -g vercel
cd northpeak-digital
vercel --prod
```

Any of the three works — pick whichever you already have an account for.

## Submission checklist (Task A)

- [ ] Push code to a **public** GitHub repo
- [ ] Deploy and confirm the live URL loads on desktop and mobile
- [ ] Confirm the footer credit line links to `digitalheroesco.com`
- [ ] Submit the live URL + repo URL

## Task B — Lighthouse & changelog

See `CHANGELOG.md` for the performance/accessibility reasoning baked into this
build. To finish Task B:

1. Open the deployed URL in Chrome → DevTools → **Lighthouse** tab → run
   Performance + Accessibility (mobile and desktop) → screenshot both reports.
2. Review `CHANGELOG.md` and add any further changes you make based on your
   actual scores (e.g. if a specific image or font weight turns out to be the
   bottleneck).
3. Record a short Loom: point out 3 details you're proud of (suggested: the
   contour-line signature motif, the Basecamp/Ridge/Summit pricing naming, the
   accessible form error handling) and one thing you'd do differently.
