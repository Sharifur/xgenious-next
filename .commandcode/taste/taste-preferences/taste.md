# Taste Preferences
- Communicates in brief, directive instructions with specific objectives — expects the assistant to research context, explore the codebase, and figure out details independently rather than asking for background. Confidence: 0.8
- States desired outcomes (e.g., "find proper keyword, competitor gap, content gap") and specific feature requirements (e.g., "mention about user now can open support ticket and reply without login") without elaborating on implementation. Confidence: 0.8
- Works on SEO-driven content pages — routinely expects keyword research, competitor gap analysis, and content gap analysis before implementing page changes. Confidence: 0.9
- Positions products as free open-source alternatives to commercial tools (Zendesk, Freshdesk, etc.) — emphasizes MIT license, self-hosted, and no per-agent fees as key differentiators. Confidence: 0.7
- Expects comprehensive JSON-LD structured data covering all relevant business entity types — not just the product (SoftwareApplication, AggregateRating) but also services (Service schema for installation/custom setup), Organization, BreadcrumbList, HowTo, and FAQPage. Proactively audits schema coverage and asks whether specific entity types are included. Confidence: 0.8
- Values competitor comparison tables (open-source vs open-source, not just vs SaaS) and "X alternative" keyword positioning on landing pages. Confidence: 0.7
- Expects a written plan before implementation — plan-then-implement workflow with todo tracking. Confidence: 0.7
- Verification after changes: TypeScript type checking (`tsc --noEmit`) and dev server rendering checks (curl + grep for key content) are expected as part of the workflow. Confidence: 0.6
- Next.js App Router project with per-page `_components/` subdirectories; shared data lives in `constants.ts` files (modules, FAQs, colors, server requirements). Confidence: 0.8
