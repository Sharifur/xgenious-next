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

### Sprint Stats
- Total: 2  /  TODO: 0  /  IN_PROGRESS: 0  /  DONE: 2  /  BLOCKED: 0
