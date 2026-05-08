# HelpNest Knowledge Base

> **Source of truth:** [https://xgenious.com/our-products/laravel-ai-chatbot-support-script/](https://xgenious.com/our-products/laravel-ai-chatbot-support-script/)
> **Vendor:** Xgenious
> **Last updated:** May 2026

This document is structured for ingestion by an AI support agent. It includes a product brief, deep feature explanations, tech specs, license & pricing, and an extensive Q&A section covering common phrasings users may search for (AI chatbot, support automation, Laravel AI chatbot, help desk script, SaaS chatbot, ticketing system, etc.).

---

## 1. Product Identity

| Attribute | Value |
|---|---|
| Product name | **HelpNest** (also written *Helpnest*) |
| Vendor | Xgenious |
| Category | AI-Powered Customer Support Chatbot Script + Help Desk / Ticketing SaaS |
| Type | Self-hosted, single-purchase Laravel PHP script (source code included) |
| Sold on | Xgenious.com / Envato (CodeCanyon) |
| Tagline | *Launch Your Own AI Chatbot SaaS Platform* |
| Positioning | A self-hosted alternative to Crisp, Intercom, and Tidio |

### One-line summary
HelpNest is a complete Laravel 12 PHP script that lets you launch and monetize your own AI-powered customer support SaaS, combining a semantic AI chatbot, real-time visitor tracking, a help-desk ticketing system, a knowledge base, an embeddable chat widget, and built-in subscription billing — all under a one-time license fee.

---

## 2. Who HelpNest Is For

- SaaS founders who want to launch a chatbot/help-desk product like Intercom, Crisp, or Tidio without building from scratch.
- Agencies and resellers offering white-labeled customer support tools to clients.
- Businesses tired of paying $29–$200+ per month for chat platforms and wanting full data ownership.
- Developers and teams who need a self-hosted, source-available chatbot that can be customized.
- Companies serving multilingual or global markets.
- Teams looking to reduce support workload (the vendor cites a typical 40–60% reduction by handing common questions to AI).

---

## 3. Core Capabilities

### 3.1 AI-Powered Chatbot Engine
- Uses **semantic search with vector similarity / vector embeddings**, not simple keyword matching.
- Understands **context, intent, and meaning** of customer questions.
- Returns answers with **citations** drawn from the trained knowledge base.
- Powered by **OpenAI (GPT-4, GPT-3.5)** and **Anthropic Claude** APIs.
- Multilingual: if you train the AI with content in multiple languages, it can understand and respond in the customer's preferred language.

### 3.2 Real-time Visitor Tracking
- Live visitor map showing where visitors are right now.
- Per-visitor history: pages viewed, current page, country, address, and other identifying data.
- Useful for proactive outreach and live agent triage.

### 3.3 Support Ticketing System
- Full help-desk workflow: **ticket routing, priority management, team collaboration, SLA tracking**.
- Auto-escalation: when the AI cannot confidently resolve an issue, it escalates to a human agent via a ticket.
- Unified inbox for tickets and emails on the client dashboard.
- Designed as **AI + human hybrid** support, not AI-only.

### 3.4 Knowledge Base Builder
- Create and publish searchable documentation, FAQs, and articles.
- The same knowledge base trains the AI chatbot — anything you write becomes a source the bot can cite.
- Searchable by both customers (self-service) and the AI engine.

### 3.5 Embeddable Chat Widget
- Lightweight and customizable.
- Installed on any website with **two lines of code** via CDN or an npm package.
- Drag-and-drop widget customization from the client dashboard.
- White-label: custom logo, custom colors, custom branding.

### 3.6 Subscription & Billing (for the SaaS owner)
- Built-in **Stripe and PayPal** integrations.
- Recurring billing, free trials, automatic invoice generation.
- Flexible plan creation with usage limits.
- Suitable for running HelpNest itself as a paid SaaS where end-clients subscribe.

### 3.7 Multi-Tenant SaaS Architecture
- Each client (tenant) gets an isolated environment.
- Run a hosted SaaS where many businesses sign up, each managing their own chatbot, knowledge base, agents, and tickets.
- Required for resale; covered by the Extended License.

### 3.8 Admin Panel (for the platform owner)
- Complete user and subscription management dashboard.
- Revenue analytics and business metrics.
- Flexible plan creation with usage limits.
- Global settings and platform customization.
- Role-based access control for team members.
- Email templates and notification management.

### 3.9 Client Dashboard (for tenants/customers)
- AI chatbot training and knowledge management.
- Drag-and-drop widget customization.
- Unified inbox for tickets and emails.
- Team collaboration and agent assignment.
- Analytics and conversation insights.
- Custom branding (logo, colors).

### 3.10 Other
- **API Access** for integrating with existing tools.
- **Analytics** for performance, conversation insights, and customer satisfaction.
- Mobile continuation — *"Don't miss a chat, continue from your mobile"* (mobile companion is marked **Coming Soon**).

---

## 4. Technical Specifications

### Tech stack
- **Backend framework:** Laravel 12 (PHP)
- **Database:** PostgreSQL 14+
- **Templating:** Blade
- **Styling:** Tailwind CSS
- **AI providers:** OpenAI (GPT-4, GPT-3.5) and Anthropic Claude
- **Search:** Vector embeddings / semantic search
- **Realtime:** Pusher
- **Cache / queues:** Redis

### Server requirements
- **PHP:** 8.4 or higher
- **Database:** PostgreSQL 14+
- **Cache:** Redis
- **Realtime:** Pusher
- **RAM:** 4 GB minimum recommended
- **Hosting:** Works well on VPS providers — DigitalOcean, Hetzner, Vultr, AWS
- Detailed installation documentation is included with the purchase.

### What you get
- Complete source code (you can fully customize it).
- Lifetime free updates.
- Lifetime license validity (one-time payment).
- Permitted on 1 domain per license.
- 6 months of general and technical support per Envato Support Policy.

---

## 5. Pricing & Licensing

HelpNest is sold under a **one-time-payment** model. There are two licenses, sold via Envato; the prices below are the live discounted prices on the Xgenious product page.

| License | Price | Original | Best for |
|---|---|---|---|
| **Regular License** | **$59** | $89 | Personal projects, internal use, free-to-use deployments |
| **Extended License** *(Best Value)* | **$199** | $299 | Commercial use — selling chatbot services, running it as a paid SaaS, charging customers |

> A separate marketing comparison block on the page advertises HelpNest at **"$49 once, forever"** versus monthly competitors. The actual checkout prices are the $59 / $199 figures above.

### Both licenses include
- Website
- Admin Panel
- Lifetime License Validity
- Permitted for 1 domain
- 6 months of general and technical support (Envato Support Policy)
- All premium features
- Lifetime free updates

### Extended License adds
- Permission for **commercial projects**
- **Priority support**

### Which license do I need?
- **Charging end-customers / running it as a paid SaaS → Extended License.**
- **Internal use, personal projects, or offering it for free → Regular License.**

---

## 6. Competitive Positioning

The product page directly contrasts HelpNest with three SaaS incumbents.

| Tool | Pricing model | HelpNest claim |
|---|---|---|
| Crisp | From $45/month | Recurring fees, no source ownership |
| Intercom | From $29/month | Recurring fees, per-seat pricing |
| Tidio | From $29/month | Recurring fees |
| **HelpNest** | **One-time** ($49–$199) | Own the platform forever |

### Key differentiators highlighted by HelpNest
- One-time payment instead of recurring monthly fees.
- Complete data ownership and privacy control.
- Full source code access for unlimited customization.
- No per-seat pricing — add unlimited support agents.
- White-label ready for agencies and resellers.
- Semantic AI (vector embeddings) instead of keyword matching used by simpler scripts.
- Includes a real ticketing system, not just chat.
- True multi-tenant architecture for running a SaaS.

---

## 7. Use Cases

1. **Run a chatbot/help-desk SaaS** like Intercom or Crisp and earn recurring revenue from your own clients.
2. **Agency white-label offering** — resell HelpNest to clients with your own branding.
3. **Internal customer support** — replace your existing paid SaaS with a self-hosted chatbot + ticketing system.
4. **Multilingual customer service** for businesses serving global markets.
5. **AI-augmented support** — let the AI handle 40–60% of common questions and escalate the rest to human agents through tickets.
6. **Lead capture and visitor engagement** using the live visitor tracking and chat widget.

---

## 8. Customer Reviews (from product page)

- *"Easy to install and get running. The support team were very quick in helping with an issue."* — icanhelpyourbusiness (Envato user)
- *"The support team is absolutely outstanding! Really impressed with their dedication and willingness to help."* — abunowmankalim53 (Envato user)
- *"One of the best and fast customer support. Their scripts are also amazing and up to the mark. I would recommend anyone."* — Aofn75 (Envato user)

---

## 9. Vendor / Purchase Info

- **Vendor:** Xgenious — also produces Nazmart (multi-tenancy eCommerce SaaS), Nexelit (multipurpose website CMS), Fundorex (crowdfunding), Xilancer (freelancer marketplace), Prohandy (on-demand service marketplace).
- **Services offered:** Web Development, Mobile Apps, UI/UX Design, Shopify, Webflow, WordPress, SaaS Development, Customisation Service, Installation Service.
- **Track record claim:** 50+ products launched, 24h response, fixed-price contracts.
- **Free consultation** offered for SaaS / marketplace builds.
- **Support channels:** Support Ticket, Priority Support, Documentation, Contact form, My Account portal.

---

## 10. Anticipated User Questions (Q&A)

This section is designed to cover the many ways users may phrase the same question. The AI agent should treat these as canonical answers. Synonyms and trigger phrases are listed before each answer.

### 10.1 What is HelpNest?

**Triggers:** *what is helpnest, helpnest meaning, define helpnest, what is this product, helpnest overview, xgenious chatbot, ai chatbot, ai chatbot script, laravel ai chatbot*

HelpNest is a self-hosted Laravel 12 PHP script that lets you build and operate your own AI-powered customer support SaaS platform. It bundles a semantic AI chatbot, a help-desk ticketing system, a knowledge base, real-time visitor tracking, an embeddable chat widget, and Stripe/PayPal subscription billing. It is sold under a one-time license fee — Regular ($59) for personal use or Extended ($199) for commercial/SaaS use.

### 10.2 What is an AI chatbot script?

**Triggers:** *ai chatbot script, chatbot script meaning, what is a chatbot script, ready-made chatbot, chatbot software, support automation, ai customer service script*

An AI chatbot script is a ready-made software package you install on your own server to run an intelligent chatbot on your website or app. HelpNest goes beyond keyword bots: it uses semantic search and vector similarity to understand the meaning of customer questions and respond accurately. With HelpNest you get the full source code so you can run, customize, and even resell it as your own SaaS.

### 10.3 Can I use HelpNest to start my own SaaS business?

**Triggers:** *start saas, build a saas, sell chatbot service, white label chatbot, resell helpnest, multi-tenant chatbot, chatbot saas business, recurring revenue chatbot*

Yes. HelpNest is built as a multi-tenant SaaS platform with built-in subscription management. With the **Extended License**, you can sell AI chatbot services to unlimited clients, charge subscription fees, and build recurring revenue — similar to Crisp, Intercom, or Tidio.

### 10.4 What technologies does HelpNest use?

**Triggers:** *tech stack, what is helpnest built with, programming language, php version, laravel version, database, framework, ai provider*

HelpNest is built with **Laravel 12, PostgreSQL, Blade, and Tailwind CSS**. It integrates with **OpenAI (GPT-4, GPT-3.5)** and **Anthropic Claude** APIs for AI capabilities. The semantic search uses **vector embeddings** for intelligent question understanding. Real-time features run on Pusher, with Redis for caching/queues.

### 10.5 Does the chatbot support multiple languages?

**Triggers:** *multilingual, multi-language, language support, translate, non-english, global support, spanish chatbot, arabic chatbot*

Yes. HelpNest supports multilingual chatbots. If you train the AI with content in multiple languages, it can understand and respond to customers in their preferred language — making it suitable for global businesses.

### 10.6 How is HelpNest different from other chatbot scripts?

**Triggers:** *helpnest vs others, comparison, why helpnest, difference, what makes it different, semantic vs keyword*

HelpNest uses **semantic search with vector similarity**, not simple keyword matching. It understands context and meaning, provides citations in responses, includes a **complete ticketing system**, and offers **true multi-tenant architecture**. Most chatbot scripts only offer basic rule-based responses.

### 10.7 What are the server requirements?

**Triggers:** *server requirements, hosting, system requirements, what server do i need, vps, php version, ram, install requirements*

- **PHP 8.4+**
- **PostgreSQL 14+**
- **Redis**
- **Pusher**
- **At least 4 GB RAM** recommended
- Works well on VPS providers like **DigitalOcean, Hetzner, Vultr, or AWS**.
- Detailed installation documentation is included with your purchase.

### 10.8 Which license do I need — Regular or Extended?

**Triggers:** *which license, regular vs extended, commercial use, can i charge customers, license difference, paid saas license*

- **Extended License ($199):** required if you plan to charge end-customers or run it as a paid SaaS. Includes commercial use rights and priority support.
- **Regular License ($59):** for internal use, personal projects, or offering the service for free.

Both licenses include the complete source code, lifetime free updates, single-domain use, all premium features, and 6 months of Envato support.

### 10.9 Will the chatbot replace human support agents?

**Triggers:** *replace humans, replace agents, replace staff, ai vs human support, fully automated, will i still need agents*

No — HelpNest is designed to **augment** human support, not replace it. The AI handles common questions instantly while complex issues are automatically escalated to human agents through the ticketing system. This hybrid approach typically reduces support workload by **40–60%** while maintaining quality.

### 10.10 How does the chat widget get installed?

**Triggers:** *install widget, embed chat, add to website, widget code, snippet, npm package, cdn, integration*

The widget is lightweight and customizable, and can be installed on any website with **just two lines of code**, delivered via **CDN or an npm package**. It can be customized via drag-and-drop from the client dashboard.

### 10.11 What payment gateways are supported for billing my customers?

**Triggers:** *stripe, paypal, payment gateway, billing, subscriptions, recurring payments, charge customers*

HelpNest's subscription module ships with **Stripe** and **PayPal** integrations out of the box. You can create plans, run free trials, and generate invoices automatically.

### 10.12 Does HelpNest include a ticketing system?

**Triggers:** *ticketing system, help desk, ticket routing, sla, support tickets, helpdesk script, ticket management*

Yes. HelpNest includes a full-featured help-desk with **ticket routing, priority management, team collaboration, and SLA tracking**. When the AI cannot resolve an issue, it auto-escalates to a human agent through a ticket.

### 10.13 Can I customize the look and feel?

**Triggers:** *white label, branding, custom logo, custom colors, customize widget, customization, source code access*

Yes. Both the chat widget and the client dashboard support custom branding (logo and colors). Because the **complete source code** is included, you can make unlimited customizations beyond the built-in options. White-labeling makes HelpNest suitable for agencies and resellers.

### 10.14 Can I track visitors in real time?

**Triggers:** *live visitor, visitor tracking, who is on my site, visitor map, live map, see visitors, real-time analytics*

Yes. HelpNest includes a **real-time visitor map** showing each visitor's history, the page they're currently on, country, address, and other identifying data — helpful for proactive engagement and triage.

### 10.15 Is the source code included?

**Triggers:** *source code, full code, can i edit, can i customize, open source, modify code*

Yes. Every license includes the **full source code**, allowing unlimited customization. Note that this is commercial source-available code, not open-source under a permissive license — usage is governed by the Regular or Extended license terms.

### 10.16 Are updates free?

**Triggers:** *free updates, update policy, version updates, future versions, lifetime updates*

Yes. Both licenses come with **lifetime free updates**.

### 10.17 What kind of support do I get after buying?

**Triggers:** *support after purchase, technical support, customer support, help, contact, priority support*

Both licenses include **6 months of general and technical support** under the Envato Support Policy. The **Extended License** additionally includes **Priority Support**. Xgenious also runs a Documentation portal and a Support Center.

### 10.18 Can I use HelpNest on multiple domains?

**Triggers:** *multiple domains, more than one site, second domain, license per domain, additional domain*

Each license is **permitted for 1 domain**. To deploy on additional domains you would need additional licenses. (For multi-tenant SaaS, all your tenants live under one main installation/domain — that single SaaS deployment counts as one domain.)

### 10.19 Does it work with AI providers other than OpenAI?

**Triggers:** *anthropic, claude, openai alternative, gpt-4, gpt-3.5, ai provider options, llm options*

The product integrates with both **OpenAI (GPT-4, GPT-3.5)** and **Anthropic Claude**. You provide your own API keys.

### 10.20 What is "semantic search" and why does it matter?

**Triggers:** *semantic search, vector embeddings, vector similarity, ai understanding, smart search, why semantic*

Semantic search uses vector embeddings to compare the **meaning** of a question to your stored knowledge instead of matching exact keywords. This means HelpNest can answer "How do I get my money back?" using a help article titled "Refund policy" — something keyword bots typically miss.

### 10.21 Can I train the chatbot with my own documents and FAQs?

**Triggers:** *train chatbot, knowledge base, train ai, upload docs, faqs, custom knowledge, train with my content*

Yes. HelpNest includes a **Knowledge Base Builder**. Articles, docs, and FAQs you publish there double as training material for the AI chatbot, which can then cite them in answers.

### 10.22 Does HelpNest have an admin panel?

**Triggers:** *admin panel, admin dashboard, saas owner panel, super admin, control panel*

Yes. The Admin Panel is the SaaS owner's command center: manage users and subscriptions, view revenue analytics, create plans with usage limits, configure global settings, manage roles and permissions, and edit email templates and notifications.

### 10.23 Does HelpNest have an API?

**Triggers:** *api, rest api, integration, webhook, integrate with my tools*

Yes. HelpNest exposes API access for integrating with your existing tools.

### 10.24 Is there a mobile app?

**Triggers:** *mobile app, ios, android, mobile chat, continue on mobile*

A mobile companion is marketed on the page with the message *"Don't miss a chat, continue from your mobile"* and is marked **Coming Soon**.

### 10.25 How much can HelpNest reduce support workload?

**Triggers:** *reduce workload, automation savings, time saved, efficiency, productivity, automation rate*

The vendor's stated benchmark is a **40–60% reduction** in support workload when AI handles common questions and humans handle the rest.

### 10.26 What does it cost compared to Intercom, Crisp, and Tidio?

**Triggers:** *intercom price, crisp price, tidio price, cost comparison, vs intercom, vs crisp, vs tidio, cheaper than intercom*

| Tool | Pricing |
|---|---|
| Crisp | From $45/month |
| Intercom | From $29/month |
| Tidio | From $29/month |
| **HelpNest** | **One-time** ($59 Regular, $199 Extended) |

HelpNest replaces a recurring SaaS subscription with a single up-front purchase and gives you full code ownership.

### 10.27 Can I install HelpNest myself, or do I need help?

**Triggers:** *installation, how to install, do i need a developer, setup help, installation service, deploy*

Detailed installation documentation is included with every purchase. If you'd prefer hands-off setup, Xgenious also offers a paid **Installation Service** and **Customisation Service** as separate offerings.

### 10.28 Where can I see a demo?

**Triggers:** *demo, preview, live demo, test it, try it, see it in action*

The product page exposes an **"Explore Demos"** call-to-action that links to live demonstrations of HelpNest. (Refer the user to the product page link at the top of this document.)

### 10.29 Is HelpNest GDPR / privacy friendly?

**Triggers:** *gdpr, privacy, data ownership, data privacy, where is data stored, compliance*

HelpNest is **self-hosted**, which means data lives on your own server. The vendor explicitly markets *"complete data ownership and privacy control"* as a benefit versus SaaS competitors. (Compliance with specific regulations like GDPR, HIPAA, etc., is the operator's responsibility.)

### 10.30 What if I outgrow it or need custom features?

**Triggers:** *custom feature, customization, extend, modify, add features, scalability*

Because the **full source code** is included and the script is built on Laravel 12 (a mainstream framework), any Laravel developer can extend it. Xgenious also offers paid Customisation Services.

---

## 11. Quick-Reference Cheat Sheet (for the AI agent)

- **Product:** HelpNest — AI customer support chatbot + ticketing SaaS script (Laravel 12).
- **Vendor:** Xgenious.
- **License:** One-time. Regular $59 (personal) / Extended $199 (commercial/SaaS).
- **Stack:** Laravel 12, PostgreSQL 14+, Blade, Tailwind, Redis, Pusher, OpenAI/Claude.
- **Server:** PHP 8.4+, 4 GB RAM, VPS-friendly (DigitalOcean/Hetzner/Vultr/AWS).
- **Core:** Semantic AI chatbot, ticketing, knowledge base, live visitor tracking, embeddable widget, Stripe/PayPal billing, multi-tenant SaaS, admin + client dashboards, white-label, API.
- **Differentiators:** One-time payment, full source code, semantic (not keyword) AI, real ticketing, multi-tenant, no per-seat pricing.
- **Competes with:** Intercom, Crisp, Tidio.
- **Limitations to mention honestly:** 1 domain per license; mobile app *coming soon*; you supply your own AI API keys; 6-month support window per Envato policy (extendable via Priority Support / paid services).

---

## 12. Suggested Trigger Keywords (for routing & retrieval)

Use these terms to recognize when a user's question is about HelpNest:

> ai chatbot, ai chatbot script, laravel ai chatbot, laravel chatbot, php chatbot, support automation, customer support automation, help desk script, helpdesk script, ticketing system, support ticketing, knowledge base script, chat widget, embeddable chat, live chat script, multi-tenant chatbot, chatbot saas, white label chatbot, intercom alternative, crisp alternative, tidio alternative, semantic chatbot, vector search chatbot, openai chatbot script, gpt-4 chatbot, claude chatbot, self-hosted chatbot, one-time chatbot, helpnest, xgenious helpnest, helpnest license, helpnest demo, helpnest pricing, helpnest install, helpnest requirements
