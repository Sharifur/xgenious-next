# WordPress SEO fixes: content editor guide

For: the content editor working in **WP Admin** (Rank Math + block editor). No code needed.
Prepared: 10 Oct 2026. Data: Google Search Console (GSC), last 3 months vs previous 3 months.

## 0. Read this first

### What the developer already did (do not redo)
Shipped in the `xgenious-next-wp-theme` (branch `dev`, needs to be deployed to live before step 1 is true):

- Canonical URL, `og:url` and sitemap URLs now come out **without a trailing slash** (`/slug`, not `/slug/`).
- Internal links inside post content are shown slash-less automatically. **You do not need to edit old links by hand.**
- The `.md` view of each post uses the slash-less canonical.

Always write new internal links **without a trailing slash**: `https://xgenious.com/ecommerce-php-script`.

### Rules for every edit
1. **Never change the URL (slug) of a published post** unless this guide says so. If a slug must change, add a 301 redirect in the same step.
2. **Never change Settings → Permalinks.** It would break every blog page.
3. Titles ≤ ~60 characters, meta descriptions 120–155 characters.
4. Facts (prices, versions, counts, claims) must be checked. Where this guide says **VERIFY**, confirm before publishing. Do not publish a claim you cannot confirm.
5. Use **one H1** per post (the post title). Sections are **H2**, sub-points **H3**. Never skip levels.
6. After you update a post, click **Update**, then do the "Request indexing" step (section 9).

### Where things are in WP Admin
| Task | Location |
|---|---|
| Edit title / description | Edit post → Rank Math icon (top right) → **General → Edit Snippet** |
| Redirects | **Rank Math → Redirections → Add New** |
| FAQ with schema | In the block editor add block **"FAQ by Rank Math"** |
| Table of contents | Block **"Table of Contents by Rank Math"** |
| Sitemap cache | **Rank Math → Sitemap Settings** → save (clears cache) |
| Heading level | Click the heading block → toolbar → H2 / H3 |

## 1. Task list (do in this order)

| # | Task | Priority | Section |
|---|---|---|---|
| 1 | Confirm the theme deploy worked (canonical check) | P0 | 2 |
| 2 | Fix redirect destinations in Rank Math | P0 | 3 |
| 3 | Rewrite titles/descriptions on 4 posts | P1 (quick) | 4 |
| 4 | Rewrite `/ecommerce-php-script` | P1 | 5 |
| 5 | Crowdfunding cluster | P1 | 6 |
| 6 | HR + school clusters | P2 | 7 |
| 7 | On-demand home-services hub | P2 | 8 |
| 8 | Request indexing + track results | after each | 9 |

---

## 2. Confirm the canonical fix is live (P0, 10 minutes)

Ask the developer to confirm the theme is deployed. Then check **one post** (example: `/ecommerce-php-script`):

1. Open the post on the live site in Chrome → right-click → **View page source** → Ctrl/Cmd+F `canonical`.
2. `<link rel="canonical" href="…">` must end in the slug with **no `/` at the end**. Same for `og:url`.
3. Open `https://xgenious.com/post-sitemap.xml`, Ctrl/Cmd+F `/</loc>`. Expect **no matches**.

If a slash is still there: go to **Rank Math → Sitemap Settings → Save Changes** (clears the sitemap cache), purge the site cache / Cloudflare (ask the developer), and re-check. If it still fails, tell the developer. Do not continue with other tasks until this is right, because the later work depends on one clean URL per post.

## 3. Redirects in Rank Math (P0)

Goal: every redirect is **one hop** and ends on a **slash-less** URL.

1. Go to **Rank Math → Redirections**. Search for each of the rules below. For any rule whose **Destination ends in `/`**, edit it and remove the slash. Do this for the whole list if time allows (sort by destination).
2. Make sure this redirect exists exactly like this:

| Source (slug) | Destination | Type |
|---|---|---|
| `5-most-popular-open-source-crowdfunding-platforms-for-startups-change-your-fundraising-way` | `https://xgenious.com/open-source-crowdfunding-platform` | 301 |

3. Check `5-crowdfunding-campaigns-that-failed-and-what-we-can-learn-from-them` (it lost 1,099 impressions). Open it on the site.
   - If it is **gone/404**: add a 301 to `https://xgenious.com/6-crowdfunding-success-stories-of-all-time`.
   - If it is **live**: leave it and tell the SEO owner.
4. Test: open the old URL in a private window. It must land on the final page in **one jump**.

---

## 4. Titles and descriptions (P1, quick wins)

**One-time setting (ask the SEO owner first, it affects all posts):** *Rank Math → Titles & Meta → Posts → Single Post Title*. If it ends with `%sep% %sitename%`, titles get "- Xgenious" appended and become too long. Setting it to `%title%` removes that for every post. If the owner does not approve, keep the suffix and shorten the titles below by about 10 characters.

For each post: **Edit post → Rank Math → Edit Snippet** → paste Title and Description → **Update**.

| Post (slug) | New title | New meta description |
|---|---|---|
| `best-self-hosted-sentry-alternatives` | 7 Best Self-Hosted Sentry Alternatives (2026): Free & Open Source | GlitchTip, SigNoz, Highlight & more: free, open-source Sentry alternatives compared on setup, features and hosting cost. Pick yours in 5 minutes. |
| `envato-elements-black-friday-cyber-monday-deals-2024` | Envato Elements Black Friday 2026 Deal: Is There a Discount? | Latest Envato Elements Black Friday & Cyber Monday 2026 offer, past discounts (2024-2025) and how to get the lowest price on premium code & templates. |
| `saas-tool-selection-checklist` | SaaS Tool Selection Checklist: 25 Critical Tech Specs (Free) | Choosing a SaaS tool? Use this free checklist of critical tech specs (security, integrations, pricing, scalability) to compare vendors fast. |
| `on-demand-service-marketplace-development-platform` | On-Demand Service Marketplace Development: 2026 Platform Guide | Keep the current description unless it mentions 2025. |

**VERIFY before publishing**
- `saas-tool-selection-checklist`: count the checklist items. If it is not 25, use the real number in the title.
- Envato post: the title promises a 2026 answer, so the post must deliver it (next list). Do not claim a discount that does not exist.

**Envato post, also do:** update the H1 and first paragraph for 2026; add a short "2026 status" box at the top (is there an offer, when it usually starts, how to get the best price); keep the URL.

---

## 5. `/ecommerce-php-script` (P1, post ID 24596)

Biggest blog page (9,942 impressions, position 14.6). Goal: page 1 for "ecommerce script", "ecommerce php script", "laravel ecommerce script", "multi vendor ecommerce script".

**Keep** the URL and the H1.

**Title** `10 Best eCommerce PHP Scripts 2026: Laravel & Multi-Vendor Compared`
**Description** `Compare the 10 best eCommerce PHP scripts for 2026, including Laravel and multi-vendor options, with pricing, features, pros and cons. Pick the right one fast.`

**Section plan** (H2s; ★ = new or changed)

1. What is an eCommerce PHP script? (keep)
2. The 10 best at a glance (keep the table and **add columns**: Framework, Single/Multi-vendor, SaaS/multi-tenant, Mobile app, Price, Last update)
3. ★ Best **Laravel** eCommerce scripts: Nazmart, SafeCart, Zaika, Grenmart, plus the competitors already in the post. ~300 words. This section targets "laravel ecommerce script".
4. ★ Best **multi-vendor** eCommerce scripts. ~300 words. Link "multi vendor ecommerce script" to `https://xgenious.com/products/safecart-multi-vendor-laravel-ecommerce-platform`.
5. Single vendor or multi-vendor? Pick your model first (keep)
6. ★ Nazmart vs Active eCommerce CMS vs Martfury: a table (multi-tenancy, payment gateways, licence, hosting needs, price). Take competitor facts from their sales pages and note the date.
7. Key features to look for (keep)
8. ★ How to install a Laravel eCommerce script: 5 steps, link to the Nazmart docs (cPanel/CloudPanel install, cron job, wildcard SSL).
9. ★ FAQ: use the **FAQ by Rank Math** block. Add:
   - What is the best Laravel eCommerce script in 2026?
   - Is there a free open-source PHP eCommerce script?
   - What is the difference between a single-vendor and a multi-vendor eCommerce script?
   - Can I run multiple stores from one PHP script (multi-tenant SaaS)?
   - What hosting do I need for a PHP eCommerce script?
   - Nazmart vs Active eCommerce CMS: which should I choose?

   Each answer 40–80 words, direct, starts with the answer.

**Rules for this rewrite**
- Re-check every competitor's price and version. **VERIFY** all of them.
- Change the "last updated" date only because content really changed.
- Be fair to competitors. No unsupported claims.

**Links from other posts to this one** (anchors → `https://xgenious.com/ecommerce-php-script`): add in `/saas-ecommerce-platform` and other eCommerce posts, using "ecommerce php script" or "laravel ecommerce script". Do not use "click here".
(The product pages Nazmart/SafeCart/Zaika/Grenmart already link here from the site code.)

---

## 6. Crowdfunding cluster (P1)

Two hub posts compete. Give them different jobs.

| Post | Job | Main keyword |
|---|---|---|
| `best-php-crowdfunding-scripts` | Paid, self-hosted scripts you buy | crowdfunding script |
| `open-source-crowdfunding-platform` | Free / open-source software | open source crowdfunding platform |

Do all of this:
1. Each hub links to the other once, near the top:
   - In `open-source-crowdfunding-platform`: "Looking for paid, supported scripts? See our best PHP crowdfunding scripts."
   - In `best-php-crowdfunding-scripts`: "Prefer free software? See our open source crowdfunding platforms."
2. **`open-source-crowdfunding-platform`**: add H2 "Open source vs paid crowdfunding script: total cost compared" (hosting, developer time, support); add H2 "When to choose a ready-made script like Fundorex"; add FAQs (FAQ by Rank Math): *Is there a free open-source crowdfunding platform?* / *Can I self-host a Kickstarter clone?* / *What tech stack do open source crowdfunding platforms use?*
3. **`best-php-crowdfunding-scripts`**: add a table column "Donation / reward / equity support"; add H2 "Best crowdfunding script for nonprofits / donations" linking to `https://xgenious.com/donation-based-crowdfunding`.
4. Both hubs: link "Fundorex crowdfunding script" to `https://xgenious.com/products/fundorex-crowdfunding-platform` and "try the Fundorex demo" to `https://fundorex.xgenious.com/`.
5. From these posts, link to the two hubs with the anchors "crowdfunding script" or "open source crowdfunding platform": `6-crowdfunding-success-stories-of-all-time`, `best-crowdfunding-platform`, `donation-based-crowdfunding`, `best-crowdfunding-for-nonprofits-…`.
6. Redirects: done in section 3.

(The Fundorex product page already links to both hubs from the site code.)

---

## 7. HR and school clusters (P2)

### 7a. Heading structure: do this first for HR posts
`best-hr-software-for-small-business` and `free-hr-software-for-small-business` currently have a single H2 ("Table of Contents"). Google reads the outline from headings.

1. Open the post → click the first tool/section heading → toolbar → **H2**. Do it for **every tool and section**.
2. Sub-points under a tool become **H3**.
3. The Table of Contents block will then list every section. Check it after saving.

### 7b. `best-hr-software-for-small-business`
Job: commercial comparison (paid + free). Target "best hr software for small business".
- **Title** `Best HR Software for Small Business (2026): 7 Tools Compared`
- **Description** `Compare the 7 best HR software for small businesses in 2026: pricing per employee, payroll, hiring and free options. Find the right fit in minutes.`
- Sections: quick answer + summary table (price per employee/month, payroll, hiring/ATS, free plan, best for) → one H2 per tool (keep 7, **refresh pricing**) → ★ How to choose HR software for a small business (team size, payroll country, integrations) → ★ Free & open-source option: **Genius HRM**, link "free open-source HRM" to `https://xgenious.com/free-software/genius-hrm` → ★ HR software cost for small businesses → FAQ.
- FAQ: *What is the best HR software for a small business?* / *Is there free HR software for small businesses?* / *How much does HR software cost per employee?* / *Do small businesses need HR software?*
- **Taskip section: do not add it** unless the product team confirms Taskip has HR/team features. If unsure, skip.
- Link once at the top to the "free" post and vice versa.

### 7c. `free-hr-software-for-small-business`
Job: **only** free and open-source options. Keep both posts (they have different search terms). Link once to the "best" post at the top.

### 7d. `free-school-management-software`
Job: "free school management software", "school management software free". (`best-school-management-software` handles "school management software"; `/free-software/genius-school-management` is the product page.)

Sections:
1. What is free school management software?
2. 10 best at a glance (table: open source? self-hosted/cloud, modules, student limit, mobile app)
3. One H3 per tool (keep). Put **Genius School Management** first, labelled "our free MIT-licensed option", with a link to `https://xgenious.com/free-software/genius-school-management`.
4. ★ Free vs paid school ERP: what you give up
5. ★ How to self-host a free school management system (requirements, steps)
6. ★ Free tools for schools: link "attendance percentage calculator" to `https://xgenious.com/free-tools/attendance-percentage-calculator`, "school fee calculator" to `https://xgenious.com/free-tools/school-fee-calculator`
7. FAQ: *Is there a completely free school management software?* / *What is the best open-source school management system?* / *Can I use free school software for multiple branches?* / *Is free school management software safe for student data?*

Link once to `best-school-management-software` and back.

(Genius School Management and Genius HRM product pages already link to these posts from the site code.)

---

## 8. On-demand home-services hub (P2)

Ten or more posts compete at positions 9–45 and nothing ties them together.

### 8a. Merge duplicates first
Compare `on-demand-service-marketplace-development` (1,192 impressions, 1 click) with `on-demand-service-marketplace-development-platform`.
1. Copy anything valuable from the weaker one into `-platform`.
2. In Rank Math → Redirections: source `on-demand-service-marketplace-development` → destination `https://xgenious.com/on-demand-service-marketplace-development-platform`, **301**.
3. Move the old post to Draft/Trash **after** the redirect works.

### 8b. Create the hub page
New **Page**, slug exactly `on-demand-home-services`.
- **Title** `On-Demand Home Services: Business Models, Platforms & How to Launch (2026)`
- **Description** `Everything you need to start an on-demand home services business: models, monetization, features, platforms and ready-made scripts like Prohandy and Qixer.`

| H2 | Link to (use the quoted anchor) |
|---|---|
| 1. What is an on-demand service? | (60–80 word direct definition, no link) |
| 2. How the on-demand home services market works | (none) |
| 3. Business models | `/top-on-demand-home-services-business-models` ("on-demand home services business models") |
| 4. How home service marketplaces make money | `/monetization-models-for-home-service-marketplace` ("home service marketplace monetization models") |
| 5. Must-have marketplace features | `/home-services-marketplace-development-features-implementation` ("home services marketplace features") |
| 6. Build vs buy: development guide | `/on-demand-service-marketplace-development-platform` ("on-demand service marketplace development") |
| 7. Best platforms & scripts | `/best-on-demand-service-marketplace-platforms` ("best on-demand service marketplace platforms") |
| 8. Business ideas | `/top-on-demand-service-business-ideas` ("on-demand service business ideas") |
| 9. Launch with Prohandy or Qixer | `/products/prohandy-on-demand-home-service-marketplace` ("Prohandy home service marketplace script"), `/products/qixer-on-demand-service-marketplace` ("Qixer on-demand service app"), `/case-studies/on-demand-home-service-app` |
| 10. FAQ (FAQ by Rank Math) | *What is an on-demand home service?* / *How do I start an on-demand home services business?* / *How much does it cost to build a home services marketplace app?* / *Prohandy vs Qixer: what's the difference?* / *Can I run a handyman marketplace with a ready-made script?* |

(All links written as full `https://xgenious.com/...` addresses, no trailing slash.)

### 8c. Connect the posts to the hub
- Every post listed above gets, near the top: "Part of our [on-demand home services guide](https://xgenious.com/on-demand-home-services)".
- Each also links to 2 sibling posts and 1 product page.
- Add the hub to the main menu or the blog sidebar under "Guides".
- Tell the developer when the hub is live. The Prohandy and Qixer product pages will then also link to it. (They already link to `top-on-demand-service-business-ideas`.)

---

## 9. After every change: request indexing and track

1. Open **Google Search Console → URL Inspection**, paste the full no-slash URL → **Request indexing**. (Limit: about 10/day, so start with the biggest pages: `ecommerce-php-script`, `best-php-crowdfunding-scripts`, `open-source-crowdfunding-platform`, `free-school-management-software`, `best-hr-software-for-small-business`.)
2. Posts that gained FAQs: run <https://search.google.com/test/rich-results> on the URL. It should show **FAQ** with no errors.
3. In GSC: **Sitemaps** → resubmit `https://xgenious.com/post-sitemap.xml`.
4. In GSC **Page indexing**, open "Page with redirect" and "Alternate page with proper canonical" and click **Validate fix**.
5. Tracking: GSC → Performance → add filter Page contains `ecommerce-php-script` (slash and slash-less together). Note clicks, impressions and position now; compare 28 days later. Canonical consolidation takes 3–6 weeks; rankings after content work take 4–8 weeks.

## 10. Done checklist (per post)

- [ ] Title and description set, within length
- [ ] One H1; sections are H2, sub-points H3
- [ ] FAQ block added where listed (5+ Q&As, 40–80 words each)
- [ ] All new internal links are full URLs with **no trailing slash**
- [ ] Prices, versions and claims checked (**VERIFY** items cleared)
- [ ] Redirect added and tested if a URL changed
- [ ] Post updated; indexing requested in GSC

## 11. What you do NOT need to do (handled in code)

- Removing trailing slashes from old internal links in existing posts.
- Canonical / `og:url` / sitemap slash fix.
- Links from product and free-software pages to these posts (already added in the Next.js site).
- Demo sites (Fundorex/Xilancer) and docs.xgenious.com: separate teams.
