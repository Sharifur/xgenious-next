# Figma → Next.js Sprint

**Source:** Update version 2025 (Figma file: 7qdq0RVgufFyzFVKtR5ZD0)
**Branch:** dev
**Started:** 2026-05-07

---

## Pages In Scope

| # | Page | Figma Node | Status |
|---|------|-----------|--------|
| 1 | Home / Xgenious | `4959:2675` | 🔲 not started |
| 2 | About Us | `5977:20007` | ✅ done |
| 3 | Services — Web App Development | `5836:27691` | ✅ done |
| 4 | Services — Mobile App Dev | `5924:16888` | 🔲 not started |
| 5 | Services — SaaS Development | `6050:18853` | 🔲 not started |
| 6 | Services — Webflow Design & Dev | `4959:7074` | 🔲 not started |

> Note: No generic "Services overview" page found in Figma. Confirmed 4 service-specific pages above. Clarify with client if an overview page is needed.

---

## Tickets

### TICKET-01 — Home Page
- **Figma node:** `4959:2675`
- **File:** `app/page.tsx` + `components/sections/` (existing)
- **Status:** 🔲 not started
- **Sections to build:** (to be listed after design context fetch)
- **Notes:**

### TICKET-02 — About Us Page
- **Figma node:** `5977:20007` (inside section `5977:17575`)
- **File:** `app/about/page.tsx`
- **Status:** ✅ done
- **Sections built:**
  - Hero (peach gradient `#f5f6ea → #f3dacd`, 72px H1, Annual Tour team photo)
  - Innovation Motto (centered 36px paragraph)
  - Trusted By (bordered logo cells, 2 rows)
  - Stats / About (badge, H2, 2 paragraphs, 4 stat cards on `#f5f6f8`)
  - Culture Gallery (H2 + 4-column staggered gray placeholders)
  - Founder's Vision (photo left, quote right, on `#f5f6f8`)
  - Brain Behind Xgenious (4 team member cards)
  - Career (gray placeholder image left, text + split button right, on `#f5f6f8`)
  - CTA (dark `#191b1c`, radial glow, centered text + coral button)
- **Notes:** Figma image URLs expire 2026-05-14 — replace with permanent CDN paths

### TICKET-03 — Web App Development Service Page
- **Figma node:** `5836:27691`
- **File:** `app/services/web-app-development/page.tsx`
- **Status:** ✅ done
- **Sections built:**
  - Hero (dark `#0f1112`, "Custom Website Development That Delivers", coral + outline CTAs)
  - TrustedBy (shared component)
  - What We Build (6 cards: B2B portals, internal tools, enterprise platforms, PWAs, legacy migration, integrations)
  - Pricing (3 tiers: Starter $15k/8w, Pro $25k/12w, Launch $45k/16w — check icons from Figma)
  - Trust & Compliance (9 compliance cards: GDPR, HIPAA, SOC 2, ISO 27001, PCI DSS, UAE DIFC, KSA PDPL, CCPA, EU Data Residency)
  - Work Showcase (4 projects 2×2: Xilancer, Fundorex, Prohandy, Nexelit — real Figma screenshot URLs)
  - FAQ (7-item accordion, `use client`, interactive expand/collapse)
  - CTA (dark `#191b1c`, radial glow, coral button)
- **Notes:** Hero dev visual is a placeholder `bg` div — replace with real asset once CDN URL is confirmed. Earth bg images in CTA are decorative and low-opacity.

### TICKET-04 — Mobile App Development Service Page
- **Figma node:** `4959:6003`
- **File:** `app/services/mobile-app-development/page.tsx`
- **Status:** 🔲 not started
- **Notes:**

### TICKET-05 — SaaS Development Service Page
- **Figma node:** `4959:6574`
- **File:** `app/services/saas-development/page.tsx`
- **Status:** 🔲 not started
- **Notes:**

### TICKET-06 — Webflow Design & Development Service Page
- **Figma node:** `4959:7074`
- **File:** `app/services/webflow-design-development/page.tsx`
- **Status:** 🔲 not started
- **Notes:**

---

## Status Legend
- 🔲 not started
- 🔄 in progress
- ✅ done
- ⚠️ blocked

---

## Change Log

| Date | Ticket | What changed |
|------|--------|-------------|
| 2026-05-07 | — | Sprint file created, Figma nodes mapped |
| 2026-05-07 | TICKET-02 | About Us rebuilt from correct Figma node `5977:20007` (old build used wrong node `5120:4845`) |
| 2026-05-07 | TICKET-03 | Web App Dev page built from Figma node `5836:27691`; corrected node from old `4959:5419`; 7 components in `_components/` |
