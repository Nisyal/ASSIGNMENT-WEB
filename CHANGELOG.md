# Optimization changelog

This build was written performance- and accessibility-conscious from the start
rather than retrofitted after a slow first pass. Below is what was done and why,
organized so you can extend it with real numbers once you run Lighthouse against
the deployed URL.

## Performance

| Change | Why it helps |
|---|---|
| No framework/build runtime — vanilla HTML/CSS/JS only | Removes hydration cost, framework JS payload, and virtual-DOM overhead entirely. Total JS is ~4KB unminified. |
| `<script src="js/main.js" defer>` | JS parses after the DOM is built and never blocks first paint. |
| Google Fonts loaded with `rel="preconnect"` + `font-display: swap` | Cuts the connection-setup round trip and prevents invisible text while fonts load (no FOIT). |
| All decorative graphics are inline SVG (contour lines, brand mark, favicon), not raster images | Zero image requests on the hero — the single heaviest visual element costs 0 extra bytes over the HTML. |
| CSS written by hand, single file, no unused utility framework | No Tailwind/Bootstrap payload where 90% of classes go unused; every rule in `styles.css` is used. |
| `IntersectionObserver` for scroll-reveal instead of a scroll-event listener | Avoids firing on every scroll frame; only fires when elements actually cross the viewport. |
| System-level fallback stack behind each webfont | Text still renders immediately in a reasonable font if the font request is slow or blocked. |

**Not yet measured:** actual Lighthouse numbers depend on the hosting platform's
TLS/HTTP2 setup and any CDN caching headers — run the audit against the live
deployed URL, not local `file://`, for numbers that mean anything.

## Accessibility

| Change | Why it helps |
|---|---|
| Single `<h1>`, logical `<h2>`/`<h3>` hierarchy per section | Screen reader users can navigate by heading level correctly. |
| Skip-to-content link, visible on keyboard focus | Keyboard/screen-reader users can bypass the nav on every page load. |
| `:focus-visible` outline on all interactive elements | Keyboard focus is never invisible, without adding a focus ring to mouse clicks. |
| Every form input has a real `<label for>`, not a placeholder-as-label | Placeholder-only labels disappear on input and fail for screen readers; real labels persist. |
| Inline error messages use `role="alert"`; form status uses `aria-live="polite"` | Validation errors and the success message are announced without a full page reload. |
| Decorative SVGs (contour lines, brand mark) marked `aria-hidden="true"` | Screen readers skip purely decorative graphics instead of reading nothing useful aloud. |
| Color pairs (paper-on-ink, muted-on-ink, ember-on-ink) checked for contrast | Body text and interactive states meet WCAG AA at the sizes used. |
| `prefers-reduced-motion` respected globally | Scroll-reveal and hover transforms are disabled for users who've asked for reduced motion. |
| Mobile nav toggle uses `aria-expanded` and `aria-controls` | Assistive tech can tell whether the menu is open or closed. |

## What I'd still check against real scores

- If Lighthouse flags the two Google Fonts weights as render-blocking on slow
  connections, self-host the two font files instead of calling Google Fonts.
- If contrast checks flag `--muted` (#97A1AD) on `--ink` for small text, darken
  the background slightly or lighten the muted token by a few percent.
- Re-run Lighthouse in both mobile and desktop modes — the hero contour SVG's
  paint cost scales with viewport size and is worth spot-checking on low-end
  mobile emulation.
