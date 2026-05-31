# AI-SEO Skill (AEO — Answer Engine Optimization)

Optimize pages to be cited by AI systems: Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude.

## Key Stats
- 45% of Google searches now show AI Overviews
- 58% click reduction when AI Overview appears
- +37% citation boost for pages with statistics
- +40% citation boost for third-party mentions
- +30% boost for direct quotations
- Comparison pages cited 33% of the time (highest of any content type)

## Three-Pillar Strategy

### Pillar 1 — Structure (extractable content)
Every page needs these AI-extractable blocks:
- **Definition block**: 40–60 word answer to "what is [topic]?" — first paragraph
- **Step-by-step**: numbered how-to (3–5 steps), plain language
- **Comparison table**: vs. competitors, structured HTML table
- **Pros/cons list**: honest, not puff
- **FAQ**: min 5 Q&As, 40–80 words each — full sentences, no hedging
- **Statistics**: include at least one data point with source

### Pillar 2 — Authority (citable content)
- Cite authoritative external sources (Wikipedia, MDN, industry reports)
- Include original data or aggregated stats
- Use `<strong>` on first mention of key terms
- Author/organization credibility signals
- E-E-A-T: experience (demos, case studies), expertise (technical depth), authority (external links), trust (pricing transparency, no spam)

### Pillar 3 — Presence (where AI looks)
- Third-party review sites (Capterra, G2, Trustpilot, CodeCanyon)
- Reddit/Quora mentions for the product
- YouTube tutorials/demos
- Wikipedia page or mention
- Directory listings

## Machine-Readable Files
- `public/llms.txt` — plain text product summary for AI agents
- `public/pricing.md` — machine-readable pricing for autonomous buyers

## Schema for AI
- `FAQPage` — highest citation value
- `HowTo` — step-by-step extraction
- `Product` + `AggregateRating` — purchase intent queries
- `SoftwareApplication` — software-specific queries
- `Review` array — social proof extraction

## Content Types That Get Cited Most
| Type | Citation Rate |
|---|---|
| Comparisons (X vs Y) | 33% |
| Guides / how-to | 15% |
| Original research | 12% |
| Listicles | 10% |

## Do NOT
- Block AI crawlers (GPTBot, ClaudeBot, PerplexityBot, anthropic-ai)
- Gate authoritative content behind signup
- Use JS-only rendering for key content
- Keyword-stuff — AI detects unnatural density
- Hide pricing
- Skip schema markup

## When to Use
`/ai-seo` — optimize any page for AI citation and answer engine visibility.
