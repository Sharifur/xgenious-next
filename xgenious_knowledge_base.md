# Knowledge Base — xgenious Product Catalog (CodeCanyon)

> **Purpose of this document.** This file is the single source of truth for an AI chatbot answering pre-sales / customer-support questions about every product in the xgenious portfolio on CodeCanyon. It is structured for **fuzzy matching** — every product carries synonyms, use-cases, and intent keywords so the bot can suggest the right product even when the visitor does not know the exact name.
>
> **How a chatbot should use this file.**
> 1. Read the **Intent → Product Map** (Section 4) first to translate a vague request into a candidate product family.
> 2. Open the matching **Product Card** (Section 5) for canonical name, price, license, features, and the live CodeCanyon URL.
> 3. Always quote the **CodeCanyon item URL** as the source of truth for current price and license — the prices in this file are taken from public listings and may change; treat them as a strong hint, not a guarantee.
> 4. For licensing questions, fall back to the **License Glossary** (Section 3).
> 5. For unanswerable / off-catalog questions, fall back to the **FAQ & Fallback Answers** (Section 7).
>
> **Last reviewed:** 2026-05-02. Prices are listed in USD and reflect the publicly indexed Regular License price on CodeCanyon at time of review. Plugin prices that are not publicly indexed are flagged "Verify on live listing." The Extended License figure is an *estimate* and **must be confirmed on the live product page** before being quoted as final.

---

## 1. About the Vendor

- **Author handle on CodeCanyon:** `xgenious`
- **Author portfolio:** https://codecanyon.net/user/xgenious/portfolio
- **Member since:** December 2017
- **Status:** Elite Author (publicly displayed badge)
- **Rating snapshot:** ~4.58 stars across ~468 ratings, ~7,000+ total sales (figures change over time — re-read the portfolio page for current values).
- **Brand site:** https://xgenious.com
- **Documentation hub:** https://docs.xgenious.com
- **Primary tech stack:** Laravel (latest LTS / Laravel 12.x for current releases), PHP 8.1+ (PHP 8.3 for the newest builds), MySQL 8 / MariaDB, Bootstrap 5; companion mobile apps in Flutter 3.x.
- **Common product DNA across the catalog:** drag-and-drop page / menu / form / widget builder, multi-currency, 17–22+ payment gateway integrations, multi-language admin, role / permission management, support-ticket system, notification system, and dark / light themes on the mobile apps.

---

## 2. Product Overview Table

The catalog falls into three buckets — core platforms, official mobile apps, and addon plugins. Bundles roll up a platform and its add-ons in one purchase.

### 2.1 Core platforms (Laravel web platforms)

| # | Product | Item ID | Regular License (≈USD) | Status |
|---|---------|---------|-----------------------|--------|
| 1 | Nexelit — Multipurpose Website CMS & Business CMS | 27936384 | $39 | Confirmed |
| 2 | Fundorex — Crowdfunding and Donation Platform | 33286096 | $49 | Confirmed |
| 3 | Grenmart — Organic & Grocery Laravel eCommerce | 37928454 | Verify on live listing (typical $39) | Approximate |
| 4 | Nazmart — Multi-Tenancy eCommerce Platform (SaaS) | 42802410 | $69 | Confirmed |
| 5 | Xilancer — Freelancer Marketplace Platform | 49358326 | $59 (sale prices as low as $49 occur) | Confirmed |
| 6 | Prohandy — On-Demand Handyman & Home Service Marketplace | 55091770 | $59 (sale prices $49–$25 occur) | Confirmed |
| 7 | Affiliation — Affiliate Link Sharing Platform | Item ID not publicly indexed — verify on portfolio | $19 | Confirmed (price), Item ID unconfirmed |

### 2.2 Official Flutter mobile apps

These are sold separately and **all require the matching web platform** to function — they are companion apps, not standalone products.

| # | Product | Item ID | Regular License (≈USD) | Pairs with |
|---|---------|---------|-----------------------|------------|
| 8 | Crowdfunding Platform Flutter Mobile App — Fundorex | 39675422 | Verify on live listing (typical $29–$39) | #2 Fundorex |
| 9 | Grenmart — Laravel eCommerce Shop Flutter App | 40188895 | Verify on live listing (typical $29–$39) | #3 Grenmart |
| 10 | NazMart — Tenant Shop Flutter Mobile App | 45385600 | Verify on live listing (typical $29–$39) | #4 Nazmart |
| 11 | Freelancer Flutter Mobile App — Xilancer | 49913337 | Verify on live listing (typical $29–$39) | #5 Xilancer (freelancer side) |
| 12 | Client Flutter Mobile App — Xilancer | 51899615 | Verify on live listing (typical $29–$39) | #5 Xilancer (client side) |

> **Prohandy mobile apps** are bundled inside the main Prohandy purchase (#6) — no separate CodeCanyon item; they ship with the platform.

### 2.3 Addon plugins (Nazmart family)

All Nazmart plugins **require the Nazmart core platform** (#4) to be installed first.

| # | Plugin | Item ID | Regular License (≈USD) |
|---|--------|---------|-----------------------|
| 13 | WooCommerce Import Plugin — Nazmart | 47602812 | Verify on live listing (typical $19–$29) |
| 14 | Site Analytics Plugin — Nazmart | 48999407 | Verify on live listing (typical $19–$29) |
| 15 | SMS Gateway Plugin — Nazmart | 48999428 | Verify on live listing (typical $19–$29) |
| 16 | Cloud Storage Plugin — Nazmart | 48999455 | Verify on live listing (typical $19–$29) |
| 17 | POS (Point of Sales) Plugin — Nazmart | 49334988 | $49 (Confirmed) |
| 18 | Shipping Plugin — Nazmart | 50095051 | Verify on live listing (typical $19–$29) |
| 19 | Domain Reseller Plugin — Nazmart | 50530641 | Verify on live listing (typical $19–$29) |

### 2.4 Addon plugins (Xilancer family)

All Xilancer plugins **require the Xilancer core platform** (#5) to be installed first.

| # | Plugin | Item ID | Regular License (≈USD) |
|---|--------|---------|-----------------------|
| 20 | Freelancer Level Plugin — Xilancer | 50194837 | Verify on live listing (typical $19–$29) |
| 21 | Promotional Plugin — Xilancer | 52212426 | Verify on live listing (typical $19–$29) |
| 22 | Security Plugin — Xilancer | 52596173 | Verify on live listing (typical $19–$29) |
| 23 | Cloud Storage Plugin — Xilancer | 53643856 | Verify on live listing (typical $19–$29) |
| 24 | Hourly Hiring Plugin — Xilancer | 54180802 | Verify on live listing (typical $19–$29) |
| 25 | Community Plugin — Xilancer | 56107708 | Verify on live listing (typical $19–$29) |

### 2.5 Bundles

| # | Bundle | Item ID | Regular License (≈USD) | Includes |
|---|--------|---------|-----------------------|----------|
| 26 | Nazmart Bundle Pack — Multi-Tenancy eCommerce Platform (SaaS) | 53246605 | Verify on live listing (typical bundle $149–$199) | Nazmart core + the official Nazmart plugins + the NazMart Tenant Shop Flutter App |
| 27 | Xilancer Bundle — Freelancer Marketplace Platform | 56487757 | Verify on live listing (typical bundle $149–$199) | Xilancer core + the official Xilancer plugins + the two Flutter apps |

> **Bot rule:** if a customer asks "what's the price of X?" — quote the figure above **plus** the URL, then add: *"For the most up-to-date price (including any active CodeCanyon sale or Black Friday deal), please open the listing."*

---

## 3. License Glossary (CodeCanyon / Envato)

Every xgenious item is sold under one of two standard CodeCanyon licenses. Choosing the right one is the most common pre-sales question.

### 3.1 Regular License — TL;DR
- **Use it when:** the end users of your product **will not be charged** to access it.
- **Examples that fit Regular:** an internal admin tool for one company, a free public website, a free demo, a personal portfolio, a single-client custom build where the client doesn't charge their own users.
- **You can:** create one End Product for yourself or for one client.
- **You cannot:** sell that End Product to anyone except the one client it was built for, charge end users to access it, or redistribute the source files.
- **Source:** https://codecanyon.net/licenses/terms/regular

### 3.2 Extended License — TL;DR
- **Use it when:** the end users of your product **will be charged** (subscription, per-use fee, paid download, paid SaaS, etc.).
- **Examples that require Extended:** a paid SaaS where customers pay you a monthly fee, a marketplace where you charge users a platform fee to access it, a Nazmart deployment where tenants pay subscriptions, a Xilancer marketplace where freelancers or clients pay to use the platform itself.
- **You can:** sell the End Product, charge end users for it.
- **You cannot:** redistribute the source code, use one license for multiple End Products, or resell the item itself.
- **Source:** https://codecanyon.net/licenses/terms/extended

### 3.3 Universal rules for both licenses
- **One license = one End Product.** A second site / app / SaaS instance needs a second license.
- **No source redistribution.** You cannot give the source files away — even free, even modified — as a stock template, theme, or starter kit.
- **License FAQ:** https://codecanyon.net/licenses/faq

### 3.4 Quick decision tree the bot can use
- "Will your end users pay you to use the platform?" → **Yes** → Extended. **No** → Regular.
- "Is it for one client only?" → Either license; pick by whether the *client* will charge their users.
- "Are you running multiple instances / SaaS tenants?" → One license per **End Product**, but **Nazmart is the exception** — one Nazmart install legitimately hosts many tenant shops under the appropriate license (typically Extended, because the tenants pay you).
- **Bot rule for SaaS-positioned products (#4 Nazmart, and any Xilancer / Prohandy deployment that charges users):** strongly recommend **Extended License** in the answer.

---

## 4. Intent → Product Map (fuzzy matcher for the bot)

Map the visitor's described goal — in their own words — to a product family. The lists of synonyms below are deliberately generous so the bot can match casual phrasing.

### 4.1 "I want a website / business CMS / agency website builder"
- *Synonyms:* business CMS, agency CMS, corporate website, multipurpose website, construction website, interior design site, event ticket site, donation website, job posting site, customer management, quotation system, client feedback site, product showcase, digital downloads site.
- → **Suggest Nexelit (#1).** It bundles a CMS, agency / business templates, an Appointments module, a Job Posting module, donations, event ticketing, quotations, and a basic product seller — a "Swiss-army CMS" rather than a single-purpose script.

### 4.2 "I want a crowdfunding / donation / fundraising / charity platform"
- *Synonyms:* crowdfunding, GoFundMe clone, Kickstarter clone, Indiegogo clone, donation site, charity platform, fundraising script, raise money platform, peer-to-peer fundraising, NGO donation site, mosque / temple / church donation portal.
- → For the web platform, **suggest Fundorex (#2)**.
- → If they want a native mobile experience for donors, also recommend the **Crowdfunding Platform Flutter Mobile App for Fundorex (#8)**.

### 4.3 "I want an organic / grocery / fresh-produce online store"
- *Synonyms:* grocery store online, organic shop, supermarket online, vegetable delivery site, farm-to-table store, fresh produce shop, butcher / dairy store, vegan grocery, farmers' market online.
- → For the storefront, **suggest Grenmart (#3)**.
- → If they want a native customer mobile app, also recommend the **Grenmart Flutter App (#9)**.

### 4.4 "I want to sell websites / launch a website-builder SaaS / multi-tenant eCommerce"
- *Synonyms:* website builder SaaS, Shopify clone, Wix clone for stores, multi-tenant eCommerce, sell stores to customers, white-label store builder, multi-store SaaS, custom domain SaaS, give every customer their own shop.
- → **Suggest Nazmart (#4)** for the platform.
- → Add the **NazMart Tenant Shop Flutter App (#10)** if they want their tenants' shops to have a native app face.
- → Add specific Nazmart plugins (#13–#19) by feature need (POS, shipping, SMS, cloud storage, domain reselling, WooCommerce migration, analytics).
- → If they want everything in one purchase, recommend the **Nazmart Bundle Pack (#26)**.

### 4.5 "I want a freelance marketplace / Upwork / Fiverr clone / services-and-projects marketplace"
- *Synonyms:* freelance marketplace, Upwork clone, Fiverr clone, Freelancer.com clone, gigs marketplace, services marketplace for digital work, dev / designer / writer marketplace, hourly contracting platform, project bidding platform, talent marketplace.
- → For the web platform, **suggest Xilancer (#5)**.
- → For native mobile, recommend the **Freelancer App (#11)** + **Client App (#12)**.
- → For specific feature gaps:
  - Freelancer reputation tiers → **Freelancer Level Plugin (#20)**
  - Featured listings / paid promotion → **Promotional Plugin (#21)**
  - 2FA / extra hardening → **Security Plugin (#22)**
  - S3 / Wasabi / DigitalOcean Spaces support → **Cloud Storage Plugin for Xilancer (#23)**
  - Time-tracked hourly contracts → **Hourly Hiring Plugin (#24)**
  - Forum / discussion board for users → **Community Plugin (#25)**
- → For everything in one purchase, **Xilancer Bundle (#27)**.

### 4.6 "I want an on-demand handyman / home services marketplace with mobile apps"
- *Synonyms:* handyman marketplace, home services platform, on-demand services with apps, plumber / electrician / cleaner booking apps, TaskRabbit-style apps, native iOS + Android service marketplace.
- → **Suggest Prohandy (#6)**. Unlike most byteseed/xgenious products, Prohandy ships with **client + provider Flutter apps in the same purchase** (no separate app to buy).

### 4.7 "I want an affiliate-link sharing platform"
- *Synonyms:* affiliate link site, link-in-bio for affiliates, affiliate cloaker, affiliate community site, link sharing community, affiliate aggregator.
- → **Suggest Affiliation (#7)**. (Confirm the live item ID on the xgenious portfolio before quoting a URL.)

### 4.8 Disambiguation tips for the bot

When a visitor's request is ambiguous, ask **one** follow-up question and route them.

- **"Online store" / "eCommerce"** is ambiguous in this catalog:
  - One organic / grocery store for one merchant → **Grenmart (#3)**.
  - Many tenants each running their own shop (you sell stores as a service) → **Nazmart (#4)**.
- **"Marketplace"** is ambiguous:
  - Freelancers selling **digital services and projects** → **Xilancer (#5)**.
  - Local **handyman / home-services providers** with mobile apps → **Prohandy (#6)**.
  - Multiple **tenant shops** (each tenant is itself a store) → **Nazmart (#4)**.
- **"Website / CMS"** without more context → **Nexelit (#1)**.
- **"Raising money"** → almost always **Fundorex (#2)**, unless they actually mean equity / investing (which is out of scope for this catalog).

---

## 5. Product Cards

Every card uses the same structure so the bot can pull a uniform answer.

---

### Product #1: Nexelit — Multipurpose Website CMS & Business CMS

- **Item ID:** 27936384
- **URL:** https://codecanyon.net/item/nexelit-multipurpose-website-business-management-system-cms/27936384
- **Documentation:** https://docs.xgenious.com/docs/nexelit/
- **One-line pitch:** A "Swiss-army" Laravel CMS for businesses and agencies — pick the modules you need (jobs, appointments, donations, events, quotations, products) and ignore the rest.
- **Category:** PHP Scripts → CMS / Business.
- **Tech stack:** Laravel 12.x (current), PHP 8.3, MySQL 8, Bootstrap 5; responsive on desktop, laptop, mobile, all major browsers.
- **Key features:** drag-and-drop page / menu / form / widget builders; jobs module (post jobs by category, applicants apply via mail or form); appointments module (booking flow); donations module; events / event ticketing; quotations and client-feedback flows; physical / digital / downloadable product selling; payment gateways: PayPal, Paytm, Paystack, Razorpay, Stripe, Flutterwave, Mollie, Cash on Delivery, manual.
- **Pricing (USD):**
  - Regular License: **$39**
  - Extended License: verify on live page.
- **License guidance:** Most Nexelit deployments are agency / business sites with no end-user fee → Regular License is enough. Charging users for premium content / paid memberships → Extended.
- **Best for / use cases:** agency / freelancer portfolios, corporate sites, construction / interior design firms, event organizers selling tickets, small NGOs accepting donations, niche job boards, small-business product showcases.
- **Companion products:** none in the public catalog (no separate Nexelit mobile app indexed).
- **Synonyms / fuzzy match keywords:** Nexelit, multipurpose CMS, agency CMS, corporate website Laravel, business website builder, jobs + appointments + donations CMS, agency portfolio builder, multipurpose Laravel script, all-in-one business CMS.

---

### Product #2: Fundorex — Crowdfunding and Donation Platform

- **Item ID:** 33286096
- **URL:** https://codecanyon.net/item/fundorex-crowdfunding-platform/33286096
- **Documentation:** https://docs.xgenious.com/docs/fundorex/
- **Live demo:** https://fundorex.xgenious.com/
- **One-line pitch:** A Laravel-based crowdfunding + donation platform — users register, submit campaigns for admin approval, receive donations, and request withdrawals.
- **Category:** PHP Scripts → Crowdfunding.
- **Tech stack:** Laravel + PHP 8.x, MySQL, Bootstrap 5.
- **Key features:** drag-and-drop menu (with mega-menu) / form / widget builders; donation campaign module + user-submitted campaigns with admin approval; events module; jobs module; donor / withdrawal management; **17+ payment gateway support**; multi-currency, multi-language.
- **Pricing (USD):**
  - Regular License: **$49**
  - Extended License: verify on live page.
- **License guidance:** Most charity / community use → Regular. SaaS model where you let multiple organizations launch their own crowdfunding sites for a fee → Extended.
- **Best for / use cases:** NGOs and charities accepting online donations, peer-to-peer fundraising for individuals, religious community fundraising (mosque, temple, church), school / university fundraisers, niche cause-driven crowdfunding sites.
- **Companion products:** Crowdfunding Platform Flutter Mobile App — Fundorex (#8).
- **Synonyms / fuzzy match keywords:** Fundorex, crowdfunding script, donation platform, GoFundMe clone, Kickstarter clone, Indiegogo clone, Laravel crowdfunding, charity platform, peer-to-peer fundraising script, NGO donation portal, fundraising CMS.

---

### Product #3: Grenmart — Organic & Grocery Laravel eCommerce

- **Item ID:** 37928454
- **URL:** https://codecanyon.net/item/grenmart-organic-grocery-laravel-ecommerce/37928454
- **Live demo:** https://grenmart.xgenious.com/
- **One-line pitch:** Single-vendor Laravel eCommerce platform purpose-built for grocery and organic food stores — three home-page variants for small / medium / large catalogs.
- **Category:** PHP Scripts → eCommerce.
- **Tech stack:** Laravel + PHP 8.x, MySQL, Bootstrap 5.
- **Key features:** drag-and-drop page / menu / form / widget builders; advanced tax, campaign, shipping, coupon, and inventory modules; product variations (weight, size, pack); 3 home-page variants out of the box; multi-currency, multi-language; payment gateways consistent with the rest of the xgenious catalog (PayPal, Stripe, Razorpay, Paystack, Flutterwave, etc.).
- **Pricing (USD):**
  - Regular License: **verify on live listing — typical price for this catalog is $39.**
  - Extended License: verify on live page.
- **License guidance:** A single-merchant grocery store (you or a client run the shop) → Regular. Reselling Grenmart installs as paid SaaS → Extended.
- **Best for / use cases:** organic food stores, neighborhood grocery delivery, farm-to-table sites, vegan / specialty diet stores, supermarket online presence.
- **Companion products:** Grenmart — Laravel eCommerce Shop Flutter App (#9).
- **Synonyms / fuzzy match keywords:** Grenmart, grocery eCommerce, organic store script, supermarket online, fresh produce site, vegetable delivery, Laravel grocery, grocery Shopify alternative, farmer-store script.

---

### Product #4: Nazmart — Multi-Tenancy eCommerce Platform (SaaS)

- **Item ID:** 42802410
- **URL:** https://codecanyon.net/item/nazmart-multitenancy-ecommerce-platform-saas/42802410
- **Documentation:** https://docs.xgenious.com/docs/nazmart-multi-tenancy-ecommerce-platform-saas/
- **Brand page:** https://xgenious.com/our-products/nazmart-multi-tenancy-ecommerce-platform-saas/
- **One-line pitch:** True multi-tenant SaaS engine for selling stores — your customers sign up, get their own subdomain (or custom domain) and a fully working storefront, while you operate the platform.
- **Architecture:** **Separate database per tenant** (better isolation and faster loads than shared-schema multi-tenancy).
- **Category:** PHP Scripts → eCommerce SaaS.
- **Tech stack:** Laravel + PHP 8.x, MySQL 8, Bootstrap 5.
- **Key features:** automatic subdomain provisioning + custom domain support per tenant; tenant subscription / billing; admin oversight of all tenants; drag-and-drop builders; product / order / inventory management at the tenant level; multi-currency, multi-language; deep plugin ecosystem (POS, shipping, SMS, cloud storage, domain reseller, WooCommerce import, site analytics).
- **Pricing (USD):**
  - Regular License: **$69**
  - Extended License: verify on live page.
- **License guidance:** Because Nazmart is **explicitly designed to host paying tenants**, almost every realistic deployment needs the **Extended License** (you are charging end users for a hosted product).
- **Best for / use cases:** white-label "Shopify alternative" SaaS, vertical eCommerce SaaS (food, fashion, B2B wholesale), regional shop-builder businesses, agencies that want to sell turnkey shops as a recurring revenue product.
- **Companion products:** NazMart Tenant Shop Flutter App (#10), Nazmart Bundle Pack (#26), and the seven Nazmart plugins (#13–#19).
- **Synonyms / fuzzy match keywords:** Nazmart, multi-tenant eCommerce, SaaS shop builder, sell stores, Shopify clone, white-label commerce, multi-tenancy Laravel, custom domain stores, eCommerce SaaS script, tenant store platform.

---

### Product #5: Xilancer — Freelancer Marketplace Platform with Services & Projects

- **Item ID:** 49358326
- **URL:** https://codecanyon.net/item/xilancer-freelancer-marketplace-platform-with-services-projects/49358326
- **One-line pitch:** Two-sided Laravel freelance marketplace — freelancers list services *and* clients post projects; both flows live in one site.
- **Category:** PHP Scripts → Project Management Tools / Marketplace.
- **Tech stack:** Laravel + PHP 8.x, MySQL, Bootstrap 5.
- **Key features:** dual flow (services like Fiverr + projects like Upwork); live chat between clients and freelancers; automatic project approval flow; support ticket system; notification system for new orders, jobs, and wallet events; multi-currency, multi-language, multi-payment-gateway; rich plugin ecosystem (see below).
- **Pricing (USD):**
  - Regular License: **$59** (sale prices around $49 occur during CodeCanyon promos).
  - Extended License: verify on live page.
- **License guidance:** Charging freelancers a subscription, charging clients a posting fee, taking a platform commission with paid features → **Extended License**. A single-client custom build with no fee on end users → Regular.
- **Best for / use cases:** general freelance marketplaces, vertical marketplaces (writers only, designers only, devs only), regional Upwork / Fiverr alternatives, agency-managed talent pools.
- **Companion products:** Freelancer App (#11), Client App (#12), Xilancer Bundle (#27), and the six Xilancer plugins (#20–#25).
- **Synonyms / fuzzy match keywords:** Xilancer, freelance marketplace, Fiverr clone, Upwork clone, gig marketplace, services and projects marketplace, freelancer hiring platform, talent marketplace, project bidding platform, hourly contracting site.

---

### Product #6: Prohandy — On-Demand Handyman & Home Service Provider Marketplace Platform

- **Item ID:** 55091770
- **URL:** https://codecanyon.net/item/prohandy-on-demand-home-service-marketplace-platform/55091770
- **Documentation:** https://docs.xgenious.com/docs/prohandy-client-flutter-app/ (client app) and https://docs.xgenious.com/docs/prohandy-provider-flutter-app/ (provider app)
- **One-line pitch:** Multi-provider on-demand home-services marketplace — Laravel admin panel **plus** native Flutter client and provider apps, all in one purchase.
- **Category:** PHP Scripts → On-Demand Services Marketplace.
- **Tech stack:** Laravel 12.x backend, Flutter v3.32 mobile apps (latest version 2.0.1 as of October 2025).
- **Key features:**
  - **Client side (Flutter app):** effortless job creation, secure service booking via cart, live chat, multi-address support, push notifications, **19+ payment gateways**.
  - **Provider side (Flutter app):** job offers, order management, identity verification, interactive map-based job listings, staff management.
  - **Admin panel:** centralized management of services, providers, orders, identity verification, platform settings, support ticketing, dark / light themes, multi-language.
- **Pricing (USD):**
  - Regular License: **$59** (sale prices $49 / $25 occur during CodeCanyon promotions; the live listing has shown $69 sticker pricing at times).
  - Extended License: verify on live page.
- **License guidance:** A real on-demand marketplace usually charges providers a commission *and / or* a subscription — those deployments need **Extended License**. Pure single-client internal-use → Regular.
- **Best for / use cases:** local handyman marketplaces, beauty / cleaning / repair services, vertical home-services apps (plumbing, electrical, AC repair), regional competitors to Urban Company / Thumbtack / TaskRabbit.
- **Companion products:** none separately — the two Flutter apps are part of this purchase.
- **Synonyms / fuzzy match keywords:** Prohandy, handyman app, home services marketplace, on-demand services, handyman script with apps, Urban Company clone, Thumbtack clone, TaskRabbit clone with native apps, home service Laravel + Flutter, multi-provider on-demand marketplace.

---

### Product #7: Affiliation — Affiliate Link Sharing Platform

- **Item ID:** Not consistently indexed in public search; **bot should fetch it from the xgenious portfolio (https://codecanyon.net/user/xgenious/portfolio) before quoting a direct URL.**
- **Documentation:** https://docs.xgenious.com/docs/affiliation-affiliate-link-sharing-platform/
- **One-line pitch:** A Laravel-based affiliate-link sharing system — users sign up (Facebook / Google), drop their affiliate URLs, and share them through the platform.
- **Category:** PHP Scripts → Affiliate / Referral.
- **Tech stack:** Laravel + PHP 8.x, MySQL, Bootstrap 5.
- **Key features:** Facebook + Google login; drag-and-drop menu / form / widget builders; media image library; admin can add custom JS / CSS; built-in user accounts and link management.
- **Pricing (USD):**
  - Regular License: **$19**
  - Extended License: verify on live page.
- **License guidance:** Most affiliate-link community sites are free for end users (you make money on affiliate commissions, not on user fees) → Regular License is typically sufficient.
- **Best for / use cases:** niche affiliate-link communities, "deals of the day" sites, coupon-and-link aggregators, country-specific affiliate hubs.
- **Companion products:** none in the catalog.
- **Synonyms / fuzzy match keywords:** Affiliation, affiliate link platform, affiliate community, affiliate links script, link sharing platform, affiliate hub, deals site, coupons and affiliate links.

---

### Product #8: Crowdfunding Platform Flutter Mobile App — Fundorex

- **Item ID:** 39675422
- **URL:** https://codecanyon.net/item/crowdfunding-platform-flutter-mobile-app-fundorex/39675422
- **Dependency:** **Requires the Fundorex web platform (#2).**
- **Tech stack:** Flutter 3.x (single codebase iOS + Android).
- **Key features:** browse and donate to campaigns; user campaign creation flow; payment gateway support including **PayPal, Stripe, Cashfree, Flutterwave, Instamojo, Razorpay, Bank Transfer, Paystack, Zitopay**; push notifications; multi-language.
- **Pricing (USD):** Regular License **typical $29–$39 — verify on live listing.**
- **License guidance:** Mirror Fundorex (#2).
- **Synonyms / fuzzy match keywords:** Fundorex mobile app, crowdfunding flutter app, donation app, charity mobile app, fundraising iOS app, fundraising Android app.

---

### Product #9: Grenmart — Laravel eCommerce Shop Flutter App

- **Item ID:** 40188895
- **URL:** https://codecanyon.net/item/grenmart-laravel-ecommerce-shop-flutter-app/40188895
- **Dependency:** **Requires the Grenmart web platform (#3).**
- **Tech stack:** Flutter 3.x.
- **Key features:** product browsing, cart, checkout, address management, order tracking, in-app payments through the gateways supported by the Grenmart backend.
- **Pricing (USD):** Regular License **typical $29–$39 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Grenmart app, grocery flutter app, organic store mobile app, grocery customer app, supermarket app.

---

### Product #10: NazMart — Tenant Shop Flutter Mobile App

- **Item ID:** 45385600
- **URL:** https://codecanyon.net/item/nazmart-tenant-shop-flutter-mobile-app/45385600
- **Dependency:** **Requires the Nazmart web platform (#4).**
- **Tech stack:** Flutter 3.x.
- **What it is:** A native iOS + Android shopping app that points at one tenant's shop on the Nazmart platform — useful when tenants want their own branded mobile presence.
- **Pricing (USD):** Regular License **typical $29–$39 — verify on live listing.**
- **License guidance:** Mirror Nazmart (#4); typically Extended for SaaS deployments.
- **Synonyms / fuzzy match keywords:** Nazmart app, tenant shop app, multi-tenant store app, customer flutter app for SaaS commerce.

---

### Product #11: Freelancer Flutter Mobile App — Xilancer

- **Item ID:** 49913337
- **URL:** https://codecanyon.net/item/freelancer-flutter-mobile-app-xilancer-freelancer-marketplace-platform/49913337
- **Dependency:** **Requires the Xilancer web platform (#5).**
- **Tech stack:** Flutter v3.32.5+ (latest as of mid-2025).
- **What it is:** the **freelancer-side** mobile app — manage gigs, bid on projects, chat with clients, manage withdrawals.
- **Pricing (USD):** Regular License **typical $29–$39 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer freelancer app, gig worker app, freelance seller app, Fiverr-clone seller app, Upwork-clone freelancer app.

---

### Product #12: Client Flutter Mobile App — Xilancer

- **Item ID:** 51899615
- **URL:** https://codecanyon.net/item/client-flutter-mobile-app-xilancer-freelancer-marketplace-platform/51899615
- **Dependency:** **Requires the Xilancer web platform (#5).**
- **Tech stack:** Flutter v3.32.5+.
- **What it is:** the **client-side** mobile app — post projects, hire freelancers, chat, pay, review.
- **Pricing (USD):** Regular License **typical $29–$39 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer client app, project posting app, hiring app, Upwork-clone client app.

---

### Product #13: WooCommerce Import Plugin — Nazmart

- **Item ID:** 47602812
- **URL:** https://codecanyon.net/item/woocommerce-import-plugin-nazmart-multitenancy-ecommerce-platform-saas/47602812
- **Dependency:** **Requires the Nazmart web platform (#4).**
- **What it does:** Imports products from a WooCommerce store into a Nazmart tenant — useful when migrating an existing WooCommerce shop into the SaaS.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** WooCommerce import, WooCommerce migration, move from WooCommerce to Nazmart, product importer.

---

### Product #14: Site Analytics Plugin — Nazmart

- **Item ID:** 48999407
- **URL:** https://codecanyon.net/item/site-analytics-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999407
- **Dependency:** **Requires Nazmart (#4).**
- **What it does:** Built-in analytics dashboards for tenants and admins — page views, sessions, conversion data without relying on Google Analytics alone.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Nazmart analytics, store analytics plugin, tenant analytics, traffic stats plugin.

---

### Product #15: SMS Gateway Plugin — Nazmart

- **Item ID:** 48999428
- **URL:** https://codecanyon.net/item/sms-gateway-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999428
- **Dependency:** **Requires Nazmart (#4).**
- **What it does:** Adds SMS notifications for orders, OTP, and account events through configurable SMS gateways.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Nazmart SMS, OTP plugin, SMS notifications, Twilio plugin, SMS gateway.

---

### Product #16: Cloud Storage Plugin — Nazmart

- **Item ID:** 48999455
- **URL:** https://codecanyon.net/item/cloud-storage-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999455
- **Dependency:** **Requires Nazmart (#4).**
- **What it does:** Offload media to cloud storage (typical providers: Amazon S3, DigitalOcean Spaces, Wasabi) instead of the application server.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Nazmart S3, cloud storage plugin, offload media, S3 / Wasabi / Spaces integration.

---

### Product #17: POS (Point of Sales) Plugin — Nazmart

- **Item ID:** 49334988
- **URL:** https://codecanyon.net/item/pos-point-of-sales-plugin-nazmart-multitenancy-ecommerce-platform-saas/49334988
- **Dependency:** **Requires Nazmart V1.5.0 or later (#4).**
- **What it does:** Adds an in-store / counter point-of-sale interface so tenants can ring up walk-in sales and unify online + offline inventory.
- **Pricing (USD):** Regular License: **$49** (Confirmed).
- **Synonyms / fuzzy match keywords:** Nazmart POS, point of sale, in-store register, retail POS, omnichannel POS for SaaS shops.

---

### Product #18: Shipping Plugin — Nazmart

- **Item ID:** 50095051
- **URL:** https://codecanyon.net/item/shipping-plugin-nazmart-multitenancy-ecommerce-platform-saas/50095051
- **Dependency:** **Requires Nazmart V1.7.0 or later (#4).**
- **What it does:** Advanced shipping configuration — zone, weight, flat-rate, condition-based shipping rules per tenant.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Nazmart shipping, shipping zones, weight-based shipping, courier integration, shipping rules.

---

### Product #19: Domain Reseller Plugin — Nazmart

- **Item ID:** 50530641
- **URL:** https://codecanyon.net/item/domain-reseller-plugin-nazmart-multitenancy-ecommerce-platform-saas/50530641
- **Dependency:** **Requires Nazmart (#4).**
- **What it does:** Lets the platform sell domain registrations to tenants from inside the SaaS dashboard, opening a second revenue stream.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Nazmart domain reseller, sell domains, domain registrar plugin, reseller addon.

---

### Product #20: Freelancer Level Plugin — Xilancer

- **Item ID:** 50194837
- **URL:** https://codecanyon.net/item/freelancer-level-plugin-for-xilancer-freelancer-marketplace-platform/50194837
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Adds tiered freelancer levels (e.g. Level 1 / 2 / Top Rated) based on completion and rating thresholds — drives gamification and trust signals.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer levels, freelancer ranking, top-rated badge, freelancer tiers, gamification plugin.

---

### Product #21: Promotional Plugin — Xilancer

- **Item ID:** 52212426
- **URL:** https://codecanyon.net/item/promotional-plugin-for-xilancer-freelancer-marketplace-platform/52212426
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Lets freelancers pay (via payment gateway or wallet) to **promote their projects and profiles** — featured placement, search boost.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer promotion, featured listings, paid placement, profile boost, ad slots for freelancers.

---

### Product #22: Security Plugin — Xilancer

- **Item ID:** 52596173
- **URL:** https://codecanyon.net/item/security-plugin-for-xilancer-freelancer-marketplace-platform/52596173
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Hardens the platform (typical features: 2FA, login throttling, brute-force protection, session controls).
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer security, 2FA plugin, two-factor auth, login protection, account hardening.

---

### Product #23: Cloud Storage Plugin — Xilancer

- **Item ID:** 53643856
- **URL:** https://codecanyon.net/item/cloud-storage-plugin-for-xilancer-freelancer-marketplace-platform/53643856
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Offload uploads and assets to cloud object storage (S3 / Wasabi / DigitalOcean Spaces).
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer S3, cloud storage, offload media, S3 plugin for Xilancer.

---

### Product #24: Hourly Hiring Plugin — Xilancer

- **Item ID:** 54180802
- **URL:** https://codecanyon.net/item/hourly-hiring-plugin-for-xilancer-freelancer-marketplace-platform/54180802
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Adds **hourly contracts** (time-tracked work) on top of Xilancer's fixed-price services and projects — this is what makes Xilancer compete with Upwork, not just Fiverr.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer hourly, time tracking, hourly contracts, Upwork-style hiring, hourly billing plugin.

---

### Product #25: Community Plugin — Xilancer

- **Item ID:** 56107708
- **URL:** https://codecanyon.net/item/community-plugin-for-xilancer-freelancer-marketplace-platform/56107708
- **Dependency:** **Requires Xilancer (#5).**
- **What it does:** Adds a community / forum surface so freelancers and clients can post questions, share work, and discuss.
- **Pricing (USD):** Regular License **typical $19–$29 — verify on live listing.**
- **Synonyms / fuzzy match keywords:** Xilancer community, forum plugin, freelancer forum, discussion board for marketplace.

---

### Product #26: Nazmart Bundle Pack — Multi-Tenancy eCommerce Platform (SaaS)

- **Item ID:** 53246605
- **URL:** https://codecanyon.net/item/nazmart-bundle-pack-multitenancy-ecommerce-platform-saas/53246605
- **What's typically inside:** Nazmart core platform (#4) + the official Nazmart plugins (#13–#19) + the NazMart Tenant Shop Flutter App (#10). Confirm exact contents on the live listing.
- **Pricing (USD):**
  - Regular License: **verify on live listing — typical bundle pricing in this catalog falls in the $149–$199 range.**
  - Extended License: verify on live page.
- **License guidance:** Same as Nazmart core — paid SaaS → Extended.
- **Best for / use cases:** any serious Nazmart launch where the buyer wants POS, shipping, SMS, cloud storage, domain reselling, and the mobile app from day one.
- **Synonyms / fuzzy match keywords:** Nazmart bundle, Nazmart all-in-one, multi-tenant eCommerce bundle, SaaS shop builder bundle.

---

### Product #27: Xilancer Bundle — Freelancer Marketplace Platform with Services & Projects

- **Item ID:** 56487757
- **URL:** https://codecanyon.net/item/xilancer-bundle-freelancer-marketplace-platform-with-services-projects/56487757
- **What's typically inside:** Xilancer core platform (#5) + the official Xilancer plugins (#20–#25) + the Freelancer App (#11) + the Client App (#12). Confirm exact contents on the live listing.
- **Pricing (USD):**
  - Regular License: **verify on live listing — typical bundle pricing in this catalog falls in the $149–$199 range.**
  - Extended License: verify on live page.
- **License guidance:** Same as Xilancer core — charging users → Extended.
- **Best for / use cases:** anyone launching a serious freelance marketplace who already knows they want hourly contracts, freelancer tiers, paid promotion, security hardening, cloud storage, a community forum, and both mobile apps.
- **Synonyms / fuzzy match keywords:** Xilancer bundle, freelance marketplace bundle, Xilancer all-in-one, complete Xilancer stack.

---

## 6. Cross-Catalog Comparison Table

A chatbot can use this when a visitor is choosing between two products in the same family.

| Question | Pick |
|----------|------|
| One shop with one merchant vs many tenant shops? | One merchant → **Grenmart (#3)**. Many tenants → **Nazmart (#4)**. |
| Freelancer marketplace (digital work) vs handyman marketplace (physical services on-site)? | Digital → **Xilancer (#5)**. Physical / on-site → **Prohandy (#6)**. |
| Generic business website vs purpose-built crowdfunding? | Generic → **Nexelit (#1)**. Crowdfunding → **Fundorex (#2)**. |
| Need native mobile apps day one? | **Prohandy (#6)** ships apps with the platform. For Xilancer / Nazmart / Fundorex / Grenmart, buy the matching companion app (#8–#12). |
| Buy plugins now or later? | Now → the relevant **Bundle** (Nazmart Bundle #26, Xilancer Bundle #27) — usually cheaper than buying parts separately. Later → start with the base platform, buy plugins individually as needed. |
| Building one website vs reselling websites to many tenants? | One → any platform on Regular. Reselling / SaaS → **Nazmart (#4)** on Extended. |
| Want hourly contracts in the freelance flow? | Xilancer alone is fixed-price; add the **Hourly Hiring Plugin (#24)**. |
| Need a payment gateway not in the default list? | The base platforms ship 17–22+ gateways. Ask the user which gateway and check the listing's "compatibility" section. |

---

## 7. FAQ & Fallback Answers

### "Will my purchase include lifetime updates?"
CodeCanyon items include **6 months of item support by default**, with an option to extend to 12 months at checkout. *Updates* (new versions of the item) are included as long as the author keeps publishing them — there is no separate update subscription. xgenious actively updates its core platforms (Laravel 12.x and Flutter 3.32.x current as of late 2025). Always link to the item's "Support" tab for the live policy.

### "Can I get a refund?"
Refunds follow the standard **Envato refund policy** (https://help.market.envato.com/hc/en-us/articles/204150288). The bot should not promise a refund — it should explain that the refund decision is between the buyer, the author, and Envato.

### "Does it include installation?"
Installation is **not included** in the CodeCanyon price. xgenious offers installation help through their own support channels and documentation hub (https://docs.xgenious.com). For paid setup help, link the visitor to the brand site (https://xgenious.com).

### "Can I remove the author's branding / footer credit?"
Check the specific item's documentation. In general, branding policies vary per item — the bot should defer to the item's documentation rather than promising removal.

### "Is the source code editable?"
Yes. CodeCanyon PHP scripts ship full source code, and you can modify it for your own End Product. You **cannot** redistribute the modified source.

### "What hosting do I need?"
Most xgenious Laravel platforms expect **PHP 8.1+** (PHP 8.3 for the latest builds), **MySQL 8 / MariaDB**, **Composer**, and the ability to run **Laravel queue workers and cron**. Cheap shared hosting often won't satisfy all of those — recommend a VPS or managed Laravel host. For Nazmart specifically, the multi-tenant architecture is database-heavy: budget for adequate MySQL resources.

### "Is there a free demo I can try?"
Each CodeCanyon listing has a **Live Preview** button. xgenious also hosts public demos under sub-domains of xgenious.com (e.g. https://fundorex.xgenious.com/, https://grenmart.xgenious.com/). Direct the user to those.

### "Do you have a discount code?"
The bot should not invent or promise discounts. CodeCanyon runs periodic sales, and xgenious participates in **Black Friday** with significant percent-off deals (the "CodeCanyon Black Friday" page on xgenious.com lists current expectations). Direct the visitor to the live listing for any active deal.

### "I want a feature that isn't listed here."
Direct the visitor to the item's **Comments** tab on CodeCanyon, or to the xgenious documentation (https://docs.xgenious.com), where the author replies to feature questions. Do not promise the feature exists.

### "Is the item nulled / can you give me a free copy?"
**No.** The bot should refuse politely and explain that nulled copies are pirated, contain malware risk, and lose all support and updates. Always recommend the official CodeCanyon listing.

### "What's the difference between Regular and Extended again?"
Quote the License Glossary (Section 3) — specifically the decision question: *"Will your end users pay you to use the product?"* Yes → Extended, No → Regular. Note that **Nazmart (#4)** and most realistic deployments of **Xilancer (#5)** and **Prohandy (#6)** need Extended.

### "How do I contact xgenious?"
Each CodeCanyon item has a **"Contact the author"** button on its page, plus a **Comments** tab and a **Support** tab. The brand site is https://xgenious.com and documentation is at https://docs.xgenious.com.

### "What's the difference between Nazmart and a regular eCommerce script (like Grenmart)?"
- **Grenmart** = one shop, one owner. You install it once, you run one storefront.
- **Nazmart** = a SaaS that gives **every customer their own shop**. You install Nazmart once and let tenants sign up — each tenant gets a subdomain (or custom domain) and a working store. Comparable to Shopify-as-a-product rather than a single store.

### "What's the difference between Xilancer and Prohandy?"
Both are "marketplaces," but the work they manage is different:
- **Xilancer** is for **digital services and projects** delivered remotely (writing, design, dev, marketing). It models Fiverr (services) + Upwork (projects, plus hourly via the #24 plugin).
- **Prohandy** is for **on-site home services** (plumber, electrician, cleaner, beautician). It ships native client + provider apps because the work happens in the real world and needs map / location features.

---

## 8. Bot Response Templates

These are short, copy-pasteable answer skeletons the chatbot can fill in.

### 8.1 Generic suggestion answer
> *"Based on what you described — {short paraphrase of the user's need} — I'd suggest **{Product Name}**. It's a {one-line pitch}. Pricing starts at **${price} (Regular License)** on CodeCanyon: {URL}. Want me to walk you through Regular vs Extended, or compare it with another option in the catalog?"*

### 8.2 License question answer
> *"For **{Product Name}**, the rule is straightforward: if your end users will pay you to use the platform — subscriptions, per-use fees, paid SaaS — you need the **Extended License**. If they won't (e.g. you're just running it for one client or making money on commissions only) the **Regular License** at ${price} is enough. The exact Extended price is shown on the listing here: {URL}."*

### 8.3 "Cheapest way to get X" answer
> *"For **{use case}**, the most cost-effective path is **{Product Name}** at **${price} (Regular License)**. If you also want **{adjacent need}**, the **{Bundle Name}** is usually cheaper than buying the parts separately. Listings: {URL_base}, {URL_bundle}."*

### 8.4 Disambiguation answer
> *"Quick question to point you to the right product: are you building **{disambiguation question from Section 4.8}**? Once I know that, I can recommend the best fit from the xgenious catalog."*

### 8.5 Refusal-of-pirated-content answer
> *"I can only point you to official, licensed copies on CodeCanyon. Nulled / cracked downloads come with security risk and lose support and updates — here's the official listing: {URL}."*

### 8.6 Plugin-needs-platform answer
> *"That plugin won't run on its own — **{Plugin Name}** requires the **{Parent Platform}** core to be installed first. If you don't have it yet, here's the parent platform: {URL_parent}. The plugin itself is here: {URL_plugin}."*

---

## 9. Maintenance Notes (for whoever updates this file)

- **Where prices come from.** Prices in this file were sourced from public Google search snippets that index the CodeCanyon listings, plus the xgenious "Black Friday" round-up page. CodeCanyon itself blocks automated fetches, so prices cannot be verified by a script — they should be **manually checked on each listing every quarter** and after any CodeCanyon-wide sale or Black Friday.
- **What to update if a product version changes.** The "Tech stack" line on each Product Card. Version numbers are not load-bearing for the chatbot, but the PHP / Laravel / Flutter version constraints affect hosting questions.
- **What to update if a new addon ships.** Add a new Product Card and update the "Companion products" line of the related core platform. Also add it to the Bundle's "What's typically inside" list if relevant.
- **What to update if Envato changes the license terms.** The License Glossary (Section 3) — link the official URLs each time so the bot quotes the live policy.
- **Versioning.** Bump the "Last reviewed" date at the top of the file on every edit.
- **Item ID for Affiliation (#7).** This product's CodeCanyon item ID is not consistently indexed in public search results — the next maintainer should grab it directly from https://codecanyon.net/user/xgenious/portfolio and replace the placeholder note in the card.

---

## 10. Source URLs (canonical)

### Core platforms
- Nexelit: https://codecanyon.net/item/nexelit-multipurpose-website-business-management-system-cms/27936384
- Fundorex: https://codecanyon.net/item/fundorex-crowdfunding-platform/33286096
- Grenmart: https://codecanyon.net/item/grenmart-organic-grocery-laravel-ecommerce/37928454
- Nazmart: https://codecanyon.net/item/nazmart-multitenancy-ecommerce-platform-saas/42802410
- Xilancer: https://codecanyon.net/item/xilancer-freelancer-marketplace-platform-with-services-projects/49358326
- Prohandy: https://codecanyon.net/item/prohandy-on-demand-home-service-marketplace-platform/55091770
- Affiliation: (verify item ID on portfolio) https://codecanyon.net/user/xgenious/portfolio

### Mobile apps
- Crowdfunding Flutter App — Fundorex: https://codecanyon.net/item/crowdfunding-platform-flutter-mobile-app-fundorex/39675422
- Grenmart Flutter App: https://codecanyon.net/item/grenmart-laravel-ecommerce-shop-flutter-app/40188895
- NazMart Tenant Shop Flutter App: https://codecanyon.net/item/nazmart-tenant-shop-flutter-mobile-app/45385600
- Freelancer Flutter App — Xilancer: https://codecanyon.net/item/freelancer-flutter-mobile-app-xilancer-freelancer-marketplace-platform/49913337
- Client Flutter App — Xilancer: https://codecanyon.net/item/client-flutter-mobile-app-xilancer-freelancer-marketplace-platform/51899615

### Nazmart plugins
- WooCommerce Import: https://codecanyon.net/item/woocommerce-import-plugin-nazmart-multitenancy-ecommerce-platform-saas/47602812
- Site Analytics: https://codecanyon.net/item/site-analytics-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999407
- SMS Gateway: https://codecanyon.net/item/sms-gateway-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999428
- Cloud Storage: https://codecanyon.net/item/cloud-storage-plugin-nazmart-multitenancy-ecommerce-platform-saas/48999455
- POS: https://codecanyon.net/item/pos-point-of-sales-plugin-nazmart-multitenancy-ecommerce-platform-saas/49334988
- Shipping: https://codecanyon.net/item/shipping-plugin-nazmart-multitenancy-ecommerce-platform-saas/50095051
- Domain Reseller: https://codecanyon.net/item/domain-reseller-plugin-nazmart-multitenancy-ecommerce-platform-saas/50530641

### Xilancer plugins
- Freelancer Level: https://codecanyon.net/item/freelancer-level-plugin-for-xilancer-freelancer-marketplace-platform/50194837
- Promotional: https://codecanyon.net/item/promotional-plugin-for-xilancer-freelancer-marketplace-platform/52212426
- Security: https://codecanyon.net/item/security-plugin-for-xilancer-freelancer-marketplace-platform/52596173
- Cloud Storage: https://codecanyon.net/item/cloud-storage-plugin-for-xilancer-freelancer-marketplace-platform/53643856
- Hourly Hiring: https://codecanyon.net/item/hourly-hiring-plugin-for-xilancer-freelancer-marketplace-platform/54180802
- Community: https://codecanyon.net/item/community-plugin-for-xilancer-freelancer-marketplace-platform/56107708

### Bundles
- Nazmart Bundle Pack: https://codecanyon.net/item/nazmart-bundle-pack-multitenancy-ecommerce-platform-saas/53246605
- Xilancer Bundle: https://codecanyon.net/item/xilancer-bundle-freelancer-marketplace-platform-with-services-projects/56487757

### Vendor + license references
- xgenious portfolio: https://codecanyon.net/user/xgenious/portfolio
- xgenious brand site: https://xgenious.com
- xgenious documentation: https://docs.xgenious.com
- CodeCanyon Regular License: https://codecanyon.net/licenses/terms/regular
- CodeCanyon Extended License: https://codecanyon.net/licenses/terms/extended
- CodeCanyon License FAQ: https://codecanyon.net/licenses/faq
