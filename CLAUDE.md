@AGENTS.md
@SEO-SKILLS.md
@docs/integrations.md

# Xgenious-Next — Project Rules

## Stack

Next.js App Router (Vercel) + WordPress REST API (Vultr VPS). Auth.js v5. Full integration reference: `docs/integrations.md`.

---

## Commands

Custom slash commands available in this project. Type `/command-name` in the prompt to invoke.

| Command | When to invoke |
|---|---|
| `/taskip` | Adding or extending Taskip CRM support ticket features |
| `/aws-ses` | Sending transactional email or adding new email templates |
| `/wp-api` | Working with WordPress REST API — user read/write, meta, auth |
| `/new-account-page` | Scaffolding a new page under `/my-account/` |
| `/seo-audit` | Run technical + on-page SEO audit for any page |
| `/ai-seo` | Optimize any page for AI citation (AEO — Answer Engine Optimization) |
| `/cro` | Conversion rate audit — increase purchases/signups |
| `/free-tool-gap` | Identify gaps in free tool coverage |
| `/caveman` | Ultra-compressed output mode (~75% fewer tokens) |
| `/caveman-commit` | Generate a compressed conventional commit message |
| `/caveman-review` | Compressed code review comments |
| `/caveman-stats` | Show real token usage and estimated savings |
| `/cavecrew` | Delegate work to compressed subagents to save main context |
| `/code-review` | Review the current diff (add `ultra` for deep multi-agent cloud review) |
| `/run` | Launch the dev app and verify a change in the real browser |
| `/verify` | Confirm a fix or feature works by running the app and observing behavior |

---

## Hooks

Hooks run automatically — no action required. Understand what they guard so you don't trigger false positives.

### PostToolUse — Integration Guard

**Trigger:** After every `Write` or `Edit` tool call  
**Script:** `scripts/check-integrations.sh`  
**What it checks:**

- Email: blocks Resend, SendGrid, nodemailer, SMTP imports — only `lib/email.ts` (AWS SES) allowed
- Auth: blocks `@clerk`, `@auth0`, `supabase.*auth` — only `next-auth` / Auth.js v5 allowed
- Tickets: blocks Zendesk, Freshdesk — only Taskip CRM (`public-api.taskip.net`) allowed
- SESClient: blocks direct `new SESClient` / `SendEmailCommand` outside `lib/email.ts`

### pre-push — Page & Sitemap Guard

**Trigger:** `git push`  
**Script:** `scripts/check-new-pages.sh`  
**What it checks:**

- Every new static `page.tsx` must appear in `app/sitemap.ts`
- Single-segment routes (e.g. `/new-page`) must be added to `NEXT_ROUTES` in `middleware.ts`

**Re-install hooks after clone:**

```bash
bash scripts/install-hooks.sh
```

---

## Skills

Skills are loaded from `.claude/skills/` (project-local) and `~/.claude/skills/` (global). Invoke with `/skill-name`.

### Project Skills (`.claude/skills/`)

| Skill | Trigger / when to use |
|---|---|
| `taskip` | Any Taskip support ticket CRUD, listing, or reply feature |
| `aws-ses` | "send email", "email template", "SES", transactional email |
| `wp-api` | WordPress REST API calls — user data, meta, JWT auth |
| `new-account-page` | "new account page", "add my-account page", account section scaffolding |
| `cavecrew` | Delegate to subagents, save context, "use cavecrew", "spawn investigator" |
| `caveman` | "caveman mode", "less tokens", "be brief", ultra-compressed output |
| `caveman-commit` | "write a commit", "commit message", "generate commit" |
| `caveman-compress` | Compress a memory or CLAUDE.md file to save input tokens |
| `caveman-review` | "review this PR", "code review", compressed review feedback |
| `caveman-stats` | `/caveman-stats` — real token usage from session log |

### Global Marketing Skills (`~/.claude/skills/`)

Sourced from `coreyhaines31/marketingskills`. Available in all projects.

| Skill | Trigger / when to use |
|---|---|
| `seo-audit` | Technical + on-page SEO audit for any page |
| `ai-seo` | Optimize for AI citation: Google AI Overviews, ChatGPT, Perplexity |
| `cro` | Conversion rate audit — increase purchases, signups, clicks |
| `free-tool-gap` | Identify free tool content gaps vs. competitors |

**Auto-trigger rule:** SEO checklist in `SEO-SKILLS.md` applies to every new page. No need to invoke manually — rules are always-on.

---

## Non-Negotiable Integration Rules

Never add a competing package. Everything is already wired up.

| Concern | Use | Never use |
|---|---|---|
| Transactional email | `lib/email.ts` → AWS SES (`@aws-sdk/client-ses`) | Resend, SendGrid, nodemailer, SMTP |
| Support tickets | Taskip CRM (`public-api.taskip.net`) | Zendesk, Freshdesk, custom CRM |
| Licenses / downloads | `license.xgenious.com` via `lib/license-server.ts` | Envato, Gumroad, Paddle, LemonSqueezy |
| Auth | Auth.js v5 (`next-auth`) + WordPress JWT | Clerk, Auth0, Supabase |

Violations are caught by `scripts/check-integrations.sh` after every file write.

---

## Auth Constraints

- Only WordPress `subscriber` role can log in
- `email_verified` WP user meta: `0` = blocked, `1` or absent = allowed
- Requires mu-plugin: `wp-content/mu-plugins/xg-user-meta.php`

---

## Page Component Structure

Every new page must follow this layout. No exceptions.

```
app/products/my-page/
  page.tsx              ← imports and composes components only; no inline JSX
  _components/
    Hero.tsx
    Features.tsx
    Pricing.tsx
    FAQ.tsx
```

- Create `_components/` inside the page directory, not in the global `components/` folder
- Each logical section = one file in `_components/`
- `page.tsx` only imports — all JSX lives in component files

---

## Routing

| Handler | What it serves |
|---|---|
| Next.js | All routes listed in `NEXT_ROUTES` in `middleware.ts` |
| WordPress | Unknown single-segment slugs (blog post URLs) — proxied via `middleware.ts` |
| Vercel rewrites | `/blog/*`, `/wp-json/*`, `/wp-admin/*` → `vercel.json` |

When adding a single-segment route (e.g. `/free-tools`): add it to `NEXT_ROUTES` in `middleware.ts` **and** `app/sitemap.ts`, or `pre-push` will block the push.

---

## Sprint 1 — Site-wide Promotions & Notices
**Status:** IN PROGRESS
**Started:** 2026-06-19

### Project Prefix: XG

### Tickets

| Ticket | Title | Status | Priority | Tokens | Description |
|--------|-------|--------|----------|--------|-------------|
| XG-001 | Top promo banner (WELCOME_10 10% off) | DONE | MED | ~9k | Dismissible site-wide announcement bar above Navbar advertising WELCOME_10 for 10% off all products; copy-to-clipboard code |
| XG-002 | Promo banner bright color + CRO audit | DONE | MED | ~6k | Bright coral gradient restyle; CRO pass — outcome-led copy, prominent copy-code chip, contrast/scannability improvements |
| XG-003 | Fix nazmart exclusive license FastSpring slug | DONE | HIGH | ~8k | Rename nazmart-complete-package → nazmart-exclusive-pack across checkout config, upgrade map, and product constants |
| XG-004 | MultiSaas landing — CRO/SEO/bug audit | DONE | HIGH | ~30k | Fixed broken OG/Twitter image, JSON-LD aggregateRating semantics + BreadcrumbList, FAQ answer clipping, hero discount anchor. Flagged: Launch Bundle math + identical tier checklists |
| XG-005 | MultiSaas themes section redesign | DONE | MED | ~25k | Added Hotel/Restaurant as premium (Bundle) themes; descriptive cards; real CodeCanyon/bytesed theme thumbnails (13 downloaded to public/) with SVG mockup fallback for premium |
| XG-006 | MultiSaas How-It-Works visual refresh | DONE | LOW | ~6k | Icon-driven step tiles (login/package/domain/rocket) with number badges, hover lift, polished connector |
| XG-007 | MultiSaas reviews — expand to 12+ | DONE | MED | ~8k | Expanded REVIEWS 5→13 using real CodeCanyon reviewers + faithful sentiment; JSON-LD review nodes + reviewCount synced |
| XG-008 | Hotel/Restaurant real screenshots + Envato badge | DONE | MED | ~10k | Saved provided Hotel & Restaurant theme screenshots as thumbnails (all 15 themes now real images); added Envato Market verified badge to each review card + header trust link to CodeCanyon |
| XG-009 | MultiSaas premium plugins section | DONE | MED | ~8k | New section showcasing 5 premium plugins (Cloud Storage, Site Analytics, Domain Reseller, Restaurant, Hotel) marked Bundle & Exclusive only |
| XG-010 | MultiSaas pricing → nazmart format | DONE | HIGH | ~20k | Removed Complete Launch Bundle; rebuilt 3-card nazmart-style pricing: Regular $59 (plugins ✗) / Bundle $99 BEST VALUE / Exclusive $299 (purple). Gated premium plugins; added multisaas-exclusive-pack checkout product ($299) + Bundle→Exclusive upgrade nudge; Bundle checkout price 199→99 |
| XG-012 | Auto-apply WELCOME_10 coupon at FastSpring checkout | DONE | HIGH | ~12k | Inject `coupon: WELCOME_10` into the SBL `builder.push` in `launchCheckout` (lib/fastspring.ts) so the 10% discount applies automatically when the user clicks Confirm & Pay — no manual code entry. Added shared `PROMO_CODE` constant, declared `coupon?` on the push type, refactored PromoBanner to use the constant and updated copy to "auto-applied / no code needed" |
| XG-011 | Grenmart organic grocery product page (SEO/CRO/AEO) | DONE | HIGH | ~55k | New Next.js product page at /products/grenmart-organic-grocery-ecommerce rebuilt from xgenious.com/our-products/organic-grocery-laravel-ecommerce. Green-themed, mirrors multisaas template: Hero/Stats/Features(12)/HomeVariants/NoCode/LaunchSteps/WhoFor/Gateways/Comparison/TrustBand/Pricing/FAQ(10)/CTA. Tiered internal checkout (Regular $39 CodeCanyon+upsell → Extended $129 → Exclusive $249); added grenmart-extended-pack & grenmart-exclusive-pack to checkout-products.ts. 9 real Grenmart screenshots downloaded to public/products/grenmart/. No fabricated reviews — truthful TrustBand linking to Envato. Full JSON-LD (SoftwareApplication/FAQPage/HowTo/Breadcrumb), sitemap entry. tsc + eslint + next build all pass |
| XG-013 | Nexelit multipurpose CMS product page | DONE | HIGH | ~45k | New product page at /products/nexelit-multipurpose-website-business-management-system-cms. Indigo-themed. 13 components: Hero/Definition/Features(12)/Modules(7)/NoCode(4 builders)/LaunchSteps/WhoIsItFor/Gateways/Comparison/TrustBand/Pricing(3-tier)/FAQ(10)/ClosingCta + JsonLd + StickyBar. Added nexelit-extended-pack ($79) + nexelit-exclusive-pack ($199) to checkout-products.ts. Sitemap + nav + saas-page.ts hrefs updated to internal URL. tsc + next build pass. |

### Sprint Stats
- Total: 13  /  TODO: 0  /  IN_PROGRESS: 0  /  DONE: 13  /  BLOCKED: 0
