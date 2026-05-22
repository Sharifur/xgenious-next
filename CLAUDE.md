@AGENTS.md
@SEO-SKILLS.md
@docs/integrations.md

# Xgenious-Next — Project Rules

## Stack

Next.js App Router on Vercel + WordPress on Vultr VPS. Auth.js v5. See `docs/integrations.md` for full details.

## Non-negotiable integration rules

| Concern | Use | Never use |
|---|---|---|
| Transactional email | `lib/email.ts` → AWS SES (`@aws-sdk/client-ses`) | Resend, SendGrid, nodemailer, SMTP |
| Support tickets | Taskip CRM (`public-api.taskip.net`) | Zendesk, Freshdesk, custom |
| Licenses / downloads | `license.xgenious.com` | Envato, Gumroad, Paddle |
| Auth | Auth.js v5 (`next-auth`) + WordPress JWT | Clerk, Auth0, Supabase |

Violations are caught by `scripts/check-integrations.sh` (runs on pre-push and after every file write).

## Skills — invoke with /skill-name

| Skill | When to use |
|---|---|
| `/taskip` | Adding or extending Taskip support ticket features |
| `/aws-ses` | Sending email or adding new email templates |
| `/wp-api` | WordPress REST API — user read/write, meta, auth |
| `/new-account-page` | Scaffolding a new page under /my-account/ |

## Hooks

| Hook | Trigger | What it checks |
|---|---|---|
| `pre-push` (git) | `git push` | Sitemap, middleware, banned integrations |
| `PostToolUse` (Claude Code) | After Write/Edit | Banned email/auth imports |

Hook scripts: `scripts/check-new-pages.sh`, `scripts/check-integrations.sh`
Re-install after clone: `bash scripts/install-hooks.sh`

## Auth constraints

- Only WordPress `subscriber` role can log in
- `email_verified` WP user meta: `0` = blocked, `1` or absent = allowed
- Requires mu-plugin: `wp-content/mu-plugins/xg-user-meta.php`

## Routing

- Next.js handles: all routes in `NEXT_ROUTES` set in `middleware.ts`
- WordPress handles: unknown single-segment slugs (blog post URLs), proxied in `middleware.ts`
- Vercel rewrites: `/blog/*`, `/wp-json/*`, `/wp-admin/*`, etc. → `vercel.json`
