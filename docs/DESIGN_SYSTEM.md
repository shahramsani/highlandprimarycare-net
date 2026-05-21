# Design System — Highland Primary Care

## Brand Foundation

The Highland logo is a stylized "H" with overlapping red and blue figures inside a black mark. The brand is **confident, modern, medical** — not corporate-sterile, not boutique-luxury. Aim for: *credible institution that still feels like your neighborhood clinic.*

## Color Tokens

```css
:root {
  /* Brand */
  --brand-red:       #E00030;
  --brand-red-dark:  #B8002A;
  --brand-red-soft:  #FEE5EA;
  --brand-blue:      #3080C0;
  --brand-blue-dark: #1F5D8F;
  --brand-blue-soft: #E5F0F8;

  /* Ink */
  --ink-900: #0A0F1A;
  --ink-700: #1F2937;
  --ink-500: #4B5563;
  --ink-300: #9CA3AF;
  --ink-100: #E5E7EB;

  /* Surface */
  --paper:          #FAFAF7;
  --paper-elevated: #FFFFFF;
  --surface-dark:   #0A0F1A;
  --surface-tinted: #F3F1EC;

  /* Semantic */
  --success: #16A34A;
  --warning: #F59E0B;
  --danger:  var(--brand-red);
  --info:    var(--brand-blue);
}
```

### Usage rules

- **Red is for action**, not decoration. CTA buttons, urgent banners, accents only. Never red text blocks longer than a few words.
- **Blue is for trust signals.** Links, info icons, secondary buttons, schema badges.
- **Black is structural**, used for nav, footer, dark hero sections, and the logo.
- Avoid red + blue together except on the logo. Pick one per surface.

### Contrast minimums (WCAG AA)

| Combo | Ratio | OK for |
|---|---|---|
| `--ink-900` on `--paper` | 18.4:1 | All text |
| `--ink-500` on `--paper` | 7.1:1 | Body |
| `--ink-300` on `--paper` | 3.5:1 | Captions only (not body) |
| White on `--brand-red` | 4.9:1 | Buttons, banners |
| White on `--brand-blue` | 4.5:1 | Buttons, banners |
| White on `--surface-dark` | 18.4:1 | Dark sections |

---

## Typography

### Font stack

```css
--font-display: "Fraunces", ui-serif, Georgia, "Times New Roman", serif;
--font-body:    "Inter Tight", ui-sans-serif, system-ui, sans-serif;
```

Self-host both via `@fontsource/fraunces` and `@fontsource-variable/inter-tight`. Subset to Latin only.

### Scale (mobile → desktop with `clamp()`)

| Token | Min | Preferred | Max | Use |
|---|---|---|---|---|
| `text-display` | 2.5rem | 5vw | 4.5rem | Hero H1 |
| `text-h1` | 2rem | 4vw | 3rem | Section H1 |
| `text-h2` | 1.5rem | 3vw | 2.25rem | H2 |
| `text-h3` | 1.25rem | 2.5vw | 1.5rem | H3 |
| `text-h4` | 1.125rem | 2vw | 1.25rem | H4 |
| `text-lead` | 1.125rem | 1.5vw | 1.25rem | Hero subhead |
| `text-body` | 1rem | — | 1.0625rem | Body |
| `text-meta` | 0.8125rem | — | 0.875rem | Captions |

### Headings

- Display & H1–H4: Fraunces, weight 600–700, line-height 1.05–1.2
- Slight optical-sized italic on the brand statement ("It's a *hormone* problem.")
- All-caps eyebrow text in Inter Tight 500, 0.75rem, letter-spacing 0.08em

### Body

- Inter Tight 400, line-height 1.65, max-width 65ch
- Links: `--brand-blue-dark`, no underline by default, `border-bottom: 1px solid currentColor` on hover

---

## Spacing

8px baseline grid:

```
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 3rem;     /* 48px */
--space-6: 4rem;     /* 64px */
--space-7: 6rem;     /* 96px */
--space-8: 8rem;     /* 128px */
```

- Section vertical padding: `--space-6` (mobile) → `--space-8` (desktop)
- Card padding: `--space-3` or `--space-4`
- Container max-width: 1280px, gutter 1rem mobile / 2rem desktop

---

## Components

### Button

```html
<a class="btn btn-primary">Schedule Visit</a>
<a class="btn btn-secondary">Call (903) 871-5671</a>
<a class="btn btn-ghost">Learn More →</a>
```

- Height: 48px desktop, 56px mobile (thumb-friendly)
- Radius: 8px (not pill — too consumer-y for medical)
- Primary: red background, white text, subtle hover lift
- Secondary: white background, blue border + text, hover fills blue
- Ghost: text-only with arrow, underline-on-hover

### Card

```css
.card {
  background: var(--paper-elevated);
  border: 1px solid var(--ink-100);
  border-radius: 12px;
  padding: var(--space-4);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -16px rgba(10,15,26,0.18);
}
```

### Section header (eyebrow + H2 + lede)

```html
<div class="section-head">
  <span class="eyebrow">Prevention First</span>
  <h2>Health Screenings That Save Lives</h2>
  <p class="lede">Early detection can mean the difference between simple treatment and a life-threatening diagnosis.</p>
</div>
```

### Trust strip

Horizontal row of small icon + text pairs, light divider between. Used under hero and above CTAs.

---

## Iconography

- Use **Lucide** icons exclusively. No emojis in production UI.
- Stroke width 1.5 for headings, 2 for inline.
- Service-page icons get a colored circular background (red-soft or blue-soft).
- Map emojis from current site to Lucide equivalents:

| Current emoji | Lucide icon |
|---|---|
| ♥ Preventive | `heart-pulse` |
| ⚖ Chronic | `activity` |
| ☣ Acute | `band-aid` |
| ☘ Mental health | `brain` |
| ⚙ Weight loss | `scale` |
| ☆ Elderly | `accessibility` |
| ♂ Men's health | `mars` |
| ★ Nutrition | `apple` |
| ➔ Referrals | `route` |

---

## Motion

### Page load
- Staggered fade-up of hero elements (logo + headline + sub + CTAs + image): 80ms stagger, 400ms duration, ease-out
- One animation per page load. No "everything bounces" syndrome.

### Hover
- Cards: `translateY(-2px)` + shadow
- Buttons: 1.02 scale + slight brightness lift
- Links: underline draws in left-to-right (200ms)

### Scroll-triggered
- Section headers: subtle fade-up when entering viewport
- Use `IntersectionObserver`, not scroll listeners
- `prefers-reduced-motion: reduce` disables all of the above

---

## Imagery rules

### Provider photos
- Square crop, 1:1, head + shoulders centered
- Soft dark background (matches uploads)
- Min size 800×800, served as 400/800/1200 srcset

### Hero photography
- Real clinic photos preferred over stock
- If stock: avoid the generic "doctor with clipboard pointing at clipart" look
- Treatment: slight desaturation (-10%), warm tone (+5% red channel), or duotone (paper + brand-blue)

### Illustrations
- For service-page heroes where photos don't fit: use simple line illustrations (single weight, brand colors only)
- Source: custom or Heroicons/Lucide outlined illustrations

### Forbidden
- Cheesy stock photos
- Doctors with stethoscopes in lab coats holding tablets
- Purple gradient backgrounds
- Generic AI-generated medical illustrations with the "blob" aesthetic

---

## Accessibility checklist (apply to every component)

- [ ] Semantic HTML (button vs link distinction, headings in order)
- [ ] All interactive elements 44×44px min hit area
- [ ] Focus-visible outlines on every focusable element (brand-blue, 2px, 2px offset)
- [ ] Color is never the only signal (icons + text)
- [ ] All images have meaningful `alt` (or `alt=""` if decorative)
- [ ] Forms: labels associated, error messages tied via `aria-describedby`
- [ ] Skip-to-content link at top of every page
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] No `dialog` or modal without focus trap and Escape close
- [ ] Sufficient color contrast (see table above)
