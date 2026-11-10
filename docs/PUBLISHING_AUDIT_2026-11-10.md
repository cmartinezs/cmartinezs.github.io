# Portfolio — Visual assets & publication audit (2026-11-10)

> Scope: public portfolio and the ADÜMÜN projects showcased there. This is not an inventory of every internal repository.
> Runtime HTTP smoke tests are still pending. The owner confirmed the ADÜMÜN Pages URL convention and the Lab Lights URL; the other three game repositories have explicit Pages deployment workflows.

## Confirmed defects and fixes

| Finding | Evidence | Remediation |
| --- | --- | --- |
| Empty icons | Bootstrap Icons and Devicon classes remained in components after their shared stylesheets were removed from `src/app/layout.tsx` | Restore both stylesheet dependencies; consider vendoring icons later |
| Double arrows | `.card-link-custom::after` already adds `→`; several labels also included a literal `→` | Remove duplicate glyphs from affected JSX labels |
| Broken game previews | Cards embedded `cmartinezs.github.io/<project>` URLs that did not point to the ADÜMÜN repositories | Replace unverifiable iframes with local SVG artwork and use canonical ADÜMÜN Pages URLs |
| Incorrect ownership | Lab Lights source belongs to `adumun/lab-lights-web`, not `cmartinezs` | Use ADÜMÜN ownership and official repository links |
| Obsolete project promoted | `adumun/claude-planning-with-ai` README marks it DEPRECATED and names Shipping Mode as successor | Keep it historical; do not promote as an active product |

## Publication registry — showcased projects

| Initiative | Canonical repository | Source visibility | Pages URL | Evidence / next step |
| --- | --- | --- | --- | --- |
| Personal portfolio | `cmartinezs/cmartinezs.github.io` | Public | `https://cmartinezs.github.io/` | Existing Pages workflow; complete visual QA after merge |
| Lab Lights | `adumun/lab-lights-web` | Public | [adumun.github.io/lab-lights-web](https://adumun.github.io/lab-lights-web/) | URL explicitly confirmed by owner; deployment workflow present |
| Starborne Voyager | `adumun/starborne-voyager` | Private | [adumun.github.io/starborne-voyager](https://adumun.github.io/starborne-voyager/) | `.github/workflows/deploy.yml` deploys `dist`; smoke test pending |
| Web Game Prototypes | `adumun/web-game-prototypes` | Private | [adumun.github.io/web-game-prototypes](https://adumun.github.io/web-game-prototypes/) | `.github/workflows/pages.yml` deploys `dist`; smoke test pending |
| Neon Pursuit | `adumun/neon-pursuit` | Private | [adumun.github.io/neon-pursuit](https://adumun.github.io/neon-pursuit/) | `.github/workflows/deploy.yml` deploys `dist`; Vite base is `/neon-pursuit/`; smoke test pending |
| GradeOps AI | `adumun/grade-ops-ai` | Public | `https://adumun.github.io/grade-ops-ai/` (pending deploy verification) | Pages workflow publishes `site/dist`; canonical origin fix is proposed in [PR #118](https://github.com/adumun/grade-ops-ai/pull/118) |
| KeyGo web UI | `adumun/keygo-web-ui` | Public | Not assigned | No Pages workflow found in the conventional paths inspected; do not invent a demo URL |
| Academic Grading with AI | `adumun/academic-grading-with-ai` | Public | Not verified | Reference/prototype related to GradeOps AI; inspect publication setup before linking |
| Claude Planning with AI | `adumun/claude-planning-with-ai` | Public | Not applicable | Deprecated; successor is Shipping Mode |
| Shipping Mode | `adumun/shipping-mode` | Public | Not applicable | Developer tooling; link source repository, not a demo |

## Deployment/source observations

- ADÜMÜN GitHub Pages convention: `https://adumun.github.io/<repository-name>/`. The owner confirmed it using Lab Lights; repository slugs must be taken from canonical GitHub repository names.
- Lab Lights: `.github/workflows/deploy-pages.yml` builds with `BASE_PATH: /${{ github.event.repository.name }}/` and deploys the `dist` artifact.
- Starborne Voyager: `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `master`; `vite.config.ts` uses `base: "./"`.
- Web Game Prototypes: `.github/workflows/pages.yml` builds and deploys `dist` on pushes to `master`; `vite.config.ts` uses `base: "./"`.
- Neon Pursuit: `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `master`; `vite.config.js` explicitly sets `base: "/neon-pursuit/"`.
- GradeOps AI: `.github/workflows/deploy.yml` builds the Astro site under `site/` and deploys `site/dist` from `master` (a release branch distinct from the default `develop`). The Astro `site` origin and canonical/Open Graph URLs were incorrectly set to `cmartinezs.github.io`; PR [adumun/grade-ops-ai#118](https://github.com/adumun/grade-ops-ai/pull/118) corrects them to `adumun.github.io` while preserving `/grade-ops-ai` as the base path. Build and runtime smoke test remain pending.
- KeyGo web UI: Vite SPA; no Pages workflow was found in the conventional deployment paths inspected.
- The four game entries in the portfolio now use `adumun.github.io/<repository-name>` instead of the incorrect `cmartinezs.github.io/<project>` paths. Private source repositories can still serve public Pages demos.

## Decisions

1. Use ADÜMÜN GitHub Pages for projects with an enabled deployment workflow; no blanket migration to Cloudflare.
2. Keep source visibility and demo availability as separate facts: a private repository may publish a public demo.
3. Keep the personal portfolio on GitHub Pages while it remains stable.
4. Consider Cloudflare Pages only per product when it provides a concrete advantage over the existing Pages workflow.
5. Add other product URLs only after confirming the deployment workflow and checking that the published app is the expected one.

## QA acceptance checklist

- [ ] No blank icons on all thematic routes
- [ ] No doubled arrows
- [ ] No broken or misleading demo links
- [ ] Every repository link points to the canonical owner and slug
- [ ] Public demos are distinguished from source visibility
- [ ] Deprecated projects are clearly labeled
- [ ] Keyboard focus and mobile layouts checked
- [ ] `pnpm build` succeeds
- [ ] Each Pages URL returns the expected application after deployment
- [ ] Public portfolio deployment verified after merge
