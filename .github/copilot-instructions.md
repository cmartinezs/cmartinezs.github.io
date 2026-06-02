# Copilot Instructions

## Local preview

- This repository is a plain static GitHub Pages site. There is no package manager, build step, lint command, or automated test suite in the repo.
- Recommended local preview from the repository root:

```bash
python3 -m http.server 8000
```

- Then open `http://localhost:8000` or a specific page such as `http://localhost:8000/backend.html`.

## Architecture

- The published site is made of standalone top-level HTML entry points such as `index.html`, `frontend.html`, `backend.html`, `mobile.html`, `arquitectura.html`, `docencia.html`, `ai.html`, `contacto.html`, and related pages.
- `index.html` is the main landing page. The other HTML files are separate service/detail pages that users can open directly; they are not generated from a template system.
- Shared presentation lives in `assets/css/styles.css`. It defines the global tokens/components plus page-specific themes keyed by `body.page-*` classes. `index.html` is the exception and uses the default body styling without a page class.
- Shared behavior lives in `assets/js/main.js`. JavaScript is intentionally minimal and only handles:
  - obfuscated email links via `.js-email-link`
  - contact form mailto generation via `.js-contact-form`
  - `topic` query param preselection in `contacto.html`
  - scroll-to-top button visibility and smooth scroll
- Third-party UI dependencies are pulled from CDNs in each page (`Bootstrap`, `Bootstrap Icons`, Google Fonts, plus Devicon where needed). There is no asset bundling pipeline.
- `contacto.html` is the central conversion page. Most CTA buttons on other pages route to it with `contacto.html?topic=...`.
- `source/*.md` contains editorial/source material for page copy and site planning. Those files are not loaded by the site at runtime; updates there do not change the published pages unless the corresponding HTML is edited too.

## Key conventions

- Keep the site's copy in Spanish and preserve the existing voice: professional, direct, and service-oriented.
- Treat each HTML page as independently maintained. Shared structural elements like the navbar, the "Explorar" dropdown, footer CTA, asset includes, and scroll-top button are duplicated across pages and must be kept in sync manually.
- When adding a new page theme, add both pieces together:
  - the matching `body class="page-..."`
  - the corresponding `body.page-...` rules in `assets/css/styles.css`
- Do not replace the contact/email flow with raw `mailto:` markup. The site intentionally hides the email address using `data-a`, `data-b`, and `data-c`, and `main.js` reconstructs the final address on click/submit.
- Any new CTA that links to `contacto.html?topic=...` must use a value that already exists in the `<select name="topic">` options in `contacto.html`; otherwise automatic preselection will fail.
- Preserve LF line endings; the repo enforces them via `.gitattributes`.
- Follow the surrounding formatting of the file you edit. Some HTML pages are fully formatted while others are compressed onto very few lines, so avoid reformatting unrelated markup just to normalize style.
