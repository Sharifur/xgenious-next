@AGENTS.md
@SEO-SKILLS.md
@docs/integrations.md

# Xgenious-Next — Project Rules

## Git Branch Rules

**Always push to `dev` branch. Never push directly to `main`.**

```bash
git push origin dev       # ✅ correct
git push origin main      # ❌ never do this
```

`main` is production (Vercel auto-deploys). Changes go `dev` → PR → `main` only via GitHub pull request.

---

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

| XG-014 | ListOcean classified ads product page | DONE | HIGH | ~35k | New product page at /products/listocean-classified-ads-listing-platform. Teal/ocean theme. 12 components: Hero/Definition/Features(12)/Plugins(4 add-ons)/NoCode(4 builders)/LaunchSteps/WhoIsItFor/Comparison/TrustBand/Pricing(3-tier)/FAQ(10)/ClosingCta + JsonLd + StickyBar. Added listocean-full-pack ($95) + listocean-exclusive-pack ($179) to checkout-products.ts. 10 screenshots downloaded to public/products/listocean/. CodeCanyon ID: 53068796. Sitemap entry added. tsc passes. |
| XG-015 | SafeCart multi-vendor eCommerce product page | DONE | HIGH | ~35k | New product page at /products/safecart-multi-vendor-laravel-ecommerce-platform. Orange theme. 14 components: Hero(platform showcase)/Definition/Features(12)/Plugins(4)/MobileApps(3 Flutter apps + builder)/LaunchSteps/WhoIsItFor/Comparison/TrustBand/Pricing(3-tier)/FAQ(11)/ClosingCta + JsonLd + StickyBar. Added safecart-vendor-bundle ($99) + safecart-exclusive-pack ($249) + safecart-install-web + safecart-support-6m to checkout-products.ts. CodeCanyon ID: 49428309. Sitemap + nav entries added. |
| XG-016 | Xilancer premium plugins section | DONE | MED | ~12k | New PremiumPlugins component on Xilancer page showcasing 6 premium add-ons (Hourly, Security, Cloud Storage, Community, Promotional, Freelancer Level) — each with icon, "What it does" + "How it works" 3-step list. Indigo-themed colored cards, icon-driven (no screenshots). Inserted after PlatformFeatures. tsc passes. |
| XG-017 | SafeCart visual overhaul + final SEO/AEO/CRO audit | DONE | HIGH | ~90k | Rewrote all 12 Features illustrations as wide (224×116) animated SVG "how it works" scenes (browser/app frames, SMIL): multi-vendor order→commission flow, POS scan-to-cart, live delivery map with moving scooter, payment checkout, inventory→out-of-stock, flash-sale countdown→discount, wallet top-up, colour-variant image swap, refund request→approve→wallet, support ticket chat, wishlist+quick-view. Light-primary illustration bg. Plugins: 4 animated "how it works" banners (chat/delivery/refund/POS). MobileApps: 3 real app screenshot pairs (6 shots in device frames) + Google Play links (3 app IDs) + bundle-only info bar. New PaymentGateways marquee section (nazmart-style, 26+). Pricing: fixed invisible excluded-line contrast on green Bundle card. Menu thumbnail downloaded. Final audit fixes: H1 + Features H2 now carry "Multi-Vendor eCommerce Platform"; expanded meta keywords (primary/secondary/semantic); added SafeCart to public/llms.txt + public/pricing.md (AEO). tsc clean. |
| XG-018 | Influstar influencer marketplace product page | DONE | HIGH | ~120k | New product page at /products/influstar-influencer-hiring-marketplace-platform. Violet (#7c3aed) theme. Influencer hiring marketplace on Laravel 12 / PHP 8.3 / MySQL 8 (web only, no mobile apps, no multi-language/multi-currency). 17 components: Hero(real homepage screenshot in browser frame)/Definition/Features(15, incl promoted listings, chat word-filter, user ban)/HowItWorks/Earnings(animated $500→escrow→split revenue-model SVG)/PaymentGateways(nazmart-style logo marquee)/NoCode(animated drag-drop builder SVG)/LaunchSteps/WhoIsItFor/Comparison(10)/TrustBand(no fake reviews/sales/version)/Pricing(3-tier mirroring Nexelit: Regular $39 / Regular+Installation $49 / Exclusive $99 from $199)/FAQ(10)/ClosingCta + JsonLd(SoftwareApp/FAQ/HowTo/Breadcrumb/AggregateRating 5.0·2)/StickyBar. CodeCanyon #59095296. Checkout slugs match external system: infustar-bundle-pack/infustar-exclusive-pack/infustar-install/infustar-support-6m ($49 support); Regular+Installation→Exclusive upgrade nudge + support sidebar upsell. Sitemap + nav + menu thumbnail (influstar.png) + llms.txt + pricing.md. Internal links + Laravel authority link. Final SEO/AEO/CRO audit ~92/100. next build + tsc + eslint pass. |

| XG-019 | Map ticket status to backend enum | DONE | HIGH | ~14k | Align my-account support ticket STATUS_MAP + filters + close action to `SupportTicketStatusEum` (0 Open, 1 In Progress, 2 Close, 3 Replied, 4 Waiting For Reply, 5 Queue) across `support/page.tsx`, `support/[id]/page.tsx`, and `store/useTicketsStore.ts`. Fixed wrong labels (2 was Resolved→Closed, 3 was Closed→Replied, 4 was Pending→Waiting For Reply), added Queue. Close action now PATCHes `status: 2` (was `3`=Replied). Filter dropdown + store active/all-except-closed filters use enum ints. tsc clean. |
| XG-020 | Zaika single-vendor eCommerce product page | DONE | HIGH | ~70k | New product page at /products/zaika-ecommerce-shopping-laravel-platform. Raspberry-pink (#d6336c) theme. Target KW "single vendor ecommerce platform"; secondary: laravel ecommerce script, online shopping cms, readymade ecommerce website, ecommerce website builder php. Positioned vs multi-vendor SafeCart (internal link, no cannibalization). Rebuilt scaffold (was Grenmart copy) into 12 sections: Hero(official promo montage)/Definition(what-is single vs multi-vendor)/Features(12, recolored animated SVG scenes)/NoCode(inline pink page-builder SVG mock)/LaunchSteps/WhoIsItFor/Gateways(15+ marquee)/Comparison(vs Shopify/Woo/Custom)/TrustBand(inline storefront SVG mock + Envato link)/Pricing(3-tier web-only)/FAQ(10)/ClosingCta + JsonLd(SoftwareApp/FAQ/HowTo/Breadcrumb)/StickyBar. Dropped MobileApp (Zaika web-only, no Flutter). Checkout: zaika-full-pack $99 / zaika-exclusive-pack $199 + zaika-install-web $79 + zaika-support-6m $39. CodeCanyon #35059777, Laravel 9/PHP 8.1/Bootstrap 4, 5 home variants / 30+ widgets. Assets: hero-zaika.jpg + menu/zaika.png. Sitemap + nav + llms.txt + pricing.md. tsc + eslint + next build pass. |

| XG-021 | Genius School software page — keyword gap + AEO fill | DONE | HIGH | ~25k | Fill gaps vs eskooly/zoho/timeline/ourschoolsoftware: fixed title/H1 "Software" vs "System"; added KWs (free school software, school management platforms, free student management software, school resources management software); expanded FAQ 6→11 with 40-80 word AI-citation answers; added HowTo + BreadcrumbList JSON-LD; new "Why Free?" 3-card section; new "Get Started in 3 Steps" install section; new "School Resources Management" callout section; rewrote definition block to answer "what is free school management software?"; expanded comparison table 3-col with named platforms; updated llms.txt with full keyword signals. next build + tsc clean. |

| XG-022 | SQA checkout audit + fsReady guard + crash reporter | DONE | HIGH | ~30k | Full SQA pass: 30/30 non-regular checkout plans verified (page load, price, FastSpring popup). Root cause of customer "crash": button clickable before FS script loads → silent no-op. Fix: `disabled={!fsReady}` + Loading… spinner on Confirm & Pay button (`CheckoutClient.tsx`). Also built crash-email system: `CrashReporter` (window.onerror + unhandledrejection), `error.tsx` + `global-error.tsx` report on mount, `/api/crash-report` POST → AWS SES → dvrobin4@gmail.com. tsc clean. |

| XG-023 | Meta Pixel + Conversions API (CAPI) | DONE | HIGH | ~8k | Browser pixel + server-side CAPI for 5 events: PageView (all pages), InitiateCheckout (Confirm & Pay click), Purchase (FastSpring popup closed with order), CompleteRegistration (register success), Contact (contact form submit). Pixel ID 78345310. Dedup via event_id. PII hashed SHA-256 server-side. |
| XG-024 | Fix /support/undefined crash | DONE | HIGH | ~3k | Guard ticket ID in 3 places: new/page.tsx navigates to list if API returns no id; page.tsx link skips if t.uuid??t.id is falsy; [id]/page.tsx loadTicket early-returns if id==='undefined' |

| XG-025 | Fix /login removeChild crash on Android Chrome | DONE | HIGH | ~3k | Added suppressHydrationWarning to all inputs in login/register/forgot-password — Chrome password manager injects DOM nodes React can't reconcile |

| XG-026 | SaaS calculators hub + 4 new tools + SEO/AEO/lead-gen pass | DONE | HIGH | ~45k | Phase 1–5: New `/free-tools/saas-calculators` hub page targeting "free SaaS calculators" head term (18 tools, ItemList+FAQPage JSON-LD, 8 AEO Q&As, CTA → /contact); 4 new calculator components (BreakEven, SaasValuation, NRR, PaybackPeriod) + full data entries with FAQ/featureList/comparisonTable/commonErrors; mid-page coral CTA on all SaaS tool pages; SaaS breadcrumb updated to hub URL; llms.txt SaaS calculators section; free-tools/page.tsx meta updated + SaaS founders spotlight; sitemap +5 URLs. tsc clean. |

| XG-027 | Redirect /docs/* → docs.xgenious.com | DONE | MED | ~3k | Added 301 redirects in vercel.json: `/docs` → `https://docs.xgenious.com`, `/docs/:path*` → `https://docs.xgenious.com/:path*` (path suffix preserved). Docs site moved off main domain; edge redirect runs before middleware/Next routing, no app code touched. |
| XG-028 | Fix Prohandy app-store addon titles + price | DONE | LOW | ~5k | `lib/checkout-products.ts` prohandy-everything-bundle addons: relabeled `prohandy-appstore-google` → "Google Play — Publish Both Apps, We Handle It" and `prohandy-appstore-apple` → "Apple App Store — Publish Both Apps, We Handle It" (platform name leads, was confusingly similar). Fixed price 398→399 on both. tsc clean. |
| XG-029 | Fix Qixer app-store addon titles | DONE | LOW | ~2k | `lib/checkout-products.ts` qixer-everything-bundle addons: relabeled `qixer-appstore-google` → "Google Play — Publish Both Apps, We Handle It" and `qixer-appstore-apple` → "Apple App Store — Publish Both Apps, We Handle It" (title-only, price already correct at 199/399). tsc clean. |
| XG-030 | Fix GoCar app-store addon titles | DONE | LOW | ~2k | `lib/checkout-products.ts` gocar-everything-bundle addons only (not exclusive-pack, out of scope): relabeled `gocar-appstore-google` → "Google Play — Publish Customer App, We Handle It" and `gocar-appstore-apple` → "Apple App Store — Publish Customer App, We Handle It" (title-only, price already correct at 199/399). tsc clean. |
| XG-031 | Fix Xilancer app-store addon titles + price | DONE | LOW | ~2k | `lib/checkout-products.ts` xilancer-bundle-pack addons: relabeled `xilancer-appstore-google` → "Google Play — Publish Both Apps, We Handle It" and `xilancer-appstore-apple` → "Apple App Store — Publish Both Apps, We Handle It". Fixed price 398→399 on both (same recurring bug as XG-028). Confirmed no remaining `398` price values anywhere in checkout-products.ts. tsc clean. |
| XG-032 | Fix Fundorex app-store addon titles | DONE | LOW | ~2k | `lib/checkout-products.ts` fundorex-bundle-pack addons: relabeled `fundorex-appstore-google` → "Google Play — Publish Mobile App, We Handle It" and `fundorex-appstore-apple` → "Apple App Store — Publish Mobile App, We Handle It" (title-only, price already correct at 199/399). tsc clean. |
| XG-033 | Fix GoCar exclusive-pack app-store addon titles | DONE | LOW | ~1k | `lib/checkout-products.ts` gocar-exclusive-pack addons (last remaining "Publish X to Google Play/App Store" pattern in file): relabeled to platform-leading form. Confirmed via grep: zero remaining old-style labels anywhere in checkout-products.ts. tsc clean. |
| XG-034 | Render support ticket attachments (my-account) | DONE | MED | ~10k | Per `taskip-api/docs/public-api-support-ticket-attachments.md`: `GET support-ticket/{uuid}` (show) returns `data.attachment` (single MediaResource, ticket-level) and `data.replies[].attachment` (array, reply-level) — page previously ignored both entirely. Added `Attachments` component to `app/my-account/support/[id]/page.tsx`: image thumbnails render inline, other file types render as download chip (name + size). Wired into original-message block + each reply. No API route changes needed — GET proxy already passes upstream JSON through untouched. tsc clean. |

| XG-035 | Fix default "Active" ticket filter — add Replied & Queue | DONE | MED | ~4k | `store/useTicketsStore.ts` "active" filter only matched status 0/1 (Open/In Progress); customer requested default view include Replied (3) and Queue (5) too, excluding Waiting-For-Reply (4) and Closed (2). Updated filter + dropdown label in `app/my-account/support/page.tsx`. tsc clean. |
| XG-036 | Support ticket attachments — image lightbox + file download | DONE | MED | ~8k | Rewrote `Attachments` component in `app/my-account/support/[id]/page.tsx`: images now open a full-screen lightbox with scroll-to-zoom, drag-to-pan, +/-/0 keyboard shortcuts, and a download button; non-image files get a direct download button instead of opening in a new tab. Added `ImageLightbox` component with zoom indicator, top toolbar (filename + zoom controls + download + close), click-outside-to-close. tsc clean. |
| XG-037 | Support ticket replies — "Show older messages" pagination | DONE | HIGH | ~8k | New API route `app/api/support-tickets/[id]/replies/route.ts` proxying `GET public-v1/support-ticket/{uuid}/replies?page=N&per_page=10`. Frontend tracks `ticket.meta.reply_count`, shows "Show older messages (N more)" button when >10 replies exist. Clicking loads pages from last (oldest) backward, prepending to display. Pagination state resets on ticket change. tsc clean. |

### Sprint Stats
- Total: 37  /  TODO: 0  /  IN_PROGRESS: 0  /  DONE: 37  /  BLOCKED: 0
