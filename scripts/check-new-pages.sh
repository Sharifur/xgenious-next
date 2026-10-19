#!/usr/bin/env bash
# scripts/check-new-pages.sh
# Run from repo root. Exits 1 if any static page.tsx is missing from
# sitemap.ts. Unknown single-segment URLs fall through to WordPress via a
# next.config.ts fallback rewrite that runs after App Router pages, so new
# pages no longer need a middleware allowlist.

SITEMAP="app/sitemap.ts"
ERRORS=0
MISSING=()

while IFS= read -r page_file; do
  route="${page_file#app}"
  route="${route%/page.tsx}"
  [[ -z "$route" ]] && route="/"

  # Skip dynamic routes ([slug], [...slug], etc.)
  [[ "$route" == *"["* ]] && continue

  # Skip auth/account routes — noindex, excluded from sitemap intentionally
  [[ "$route" == /my-account* ]] && continue
  [[ "$route" == /login* ]] && continue
  [[ "$route" == /register* ]] && continue
  [[ "$route" == /verify-email* ]] && continue
  [[ "$route" == /forgot-password* ]] && continue
  [[ "$route" == /reset-password* ]] && continue
  [[ "$route" == /auth-error* ]] && continue
  [[ "$route" == /checkout* ]] && continue

  # --- Sitemap check ---
  if [[ "$route" == "/" ]]; then
    grep_pattern="url: BASE_URL"
  else
    grep_pattern="\${BASE_URL}${route}"
  fi

  if ! grep -qF "$grep_pattern" "$SITEMAP"; then
    MISSING+=("SITEMAP    : $route not found in app/sitemap.ts")
    ERRORS=$((ERRORS + 1))
  fi

done < <(find app -name "page.tsx" | grep -v '/\[' | sort)

if [[ "$ERRORS" -gt 0 ]]; then
  printf '\n  PRE-PUSH BLOCKED — %d issue(s):\n\n' "$ERRORS"
  for m in "${MISSING[@]}"; do
    printf '    • %s\n' "$m"
  done
  printf '\n  See docs/ADDING-PAGES.md for the checklist.\n\n'
  exit 1
fi

page_count=$(find app -name "page.tsx" | grep -v '/\[' | wc -l | tr -d ' ')
printf '  pre-push: %s pages — sitemap OK\n' "$page_count"
exit 0
