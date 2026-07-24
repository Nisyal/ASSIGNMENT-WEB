# NorthPeak Digital

NorthPeak Digital is a premium, high-performance, single-page website built for a fictional digital agency specializing in brand strategy, web design, SEO, and paid growth. 

This project is built using semantic HTML5, modern vanilla CSS, and vanilla JavaScript—crafted with a focus on performance, accessibility, and clean typography without the bloat of frameworks or build tools.

## 🚀 Features

- **Modern & Responsive Layout:** Fully optimized for all device sizes (mobile, tablet, desktop) using CSS Grid, Flexbox, and fluid typography.
- **Fluid Typography:** Uses CSS custom properties and `clamp()` to scale typography smoothly across viewports.
- **Smooth Micro-Animations:** Uses custom CSS transitions and progressive disclosure for dynamic hover states.
- **Scroll Reveal Animations:** Powered by native JavaScript `IntersectionObserver` for seamless entrance animations as users scroll.
- **Interactive Contact Form:** Built-in client-side validation with real-time field status indicators, accessibility features (`aria-invalid`), and custom error states.
- **Performance Optimized:** Preconnect links for Google Fonts (`Space Grotesk`, `Inter`, `IBM Plex Mono`) and minimal assets for near-instant load times.

## 🛠️ Tech Stack

- **Core:** HTML5 (Semantic Structure)
- **Styling:** Vanilla CSS3 (Custom properties, grid, flexbox, custom HSL color palette)
- **Logic:** Vanilla JavaScript (ES6+)
- **Typography:** Space Grotesk (display headings), Inter (body copy), IBM Plex Mono (stats & labels)

## 📁 Directory Structure

```text
ASSIGNMENT-WEB/
├── index.html              # Main HTML document
├── styles.css              # Custom stylesheet (design system, layouts)
├── main.js                 # Form validation & scroll reveal scripts
├── northpeak-digital/      # Main project directory
│   ├── index.html          # Standardized project homepage
│   ├── css/
│   │   └── styles.css      # Core site styles
│   ├── js/
│   │   └── main.js         # Mobile navigation & form logic
│   └── assets/
│       └── favicon.svg     # Brand favicon asset
└── README.md               # Project documentation
```

## 💻 Local Development

To run the project locally, start a static file server in the project directory.

### Using Node.js (npx)
```bash
npx http-server northpeak-digital -p 8080
```

### Using Python
```bash
cd northpeak-digital
python -m http.server 8080
```
Then visit: `http://localhost:8080` (or `http://127.0.0.1:8080`) in your browser.

## 🌐 Deployment

This project can be deployed easily as a static site:

- **GitHub Pages:** Go to your repository **Settings → Pages** and select the source branch (`main`).
- **Netlify:** Drag and drop the `northpeak-digital` folder or connect your Git repository.
- **Vercel:** Run `vercel` in the command line within the root directory.
