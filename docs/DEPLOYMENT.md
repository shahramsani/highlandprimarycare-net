# Deployment — GitHub Pages + Cloudflare DNS

This site deploys to **GitHub Pages** with DNS managed by **Cloudflare**. The domain `highlandprimarycare.net` is currently on Cloudflare; we keep it there and just repoint to GitHub Pages.

---

## Why this stack

- **GitHub Pages** is free, fast (Fastly-backed), and ideal for a static Astro site. No build time charges. CI built in.
- **Cloudflare DNS** stays where you already manage it — no nameserver changes needed.

> **Important:** Cloudflare's "orange cloud" proxy + GitHub Pages can cause TLS errors during cert provisioning. Use **DNS-only (gray cloud)** records for the GitHub Pages origins — see below.

---

## One-time setup

### 1. Create the GitHub repo

```bash
# From the project root
git init -b main
git add -A
git commit -m "Initial site"
git remote add origin git@github.com:<YOUR-USERNAME>/highlandprimarycare-net.git
git push -u origin main
```

(Or use HTTPS with a PAT if SSH isn't set up: `git remote add origin https://github.com/<USER>/highlandprimarycare-net.git`)

### 2. Enable GitHub Pages

In the new repo on GitHub:

1. **Settings → Pages**
2. **Source:** `GitHub Actions` (NOT "Deploy from a branch" — we use the workflow)
3. Trigger the first build: go to **Actions → Deploy to GitHub Pages → Run workflow**, or just push another commit.
4. When the action turns green, the site is live at `https://<your-username>.github.io/highlandprimarycare-net/` — but we want a custom domain.

### 3. Configure the custom domain on GitHub

1. **Settings → Pages → Custom domain:** enter `highlandprimarycare.net` → Save.
2. GitHub will start a DNS check. It will fail at first — that's expected; we haven't pointed DNS yet.
3. The `public/CNAME` file already in this repo contains `highlandprimarycare.net`, so the build will keep this setting in place on each deploy.

### 4. Cloudflare DNS records

In Cloudflare → DNS for `highlandprimarycare.net`:

**Apex (root) `highlandprimarycare.net`** — four `A` records, all **DNS only (gray cloud)**:

| Type | Name | IPv4              | Proxy status |
| ---- | ---- | ----------------- | ------------ |
| A    | @    | 185.199.108.153   | DNS only     |
| A    | @    | 185.199.109.153   | DNS only     |
| A    | @    | 185.199.110.153   | DNS only     |
| A    | @    | 185.199.111.153   | DNS only     |

**`www` subdomain** — one `CNAME`, **DNS only**:

| Type  | Name | Target                        | Proxy status |
| ----- | ---- | ----------------------------- | ------------ |
| CNAME | www  | `<YOUR-USERNAME>.github.io`   | DNS only     |

Replace `<YOUR-USERNAME>` with the actual GitHub username/org that owns the repo.

> Why gray cloud (DNS-only)? When GitHub Pages provisions a Let's Encrypt cert, the Cloudflare proxy can interfere with the HTTP-01 challenge. Set the records to DNS-only at first. Once the GitHub cert is provisioned and HTTPS works, you can switch them to proxied (orange cloud) if you want Cloudflare's CDN/WAF in front. With the orange cloud on, set Cloudflare SSL/TLS to **Full (strict)** — not Flexible.

### 5. Verify

After DNS propagates (5–60 min):

- Back on GitHub → **Settings → Pages**: DNS check should turn green.
- A few minutes later, **Enforce HTTPS** becomes available — check it.
- Visit `https://highlandprimarycare.net/` → should load with a valid cert.
- Visit `http://www.highlandprimarycare.net/` → should 301 to the apex with HTTPS.

---

## Ongoing deployments

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. Checkout code
2. Install dependencies (`npm ci`)
3. Run `npm run build` → outputs to `dist/`
4. Upload `dist/` as a Pages artifact
5. Deploy to GitHub Pages

Total time: ~90 seconds.

To deploy: `git push origin main`. That's it.

---

## Redirects

GitHub Pages does **not** support server-side 301 redirects. We handle the one legacy URL (`/medicalweightloss/`) via a meta-refresh HTML page (`src/pages/medicalweightloss.astro`).

If you need more 301 redirects in the future, options:

1. **More meta-refresh stub pages** — easy, but counts as a "200 then redirect" rather than a proper 301.
2. **Cloudflare Page Rules** — true 301s at the DNS edge. Free tier includes 3 rules; more cost extra. Configure in Cloudflare → Rules → Page Rules.
3. **Cloudflare Bulk Redirects** — better for many redirects, free tier includes 20.

Recommended: Cloudflare Bulk Redirects for any future URL changes.

---

## Rollback

GitHub Actions keeps the previous deployment artifact. To roll back:

1. **Actions** → click the last good run → **Re-run jobs**.

Or: `git revert <bad-commit>` → push → fresh deploy.

---

## Common issues

**"DNS check failed" on GitHub Settings → Pages.**
Wait 5–10 minutes after creating the Cloudflare records. If it still fails after an hour, double-check the A records point to the four GitHub IPs above and the `www` CNAME points to `<username>.github.io` (not the apex).

**"There isn't a GitHub Pages site here" when visiting the domain.**
Either DNS hasn't propagated, or GitHub Pages isn't enabled. Verify both.

**TLS / cert errors.**
Set Cloudflare proxy status to **DNS only** during initial cert provisioning. Once HTTPS works, you can re-enable proxy with SSL/TLS mode = **Full (strict)**.

**`www.highlandprimarycare.net` doesn't redirect to apex.**
GitHub Pages handles this automatically once both `www` CNAME and apex A records are set, and the cert is provisioned.

---

## Decommissioning the old WordPress site

When this site is verified working:

1. In Cloudflare DNS, you may need to remove any old A/CNAME records pointing to the previous WordPress host (e.g. Hostinger, SiteGround, WP Engine).
2. Cancel the WordPress hosting once you've confirmed everything works.
3. Keep a backup of the WordPress site (export from `/wp-admin → Tools → Export`) before cancelling, just in case you need to reference old content.
