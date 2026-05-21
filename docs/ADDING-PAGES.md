# Adding a New Page — Required Checklist

Every new `page.tsx` must be registered in two places before pushing. The pre-push git hook (`scripts/check-new-pages.sh`) blocks the push if either is missing.

---

## 1. Add to `app/sitemap.ts`

Open `app/sitemap.ts` and add an entry to `staticPages`:

```ts
{ url: `${BASE_URL}/your-new-page`, priority: 0.8, changeFrequency: 'monthly' as const },
```

Priority guide:

| Page type | priority |
|-----------|---------|
| Home | 1.0 |
| Core service pages | 0.9 |
| Free software / free tools | 0.9 |
| About, contact, case studies | 0.8 |
| Legal (privacy, terms, refund) | 0.3 |

---

## 2. Add to `middleware.ts` — single-segment routes only

**Only needed if your route is one segment deep**, e.g. `/new-service` (not `/case-studies/new-study`).

Without this, production will proxy the URL to the WordPress VPS and return a 404.

Open `middleware.ts` and add the slug to `NEXT_ROUTES`:

```ts
const NEXT_ROUTES = new Set([
  // ... existing entries ...
  'new-service',   // ← add here
]);
```

Multi-segment routes (`/case-studies/foo`, `/free-tools/bar`) are handled automatically and do **not** need middleware registration.

---

## 3. SEO metadata

Every page needs metadata. Follow the template in `SEO-SKILLS.md`:

- `title` — 50–60 chars, primary keyword first
- `description` — 120–155 chars
- `alternates.canonical` — full URL
- OG + Twitter tags
- JSON-LD schema (FAQPage minimum)

---

## 4. Dynamic routes

Dynamic routes (`app/free-tools/[slug]/page.tsx`) are skipped by the hook — manage their sitemap entries manually if they have known slugs.

---

## Hook setup (after cloning)

The hook lives in `.git/hooks/` which is not committed. Run once:

```bash
bash scripts/install-hooks.sh
```

To run the check manually at any time:

```bash
bash scripts/check-new-pages.sh
```
