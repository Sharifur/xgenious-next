# WordPress-side SEO fixes

Source: GSC export + audit of `xgenious-seo-fixes` (10 Oct 2026). This file covers **only** what is done in WordPress (Rank Math, editor, WP-CLI, mu-plugin). Next.js-side work is tracked separately; items that depend on it are marked **[needs Next.js]**.

Not covered here: demo-site `noindex` (Fundorex/Xilancer — Cloudflare/Laravel) and `docs.xgenious.com` (separate Next.js app).

## How WP is served (read first)

`middleware.ts` rewrites every single-segment path to `http://origin.xgenious.com/<slug>/` — it **appends the trailing slash itself**. `vercel.json` does the same for `/blog`, `/category`, `/tag`, `/author`, etc. Visitors see `/slug` (Vercel 308s `/slug/` → `/slug`); WordPress only ever sees `/slug/`.

> **Do NOT change Settings → Permalinks to remove the trailing slash.**
> WP would 301 `origin/<slug>/` → `/<slug>`, Vercel would pass that to the browser, the middleware would rewrite it back to `/<slug>/` → **redirect loop on every post.**
> (Changing it is only safe if `middleware.ts` and the `vercel.json` rewrites stop appending `/` in the same release.)

Keep the WP permalink structure. Fix the canonical signal in Fix 1 below instead.

---

## Fix 1 (P0): canonical / og:url / sitemap must be slash-less

**Problem:** Rank Math emits `canonical`, `og:url` and sitemap `<loc>` with a trailing slash; the public URL 308s to the slash-less version. Conflicting signals split ranking (e.g. `/ecommerce-php-script/` 7,360 impr → 145, `/ecommerce-php-script` 21 → 9,942).

### 1a. mu-plugin
Create `wp-content/mu-plugins/xg-untrailing.php`:

```php
<?php
// Public URLs are slash-less (Vercel 308s /slug/ -> /slug). Make SEO signals match.
// Permalinks stay slash-terminated: the Next.js proxy requests the origin with a trailing slash.
add_filter('rank_math/frontend/canonical', fn($u) => $u ? untrailingslashit($u) : $u);
add_filter('rank_math/opengraph/url',      fn($u) => $u ? untrailingslashit($u) : $u);
add_filter('rank_math/sitemap/entry', function ($url) {
    if (!empty($url['loc'])) $url['loc'] = untrailingslashit($url['loc']);
    return $url;
});
```

- Verify hook names against the installed Rank Math version (`rank_math/frontend/canonical`, `rank_math/sitemap/entry` are documented).
- Exclude the homepage: `untrailingslashit('https://xgenious.com/')` gives `https://xgenious.com` — fine, but confirm Rank Math output for `/blog` and any archive pages still matches what Vercel serves.
- Do **not** filter `post_link`/`page_link` (the original doc suggested it): that changes links in menus and content and can fight the origin's own slash redirect.

### 1b. Rank Math redirections
Rank Math → Redirections: edit every rule whose **destination ends in `/`** and remove the slash. Known one:

| Source | Destination |
|---|---|
| `5-most-popular-open-source-crowdfunding-platforms-for-startups-change-your-fundraising-way` | `https://xgenious.com/open-source-crowdfunding-platform` (301) |

Result must be a single hop (currently 301 → slash URL → 308 → slash-less).
(If you prefer this redirect in `next.config.ts` instead, delete the WP rule so it isn't defined twice — **[needs Next.js]**.)

### 1c. Internal links in post content
Drop the slash from internal blog links. Always dry-run and review first:

```bash
wp post list --post_type=post,page --field=post_name | while read s; do
  wp search-replace "https://xgenious.com/$s/" "https://xgenious.com/$s" wp_posts \
    --skip-columns=guid --dry-run
done
# if the dry run looks right, rerun without --dry-run
```

Back up the DB first. Watch for slugs that are prefixes of other slugs (use the closing `"` / `#` / `?` boundary if the dry run shows false matches).

### 1d. Sitemap + caches
- Rank Math → Sitemap Settings: clear the sitemap cache; `post-sitemap.xml` `<loc>` values should now have no trailing slash.
- Purge page cache and Cloudflare (everything).
- GSC → Sitemaps: resubmit `post-sitemap.xml` (and `sitemap_index.xml`).
- **[needs Next.js]** `app/robots.ts` must also list the WP sitemap (it currently declares only `/sitemap.xml`).

### Verify
```bash
for s in ecommerce-php-script open-source-crowdfunding-platform best-self-hosted-sentry-alternatives free-school-management-software best-php-crowdfunding-scripts; do
  echo "== $s"
  curl -sI "https://xgenious.com/$s/" | grep -iE '^(HTTP|location)'          # 308 -> /slug
  curl -s  "https://xgenious.com/$s"  | grep -oE '<link rel="canonical" href="[^"]+"|og:url" content="[^"]+"'  # no trailing slash
done
curl -sI https://xgenious.com/5-most-popular-open-source-crowdfunding-platforms-for-startups-change-your-fundraising-way | grep -iE '^(HTTP|location)'  # one hop
curl -s https://xgenious.com/post-sitemap.xml | grep -c '/</loc>'            # expect 0
curl -s -o /dev/null -w '%{http_code}\n' https://xgenious.com/ecommerce-php-script   # 200, not a loop
```
GSC → URL Inspection on ~5 posts: user-declared and Google-selected canonical both slash-less → Request indexing.

---

## Fix 2 (P1, quick): Rank Math titles and descriptions

Rank Math → Titles & Meta → Posts → *Single Post Title* = `%title%` (removes the `- Xgenious` suffix that pushes titles past ~60 chars). Then per post: Rank Math sidebar → **Edit Snippet**.

| Post | Title | Description |
|---|---|---|
| `/best-self-hosted-sentry-alternatives` | 7 Best Self-Hosted Sentry Alternatives (2026): Free & Open Source | GlitchTip, SigNoz, Highlight & more: free, open-source Sentry alternatives compared on setup, features and hosting cost. Pick yours in 5 minutes. |
| `/envato-elements-black-friday-cyber-monday-deals-2024` | Envato Elements Black Friday 2026 Deal: Is There a Discount? | Latest Envato Elements Black Friday & Cyber Monday 2026 offer, past discounts (2024-2025) and how to get the lowest price on premium code & templates. |
| `/saas-tool-selection-checklist` | SaaS Tool Selection Checklist: 25 Critical Tech Specs (Free) | Choosing a SaaS tool? Use this free checklist of critical tech specs (security, integrations, pricing, scalability) to compare vendors fast. |
| `/on-demand-service-marketplace-development-platform` | On-Demand Service Marketplace Development: 2026 Platform Guide | (keep current; refresh if stale) |

- **Envato post:** also update H1 + intro for 2026, add a "2026 status" box at the top. Keep the URL (it holds the history). Optional later: yearless slug + 301.
- Verify before publishing: the checklist really has 25 items. Do not claim a discount that doesn't exist.
- Prohandy demo (Laravel admin SEO settings) copy is in the original `06` doc — out of WP scope.

---

## Fix 3 (P1): `/ecommerce-php-script` (post ID 24596)

Keep URL and H1. Depends on Fix 1.

**Title:** `10 Best eCommerce PHP Scripts 2026: Laravel & Multi-Vendor Compared`
**Meta:** `Compare the 10 best eCommerce PHP scripts for 2026, including Laravel and multi-vendor options, with pricing, features, pros and cons. Pick the right one fast.`

H2 outline (★ = new/changed):
1. What is an eCommerce PHP script? (keep)
2. The 10 best at a glance — keep table, **add columns**: Framework, Single/Multi-vendor, SaaS/multi-tenant, Mobile app, Price, Last update
3. ★ Best **Laravel** eCommerce scripts (Nazmart, SafeCart, Zaika, Grenmart + competitors already listed), ~300 words → "laravel ecommerce script"
4. ★ Best **multi-vendor** eCommerce scripts, ~300 words → "multi vendor ecommerce script"; link to `/products/safecart-multi-vendor-laravel-ecommerce-platform`
5. Single vendor or multi-vendor? (keep)
6. ★ Nazmart vs Active eCommerce CMS vs Martfury — table (multi-tenancy, gateways, licence, hosting, price). Source competitor facts from their own sales pages, dated.
7. Key features to look for (keep)
8. ★ How to install a Laravel eCommerce script (5 steps, link Nazmart docs: cPanel/CloudPanel, cron, wildcard SSL)
9. ★ FAQ — add in the **Rank Math FAQ block** so schema updates:
   - What is the best Laravel eCommerce script in 2026?
   - Is there a free open-source PHP eCommerce script?
   - Single-vendor vs multi-vendor eCommerce script?
   - Can I run multiple stores from one PHP script (multi-tenant SaaS)?
   - What hosting do I need for a PHP eCommerce script?
   - Nazmart vs Active eCommerce CMS: which should I choose?

Rules: update "last updated" only for real changes; re-check every competitor's price/version; anchor outbound links to Nazmart/SafeCart product pages descriptively.

**Inbound links from other WP posts** (e.g. `/saas-ecommerce-platform`, other eCommerce posts): anchors "ecommerce php script" / "laravel ecommerce script" → `https://xgenious.com/ecommerce-php-script` (slash-less).
**[needs Next.js]** product pages (Nazmart, SafeCart, Zaika, Grenmart) linking back.

---

## Fix 4 (P1): Crowdfunding cluster → Fundorex

1. **Redirects:** done in Fix 1b. Also check `/5-crowdfunding-campaigns-that-failed-and-what-we-can-learn-from-them` (lost 1,099 impr): if the post is gone, 301 → `/6-crowdfunding-success-stories-of-all-time` (slash-less).
2. **Separate the two hubs** (cannibalisation):
   - `/best-php-crowdfunding-scripts` → paid, self-hosted scripts; primary query "crowdfunding script".
   - `/open-source-crowdfunding-platform` → free/open-source; primary "open source crowdfunding platform".
   - Each links to the other once near the top ("Looking for paid, supported scripts? See our best PHP crowdfunding scripts").
3. **`/open-source-crowdfunding-platform`:** add H2 "Open source vs paid crowdfunding script: total cost compared" (hosting, dev time, support), H2 "When to choose a ready-made script like Fundorex", FAQs: *Is there a free open-source crowdfunding platform?* / *Can I self-host a Kickstarter clone?* / *What tech stack do open source crowdfunding platforms use?*
4. **`/best-php-crowdfunding-scripts`:** add table column "donation vs reward vs equity support"; add H2 "Best crowdfunding script for nonprofits / donations" linking `/donation-based-crowdfunding`.
5. **Links into the hubs** from `/6-crowdfunding-success-stories-of-all-time`, `/best-crowdfunding-platform`, `/donation-based-crowdfunding`, `/best-crowdfunding-for-nonprofits-…` (anchors "crowdfunding script" / "open source crowdfunding platform").
6. **Links out of the hubs:** "Fundorex crowdfunding script" → `/products/fundorex-crowdfunding-platform`; "try the Fundorex demo" → `https://fundorex.xgenious.com/`.
7. **[needs Next.js]** Fundorex product page "Crowdfunding guides" block → both hubs; **[docs app]** link from `docs.xgenious.com/docs/fundorex/`.

Verify: Rich Results Test (FAQPage) on both hubs; URL Inspection → Request indexing.

---

## Fix 5 (P2): On-demand / home-services hub

1. **Consolidate:** compare `/on-demand-service-marketplace-development` (1,192 impr, 1 click) with `…-development-platform`. Merge the weaker into `-platform`, add a 301 in Rank Math (slash-less destination).
2. **Create hub** — WordPress page, slug `on-demand-home-services` (WP, not Next.js: spokes are all WP; avoids `NEXT_ROUTES` / sitemap hook work).
   - Title: `On-Demand Home Services: Business Models, Platforms & How to Launch (2026)`
   - Meta: `Everything you need to start an on-demand home services business: models, monetization, features, platforms and ready-made scripts like Prohandy and Qixer.`
   - H2 outline → link targets:
     1. What is an on-demand service? (60–80 word direct definition)
     2. How the on-demand home services market works
     3. Business models → `/top-on-demand-home-services-business-models`
     4. Monetization → `/monetization-models-for-home-service-marketplace`
     5. Features → `/home-services-marketplace-development-features-implementation`
     6. Build vs buy → `/on-demand-service-marketplace-development-platform`
     7. Best platforms & scripts → `/best-on-demand-service-marketplace-platforms`
     8. Business ideas → `/top-on-demand-service-business-ideas`
     9. Launch with Prohandy or Qixer (comparison box) → `/products/prohandy-on-demand-home-service-marketplace`, `/products/qixer-on-demand-service-marketplace`, `/case-studies/on-demand-home-service-app`
     10. FAQ (Rank Math FAQ block): *What is an on-demand home service?* / *How do I start an on-demand home services business?* / *How much does it cost to build a home services marketplace app?* / *Prohandy vs Qixer: what's the difference?* / *Can I run a handyman marketplace with a ready-made script?*
3. **Spoke → hub:** each spoke gets near the top "Part of our [on-demand home services guide](/on-demand-home-services)", plus 2 sibling spokes and 1 product link.
4. **Title refresh:** see Fix 2 (`-platform` post drops "2025").
5. Add hub to the WP main menu / blog sidebar under "Guides". Sitemap inclusion is automatic.
6. **[needs Next.js]** Prohandy/Qixer product pages → hub + 2 spokes.

---

## Fix 6 (P2): School + HR clusters

### School
- **Role split:** `/free-school-management-software` → "free school management software"; `/best-school-management-software` → "school management software"; `/free-software/genius-school-management` is the product page **[Next.js]**.
- **Expand `/free-school-management-software`:**
  1. What is free school management software?
  2. 10 best at a glance (table: open source?, self-hosted/cloud, modules, student limit, mobile app)
  3. One H3 per tool (keep); put **Genius School Management** first, labelled "our free MIT-licensed option", CTA → `/free-software/genius-school-management`
  4. ★ Free vs paid school ERP: what you give up
  5. ★ How to self-host a free school management system
  6. ★ Free tools for schools → `/free-tools/attendance-percentage-calculator`, `/free-tools/school-fee-calculator`
  7. FAQ: *Is there a completely free school management software?* / *Best open-source school management system?* / *Can I use free school software for multiple branches?* / *Is free school management software safe for student data?*

### HR
- **Fix heading hierarchy first** in `/best-hr-software-for-small-business` and `/free-hr-software-for-small-business`: only one `<h2>` ("Table of Contents") exists. Each tool/section → H2, sub-points → H3 (Gutenberg: block → H2; Elementor etc.: HTML tag = H2).
- **Role split:** "best" = commercial comparison (paid + free); "free" = free/open-source only. Each links to the other once at the top. Keep both (separate query volume) unless the tool lists overlap heavily.
- **Expand `/best-hr-software-for-small-business`:**
  1. Quick answer + summary table (price/employee/month, payroll, ATS, free plan, best for)
  2. One H2 per tool (keep 7, refresh pricing)
  3. ★ How to choose HR software for a small business
  4. ★ Free & open-source option: Genius HRM → `/free-software/genius-hrm`
  5. ★ HR + client/project management — Taskip section **only if the product team confirms Taskip has HR/team features**; otherwise skip
  6. ★ HR software cost for small businesses
  7. FAQ: *Best HR software for a small business?* / *Free HR software for small businesses?* / *HR software cost per employee?* / *Do small businesses need HR software?*
- **Title:** `Best HR Software for Small Business (2026): 7 Tools Compared`
  **Meta:** `Compare the 7 best HR software for small businesses in 2026: pricing per employee, payroll, hiring and free options. Find the right fit in minutes.`

---

## Verification checklist (after all fixes)

```bash
for s in best-hr-software-for-small-business free-hr-software-for-small-business free-school-management-software; do
  curl -s https://xgenious.com/$s | grep -c '<h2'; done                  # expect >= 8 each
curl -s -o /dev/null -w '%{http_code}\n' https://xgenious.com/on-demand-home-services   # 200
curl -sI https://xgenious.com/on-demand-service-marketplace-development | grep -iE '^(HTTP|location)'  # 301 -> -platform
```
- Rich Results Test (FAQPage) on every post that gained FAQs.
- GSC: URL Inspection → Request indexing for each edited URL; Page indexing → validate "Page with redirect" / "Alternate page with proper canonical".
- Compare GSC 28-day clicks/CTR before vs after, slash and slash-less variants combined (Page contains `slug`). Expect canonical consolidation in 3–6 weeks.

## Dependencies on Next.js work
Contact canonical, `robots.ts` WP sitemap entry, product/free-software "Related guides" link blocks, `/about`, `/contact`, `/free-tools/saas-calculators` metadata, school page duplicate-suffix fix.
