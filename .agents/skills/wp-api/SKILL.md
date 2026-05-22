---
name: wp-api
description: >
  Guide for calling the WordPress REST API from xgenious-next (admin and user-scoped).
  Covers auth patterns, user meta fields, key endpoints, and email verification flow.
  Trigger: "WordPress API", "wp-json", "user meta", "WP user", "subscriber check",
  "/wp-api", or any request touching WordPress user data.
---

WordPress is the user store. All user operations go through the WP REST API.
Base URL: `process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com'`

## Two auth modes

### Admin-scoped (create users, set meta, update any user)

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

### User-scoped (read/update own profile)

```typescript
// server component or API route
import { auth } from '@/auth';
const session = await auth();

const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me?context=edit`, {
  headers: { Authorization: `Bearer ${session.wpToken}` },
  cache: 'no-store',
});
```

## Email verification meta fields

All three fields must be registered via `wp-content/mu-plugins/xg-user-meta.php`.

| Meta key | Type | Description |
|---|---|---|
| `email_verified` | int | `0` = unverified (blocks login), `1` = verified |
| `email_verification_sent_at` | int | Unix timestamp — rate limit resend to 2 min |
| `password_reset_requested_at` | int | Unix timestamp — invalidates old reset tokens |

`default: 1` in the mu-plugin means **existing users without this meta are treated as verified**.

## Login gate (auth.ts)

```typescript
const emailVerified = user.meta?.email_verified;
if (emailVerified === 0 || emailVerified === '0') {
  throw new Error('EmailNotVerified'); // triggers login page's resend flow
}
```

## Key endpoints

| Endpoint | Auth | Use |
|---|---|---|
| `POST /wp-json/wp/v2/users` | Admin Basic | Register new subscriber |
| `GET /wp-json/wp/v2/users/me?context=edit` | Bearer JWT | Own profile + meta |
| `PUT /wp-json/wp/v2/users/{id}` | Admin Basic | Update user/meta/password |
| `GET /wp-json/wp/v2/users?search={q}` | Admin Basic | Find by email/username |
| `POST /wp-json/jwt-auth/v1/token` | Credentials | Get JWT (auth.ts) |

## Finding a user by email

```typescript
const res = await fetch(
  `${WP_BASE}/wp-json/wp/v2/users?search=${encodeURIComponent(email)}&per_page=5&context=edit`,
  { headers: { Authorization: `Basic ${credentials}` }, cache: 'no-store' },
);
const users: any[] = await res.json();
const user = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
```

## Subscriber-only constraint

Only WordPress users with role `subscriber` can log in via xgenious.com. This is enforced in `auth.ts`. When creating users via `/api/register`, always pass `roles: ['subscriber']`.

## Env vars

| Variable | Description |
|---|---|
| `WORDPRESS_BASE_URL` | `https://xgenious.com` |
| `WP_ADMIN_USERNAME` | WordPress admin username |
| `WP_ADMIN_APP_PASSWORD` | Application Password (Settings → Users → Application Passwords) |
