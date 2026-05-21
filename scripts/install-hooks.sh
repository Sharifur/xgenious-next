#!/usr/bin/env bash
# Run once after cloning to install git hooks.
# Usage: bash scripts/install-hooks.sh

REPO_ROOT="$(git rev-parse --show-toplevel)"
HOOK="$REPO_ROOT/.git/hooks/pre-push"

cat > "$HOOK" <<'HOOK'
#!/usr/bin/env bash
cd "$(git rev-parse --show-toplevel)" || exit 1
bash scripts/check-new-pages.sh
HOOK

chmod +x "$HOOK"
echo "Installed: .git/hooks/pre-push"
