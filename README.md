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
