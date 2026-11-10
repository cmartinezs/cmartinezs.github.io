# Portfolio — Visual assets & publication audit (2026-11-10)

> Scope: public portfolio and the ADÜMÜN projects showcased there. This is not an inventory of every internal repository.
> Lab Lights is the only game demo whose public URL was confirmed by the owner. Starborne Voyager, Web Game Prototypes and Neon Pursuit return 404 at the conventional public URLs, so their demo links have been removed until publication is actually public and verified.

## Confirmed defects and fixes

| Finding | Evidence | Remediation |
| --- | --- | --- |
| Empty icons | Bootstrap Icons and Devicon classes remained in components after their shared stylesheets were removed from `src/app/layout.tsx` | Restore both stylesheet dependencies; consider vendoring icons later |
| Double arrows | `.card-link-custom::after` already adds `→`; several labels also included a literal `→` | Remove duplicate glyphs from affected JSX labels |
| Broken game previews | Previous embeds and later guessed Pages URLs returned 404 | Use local SVG artwork; only expose demo links after a public runtime check |
| Incorrect ownership | Lab Lights source belongs to `adumun/lab-lights-web`, not `cmartinezs` | Use ADÜMÜN ownership and official repository links |
| Deprecated product reference | `adumun/claude-planning-with-ai` README marks it DEPRECATED and names Shipping Mode as successor; neither appears in current featured portfolio data | Keep any future historical reference clearly labeled |

## Publication registry — showcased projects

| Initiative | Canonical repository | Source visibility | Public demo URL | Current status |
| --- | --- | --- | --- |
| Personal portfolio | `cmartinezs/cmartinezs.github.io` | Public | `https://cmartinezs.github.io/` | Existing Pages deployment; visual QA pending |
| Lab Lights | `adumun/lab-lights-web` | Public | [adumun.github.io/lab-lights-web](https://adumun.github.io/lab-lights-web/) | Owner-confirmed; retain public demo link |
| Starborne Voyager | `adumun/starborne-voyager` | Private | Not exposed | 404 at `https://adumun.github.io/starborne-voyager/`; public demo link removed |
| Web Game Prototypes | `adumun/web-game-prototypes` | Private | Not exposed | 404 at `https://adumun.github.io/web-game-prototypes/`; public demo link removed |
| Neon Pursuit | `adumun/neon-pursuit` | Private | Not exposed | 404 at `https://adumun.github.io/neon-pursuit/`; public demo link removed |
| GradeOps AI | `adumun/grade-ops-ai` | Public | `https://adumun.github.io/grade-ops-ai/` (pending) | Pages workflow publishes `site/dist`; canonical origin correction proposed in [PR #119](https://github.com/adumun/grade-ops-ai/pull/119) |
| KeyGo web UI | `adumun/keygo-web-ui` | Public | Not assigned | No Pages workflow found in conventional paths inspected |
| Academic Grading with AI | `adumun/academic-grading-with-ai` | Public | Not verified | Inspect publication setup before linking |

## Diagnosis — three private-source demos

- GitHub Actions workflow runs for all three repositories completed successfully at the build and `actions/deploy-pages` steps. Last recorded successful runs: Starborne Voyager 2026-06-01 (run 15), Neon Pursuit 2026-06-02 (run 1), Web Game Prototypes 2026-06-07 (run 12).
- The successful workflow result proves that a static artifact was built and submitted to GitHub Pages; it does **not** prove that the resulting site is publicly accessible at `https://adumun.github.io/<repo>/`.
- All three source repositories are private and owned by the `adumun` organization. GitHub Pages is available from public repositories on GitHub Free (including Free for organizations); publishing from private repositories requires GitHub Pro for personal-account repositories or GitHub Team / Enterprise for organization repositories. A personal Pro subscription does not upgrade an organization-owned repository: the applicable plan is the organization's plan.
- On GitHub Enterprise Cloud, a privately published Pages site is served from a unique `*.pages.github.io` subdomain, not the normal `adumun.github.io/<repo>` URL, and is accessible only to users with repository read access. Private site access control is an Enterprise Cloud feature.
- Given the three private repositories and their 404s at the conventional public URLs, the likely cause is that the `adumun` organization is on GitHub Free, where Pages cannot publish directly from private repositories. This is consistent with the evidence but the organization's billing plan has not been independently inspected. The exact repository Pages `Visit site` URL was also not exposed by the available GitHub API connector.
- If the organization is on Free, the straightforward GitHub Pages option is to make the source repositories public after a security/secrets review. If source privacy must be retained, use GitHub Team/Enterprise or deploy the built static assets through another approved public host (for example Cloudflare Pages). Do not expose source repositories merely as a workaround without reviewing the code and history first.
- Required verification for each repository: GitHub repository → Settings → Pages → inspect the selected visibility and the actual `Visit site` URL. If the site is private, change it to Public only if the organization plan and publication policy permit it. Do not change source-repository visibility to Public as a shortcut.
- If public Pages visibility cannot be enabled, publish the compiled static artifacts through an explicitly approved public hosting target. Do not expose private source code or assume the current `github.io` path.

## Deployment/source observations

- ADÜMÜN public Pages convention confirmed by the owner using Lab Lights: `https://adumun.github.io/<repository-name>/`.
- Lab Lights: `.github/workflows/deploy-pages.yml` builds with `BASE_PATH: /${{ github.event.repository.name }}/` and deploys `dist`.
- Starborne Voyager: `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `master`; latest observed run succeeded but public URL returns 404.
- Web Game Prototypes: `.github/workflows/pages.yml` builds and deploys `dist` on pushes to `master`; latest observed run succeeded but public URL returns 404.
- Neon Pursuit: `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `master`; Vite base is `/neon-pursuit/`; latest observed run succeeded but public URL returns 404.
- GradeOps AI: `.github/workflows/deploy.yml` builds Astro under `site/` and deploys `site/dist` from `master`. Astro origin/canonical/Open Graph were incorrectly set to `cmartinezs.github.io`; [PR #119](https://github.com/adumun/grade-ops-ai/pull/119) corrects them to `adumun.github.io`, preserving `/grade-ops-ai`.
- KeyGo web UI: Vite SPA; no Pages workflow was found in conventional deployment paths inspected.

## Decisions

1. Keep GitHub Pages for projects where the public site is confirmed and works.
2. Keep repository source visibility separate from public demo availability.
3. Do not display a demo link merely because a Pages workflow exists or succeeded.
4. Do not change private repository visibility or expose built artifacts without explicit publication approval and secret/configuration review.
5. Consider another static host only if public GitHub Pages cannot be enabled under the organization's current plan/policy.

## QA acceptance checklist

- [ ] No blank icons on all thematic routes
- [ ] No doubled arrows
- [x] Known 404 demo links removed from the portfolio
- [ ] Every repository link points to the canonical owner and slug
- [x] Public demo availability is distinguished from source visibility
- [ ] Settings → Pages visibility and Visit site URL checked for Starborne Voyager
- [ ] Settings → Pages visibility and Visit site URL checked for Web Game Prototypes
- [ ] Settings → Pages visibility and Visit site URL checked for Neon Pursuit
- [ ] Build and smoke test pass for each public demo before re-enabling its link
- [ ] `pnpm build` succeeds
- [ ] Public portfolio deployment verified after merge
