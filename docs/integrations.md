# Xgenious-Next — Integration Reference

## Rule #1: Always Use Existing Integrations

Before adding any package or service, check this file. Everything is already wired up.

---

## 1. AWS SES — Transactional Email

**SDK:** `@aws-sdk/client-ses` (already in `package.json`)
**Implementation:** `lib/email.ts`

### Usage

```typescript
import { sendEmail, verificationEmailHtml, resetEmailHtml } from '@/lib/email';

await sendEmail(
  'user@example.com',
  'Subject line',
  '<p>HTML body</p>',
);
```

### Adding a new email template

Add a new export to `lib/email.ts`:

```typescript
export function myNewEmailHtml(data: string): string {
  return `<div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px">
    <h2>Title</h2>
    <p>${data}</p>
  </div>`;
}
```

### Env vars required

| Variable | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user with `ses:SendEmail` permission |
| `AWS_SECRET_ACCESS_KEY` | |
| `AWS_REGION` | e.g. `us-east-1` |
| `EMAIL_FROM` | Verified SES address e.g. `support@xgenious.com` |

### Never use

Resend, SendGrid, Mailgun, nodemailer, SMTP, or any other email service. SES is set up and working.

---

## 2. Taskip CRM — Support Tickets

**Base URL:** `https://public-api.taskip.net/api/public-v1/`
**Auth:** `X-Secret-Key: {TASKIP_SECRET_KEY}` header on every request
**Docs:** https://public-api-doc.taskip.net/support-ticket-management
**Env var:** `TASKIP_SECRET_KEY`

### Existing routes

| Route | Method | What it does |
|---|---|---|
| `app/api/support-tickets/route.ts` | GET | List tickets (filtered by user email) |
| `app/api/support-tickets/route.ts` | POST | Create new ticket |
| `app/api/support-tickets/[id]/route.ts` | GET | Single ticket + replies |
| `app/api/support-tickets/[id]/reply/route.ts` | POST | Add reply to ticket |

### Request pattern

```typescript
const res = await fetch('https://public-api.taskip.net/api/public-v1/support-ticket', {
  method: 'GET',
  headers: {
    'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
    'Content-Type': 'application/json',
  },
  cache: 'no-store',
});
```

### Filter by user

Always scope ticket requests to the logged-in user's email:

```typescript
const session = await auth();
const userEmail = session?.wpEmail; // stored in JWT from auth.ts
// pass as query param or filter field per API docs
```

### Never use

WordPress for support tickets. Taskip is the CRM. All ticket CRUD goes through `public-api.taskip.net`.

---

## 3. License Server

**Base URL:** `https://license.xgenious.com/api/public-api`
**Lib:** `lib/license-server.ts` — `lsFetch(path, init?)` adds auth headers automatically
**Auth:** `X-Api-Key` + `X-Secret` headers (Method B — full access, no scope config)

### Env vars required

| Variable | Description |
|---|---|
| `LICENSE_SERVER_URL` | `https://license.xgenious.com` |
| `LICENSE_SERVER_API_KEY` | API key from license server admin |
| `LICENSE_SERVER_API_SECRET` | API secret from license server admin |

### Next.js proxy routes (credentials stay server-side)

| Route | Method | License Server endpoint |
|---|---|---|
| `app/api/license-server/purchases/route.ts` | GET | `GET /purchases?email=` |
| `app/api/license-server/updates/generate/route.ts` | POST | `POST /updates/generate` — body: `{ product_uid, version? }` |
| `app/api/license-server/downloads/fresh-install/route.ts` | GET | `GET /downloads/fresh-install?product_uid=&license_key=` |
| `app/api/license-server/licenses/domain/route.ts` | POST | `POST /licenses/domain` |

### Dashboard pages

| Page | Data source |
|---|---|
| `app/my-account/licenses/page.tsx` | `/api/license-server/purchases` — license keys, domains, support status |
| `app/my-account/downloads/page.tsx` | `/api/license-server/purchases` + `/api/license-server/updates/generate` |
| `app/my-account/purchases/page.tsx` | `/api/license-server/purchases` — payment history table |

### Usage

```typescript
import { lsFetch } from '@/lib/license-server';

// fetch purchases for a user
const res = await lsFetch(`/purchases?email=${encodeURIComponent(email)}&per_page=100`);

// generate update download URL
const res = await lsFetch('/updates/generate', {
  method: 'POST',
  body: JSON.stringify({ product_uid, version }),  // version optional, defaults to latest
});

// generate fresh install download URL
const res = await lsFetch(`/downloads/fresh-install?product_uid=${encodeURIComponent(product_uid)}&license_key=${encodeURIComponent(license_key)}`);

// domain toggle
const res = await lsFetch('/licenses/domain', {
  method: 'POST',
  body: JSON.stringify({ license_key, domain, action: 'deactivate' }),
});
```

### Never use

Envato, Gumroad, Paddle, LemonSqueezy, or any third-party licensing service.

---

## 4. WordPress REST API

**Base URL:** `process.env.WORDPRESS_BASE_URL` (default: `https://xgenious.com`)
**Admin auth:** Basic `base64(WP_ADMIN_USERNAME:WP_ADMIN_APP_PASSWORD)`
**User auth:** Bearer JWT token from session (`session.wpToken`)

### Admin-scoped call (create/update/delete users, set meta)

```typescript
const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const credentials = Buffer.from(
  `${process.env.WP_ADMIN_USERNAME}:${process.env.WP_ADMIN_APP_PASSWORD}`
).toString('base64');

const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${credentials}`,
  },
  body: JSON.stringify({ meta: { email_verified: 1 } }),
  cache: 'no-store',
});
```

### User-scoped call (read/update own profile)

```typescript
import { auth } from '@/auth';

const session = await auth();
const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me`, {
  headers: { Authorization: `Bearer ${session.wpToken}` },
  cache: 'no-store',
});
```

### Email verification user meta

| Meta key | Values | Description |
|---|---|---|
| `email_verified` | `0` = unverified, `1` = verified | Blocks login when `0` |
| `email_verification_sent_at` | Unix timestamp | Rate limit resend (2 min) |
| `password_reset_requested_at` | Unix timestamp | Rate limit reset (2 min), invalidate old tokens |

These fields require the mu-plugin at `wp-content/mu-plugins/xg-user-meta.php` (see `/scripts/install-mu-plugin.sh`).

### Key WP REST endpoints

| Endpoint | Auth | Purpose |
|---|---|---|
| `POST /wp-json/wp/v2/users` | Admin Basic | Register new user |
| `GET /wp-json/wp/v2/users/me?context=edit` | Bearer JWT | Get own profile + meta |
| `PUT /wp-json/wp/v2/users/{id}` | Admin Basic | Update user (meta, password, role) |
| `GET /wp-json/wp/v2/users?search={q}` | Admin Basic | Find user by email/username |
| `POST /wp-json/jwt-auth/v1/token` | Credentials | Get JWT token |

### Env vars required

| Variable | Description |
|---|---|
| `WORDPRESS_BASE_URL` | `https://xgenious.com` |
| `WP_ADMIN_USERNAME` | WordPress admin username |
| `WP_ADMIN_APP_PASSWORD` | WordPress Application Password (not login password) |

---

## 5. Token Utilities (`lib/token.ts`)

HMAC-SHA256 stateless tokens — no database storage needed.

```typescript
import {
  generateVerificationToken, verifyVerificationToken,
  generateResetToken, verifyResetToken
} from '@/lib/token';

// generate
const sentAt = Math.floor(Date.now() / 1000);
const sig = generateVerificationToken(userId, email, sentAt);
const url = `/verify-email?uid=${userId}&t=${sentAt}&sig=${sig}`;

// verify
const valid = verifyVerificationToken(sig, userId, email, sentAt);
```

Token expiry: 24h for email verification, 1h for password reset (enforced in API routes).

---

## 6. Disposable Email Block (`lib/disposable-emails.ts`)

```typescript
import { isDisposableEmail } from '@/lib/disposable-emails';

if (isDisposableEmail(email)) {
  return NextResponse.json({ error: 'Temporary email addresses are not allowed.' }, { status: 400 });
}
```

Use on any route that accepts user email input (register, forgot-password, etc.).
