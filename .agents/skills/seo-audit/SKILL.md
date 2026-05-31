# SEO Audit Skill

Diagnose and fix technical + on-page SEO issues for any page in xgenious-next.

## Audit Checklist

### Crawlability & Indexation
- [ ] Canonical tag set correctly in metadata
- [ ] Page in `app/sitemap.ts` with correct priority + changeFrequency
- [ ] No `noindex` on content pages
- [ ] AI bots allowed in `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, CCBot)

### Metadata (50–60 char title, 120–155 char description)
- [ ] Title contains primary keyword near the front
- [ ] Description answers "what is this + why buy/use it" in plain language
- [ ] OG title + description set
- [ ] Twitter card set
- [ ] `metadataBase` + `alternates.canonical` present

### On-Page Structure (in order)
1. H1 with exact primary keyword — one per page
2. Definition block (40–60 words answering "what is [topic]?")
3. The product/tool/content
4. How-to section (3 numbered steps)
5. Comparison table or structured feature list
6. FAQ (min 5 Q&As, 40–80 word answers)
7. Internal links (2–3 to related pages)
8. External authority links (1–2 to MDN, Wikipedia, etc.)
9. Soft CTA — not hard-sell modal

### Schema (JSON-LD)
- SoftwareApplication for product pages
- FAQPage (min 5 Q&As)
- AggregateRating if reviews exist
- Review array

### Content Quality
- Primary keyword in: H1, first 100 words, at least one H2, meta title, meta description
- Keyword density: natural, not stuffed
- LSI/related terms used throughout
- Statistic or data point included (boosts AI citation +37%)
- No gated authoritative content

## Output Format
For each finding: `[CRITICAL | HIGH | MEDIUM | LOW]` — issue — fix.

## When to Use
`/seo-audit` — audit any page, pass the page path and target keyword.
