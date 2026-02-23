# Security Headers Guidance for Static Hosting

GitHub Pages does not provide per-site custom header controls. Use one of the options below.

## Option 1 (recommended): Cloudflare in front of GitHub Pages
Apply response header transform rules:
- `Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https: data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), camera=(), microphone=()`

## Option 2: Host with static header support
Deploy on Netlify or Cloudflare Pages and configure equivalent headers via `_headers` or dashboard rules.
