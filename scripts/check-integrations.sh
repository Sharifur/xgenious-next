#!/usr/bin/env bash
# scripts/check-integrations.sh
# Enforces canonical integration choices. Run by pre-push and Claude Code hooks.
# Checks staged/tracked TypeScript files for banned imports.

ROOT="$(git rev-parse --show-toplevel)"
ERRORS=0
BANNED=()

# Files to scan: all staged TS/TSX files (pre-push context)
while IFS= read -r file; do
  [[ "$file" != *.ts && "$file" != *.tsx ]] && continue
  abs="$ROOT/$file"
  [[ ! -f "$abs" ]] && continue

  # ── Email: only @aws-sdk/client-ses allowed ───────────────────────────────
  if grep -qE "from ['\"]resend['\"]|from ['\"]@sendgrid|from ['\"]nodemailer|from ['\"]mailgun|createTransport" "$abs"; then
    BANNED+=("EMAIL  : $file — use lib/email.ts (AWS SES). Remove Resend/SendGrid/nodemailer.")
    ERRORS=$((ERRORS + 1))
  fi

  # ── Support tickets: only Taskip allowed ─────────────────────────────────
  if grep -qE "zendesk|freshdesk|intercom\.com/api" "$abs"; then
    BANNED+=("TICKETS: $file — use Taskip CRM (public-api.taskip.net). See docs/integrations.md.")
    ERRORS=$((ERRORS + 1))
  fi

  # ── Auth: only next-auth allowed ─────────────────────────────────────────
  if grep -qE "from ['\"]@clerk|from ['\"]@auth0|from ['\"]supabase.*auth" "$abs"; then
    BANNED+=("AUTH   : $file — use Auth.js v5 (next-auth). See auth.ts.")
    ERRORS=$((ERRORS + 1))
  fi

  # ── Direct SESClient outside lib/email.ts ────────────────────────────────
  if [[ "$file" != "lib/email.ts" ]]; then
    if grep -qE "new SESClient|SendEmailCommand" "$abs"; then
      BANNED+=("EMAIL  : $file — import sendEmail from lib/email.ts instead of using SESClient directly.")
      ERRORS=$((ERRORS + 1))
    fi
  fi

done < <(git diff --cached --name-only HEAD 2>/dev/null || git diff HEAD~1 --name-only 2>/dev/null || git ls-files)

if [[ "$ERRORS" -gt 0 ]]; then
  printf '\n  INTEGRATION GUARD — %d violation(s):\n\n' "$ERRORS"
  for b in "${BANNED[@]}"; do
    printf '    • %s\n' "$b"
  done
  printf '\n  Reference: docs/integrations.md\n\n'
  exit 1
fi

exit 0
