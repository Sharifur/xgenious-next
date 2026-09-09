# Envato Account Connection — Post-Deploy Verification Runbook

Manual test plan for the Envato OAuth connect + purchase-import feature. Run once after
deploying, before/alongside a gradual rollout. The OAuth round-trip, eligibility rules, and
cross-account ownership gate can't be meaningfully exercised before real Envato credentials
and a real Envato account exist, so this has to happen live.

A polished, checkable version of this doc is also published as a Claude Artifact for the
person running the deploy to follow step by step; this file is the durable, version-controlled
copy of the same content.

## 0. Pre-flight checklist

- [ ] Envato OAuth app registered on Envato's side; redirect URI set to exactly
      `https://license.xgenious.com/oauth/envato/callback`
- [ ] `ENVATO_OAUTH_CLIENT_ID`, `ENVATO_OAUTH_CLIENT_SECRET`, `ENVATO_OAUTH_REDIRECT_URI` set in
      License Server's production env
- [ ] `XGENIOUS_NEXT_APP_URL` set to the real prod host (e.g. `https://xgenious.com`) on License Server
- [ ] `ENVATO_ASSERTION_SECRET` set and **identical** on both apps — the most common
      misconfiguration; a mismatch fails silently as `ASSERTION_INVALID` on every request
- [ ] 5 new migrations applied on License Server: `envato_customer_connections`,
      `envato_oauth_states`, `envato_purchase_imports`, `product_licenses.xgenious_user_id`,
      `envato_accounts.access_token → text`
- [ ] Ran `php artisan envato:encrypt-author-tokens` once, then confirmed the deploy shipped the
      `encrypted` cast on `EnvatoAccount`
- [ ] Rotated the two Envato personal tokens previously hard-coded in `EnvatoApi.php` — new
      values in `ENVATO_XGENIOUS_PERSONAL_TOKEN` / `ENVATO_BYTESED_PERSONAL_TOKEN`
- [ ] `php artisan test --filter=Envato` green in CI/staging (never against a prod-pointed checkout)
- [ ] The `ApiApplication`/`APIKey` credential xgenious-next authenticates with can reach
      `/api/public-api/envato/*` — confirmed with a raw request (see Queries below), since scope
      enforcement only applies to the `X-Signature` auth path, not the API-key path Next uses
- [ ] At least one real `Product` row has `envato_id`, `sale_channel IN ('envato','both')`,
      `status = 1`, and an `account_type` matching an active `envato_accounts.username`
- [ ] You have (or can get) a real Envato buyer account with a purchase of that product

> **Adapter shape not yet confirmed.** `EnvatoBuyerOAuthClient` was built against Envato's
> documented OAuth contract but two endpoints are marked `CONFIRM` in source (profile lookup,
> purchase list) — same for the field mapping in `ProcessEnvatoPurchaseImport::normalizeItem()`.
> Phase 1 and Phase 4 below are exactly where a shape mismatch surfaces. If Phase 1 fails at the
> profile-lookup step, or Phase 4 shows every purchase as `unmapped_item`/`non_xgenious_author`
> for a known-good purchase, check these two spots before assuming a config error.

## 1. Connect — happy path

1. Sign in as a test account, visit `/my-account/envato`, click **Connect Envato account**.
   **Expect:** redirect to `api.envato.com/authorization?...` with the real client_id.
2. Approve access on Envato. **Expect:** bounced through `/oauth/envato/callback`, then to
   `/my-account/envato?connection=<uuid>&result=pending` — URL never shows a token, code, or
   username, only the opaque `connection` id and coarse `result`.
3. Watch it settle. **Expect:** "Syncing eligible Xgenious purchases…" then a connected card —
   `Connected as {username}`, last-synced time, eligible product count. If still spinning after
   30s, a "still running — Check status" link appears (expected for a large library, not for a
   fresh single-purchase test account).

## 2. Connect — denied & expired-link paths

- Deny on Envato's consent screen. **Expect:** `result=denied`, friendly message, Connect
  button reappears immediately — no stuck spinner.
- Replay an old callback URL. **Expect:** `result=state_invalid` — no 500, no silent success.

## 3. Abandoned flow self-heals

Start Connect, close the tab before approving or denying (no callback ever fires). Reopen
`/my-account/envato`. **Expect:** not stuck mid-spinner. The row sits at `pending` in the DB but
is presented as `failed`/`CONNECTION_TIMED_OUT` once 15+ minutes stale — see Queries below for a
one-line check that doesn't require waiting, or just click Connect again (always resets the row).

## 4. Sync — eligibility decisions

Every imported purchase lands in `envato_purchase_imports.decision`. Use the admin diagnostic
view at `/dashboard/envato-connections` to see per-connection decision counts.

| Scenario | Setup | Expected decision |
|---|---|---|
| Real eligible purchase | product has `sale_channel∈{envato,both}`, `status=1`, author matches `envato_accounts` | **imported** — new `product_licenses` row, `platform=envato` |
| Purchase from unrelated author | item authored outside `envato_accounts` | **non_xgenious_author** |
| Item with no local Product | temporarily unmap a `Product.envato_id` | **unmapped_item** |
| Mapped but disabled product | `Product.status=0` on the matched product | **disabled_product** |
| Two products share one `envato_id` | duplicate `envato_id` across two Products (undo after) | **duplicate_item_mapping** — logged, no license created, no guess made |

Only the `imported` row ever produces a `product_licenses` entry.

## 5. Idempotent re-sync

Click **Sync now** again on an already-imported account. **Expect:** eligible count unchanged,
`envato_purchase_imports` and `product_licenses` row counts unchanged, decision flips to
`already_imported` on the existing rows.

## 6. Fresh install download

On `/my-account/downloads`, click Fresh Install on the imported Envato-platform license.
**Expect:** a real ZIP if a file is uploaded for the matched product; otherwise an inline "No
fresh install file has been uploaded…" message, not a silent failure.

## 7. Update file generation

Same license, click "Update File". **Expect:** a signed, time-limited URL, same as a
direct-platform license.

## 8. Domain management

If wired to a licenses/domain UI, activate/deactivate a test domain. **Expect:** works
identically to a direct-platform license — confirms the ownership gate didn't just block
everything.

## 9. Cross-account rejection (the one that matters most)

Requires a second test account.

1. Note Account A's imported Envato `license_key` (Purchases page).
2. Sign in as Account B (must not own that license).
3. With B's session cookie:

```bash
curl -s -b "$COOKIE" \
  "https://xgenious.com/api/license-server/downloads/fresh-install?license_key=<A_KEY>&product_uid=<A_PRODUCT_UID>"

curl -s -b "$COOKIE" -X POST \
  -H "Content-Type: application/json" \
  -d '{"product_uid":"<A_PRODUCT_UID>","license_key":"<A_KEY>"}' \
  https://xgenious.com/api/license-server/updates/generate
```

**Expect:** both return a 4xx with generic `LICENSE_NOT_FOUND` — never a file, never a download
URL, and the error never reveals the license exists but belongs to someone else. Also confirm
B's own `/my-account/purchases` and `/my-account/downloads` never list A's license.

## 10. Disconnect & reconnect

- Disconnect the connected test account. **Expect:** card returns to "not connected"; the
  already-imported `product_licenses` row is still there and still downloadable — disconnect
  only revokes future Envato API access, per policy.
- Reconnect the same Envato account. **Expect:** re-syncs normally, reports the existing
  purchase as `already_imported` rather than duplicating the license.

## 11. Sync rate limit

Click "Sync now" twice quickly. **Expect:** second attempt is blocked (UI disables it, or a
direct API call returns `429 RATE_LIMITED`) — enforced *after* the signed assertion is verified,
so it survives a spoofed request too.

## Useful SQL & log queries

Read-only. Run against a replica/staging copy where possible.

```sql
-- Every connection and its current raw status (not the self-healed/presented one)
SELECT id, xgenious_user_id, envato_username, status, last_sync_error_code,
       last_sync_succeeded_at, updated_at
FROM envato_customer_connections
ORDER BY id DESC LIMIT 20;

-- Decision breakdown for one connection (mirrors the admin diagnostic view)
SELECT decision, COUNT(*) FROM envato_purchase_imports
WHERE connection_id = ? GROUP BY decision;

-- Confirm Envato-imported licenses landed with the right owner + platform
SELECT license_key, platform, xgenious_user_id, email, client, added_on
FROM product_licenses
WHERE platform = 'envato' ORDER BY id DESC LIMIT 20;

-- Prove the staleness self-heal (Phase 3) without waiting 15 minutes
UPDATE envato_customer_connections
SET updated_at = NOW() - INTERVAL 20 MINUTE
WHERE id = ? AND status = 'pending';
-- then GET /api/license-server/envato/status as that user — should read 'failed'
```

```bash
# Confirm Next's credential can actually reach the new scoped routes
curl -s -X POST https://license.xgenious.com/api/public-api/envato/connections/authorize \
  -H "X-Api-Key: $LICENSE_SERVER_API_KEY" -H "X-Secret: $LICENSE_SERVER_API_SECRET" \
  -H "Content-Type: application/json" -d '{"assertion":{},"signature":""}'
# Expect 401 ASSERTION_INVALID (proves the channel/API-key auth passed and the
# request reached the assertion verifier) — not 403 SCOPE_NOT_GRANTED and not
# a network-level failure.
```

## Known limitations (flagged, intentionally not fixed here)

- **API-key auth path has no scope enforcement.** `VerifyPublicApiAuth::handleApiKey()` — the
  path xgenious-next actually authenticates through — never checks granted scopes; only the
  separate `X-Signature`/`ApiApplication` path does. The new `envato.*` scopes exist for
  documentation and any future signature-based caller; the real per-customer authorization is
  the signed identity assertion, not the scope grant. Fixing the API-key scope gap is a larger,
  separately-reviewable change touching every existing public-api integration.
- **Secret comparison uses `!==`, not `hash_equals()`.** Same file, pre-existing, unrelated to
  this feature — a timing-attack surface on the API-key secret check. Flagged, not bundled in.
- **Malformed purchase records with no stable identity accumulate one ledger row per sync.** A
  purchase item missing both `item_id` and `purchase_code` can't be deduped across runs. Only
  matters if the live Envato shape omits these fields, which Phase 1/4 will surface immediately.

## Rollback

- Hide the entry point: remove/feature-flag the "Envato Account" sidebar link and redirect
  `/my-account/envato` — no data loss, connections and imported licenses are untouched.
- To fully stop new connections without a code change: revoke the Envato OAuth app's redirect
  URI on Envato's side, or unset `ENVATO_OAUTH_CLIENT_ID` — `authorize()` degrades to a clean
  failure; existing connections/downloads are unaffected.
- Do not drop the new migrations after real data exists in them — `product_licenses.xgenious_user_id`
  is additive/nullable and safe to leave regardless.
