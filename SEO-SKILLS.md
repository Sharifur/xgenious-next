# SEO Skills — Always-On Checklist for Every New Page

Sourced from: coreyhaines31/marketingskills (seo-audit + ai-seo skills)

---

## 1. Crawlability & Indexation (check first)

- Canonical tag: `alternates: { canonical: '${BASE_URL}/path' }` in metadata
- Page added to `app/sitemap.ts` with correct `priority` and `changeFrequency`
- No `noindex` or `nofollow` on content pages
- AI bots allowed in `app/robots.ts` (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, anthropic-ai, CCBot) — already configured

---

## 2. Metadata Template

```typescript
export const metadata: Metadata = {
  title: '[Primary Keyword] — [Secondary Context] | Xgenious',        // 50–60 chars
  description: '[40-word description with primary + secondary keyword. States benefit. No fluff.]',  // 120–155 chars
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/[path]` },
  openGraph: {
    title: '[Same or slight variation]',
    description: '[Same or slight variation]',
    url: `${BASE_URL}/[path]`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/og-image.png'],
  },
  keywords: ['primary keyword', 'secondary keyword', '...'],  // 5–8 terms
};
```

---

## 3. JSON-LD Schemas

### SoftwareApplication (for tool/software pages)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tool Name",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "...",
  "url": "https://xgenious.com/free-tools/slug",
  "author": { "@type": "Organization", "name": "Xgenious", "url": "https://xgenious.com" }
}
```

### FAQPage (include on every content page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Q?", "acceptedAnswer": { "@type": "Answer", "text": "A." } }
  ]
}
```

Minimum 5 Q&As. Answers: 40–80 words each (AI snippet-ready).

---

## 4. On-Page Structure (required sections in order)

1. **H1** — contains exact primary keyword. One per page.
2. **Definition block** — 40–60 word paragraph answering "what is [topic]?" directly. AI systems extract this for citations.
3. **The tool / content** — the actual value (calculator, feature list, etc.)
4. **How to use** — 3 numbered steps, plain language
5. **Comparison table or structured list** — AI systems prefer tables; they increase citation probability
6. **FAQ** — minimum 5 Q&As, answers 40–80 words
7. **Internal links** — 2–3 to related tools/pages
8. **External links** — 1–2 to authoritative sources (MDN, SHRM, HubSpot, UNESCO, etc.)
9. **Soft CTA** — link to relevant service or free software, NOT a hard-sell modal

---

## 5. Content Quality Rules (AI SEO)

- **Write for humans first; structure for extractability**
- Include a statistic or data point where relevant ("+37% citation probability")
- No keyword stuffing — natural language only
- Every answer block: subject → predicate → concrete detail. No hedging.
- Fresh dates: add `lastModified` in sitemap
- Do NOT gate authoritative content behind email/signup
- Use `<strong>` for key terms on first mention (helps AI parsers)

---

## 6. Authority Signals

- Cite authoritative external sources (links to MDN, SHRM, BLS, HubSpot, etc.)
- Link internally to related pages to pass PageRank
- Author credibility: Xgenious byline on blog posts
- E-E-A-T: show experience (case studies, free software), expertise (technical depth), authority (external links), trust (MIT license, no spam)

---

## 7. Technical Checklist

- [ ] Canonical URL
- [ ] metaTitle 50–60 chars
- [ ] metaDescription 120–155 chars
- [ ] OG + Twitter meta
- [ ] SoftwareApplication or Article JSON-LD
- [ ] FAQPage JSON-LD (5+ Q&As)
- [ ] H1 with primary keyword
- [ ] 40–60 word definition block
- [ ] Comparison/structured table
- [ ] 3-step how-to
- [ ] 2–3 internal links
- [ ] 1–2 external authority links
- [ ] No gated content
- [ ] Added to sitemap.ts
- [ ] AI bots allowed (robots.ts — already done)

---

## 8. Priority Keyword Patterns for Free Tools

| Tool type | Target keyword pattern |
|-----------|----------------------|
| Calculator | "[thing] calculator free", "[thing] calculator online" |
| Generator | "free [thing] generator", "[thing] generator online" |
| Formatter | "[thing] formatter online free", "format [thing] online" |
| Checker | "[thing] checker free", "check [thing] online" |
| Tester | "[thing] tester online", "test [thing] online free" |
| Estimator | "[thing] cost estimator", "how much does [thing] cost" |
