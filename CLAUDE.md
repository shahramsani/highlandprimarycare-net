# Highland Primary Care — Claude Instructions

## Project
Astro 4 + Tailwind CSS + TypeScript marketing site for Highland Primary Care, Sherman TX.
- Dev server: `npm run dev` → http://localhost:4321
- Build: `npm run build`
- Config (single source of truth): `src/config.ts`
- Design tokens: `src/styles/global.css` + `tailwind.config.mjs`
- All "Book Now" buttons link to: https://healow.com/apps/practice/highland-primary-care-llc-29219?v=2&t=1 (BOOKING.bookNow in config)
- Embedded GHL form (BookingEmbed component) uses BOOKING.general

## Skills (slash commands)

| Command | Description |
|---------|-------------|
| `/review` | Pre-merge code review — SQL safety, race conditions, scope drift, adversarial pass |
| `/qa` | QA test the live site, fix bugs with atomic commits, produce health score report |
| `/autoplan` | Full plan review (CEO → Design → Eng → DX) with auto-decided intermediate questions |
| `/careful` | Enable destructive-command guardrails for the session |
| `/browse` | Headless browser — navigate, screenshot, interact, assert (requires browse binary) |
| `/design-html` | Generate production-ready HTML/CSS from a design brief or mockup |
| `/design-review` | Visual design audit — score all 10 categories, detect AI slop, fix with atomic commits |
| `/design-consultation` | Build or refine the design system — typography, color, layout, motion |
| `/design-shotgun` | Generate 3+ distinct design variants for comparison and feedback |
| `/document-generate` | Write Diataxis-structured docs — tutorial, how-to, reference, explanation |
| `/context-save` | Save current session state (goal, progress, decisions, next steps) to a checkpoint |
| `/context-restore` | Restore a previously saved checkpoint and resume work |
| `/canary` | Post-deploy monitoring — compare live site against pre-deploy baseline |
| `/benchmark` | Performance audit — Core Web Vitals, bundle sizes, image optimization |
| `/devex-review` | Developer experience audit — onboarding friction, DX score, recommendations |
| `/codex` | Second-opinion review via OpenAI Codex CLI (requires codex CLI installed) |

Skills are defined in `.claude/skills/<name>/SKILL.md`. When the user types `/<name>`, read and follow the corresponding SKILL.md.

## Design System
- Heading font: Raleway Variable (geometric sans, weight 700-800, tracking -0.018em to -0.03em)
- Body font: Nunito Sans Variable (humanist rounded sans, warm and readable)
- Brand red: #E00030 | Brand blue: #3080C0
- Background: #FAFAF7 (warm white)
- All font changes must use `font-synthesis: none` to prevent browser faking bold/italic
- `.editorial em` uses italic Raleway at brand-red — no variable font axes needed

## Key Files
- `src/config.ts` — all URLs, copy, providers, services, insurance, testimonials
- `src/schema.ts` — JSON-LD structured data schemas
- `src/layouts/BaseLayout.astro` — page shell, SEO, chat widget, analytics
- `src/components/BookingEmbed.astro` — GHL form iframe (seamless styling)
- `src/components/Header.astro` — sticky nav, mobile drawer
- `src/components/CTABanner.astro` — full-width red CTA section

## Conventions
- Never change `BOOKING.general` — it feeds the embedded GHL form iframe
- Use `BOOKING.bookNow` for all CTA buttons that link out
- Prefer editing existing components over creating new files
- One atomic commit per bug fix; do not bundle fixes
- No comments unless the WHY is non-obvious
