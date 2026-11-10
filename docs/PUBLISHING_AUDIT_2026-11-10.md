# Portfolio — Visual assets & publication audit (2026-11-10)

> Scope: the public portfolio and its showcased ADÜMÜN projects. This is **not** an inventory of every internal ADÜMÜN repository.
> Sources: current portfolio source, GitHub repository metadata and project README/configuration. 
> Runtime availability of remote deployments was **not conclusively verified** in this environment. Screenshots supplied by the site owner visibly showed 404 pages in multiple embeds.

## Confirmed defects and fixes

| Finding | Evidence | Remediation |
| --- | --- | --- |
| Empty icons | Bootstrap Icons and Devicon classes remained but the shared stylesheets were removed from \`src/app/layout.tsx\` | Restore both icon stylesheet links immediately; consider vendoring icons later |
| Double arrows | \`.card-link-custom::after\` already adds \`→\`; several link labels also included \`→\` | Remove duplicate literal glyphs in affected JSX labels |
| Broken project previews | \`GamePreviewCard\` embedded URLs such as \`cmartinezs.github.io/lab-lights-web\` that are not backed by confirmed deployments | Do not iframe unverifiable apps; render informative local SVG artwork |
| Incorrect project ownership | Public Lab Lights source is \`adumun/lab-lights-web\`, not a project under \`cmartinezs\` | Add ADÜMÜN ownership and official repository link; do not present private repos as publicly playable |
| Obsolete project promoted | \`adumun/claude-planning-with-ai\` README marks it DEPRECATED / superseded by Shipping Mode | Update the local (currently uncommitted) portfolio project record before publishing; historical references may remain clearly labeled |

## Publication registry for showcased initiatives

| Initiative | Canonical repository | Repository visibility | Verified demo URL | Portfolio presentation / next step |
| --- | --- | --- | --- | --- |
| Personal portfolio | [cmartinezs/cmartinezs.github.io](https://github.com/cmartinezs/cmartinezs.github.io) | Public | GitHub Pages address known; live deployment not independently audited | Keep GitHub Pages pending functional visual QA |
| Lab Lights | [adumun/lab-lights-web](https://github.com/adumun/lab-lights-web) | Public | [adumun.github.io/lab-lights-web](https://adumun.github.io/lab-lights-web/) — URL pattern confirmed by repository owner | Link playable demo and source repository |
| Starborne Voyager | \`adumun/starborne-voyager\` | Private | **Not verified** | Showcase as private development, without a false Play button |
| Web Game Prototypes | \`adumun/web-game-prototypes\` | Private | **Not verified** | Showcase as private experimentation; no public code/deployment link |
| Neon Pursuit | \`adumun/neon-pursuit\` | Private | **Not verified** | Showcase as private development; no public Play button |
| GradeOps AI | [adumun/grade-ops-ai](https://github.com/adumun/grade-ops-ai) | Public | **Not verified** | Present as EdTech product in development; site subfolder uses Astro |
| KeyGo web UI | [adumun/keygo-web-ui](https://github.com/adumun/keygo-web-ui) | Public | **Not verified** | Present as ADÜMÜN identity product, not a personal GitHub repo |
| Academic Grading with AI | [adumun/academic-grading-with-ai](https://github.com/adumun/academic-grading-with-ai) | Public | **Not verified** | Describe correctly as behavioral/reference prototype for GradeOps AI |
| Claude Planning with AI | [adumun/claude-planning-with-ai](https://github.com/adumun/claude-planning-with-ai) | Public | **Not verified** | Mark as historical/deprecated; do not promote as active release |
| Shipping Mode | [adumun/shipping-mode](https://github.com/adumun/shipping-mode) | Public | Not applicable (developer tooling) | Canonical successor to planning plugin; link official repo |

## Deployment/source observations

- Personal portfolio: the repository has a GitHub Pages deployment workflow on \`master\`, building the Next.js static export.
- Lab Lights: \`vite.config.ts\` provides \`base: process.env.BASE_PATH ?? '/'\`; if deploying under a GitHub Pages subpath, \`BASE_PATH\` must match the actual path. No workflow at \`.github/workflows/deploy.yml\` was found during this audit; do **not** infer that no other deployment exists.
- GradeOps AI: site is Astro (\`site/package.json\`); observed GitHub Pages workflow triggers on \`master\`, while repository default branch is \`develop\`. Inspect actual release branch and workflow history before treating site as live.
- KeyGo UI: Vite SPA; no deployment at the conventional \`.github/workflows/deploy.yml\` path was confirmed. Validate IAM/backend and demo safety before making a public deploy.
- Current portfolio data used four \`cmartinezs.github.io/<project>\` URLs; those cannot be treated as valid simply because a repository exists under another owner.
- The local developer has uncommitted changes in \`src/data/labProjects.data.ts\`, \`ProjectHighlightSection\`, and \`LabProjectPreviewCard.tsx\` that are **not** in GitHub. Do not overwrite these changes; reconcile that catalogue separately.

## Decision

1. Use the ADÜMÜN Pages convention `https://adumun.github.io/<repository-name>` for repositories whose Pages publication is enabled; derive the slug from the canonical repository, never guess it.
2. Maintain the personal static portfolio on GitHub Pages while stable.
3. Consider Cloudflare Pages for standalone **public static demos** where GitHub Pages adds routing/path friction. Keep deployment choices per-product; don't migrate private products by default.
4. For private/incomplete products, use local artwork or an approved screenshot and a truthful status, never embedded 404 or unverified "Play" links.
5. If a project obtains a working public URL, add an explicit verified \`demoUrl\` to the portfolio data and test status/embedding constraints before displaying a live preview.

## QA acceptance checklist

- [ ] No blank icons on all thematic routes
- [ ] No doubled arrows
- [ ] No portfolio-owned dead demos/404 iframe surfaces
- [ ] Every public repository link points to the real owner
- [ ] Deprecated projects clearly labeled
- [ ] Keyboard focus and mobile layouts checked
- [ ] \`pnpm build\` succeeds with the preserved local WIP reconciled
- [ ] Public deployment verified after merge
