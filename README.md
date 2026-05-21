# Highland Primary Care — highlandprimarycare.net

Modern, fast, SEO-optimized website for Highland Primary Care (Sherman, TX).
**Stack:** Astro 4 + Tailwind CSS 3 + minimal React islands. Static output, zero JS by default.
**Host:** GitHub Pages. **DNS:** Cloudflare → GitHub Pages.

---

## Quick start (push to GitHub & ship)

```bash
# From the project root:
git init -b main
git add -A
git commit -m "Initial site"
git remote add origin git@github.com:<YOUR-USERNAME>/highlandprimarycare-net.git
git push -u origin main
```

Then in your GitHub repo:

1. **Settings → Pages → Source:** `GitHub Actions`
2. **Settings → Pages → Custom domain:** `highlandprimarycare.net` (then save)
3. Wait for the workflow to finish (`Actions` tab) — first run takes ~90 seconds
4. **Cloudflare DNS** → see [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for exact records
5. Back on GitHub: **Settings → Pages → Enforce HTTPS** (once TLS cert provisions)

After DNS propagates (5–60 min), the site is live at https://highlandprimarycare.net.

---

## Local development

```bash
npm install      # one-time
npm run dev      # http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the built site
```

Requires Node 20+. The build is fully static — no server, no database.

---

## Editing common things

| Task                         | File to edit                                                |
| ---------------------------- | ----------------------------------------------------------- |
| Phone number, address, hours | `src/config.ts`                                             |
| Booking widget URLs          | `src/config.ts` → `BOOKING`                                 |
| Provider bios / photos       | `src/config.ts` → `PROVIDERS`                               |
| Service detail copy          | `src/content/services.ts`                                   |
| Brand colors                 | `tailwind.config.mjs` and `src/styles/global.css`           |
| Header nav links             | `src/config.ts` → `NAV`                                     |
| Add a new blog article       | Append to `src/content/articles.ts`                         |
| Add a new icon               | Append to the `icons` map in `src/components/Icon.astro`    |

After any edit: `npm run build` locally to verify, then `git push` — GitHub Action redeploys automatically.

---

## Deployment

Push to `main` → GitHub Action builds Astro → deploys static `dist/` to GitHub Pages. The custom domain (`highlandprimarycare.net`) is configured via `public/CNAME` and Cloudflare DNS records. Full playbook in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Performance & SEO

- **Static HTML**, zero JS on most pages → 95+ Lighthouse scores
- **Self-hosted fonts** (no Google Fonts request) for faster LCP and privacy
- **Inline Lucide SVG icons** — no icon font, no emoji, no external requests
- **JSON-LD schema** for `LocalBusiness`, `Physician`, `MedicalClinic`, `FAQ`, `Article`, `BreadcrumbList`
- **Sitemap + robots.txt** auto-generated at build time
- **OG tags + Twitter cards** wired through `BaseLayout`

---

## Brand

- Red: `#E00030` (CTAs, accents)
- Blue: `#3080C0` (secondary, links)
- Dark: `#0A0F1A` (footer, hero variants)
- Paper: `#FAFAF7` (canvas)

Full design tokens in [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md).
