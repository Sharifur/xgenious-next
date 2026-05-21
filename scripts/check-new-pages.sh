#!/usr/bin/env bash
# scripts/check-new-pages.sh
# Run from repo root. Exits 1 if any static page.tsx is missing from
# sitemap.ts or (for single-segment routes) from middleware.ts NEXT_ROUTES.

SITEMAP="app/sitemap.ts"
MIDDLEWARE="middleware.ts"
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

  # --- Middleware check (single-segment routes only) ---
  # Multi-segment routes (e.g. /case-studies/foo) are proxied correctly without registration.
  # Single-segment routes (e.g. /new-page) fall through to WordPress unless listed in NEXT_ROUTES.
  segment="${route#/}"
  if [[ -n "$segment" && "$segment" != *"/"* ]]; then
    if ! grep -qF "'${segment}'" "$MIDDLEWARE" && ! grep -qF "\"${segment}\"" "$MIDDLEWARE"; then
      MISSING+=("MIDDLEWARE : '${segment}' missing from NEXT_ROUTES in middleware.ts")
      ERRORS=$((ERRORS + 1))
    fi
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
printf '  pre-push: %s pages — sitemap + middleware OK\n' "$page_count"
exit 0
