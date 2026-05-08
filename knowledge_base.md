# Knowledge Base — byteseed / xgenious Product Catalog (CodeCanyon)

> **Purpose of this document.** This file is the single source of truth for an AI chatbot answering pre-sales / customer-support questions about the byteseed (xgenious) product line on CodeCanyon. It is structured for **fuzzy matching** — every product carries synonyms, use-cases, and intent keywords so the bot can suggest the right product even when the visitor does not know the exact name.
>
> **How a chatbot should use this file.**
> 1. Read the **Intent → Product Map** first to translate a vague request into a candidate product.
> 2. Open the matching **Product Card** (`### Product:` section) for canonical name, price, license, features, and the live CodeCanyon URL.
> 3. Always quote the **CodeCanyon item URL** as the source of truth for current price and license — pricing on this page is taken from public listings and may change; the bot should treat it as a strong hint, not a guarantee.
> 4. For licensing questions, fall back to the **License Glossary**.
> 5. For unanswerable / off-catalog questions, fall back to the **FAQ & Fallback Answers** section.
>
> **Last reviewed:** 2026-05-02. Prices are listed in USD and reflect the publicly indexed Regular License price on CodeCanyon at time of review. The Extended License figure is an *estimate* derived from the standard CodeCanyon pricing ratio for PHP scripts / mobile apps and **must be confirmed on the live product page** before being quoted as final.

---

## 1. About the Vendor

- **Author handle on CodeCanyon:** `byteseed`
- **Author portfolio:** https://codecanyon.net/user/byteseed/portfolio
- **Brand / studio:** xgenious
- **Marketplace:** Envato CodeCanyon (https://codecanyon.net)
- **Primary tech stack:** Laravel (PHP 8.1+), MySQL 8 / MariaDB, Bootstrap 5, with companion mobile apps in Flutter 3.x.
- **Common product DNA across the catalog:** drag-and-drop page builder, drag-and-drop menu / form / widget builder, multi-currency support, 18–22+ payment gateway integrations, multi-language admin, role and permission management, support ticket system, and notification system.

---

## 2. Product Overview Table

| # | Product | Type | Item ID | Regular License (≈USD) | Status |
|---|---------|------|---------|------------------------|--------|
| 1 | Qixer — Multi-Vendor On-Demand Handyman Service Marketplace | Web platform (Laravel) | 36475708 | $49 | Confirmed |
| 2 | Qixer Buyer App | Mobile (Flutter) | 38154133 | $49 | Confirmed |
| 3 | Qixer Seller App | Mobile (Flutter) | 39013880 | $39 | Confirmed |
| 4 | Universal Addon Bundle for Qixer | Addon bundle | 42725484 | ~$69 (verify) | Approximate |
| 5 | Influstar — Influencer Hiring Marketplace | Web platform (Laravel) | 59095296 | $39 | Confirmed |
| 6 | GoCar — Mechanic & Car Service Provider Marketplace | Web + mobile platform | 57643970 | $49 | Confirmed |
| 7 | Listocean — Classified Ads Listing Platform | Web platform (Laravel) | 53068796 | $29 | Confirmed |
| 8 | Listocean Bundle — Classified Ads Listing Platform | Bundle (platform + plugins) | 56488736 | $69 (occasional sale ~$55) | Confirmed |
| 9 | Safecart — Multi-Vendor Laravel eCommerce Platform | Web platform (Laravel) | 49428309 | $39 | Confirmed |
| 10 | Safecart Bundle Pack | Bundle (platform + plugins + apps) | 53120997 | Verify on live page (typical bundle pricing $99–$149) | Unverified |
| 11 | MultiSaaS — Multi-Tenancy Multipurpose Website Builder (SaaS) | Web platform (Laravel, multi-tenant) | 41892997 | $59 | Confirmed |
| 12 | MultiSaaS Bundle Pack | Bundle (platform + all plugins) | 52956609 | $199 | Confirmed |
| 13 | Zaika — Laravel eCommerce Shopping Platform (CMS) | Web platform (Laravel, single-vendor) | 35059777 | $39 | Confirmed |

> **Bot rule:** if a customer asks "what's the price of X?" — quote the figure above **plus** the URL, then add: *"For the most up-to-date price (including any active CodeCanyon sale), please open the listing."*

---

## 3. License Glossary (CodeCanyon / Envato)

CodeCanyon items are sold under one of two standard licenses. Choosing the right one is the most common pre-sales question.

### 3.1 Regular License — TL;DR
- **Use it when:** the end users of your product **will not be charged** to access it.
- **Examples that fit Regular:** an internal admin tool for one company, a free public website, a free demo, a personal portfolio.
- **You can:** create one End Product for yourself or for one client.
- **You cannot:** sell that End Product to anyone except the one client it was built for, charge end users to access it, or redistribute the source files.
- **Source:** https://codecanyon.net/licenses/terms/regular

### 3.2 Extended License — TL;DR
- **Use it when:** the end users of your product **will be charged** (subscription, per-use fee, paid download, paid SaaS, etc.).
- **Examples that require Extended:** a paid SaaS where customers pay you a monthly fee, a marketplace where you take a fee from each transaction *and* charge users a fee to use the platform (charging end users for access is the trigger).
- **You can:** sell the End Product, charge end users for it.
- **You cannot:** redistribute the source code, use one license for multiple End Products, or resell the item itself.
- **Source:** https://codecanyon.net/licenses/terms/extended

### 3.3 Universal rules for both licenses
- **One licence = one End Product.** If you launch a second site / app / SaaS instance, you need a second license.
- **No redistribution of source.** You cannot give the source files away — even free, even modified — as a stock template, theme, or starter kit.
- **License FAQ source:** https://codecanyon.net/licenses/faq

### 3.4 Quick decision tree the bot can use
- "Will your end users pay you to use the platform?" → **Yes** → Extended License. **No** → Regular License.
- "Are you building this for one client only?" → Either license is fine; they choose the one that matches whether the client will charge their users.
- "Are you running multiple instances / SaaS tenants?" → One license per instance. (Note: MultiSaaS is the exception — see Product Card #11; the *one* MultiSaaS install can host many tenant sites under the appropriate license.)

---

## 4. Intent → Product Map (fuzzy matcher for the bot)

If a visitor describes a goal in their own words, match it to one of the buckets below and suggest the matching product(s). Examples include common synonyms a user might type.

### 4.1 "I want to build an on-demand services / handyman / home services marketplace"
- *Synonyms:* services marketplace, gig marketplace, plumber app, electrician booking, handyman finder, on-demand booking, home services platform, beauty services, cleaning services, book a tradesperson, service provider marketplace, TaskRabbit clone, Thumbtack clone, UrbanClap clone.
- → **Suggest Qixer (Product Card #1)**.
- → If they also want native mobile apps, recommend the **Buyer App (#2)** + **Seller App (#3)**.
- → If they want every official extension in one purchase, recommend the **Universal Addon Bundle (#4)**.

### 4.2 "I want a mechanic / car service / auto repair booking platform"
- *Synonyms:* mechanic booking, car wash booking, vehicle servicing, garage booking, auto repair marketplace, oil change booking, car service provider, pickup-and-drop car service, mobile mechanic app.
- → **Suggest GoCar (Product Card #6)**.

### 4.3 "I want an influencer marketing / influencer hiring platform"
- *Synonyms:* hire influencers, influencer marketplace, brand–creator marketplace, sponsored post platform, creator economy platform, social media collaboration platform, UGC marketplace, brand deal platform.
- → **Suggest Influstar (Product Card #5)**.

### 4.4 "I want a classified ads / directory listing site"
- *Synonyms:* classifieds site, OLX clone, Craigslist clone, business directory, real estate listings, jobs board, used car listings, listings marketplace, Yellow Pages, listing platform, ad listing.
- → For just the platform, **suggest Listocean (Product Card #7)**.
- → For the platform plus all official add-on plugins (membership, live chat, SMS gateway, etc.), **suggest Listocean Bundle (Product Card #8)** — usually the better value if the buyer wants the full feature set day one.

### 4.5 "I want a multi-vendor eCommerce platform / online marketplace"
- *Synonyms:* multi-vendor store, marketplace shop, Amazon clone, Etsy clone, multivendor cart, multi-seller eCommerce, dropship marketplace, bazaar platform, B2B/B2C marketplace.
- → For the core platform, **suggest Safecart (Product Card #9)**.
- → For the platform plus the official plugin pack (POS, refund, delivery man, live chat) and mobile apps in one purchase, **suggest Safecart Bundle Pack (Product Card #10)**.

### 4.6 "I want a single-vendor / one-store online shop"
- *Synonyms:* online shop, one store eCommerce, my own brand store, branded online store, simple shop, single-vendor cart, Shopify alternative for one shop.
- → **Suggest Zaika (Product Card #13)**. Zaika is single-vendor; if they need multiple sellers on the same site, redirect to **Safecart (#9)**.

### 4.7 "I want to sell websites / launch a website-builder SaaS / multi-tenant platform"
- *Synonyms:* website builder SaaS, Wix clone, Webflow clone, white-label site builder, multi-tenant CMS, sell websites to customers, custom domain SaaS, multi-tenancy site builder.
- → For the platform itself, **suggest MultiSaaS (Product Card #11)**.
- → For the platform plus all official plugins (restaurant, hotel booking, domain reseller, site analytics, etc.), **suggest MultiSaaS Bundle Pack (Product Card #12)**.

### 4.8 Disambiguation tips for the bot
- **"Marketplace" is ambiguous.** Always ask one follow-up:
  - "Is it for **services** (people doing tasks) → Qixer."
  - "Is it for **physical products** with multiple sellers → Safecart."
  - "Is it for **influencers / creators** → Influstar."
  - "Is it for **classifieds / listings** (ads, not transactions) → Listocean."
  - "Is it for **car / mechanic services** → GoCar."
- **"E-commerce" is ambiguous.** Ask: one shop or many sellers? → Zaika vs. Safecart.
- **"SaaS" → MultiSaaS** is almost always the answer in this catalog.

---

## 5. Product Cards

Every card uses the same structure so the bot can pull a uniform answer.

---

### Product #1: Qixer — Multi-Vendor On-Demand Handyman Service Marketplace and Service Finder

- **Item ID:** 36475708
- **URL:** https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-and-service-finder/36475708
- **One-line pitch:** A Laravel-based, multi-vendor, on-demand services marketplace where any provider can register, list services, and accept bookings — like Thumbtack / TaskRabbit / UrbanClap, deployable on your own hosting.
- **Category:** PHP Scripts → Project Management Tools / Service Marketplace.
- **Tech stack:** Laravel (latest LTS, currently Laravel 12.x for v3.1.0+), PHP 8.3, MySQL 8, Bootstrap 5.
- **Key features:** 4 home page variants; drag-and-drop page / menu / form / widget builder; multi-vendor onboarding; service categories and sub-categories; booking, calendar, and order management; 18+ payment gateways including PayPal, Stripe, Razorpay, Paystack, Flutterwave, Cashfree, Instamojo, Mollie, Midtrans, Mercado Pago, Paytm, Payfast, Bank Transfer; multi-currency and multi-language admin; coupon, tax, and commission modules; review / rating; SEO module; addon plugin architecture (live chat, job posting, digital wallet, seller subscription, etc.).
- **Pricing (USD):**
  - Regular License: **$49**
  - Extended License: verify on live page (typical Envato PHP-script Extended is in the $400–$500 range; do not quote a precise figure without confirming on the listing).
- **License guidance:**
  - Building one in-house marketplace where you take commissions but **do not charge end users a fee to access the site** → Regular License is enough.
  - Charging providers a subscription, charging buyers a platform fee, or running it as paid SaaS → **Extended License** is required.
- **Best for / use cases:** local home-services marketplace, on-demand booking startup, agency building a TaskRabbit-style site for a client, vertical service marketplaces (cleaning, beauty, plumbing, electrical, repair, tutoring).
- **Companion products in this catalog:** Qixer Buyer App (#2), Qixer Seller App (#3), Universal Addon Bundle (#4).
- **Synonyms / fuzzy match keywords:** Qixer, on-demand service script, handyman script, service marketplace Laravel, TaskRabbit clone, Thumbtack clone, UrbanClap clone, home services platform, gig services site, service finder, provider booking script.

---

### Product #2: Qixer Buyer Flutter App

- **Item ID:** 38154133
- **URL:** https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-and-service-finder-buyer-app/38154133
- **One-line pitch:** Native iOS + Android buyer app (Flutter) that pairs with the Qixer web platform so customers can browse, book, pay, chat, and review services from their phone.
- **Dependency:** **Requires the Qixer web platform (#1).** It will not function standalone.
- **Tech stack:** Flutter 3.32.5+ (single codebase for Android + iOS), Android Studio 2025.1.1+.
- **Key features:** OTP signup, social login, service browsing and search, service detail with provider profile and reviews, booking and scheduling, in-app chat, push notifications, multi-language, 20+ payment gateway integrations (PayPal, Stripe, Cashfree, Flutterwave, Instamojo, Razorpay, etc.), wallet top-up, support tickets, address management.
- **Pricing (USD):**
  - Regular License: **$49**
  - Extended License: verify on live page.
- **License guidance:** Mirrors the Qixer web platform's license — if you charge end users to use the marketplace, you need Extended for both web and apps.
- **Best for / use cases:** any Qixer deployment that wants a branded mobile customer experience instead of a web-only flow.
- **Companion products:** Qixer web (#1), Qixer Seller App (#3).
- **Synonyms / fuzzy match keywords:** Qixer mobile app, Qixer customer app, Qixer iOS, Qixer Android, services marketplace mobile app, buyer flutter app, on-demand service customer app.

---

### Product #3: Qixer Seller Flutter App

- **Item ID:** 39013880
- **URL:** https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-seller-app/39013880
- **One-line pitch:** Native iOS + Android Flutter app for service providers (sellers) on a Qixer marketplace — used to manage listings, accept bookings, chat with buyers, and withdraw earnings.
- **Dependency:** **Requires the Qixer web platform (#1).**
- **Tech stack:** Flutter 3.32.5+.
- **Key features:** seller dashboard, service / listing management, order acceptance and fulfilment, in-app chat, wallet and withdrawal flow, 18+ payment gateways for top-ups, support ticket flow, secure password change, multi-language.
- **Pricing (USD):**
  - Regular License: **$39**
  - Extended License: verify on live page.
- **License guidance:** As with the other Qixer apps — license tier follows the web platform's.
- **Best for / use cases:** Qixer marketplaces that want providers to run their business entirely from a phone.
- **Companion products:** Qixer web (#1), Qixer Buyer App (#2).
- **Synonyms / fuzzy match keywords:** Qixer vendor app, Qixer provider app, seller flutter app, services marketplace seller app, on-demand provider mobile app.

---

### Product #4: Universal Addon Bundle for Qixer

- **Item ID:** 42725484
- **URL:** https://codecanyon.net/item/universal-addon-bundle-for-qixer-service-marketplace-and-service-finder/42725484
- **One-line pitch:** A single-purchase bundle that ships every official Qixer addon — cheaper than buying each plugin separately.
- **Dependency:** **Requires the Qixer web platform (#1).**
- **What's typically inside:** Live Chat Addon, Job Posting Addon, Digital Wallet Addon, Seller Subscription Addon, plus other addons released over time (full list is on the CodeCanyon listing).
- **Pricing (USD):**
  - Regular License: **approximately $69 — confirm on live page.** (Indexed third-party reseller listings show a price equivalent to ~8,950 BDT, which converts to roughly the high-$60s USD; the bot should always verify on CodeCanyon before quoting.)
  - Extended License: verify on live page.
- **License guidance:** Match the license tier of the underlying Qixer install — if Qixer is on Extended, the bundle should be on Extended.
- **Best for / use cases:** any buyer who already knows they want most or all of the Qixer addons; any agency standing up multiple Qixer marketplaces.
- **Companion products:** Qixer web (#1), Buyer App (#2), Seller App (#3).
- **Synonyms / fuzzy match keywords:** Qixer addon pack, Qixer plugin bundle, Qixer extensions, Qixer all-in-one, Qixer extras.

---

### Product #5: Influstar — Influencer Hiring Marketplace Platform

- **Item ID:** 59095296
- **URL:** https://codecanyon.net/item/influstar-influencer-hiring-marketplace-platform/59095296
- **One-line pitch:** Two-sided marketplace that connects brands with influencers — brands post campaign briefs, influencers send custom offers, and the platform handles chat, contracts, and payouts.
- **Category:** PHP Scripts → Miscellaneous / Marketplace.
- **Tech stack:** Laravel + PHP 8.1+, MySQL 8 (consistent with the rest of the byteseed catalog).
- **Key features:** dual onboarding for brands and influencers, influencer profile with audience metrics, custom offers from influencers to brands, integrated live chat for campaign discussion, campaign management, secure payments, multi-currency and multi-payment-gateway support, role-based admin, drag-and-drop builders.
- **Pricing (USD):**
  - Regular License: **$39**
  - Extended License: verify on live page.
- **License guidance:** Charging brands a fee to post campaigns or taking a platform cut from influencer payouts → Extended License.
- **Best for / use cases:** influencer-marketing agencies, niche creator marketplaces (TikTok creators, YouTubers, Instagram micro-influencers), B2B SaaS that wants to layer an influencer hiring product on top.
- **Synonyms / fuzzy match keywords:** Influstar, influencer marketplace, hire influencers, creator marketplace, brand–creator platform, sponsored post site, influencer marketing SaaS, UGC marketplace, brand deal platform, content creator hiring.

---

### Product #6: GoCar — Mechanic and Car Service Provider Marketplace Platform

- **Item ID:** 57643970
- **URL:** https://codecanyon.net/item/gocar-mechanic-and-car-service-provider-marketplace-platform/57643970
- **One-line pitch:** Vertical marketplace for car services — users pick their car model, browse tailored services, choose home service / pickup / outlet, and pay through 19+ gateways.
- **Tech stack:** Laravel + PHP 8.1+, MySQL 8; companion mobile experience available (the byteseed Google Play listing for GoCar exists).
- **Key features:** car-model-aware service catalog (services map to specific makes / models), bundled service or product orders in one checkout, three fulfilment modes (home service, car pickup, outlet visit), order tracking with detailed invoices, OTP / email / social signup, 19+ payment gateways, reviews and ratings, support ticket system, multi-language.
- **Pricing (USD):**
  - Regular License: **$49**
  - Extended License: verify on live page.
- **License guidance:** A standard "you take a commission" car-service marketplace where mechanics list and accept jobs but you don't charge them a subscription fee → Regular is usually enough. SaaS / paid-tier mechanics → Extended.
- **Best for / use cases:** auto-service aggregators, dealership service apps, mobile-mechanic startups, regional car-care marketplaces.
- **Synonyms / fuzzy match keywords:** GoCar, car service marketplace, mechanic booking, garage booking, vehicle servicing, oil-change booking, mobile mechanic app, auto repair platform, car wash booking, vehicle pickup-drop service.

---

### Product #7: Listocean — Classified Ads Listing Platform

- **Item ID:** 53068796
- **URL:** https://codecanyon.net/item/listocean-classified-ads-listing-platform/53068796
- **One-line pitch:** Laravel-based directory + classifieds engine — let users post listings (real estate, vehicles, jobs, services, anything) with categories, attributes, location, and contact.
- **Tech stack:** Laravel 9.x, PHP 8.1, MySQL 8 (or MariaDB), Bootstrap 5.
- **Key features:** drag-and-drop page builder with prebuilt widgets; drag-and-drop menu builder with mega-menu support; drag-and-drop form builder (text, number, email, select, checkbox, textarea, file fields); custom listing categories with custom fields; map / location filters; user dashboards; SEO module; multi-language, multi-currency.
- **Pricing (USD):**
  - Regular License: **$29**
  - Extended License: verify on live page.
- **License guidance:** Free directory or single client → Regular. Paid posting (users pay to publish a listing), featured-listing fees, or paid SaaS → Extended.
- **Best for / use cases:** local classifieds, real-estate listing sites, used-car listings, jobs board, business directory, niche directories (vegan restaurants, coworking spaces, tutors).
- **Companion products:** Listocean Bundle (#8), plus standalone plugins: Membership Plugin, Live Chat Plugin, SMS Gateway Plugin.
- **Synonyms / fuzzy match keywords:** Listocean, classifieds script, directory script, OLX clone, Craigslist clone, real estate listing, business directory, jobs board, listing CMS, ads platform, Yellow Pages script.

---

### Product #8: Listocean Bundle — Classified Ads Listing Platform

- **Item ID:** 56488736
- **URL:** https://codecanyon.net/item/listocean-bundle-classified-ads-listing-platform/56488736
- **One-line pitch:** Listocean platform plus all official add-on plugins in one purchase — use it when the buyer wants the full feature set on day one.
- **Dependency:** Self-contained (the bundle includes the Listocean platform itself).
- **What's typically inside:** Listocean platform (#7), Membership Plugin, Live Chat Plugin, SMS Gateway Plugin, and any other listed plugins.
- **Pricing (USD):**
  - Regular License: **$69** (Bundle commonly runs a sale at ~$55 — check the live listing.)
  - Extended License: verify on live page.
- **License guidance:** Same logic as Listocean — paid listings or paid SaaS → Extended.
- **Best for / use cases:** anyone planning to monetize listings (paid memberships, featured ads, SMS notifications), or building a feature-rich classifieds site without cherry-picking plugins.
- **Synonyms / fuzzy match keywords:** Listocean bundle, classifieds bundle, directory bundle, all-in-one classifieds.

---

### Product #9: Safecart — Multi-Vendor Laravel eCommerce Platform

- **Item ID:** 49428309
- **URL:** https://codecanyon.net/item/safecart-multivendor-laravel-ecommerce-platform/49428309
- **One-line pitch:** Multi-vendor eCommerce platform on Laravel — multiple sellers, one storefront, with full admin control over commissions, taxes, and shipping.
- **Tech stack:** Laravel 10.x, PHP 8.1, MySQL 5.7+ (Bundle ships v2.4.0 at time of indexing).
- **Key features:** vendor onboarding and dashboards; product catalog with variations; advanced tax modules; advanced shipping management; advanced coupon and campaign modules; admin role-and-permission module so multiple admins can have tailored access; support ticket system for buyers and vendors; notification system for orders / products / wallet events; multi-currency, multi-language, multi-payment-gateway.
- **Pricing (USD):**
  - Regular License: **$39**
  - Extended License: verify on live page.
- **License guidance:** Standard commission-only marketplace → Regular. Paid vendor subscriptions or SaaS → Extended.
- **Best for / use cases:** general multi-vendor stores, niche marketplaces (handmade, electronics, vintage, B2B wholesale), agency builds for retail clients.
- **Companion products:** Safecart Bundle (#10), plus standalone plugins (POS, Refund, Delivery Man, Live Chat) and mobile apps (Customer App, Vendor App, Delivery Man App).
- **Synonyms / fuzzy match keywords:** Safecart, multi-vendor eCommerce, multivendor cart, marketplace shop, Amazon clone, Etsy clone, multi-seller store, B2C marketplace, online bazaar, vendor cart Laravel.

---

### Product #10: Safecart Bundle Pack — Multi-Vendor Laravel eCommerce Platform

- **Item ID:** 53120997
- **URL:** https://codecanyon.net/item/safecart-bundle-pack-multivendor-laravel-ecommerce-platform/53120997
- **One-line pitch:** Safecart platform plus the official plugin pack and companion apps in one purchase — use when the buyer wants a complete eCommerce stack.
- **Dependency:** Self-contained.
- **What's typically inside:** Safecart platform (#9), plus the published companion plugins and apps: POS (Point of Sale) Plugin, Delivery Man Plugin, Refund Plugin, Live Chat Plugin, Customer Mobile App, Vendor App, Delivery Man App. (Confirm exact contents on the live listing.)
- **Pricing (USD):**
  - Regular License: **price not currently indexed publicly — verify on the live listing.** Bundles in this catalog typically fall in the $99–$149 range, so quote a "verify on the listing" answer rather than a specific number.
  - Extended License: verify on live page.
- **License guidance:** Same as Safecart core.
- **Best for / use cases:** customers who already know they want POS, refund, delivery management, live chat, and the mobile apps; agencies launching turnkey marketplaces.
- **Synonyms / fuzzy match keywords:** Safecart bundle, multi-vendor eCommerce bundle, marketplace bundle pack, Safecart all-in-one, eCommerce starter pack.

---

### Product #11: MultiSaaS — Multi-Tenancy Multipurpose Website Builder (SaaS)

- **Item ID:** 41892997
- **URL:** https://codecanyon.net/item/multisass-multitenancy-multipurpose-website-builder-sass/41892997
- **One-line pitch:** Multi-tenant SaaS engine — your customers sign up, get their own subdomain (or custom domain), pick a theme, and build a site. You charge them; the platform handles the tenancy.
- **Architecture:** True multi-tenancy with **separate databases per tenant** (better load isolation than shared schema).
- **Key features:** custom domain + automatic subdomain provisioning per tenant; **15+ built-in themes** with inner pages so tenants can launch fast; 22+ payment gateways with 150+ currencies; drag-and-drop builders (menu, form, widget); responsive across desktop / laptop / mobile and all major browsers; tenant subscription / billing flows; admin oversight of all tenants.
- **Pricing (USD):**
  - Regular License: **$59**
  - Extended License: verify on live page.
- **License guidance:** Because MultiSaaS is **explicitly designed to host paying tenants**, almost every real deployment will need the **Extended License** (you are charging end users for a hosted product). The Regular License only fits if you're using it for a single internal use case where end users do not pay.
- **Best for / use cases:** Wix-style site-builder SaaS, vertical SaaS (restaurant sites, hotel sites, portfolios), white-label web-presence for agencies, regional site-builder businesses.
- **Companion products:** MultiSaaS Bundle Pack (#12), plus plugins: Hotel Booking, Restaurant, Domain Reseller, Site Analytics, and others.
- **Synonyms / fuzzy match keywords:** MultiSaaS, MultiSass, multitenancy, multi-tenant CMS, sell websites, white-label SaaS, Wix clone, Webflow clone, website-builder business, drag-and-drop SaaS, tenant CMS.

---

### Product #12: MultiSaaS Bundle Pack

- **Item ID:** 52956609
- **URL:** https://codecanyon.net/item/multisaas-bundle-pack-multitenancy-multipurpose-website-builder-saas/52956609
- **One-line pitch:** MultiSaaS platform plus the entire official plugin catalog (restaurant, hotel booking, domain reseller, site analytics, etc.) in one purchase — substantially cheaper than buying each plugin individually.
- **Dependency:** Self-contained.
- **Pricing (USD):**
  - Regular License: **$199**
  - Extended License: verify on live page.
- **License guidance:** Same as MultiSaaS core — paid SaaS → Extended.
- **Best for / use cases:** any serious MultiSaaS launch where the operator wants to offer hotel booking / restaurant / analytics / reseller features to tenants from day one.
- **Synonyms / fuzzy match keywords:** MultiSaaS bundle, MultiSass bundle pack, MultiSaaS all-in-one, website builder SaaS bundle, Wix-clone bundle.

---

### Product #13: Zaika — Laravel eCommerce Shopping Platform (CMS)

- **Item ID:** 35059777
- **URL:** https://codecanyon.net/item/zaika-ecommerce-shopping-laravel-platform/35059777
- **One-line pitch:** **Single-vendor** Laravel eCommerce CMS — one shop, one owner, full control over catalog, payments, shipping, and content.
- **Tech stack:** Laravel 9.x, PHP 8.1, MySQL 5.7+.
- **Key features:** drag-and-drop page / menu / form / widget builders; advanced tax, campaign, shipping, coupon, and inventory modules; 15+ payment gateways including PayPal, Stripe, Paytm, Flutterwave Rave, Razorpay, Mollie, Paystack, Midtrans, Mercado Pago, Cashfree, Payfast, Instamojo, plus Bank Payment, Check Payment, Manual Payment.
- **Pricing (USD):**
  - Regular License: **$39**
  - Extended License: verify on live page.
- **License guidance:** A normal one-shop store you build for yourself or one client → Regular. Reselling Zaika installs as paid SaaS → Extended (and pay attention to the "one End Product per license" rule).
- **Best for / use cases:** brand-owned online shops, single-merchant stores, custom store builds for clients who don't need multi-vendor features, learning / demo eCommerce projects.
- **Companion product:** Zaika Laravel eCommerce Shop Flutter App (separate purchase, not in the URL list provided).
- **Synonyms / fuzzy match keywords:** Zaika, single-vendor eCommerce, one-store cart, Laravel shop, branded online store, Shopify alternative self-hosted, simple eCommerce CMS, single merchant shop.

---

## 6. Cross-Catalog Comparison Table

A chatbot can use this when a visitor is choosing between two products in the same family.

| Question | Pick |
|----------|------|
| One shop with one owner vs many sellers? | One owner → **Zaika**. Many sellers → **Safecart**. |
| Service marketplace (people doing tasks) vs product marketplace (physical goods)? | Services → **Qixer**. Products → **Safecart**. |
| Listings only (no transaction) vs full transaction marketplace? | Listings → **Listocean**. Transactions → **Safecart** / **Qixer** / **GoCar**. |
| Generic services marketplace vs car-service-only? | Generic → **Qixer**. Cars only → **GoCar**. |
| Single Qixer install vs full Qixer stack? | Just web → **Qixer**. Web + apps → add **Buyer (#2)** + **Seller (#3)**. Web + apps + every addon → also add **Universal Addon Bundle (#4)**. |
| Want plugins now or later? | Now → **Bundle** version (Listocean Bundle, Safecart Bundle, MultiSaaS Bundle). Later → start with the **base platform**, buy plugins individually as needed. |
| Building one website vs reselling websites to many tenants? | One → any platform on Regular. Reselling/SaaS → **MultiSaaS** on Extended. |

---

## 7. FAQ & Fallback Answers

### "Will my purchase include lifetime updates?"
CodeCanyon items include **6 months of item support by default**, with an option to extend to 12 months at checkout. *Updates* (new versions of the item) are included as long as the author keeps publishing them — there is no separate update subscription. Always link to the item's "Support" tab for the live policy.

### "Can I get a refund?"
Refunds follow the standard **Envato refund policy** (https://help.market.envato.com/hc/en-us/articles/204150288). The bot should not promise a refund — it should explain that the refund decision is between the buyer, the author, and Envato.

### "Can I install it for the customer / does it include installation?"
Installation is **not included** in the CodeCanyon price. Some authors offer paid installation as a separate service — link to the item page and the support tab.

### "Can I remove the author's branding / footer credit?"
Check the specific item's documentation. In general, branding policies vary per item — the bot should defer to the item's documentation rather than promising removal.

### "Is the source code editable / open?"
Yes. CodeCanyon PHP scripts ship full source code, and you can modify it for your own End Product. You **cannot** redistribute the modified source.

### "Will it work on shared hosting?"
Most byteseed Laravel platforms expect PHP 8.1+ (8.3 for the latest Qixer), MySQL 8 / MariaDB, Composer, and the ability to run Laravel queue workers and cron. Cheap shared hosting often won't satisfy all of those — recommend a VPS / managed Laravel host.

### "Is there a free demo I can try?"
Each CodeCanyon listing has a **Live Preview** button — direct the user there.

### "Do you have a discount code / can I get it cheaper?"
The bot should not invent or promise discounts. CodeCanyon occasionally runs sales (and bundles like Listocean Bundle and MultiSaaS Bundle Pack are themselves a discount versus buying parts individually). Direct the visitor to the live listing.

### "I want a feature that isn't listed here."
Direct the visitor to the item's **Comments** tab on CodeCanyon, where the author replies to feature questions. Do not promise the feature exists.

### "Is the item nulled / can you give me a free copy?"
**No.** The bot should refuse politely and explain that nulled copies are pirated, contain malware risk, and lose all support and updates. Always recommend the official CodeCanyon listing.

### "What's the difference between Regular and Extended again?"
Quote the License Glossary (Section 3) — specifically the decision question: *"Will your end users pay you to use the product?"* Yes → Extended, No → Regular.

### "How do I contact the author?"
Each CodeCanyon item has a **"Contact the author"** button on its page, plus a **Comments** tab and a **Support** tab. Link to those rather than guessing at email addresses.

---

## 8. Bot Response Templates

These are short, copy-pasteable answer skeletons the chatbot can fill in.

### 8.1 Generic suggestion answer
> *"Based on what you described — {short paraphrase of the user's need} — I'd suggest **{Product Name}**. It's a {one-line pitch}. Pricing starts at **${price} (Regular License)** on CodeCanyon: {URL}. Want me to walk you through the difference between Regular and Extended licenses, or compare it with another option in the catalog?"*

### 8.2 License question answer
> *"For **{Product Name}**, the rule is straightforward: if your end users will pay you to use the platform — subscriptions, per-use fees, paid SaaS — you need the **Extended License**. If they won't (e.g. you're just charging vendors a commission, or running it for one client) the **Regular License** at ${price} is enough. The exact Extended price is shown on the listing here: {URL}."*

### 8.3 "Cheapest way to get X" answer
> *"For **{use case}**, the most cost-effective path is **{Product Name}** at **${price} (Regular License)**. If you also want **{adjacent need}**, the **{Bundle Name}** at **${bundle_price}** is usually cheaper than buying the parts separately. Listings: {URL_base}, {URL_bundle}."*

### 8.4 "Which one is right for me?" disambiguation answer
> *"Quick question to point you to the right product: are you building **{disambiguation question from Section 4.8}**? Once I know that, I can recommend the best fit from the catalog."*

### 8.5 Refusal-of-pirated-content answer
> *"I can only point you to official, licensed copies on CodeCanyon. Nulled / cracked downloads come with security risk and lose support and updates — here's the official listing: {URL}."*

---

## 9. Maintenance Notes (for whoever updates this file)

- **Where prices come from.** Prices in this file were sourced from public Google search snippets that index the CodeCanyon listings. CodeCanyon itself blocks automated fetches, so prices cannot be verified by a script — they should be **manually checked on each listing every quarter** and after any CodeCanyon-wide sale.
- **What to update if a product version changes.** The "Tech stack" line on each Product Card. The version number is not load-bearing for the chatbot, but the PHP / Laravel / Flutter version constraints affect hosting questions.
- **What to update if a new addon ships.** Add it to the "Companion products" line of the related Product Card and to the "What's typically inside" line of the relevant Bundle.
- **What to update if Envato changes the license terms.** The License Glossary (Section 3) — link the official URLs each time so the bot quotes the live policy.
- **Versioning.** Bump the "Last reviewed" date at the top of the file on every edit.

---

## 10. Source URLs (canonical, in catalog order)

- Qixer (web): https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-and-service-finder/36475708
- Qixer Buyer App: https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-and-service-finder-buyer-app/38154133
- Qixer Seller App: https://codecanyon.net/item/qixer-multivendor-on-demand-service-marketplace-seller-app/39013880
- Universal Addon Bundle for Qixer: https://codecanyon.net/item/universal-addon-bundle-for-qixer-service-marketplace-and-service-finder/42725484
- Influstar: https://codecanyon.net/item/influstar-influencer-hiring-marketplace-platform/59095296
- GoCar: https://codecanyon.net/item/gocar-mechanic-and-car-service-provider-marketplace-platform/57643970
- Listocean: https://codecanyon.net/item/listocean-classified-ads-listing-platform/53068796
- Listocean Bundle: https://codecanyon.net/item/listocean-bundle-classified-ads-listing-platform/56488736
- Safecart: https://codecanyon.net/item/safecart-multivendor-laravel-ecommerce-platform/49428309
- Safecart Bundle Pack: https://codecanyon.net/item/safecart-bundle-pack-multivendor-laravel-ecommerce-platform/53120997
- MultiSaaS: https://codecanyon.net/item/multisass-multitenancy-multipurpose-website-builder-sass/41892997
- MultiSaaS Bundle Pack: https://codecanyon.net/item/multisaas-bundle-pack-multitenancy-multipurpose-website-builder-saas/52956609
- Zaika: https://codecanyon.net/item/zaika-ecommerce-shopping-laravel-platform/35059777
- byteseed author portfolio: https://codecanyon.net/user/byteseed/portfolio
- CodeCanyon Regular License terms: https://codecanyon.net/licenses/terms/regular
- CodeCanyon Extended License terms: https://codecanyon.net/licenses/terms/extended
- CodeCanyon License FAQ: https://codecanyon.net/licenses/faq
