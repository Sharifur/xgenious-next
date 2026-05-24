---
name: free-tool-gap
description: >
  Analyse a reference HTML page for a free tool and fill content gaps in data/free-tools.ts.
  Covers: featureList, featureCards, comparisonTable, commonErrors, FAQ additions,
  externalLinks (min 4), relatedTools (min 8), applicationCategory, lastUpdated.
  Trigger: "analyse this page", "find content gap", "fill gaps", "/free-tool-gap",
  or any request to improve a free tool's content from a reference HTML.
---

## What this skill does

1. Read the reference HTML file (path provided by user)
2. Read the current tool entry in `data/free-tools.ts`
3. Compare — identify every missing field
4. Add all missing content without changing page design or existing fields

## Fields to check and fill

| Field | Min count | Notes |
|---|---|---|
| `featureList` | 6 items | Bullet capabilities, unique from intro |
| `featureCards` | 4 cards | `{ title, desc }` — match reference card titles |
| `comparisonTable` | 3+ rows | `{ caption, headers[], rows[][] }` |
| `commonErrors` | 6 items | `{ error, code, fix }` — real-world mistakes |
| `faq` additions | 7 total | Add missing Q&As from reference |
| `externalLinks` | 4 minimum | Authoritative: IETF RFC, MDN, W3C, OWASP etc. |
| `relatedTools` | 8 slugs | Expand from 3 default to 8 |
| `applicationCategory` | required | `'WebApplication'` / `'SecurityApplication'` etc. |
| `lastUpdated` | required | `'May 2026'` |

## Process

```
1. Spawn Explore agent → extract reference HTML content (all sections, full text)
2. grep current entry from data/free-tools.ts
3. Diff → list every gap
4. Edit data/free-tools.ts — add missing fields only, never modify existing ones
5. npx tsc --noEmit
6. git add data/free-tools.ts && git commit && git push origin dev
```

## Rules

- Never modify page design or existing data
- Never remove existing FAQ entries — only append new ones
- `commonErrors` fix text must be actionable (not "check your input")
- External links must be real, authoritative URLs (IETF, MDN, OWASP, W3C, RFC)
- `relatedTools` slugs must exist in TOOLS array — use `grep -n "slug:" data/free-tools.ts` to verify

## FreeTool interface reference

```typescript
interface FreeTool {
  featureList?: string[];
  featureCards?: { title: string; desc: string }[];
  comparisonTable?: { caption: string; headers: string[]; rows: string[][] };
  commonErrors?: { error: string; code: string; fix: string }[];
  strengthTips?: { heading: string; intro: string; tips: string[] };
  applicationCategory?: string;
  lastUpdated?: string;
}
```

## Example commonErrors entry

```typescript
{ error: 'Stray whitespace', code: 'base64 copied from email', fix: 'Strip all whitespace before decoding — MIME wraps at 76 chars per line.' },
```
