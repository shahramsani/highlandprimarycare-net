# Highland Primary Care — Website Redesign Master Plan

**Project:** Full redesign and reimplementation of `highlandprimarycare.net`
**Owner:** Shahram N. Sani, MD — Medical Director
**Practice:** Highland Primary Care, 300 N Highland Ave Suite 455, Sherman, TX 75092
**Phone:** (903) 871-5671 • **Email:** info@highlandprimarycare.net

---

## BLUF (Bottom Line Up Front)

Current site is a WordPress + Elementor build with bloated nav, inconsistent service-page templates, two duplicate weight-loss pages, and a generic medical aesthetic. Rebuild as a **static Astro + Tailwind site** (zero JS by default, top-tier Core Web Vitals, $0 hosting) on GitHub → Vercel/Cloudflare Pages. Migrate every existing page, fix the structural issues, add proper schema markup for local SEO, and unify the design system around the Highland red/blue/black brand.

**Total scope:** 22 pages, 4 reusable section components, 1 global layout, full SEO/schema baseline, GHL booking widget integration preserved.

**Recommended stack:** Astro 4 + Tailwind CSS 3 + minimal React islands for interactive widgets (TRT symptom checker, mobile nav).

**Timeline (solo dev or AI-assisted):** 5–7 working days to production parity, +2 days polish.

---

## 1. Why the Current Site Underperforms

| Issue | Impact | Fix |
|---|---|---|
| WordPress + Elementor stack | Slow LCP (2.5–4s typical), security patching overhead, plugin bloat | Static Astro build — sub-1s LCP, no surface area for exploits |
| Two `/medical-weight-loss/` and `/medicalweightloss/` pages | SEO cannibalization, confusing UX, duplicate content penalty risk | Consolidate or 301-redirect; one canonical |
| Inconsistent service-page templates (some use icons, some don't; intro copy varies wildly in length) | Looks unprofessional, hurts perceived authority | Single ServicePage layout, structured content collection |
| Nav menu still lists pages that aren't in submenu (e.g., Pricing) | Lost conversions | Clean IA with 5 top-level items max |
| Hero CTAs go to contact form, not a booking widget | Friction → lower conversion | Primary CTA → GHL booking widget directly (already exists at `app.highlandprimarycare.cc`) |
| No FAQ schema, no LocalBusiness schema, no Physician schema | Missing rich results in SERPs | Implement JSON-LD on every page |
| `404` on `/semaglutide-pricing-sherman-tx/` (linked from services nav) | Broken UX, hurts SEO | Fix or remove |
| Generic stock-photo aesthetic on most service pages | Doesn't differentiate from every other PCP in Texoma | Custom illustration system, real provider photos prominently |
| No `/blog` or content marketing engine | Missing organic SEO compounding | Astro content collection ready for cheap article-publishing workflow |
| Mobile nav implementation unclear in scrape | Mobile traffic dominates medical search | First-class mobile nav with bottom sticky "Call Now" |

---

## 2. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 4.x** | Ships zero JS by default → fastest Core Web Vitals → best Google Ads quality score and SEO. Content collections handle articles & services cleanly. |
| Styling | **Tailwind CSS 3.x** | Fast iteration; design tokens enforce brand consistency. |
| Interactive components | **React 18 (Astro islands)** | Only the TRT symptom checker, mobile nav drawer, and FAQ accordions hydrate. Everything else is HTML. |
| Forms / Booking | **Existing GHL widgets** (`app.highlandprimarycare.cc/widget/...`) | Already paid for, already integrated with HIPAA-compliant CRM. Embed via iframe. |
| Icons | **Lucide** | Clean medical-friendly line icons, tree-shakeable. |
| Fonts | **Fraunces** (display, distinctive serif) + **Inter Tight** (body) — self-hosted | Avoids Google Fonts privacy/perf hit; Fraunces gives editorial gravitas (not generic Inter-everywhere look). |
| Hosting | **Cloudflare Pages** (primary) or **Vercel** | Free tier covers traffic. Atomic deploys. Branch previews. |
| Source control | **GitHub** | Required by you. Connects to either host with zero config. |
| Analytics | **GA4 + Microsoft Clarity** | Already on current site (FB Pixel too — preserve). Add Clarity for heatmaps. |
| SEO | **astro-seo** + custom JSON-LD components | LocalBusiness, Physician, FAQPage, Service, MedicalClinic schemas. |
| Image optimization | **Astro Image** | Auto WebP/AVIF, lazy-load, responsive srcset out of the box. |

**Alternative considered:** Next.js App Router. Rejected — overkill for a marketing site with no auth/database needs, and ships React runtime on every page (slower).

---

## 3. Sitemap & URL Plan

All current URLs preserved or 301-redirected — **no SEO ranking loss**.

### Top-level navigation (5 items, mobile-first)

1. **Home** (`/`)
2. **About** (`/about-us/`)
3. **Services** (`/our-services/`) — dropdown
4. **Locations** (`/primary-care-sherman-tx-location/`)
5. **Contact** (`/contact-us/`)

### Full page inventory

| # | URL | Type | Status | Notes |
|---|---|---|---|---|
| 1 | `/` | Home | Rebuild | Hero, providers, services grid, testimonials, FAQ, booking widget |
| 2 | `/about-us/` | About | Rebuild | Practice story, team grid, values, badges |
| 3 | `/our-services/` | Services hub | Rebuild | 9-card grid with concise descriptions |
| 4 | `/dr-shahram-sani/` | Provider bio | Rebuild | Long-form bio + FAQ + schema |
| 5 | `/diane-keahey/` | Provider bio | Rebuild | Same pattern as Dr. Sani |
| 6 | `/dr-amit-warke/` | Provider bio | Rebuild | Same pattern |
| 7 | `/preventive-services/` | Service detail | Rebuild | Annual wellness, screenings, immunizations |
| 8 | `/management-of-chronic-conditions/` | Service detail | Rebuild | DM, HTN, dyslipidemia, thyroid, CHF |
| 9 | `/acute-care-for-short-term-illnesses/` | Service detail | Rebuild | URI, UTI, minor injury, same-day |
| 10 | `/mental-health-services/` | Service detail | Rebuild | Depression, anxiety, stress |
| 11 | `/elderly-care/` | Service detail | Rebuild | Geriatric assessment, fall prevention, polypharmacy |
| 12 | `/mens-health-services/` | Service detail | Rebuild | Prostate, T mgmt, CV risk, colon, sexual health |
| 13 | `/nutrition-counseling/` | Service detail | Rebuild | MNT, weight, sports, plant-based |
| 14 | `/referrals-to-specialists/` | Service detail | Rebuild | Cards, endo, neuro, ortho, pulm, GI |
| 15 | `/medical-weight-loss/` | Service / landing | Rebuild | Physician-supervised, $99/mo, weekly visits — keep this URL as canonical |
| 16 | `/medicalweightloss/` | Landing alt | **301 → /medical-weight-loss/** | Eliminate duplicate. Merge best content from both. |
| 17 | `/testosterone-replacement-therapy/` | Service / landing | Rebuild | High-conversion page: $79 assessment offer, symptom checker, 3 pricing tiers |
| 18 | `/semaglutide-pricing-sherman-tx/` | Pricing | **NEW** (currently 404) | GLP-1 pricing table, FAQ, booking — referenced from nav |
| 19 | `/health-articles/` | Blog index | Rebuild | Astro content collection |
| 20 | `/health-articles/[slug]/` | Article | Rebuild | Single template, 2 existing articles + plan for ongoing |
| 21 | `/contact-us/` | Contact | Rebuild | Address, hours, map, booking widget, GHL form |
| 22 | `/primary-care-sherman-tx-location/` | Location landing | Rebuild | LocalBusiness schema-heavy, map, directions, parking |
| 23 | `/privacy-policy/` | Legal | Rebuild | Keep existing copy |
| 24 | `/terms-and-conditions/` | Legal | Rebuild | Keep existing copy |
| 25 | `/404` | Error | NEW | Helpful 404 with search + popular links |

### Redirects to set up (Cloudflare Pages `_redirects` or `vercel.json`)

```
/medicalweightloss/        /medical-weight-loss/       301
/contact/                  /contact-us/                301
/category/primary-care/    /health-articles/           301
```

---

## 4. Design System

### Brand colors (extracted from logo)

| Token | Value | Use |
|---|---|---|
| `--brand-red` | `#E00030` | Primary CTA, accents, urgency |
| `--brand-red-dark` | `#B8002A` | Hover state |
| `--brand-blue` | `#3080C0` | Secondary, links, info badges |
| `--brand-blue-dark` | `#1F5D8F` | Headings, hover |
| `--ink-900` | `#0A0F1A` | Headings, body |
| `--ink-700` | `#1F2937` | Subheads |
| `--ink-500` | `#4B5563` | Body |
| `--ink-300` | `#9CA3AF` | Meta, captions |
| `--paper` | `#FAFAF7` | Page background (warm white, not pure) |
| `--paper-elevated` | `#FFFFFF` | Cards on paper |
| `--surface-dark` | `#0A0F1A` | Dark sections (footer, premium TRT page) |
| `--success` | `#16A34A` | Confirmation, "accepting patients" badges |
| `--warning` | `#F59E0B` | Banner notes |

### Typography

| Role | Font | Weight | Size scale |
|---|---|---|---|
| Display (H1) | Fraunces (variable, soft italic) | 600–700 | clamp(2.5rem, 5vw, 4.5rem) |
| Headings (H2–H4) | Fraunces | 600 | 2rem / 1.5rem / 1.25rem |
| Body | Inter Tight | 400 | 1rem (17px on desktop) |
| Body lead | Inter Tight | 500 | 1.125rem |
| UI / nav / buttons | Inter Tight | 500–600 | 0.9375rem, all-caps for nav links |
| Micro (legal, captions) | Inter Tight | 400 | 0.8125rem |

### Component primitives

- `<Hero>` — full-bleed, asymmetric grid, photo + headline + CTA stack
- `<SectionHeader>` — eyebrow + H2 + lede
- `<ProviderCard>` — photo, name, credentials, specialties, bio CTA
- `<ServiceCard>` — icon, title, 2-line desc, "Learn More" arrow
- `<FAQAccordion>` — schema-emitting, single hydrated React island
- `<BookingEmbed>` — iframe wrapper with lazy-load and skeleton state
- `<CTABanner>` — full-width red band, phone + book buttons
- `<Footer>` — address block, social, sitemap, legal
- `<Header>` — sticky, logo + nav, mobile drawer
- `<TestimonialQuote>` — star rating, quote, attribution
- `<TrustBadgeStrip>` — board-certified, 25+ yrs, etc.

### Layout principles

- **8px baseline grid** everywhere. No arbitrary spacing.
- **Max content width 1280px**; prose max-width 65ch.
- **Mobile-first**: every component designed at 375px first, then scaled.
- **Sticky mobile bottom bar**: phone + book buttons always visible on mobile.

---

## 5. Per-Page Blueprints

See `docs/PAGE_BLUEPRINTS.md` for full section-by-section breakdown of every page.

**Conversion-critical pages (build first, highest priority):**

1. `/` (home) — primary entry point
2. `/medical-weight-loss/` — paid traffic destination
3. `/testosterone-replacement-therapy/` — highest-margin, paid traffic destination
4. `/contact-us/` — booking funnel endpoint

**SEO-critical pages (build next):**

5. `/primary-care-sherman-tx-location/` — local pack ranking
6. `/dr-shahram-sani/` — physician-name search
7. `/our-services/` + 9 service detail pages — long-tail keyword coverage

---

## 6. SEO & Schema Strategy

### Per-page JSON-LD requirements

| Page | Schemas |
|---|---|
| Home | `LocalBusiness`, `MedicalClinic`, `BreadcrumbList` |
| Provider bios | `Physician` (with `medicalSpecialty`, `affiliation`, `worksFor`) |
| Service pages | `MedicalProcedure` or `MedicalTherapy` + `FAQPage` |
| Articles | `MedicalWebPage`, `Article`, `Author` |
| Location page | `LocalBusiness` (with full hours, geo, telephone) |
| Contact | `LocalBusiness` + `ContactPage` |

### Meta hygiene

- Every page: unique `<title>` (50–60 chars), meta description (140–155 chars), canonical, OG tags, Twitter card
- All images: explicit `alt`, lazy-load below the fold, modern formats
- `robots.txt` + auto-generated `sitemap.xml` (`@astrojs/sitemap`)
- Preserve existing Facebook Pixel `812623817653317` and add GA4 placeholder

### Local SEO additions

- NAP consistency: 300 N Highland Ave Suite 455, Sherman, TX 75092, (903) 871-5671 — identical on every page
- Embed Google Business Profile reviews block on home + contact
- Add `/locations/sherman-tx/`, `/locations/denison-tx/` (Pages SEO for nearby cities) — Phase 2
- Schema `areaServed` covers Sherman, Denison, Pottsboro, Howe, Whitesboro, Van Alstyne, Whitewright, Bells, Tom Bean, Gunter

---

## 7. GitHub & Deployment

See `docs/GITHUB_SETUP.md` for the exact commands. Short version:

1. Create repo `highlandprimarycare-net` (private) on github.com
2. `git init` locally, set remote to the new repo
3. Push `main` branch
4. Connect Cloudflare Pages or Vercel to the repo
5. Production = `main` branch → deploys to staging URL
6. Once verified: point `highlandprimarycare.net` DNS at the host
7. **Cutover at 11 PM CT on a Tuesday** (lowest traffic) — saves rollback headache

### Branching model

- `main` — production
- `dev` — integration, auto-deploys to `dev.highlandprimarycare.net` for preview
- Feature branches off `dev` for each page or component

---

## 8. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Loss of search rankings during migration | Medium | High | Preserve URLs identically; submit new sitemap immediately to GSC; monitor Search Console for 30 days |
| Broken backlinks from external sites | Medium | Medium | Crawl with Ahrefs/Screaming Frog before launch, add 301s for any obscure URLs |
| GHL booking widget iframe fails on new domain | Low | High | Test iframe embed on staging before DNS cutover |
| Facebook Pixel events stop firing | Low | Medium | Preserve exact pixel ID, verify with FB Events Manager post-launch |
| Patient confusion during cutover | Low | Medium | Phone number and address unchanged; Google Business Profile unchanged; only the website changes |
| HIPAA: do not collect PHI in any new form | Verified — only GHL forms used | N/A | Documented in `docs/HIPAA_NOTES.md` |

---

## 9. What I Need From You Before Coding Starts

1. **GitHub username** — to give you the right `git remote` command
2. **GHL booking URLs** for each service (you have several widget IDs already: `edEHoM77zSLn1shx3Ae9`, `4pz0StK2hEMnuE5Ngp9Z` — confirm these and any new ones for TRT, GLP-1)
3. **Confirm decision:** Cloudflare Pages or Vercel for hosting (recommend Cloudflare — free SSL, faster CDN, better DDoS for medical site)
4. **Confirm decision:** Drop the duplicate `/medicalweightloss/` URL or keep both as separate funnels? (Recommend consolidating — duplicate content is hurting you)
5. **Confirm:** Final font choice — Fraunces + Inter Tight (my pick), or do you prefer something more clinical/sterile?

---

## 10. Deliverables Checklist

- [x] Full URL inventory and scout of existing site
- [x] Brand color extraction from logo
- [x] Tech stack decision and justification
- [x] Sitemap and IA
- [x] Design system spec (`docs/DESIGN_SYSTEM.md`)
- [x] Per-page blueprints (`docs/PAGE_BLUEPRINTS.md`)
- [x] GitHub setup guide (`docs/GITHUB_SETUP.md`)
- [x] Deployment guide (`docs/DEPLOYMENT.md`)
- [x] Starter Astro scaffolding (`package.json`, `astro.config.mjs`, `tailwind.config.mjs`, base layout + home page)
- [ ] All 22 pages built (Phase 2 — after your green light on the plan above)
- [ ] GHL widget integration verified (Phase 2)
- [ ] Schema validation via Google Rich Results Test (Phase 2)
- [ ] Lighthouse 95+ scores across all pages (Phase 2)
- [ ] DNS cutover + Search Console resubmission (Phase 3)
