# GISP Zimbabwe Static Website

Production-ready static website for the Government Internet Service Provider (GISP), Zimbabwe.

## Stack
- [Eleventy (11ty)](https://www.11ty.dev/) static site generator.
- Minimal vanilla CSS and JavaScript.
- Lunr.js static search.
- Data-driven government directory and publications soft links.

## Quick start
```bash
npm ci
npm run dev
```

Build:
```bash
npm run build
```
Output is generated in `/dist` and can be deployed to any static host.

## Deployment (GitHub Actions + Pages)
- Workflow: `.github/workflows/deploy-pages.yml`
- Builds on push to `main`
- Deploys `/dist` as GitHub Pages artefact

## Data updates
### Government directory
Edit `data/gov-directory.json` only.
Required fields:
- `name`, `type`, `parent`, `website`, `services_url` (optional), `contacts_url` (optional), `tags`

### Canonical external assets
Edit `data/assets-map.json` only.
- Use `primary` plus optional `fallback` URL list.
- CI validates URL reachability and `image/*` content type.

## Language support
Current folders include:
- `/en`, `/sn`, `/nd`, and placeholder folders for all other official Zimbabwe languages.

To add/update a language:
1. Add language entry in `src/data/languages.json`.
2. Add folder under `src/<lang>/`.
3. Add translated pages with matching permalinks.
4. Run human review workflow in `docs/translation-workflow.md`.

## Compliance and standards pages
- Privacy notice
- Terms
- Accessibility statement (WCAG 2.2 AA target)
- Security disclosure

## Security headers deployment notes
See `docs/security-headers.md` for:
1. Cloudflare in front of GitHub Pages (recommended)
2. Alternative static hosts with native header config
