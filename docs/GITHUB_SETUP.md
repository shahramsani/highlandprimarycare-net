# GitHub Setup — Push & Deploy

Three commands to get this site on GitHub Pages. Full DNS playbook in [`DEPLOYMENT.md`](DEPLOYMENT.md).

---

## 1. Push to GitHub

Create an empty repo on GitHub first (private or public, your choice). **Don't** initialize it with a README — the local project already has one.

Then from this project's root directory:

```bash
git init -b main
git add -A
git commit -m "Initial site"
git remote add origin git@github.com:<YOUR-USERNAME>/highlandprimarycare-net.git
git push -u origin main
```

Replace `<YOUR-USERNAME>` with your GitHub username or organization.

> **HTTPS instead of SSH?** Use `git remote add origin https://github.com/<YOUR-USERNAME>/highlandprimarycare-net.git`. You'll be prompted for a personal access token instead of a password.

---

## 2. Enable GitHub Pages

In the new repo on GitHub:

1. **Settings → Pages**
2. **Source:** `GitHub Actions` (do NOT pick "Deploy from a branch")
3. **Custom domain:** `highlandprimarycare.net` → Save

The first build kicks off automatically. Watch it under the **Actions** tab — should finish green in ~90 seconds.

---

## 3. Point Cloudflare DNS at GitHub Pages

In Cloudflare → DNS for `highlandprimarycare.net`, replace the existing records with:

**Apex `@`** (four A records, all DNS-only / gray cloud):

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**`www` subdomain** (CNAME, DNS-only):

```
CNAME   www   <YOUR-USERNAME>.github.io
```

Remove or update any old A/CNAME records that point to the current WordPress host.

DNS propagates in 5–60 minutes. After that:

- GitHub → **Settings → Pages**: DNS check turns green.
- A few minutes later, check the **Enforce HTTPS** box.
- Site is live at https://highlandprimarycare.net.

---

## Daily workflow after setup

```bash
# Make edits locally
npm run dev               # preview at http://localhost:4321

# Verify before pushing
npm run build             # catches type errors and missing imports

# Ship it
git add -A
git commit -m "Update headline copy on weight loss page"
git push
```

GitHub Action runs on every push. ~90 seconds from push to live.

---

## Troubleshooting

- **`Permission denied (publickey)` on push:** Set up an SSH key for your GitHub account, or switch the remote to HTTPS (see top of file).
- **Build fails on GitHub Action:** Check the **Actions** tab → click the failed run for logs. 95% of the time it's a missing file or typo that `npm run build` locally would have caught.
- **DNS check stuck on GitHub:** Cloudflare proxy must be **DNS-only** (gray cloud) during initial cert provisioning. See [`DEPLOYMENT.md`](DEPLOYMENT.md) for details.
