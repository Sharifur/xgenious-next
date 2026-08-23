import { PRODUCTS, getCheckoutProduct, type CheckoutProduct } from './checkout-products';
import type { PurchaseItem } from './license-server';

// license-server `product_uid` -> base checkout-products.ts slug prefix
// (e.g. 'nazmart' for 'nazmart-bundle-pack'/'nazmart-exclusive-pack').
//
// product_uid is a stable per-product-listing hash shown on the license
// server's own admin "Products" page (labeled there as an "xgenious:" or
// "byteseed:" hash) — it does NOT vary by sale channel. Confirmed exactly for
// 'nazmart' (direct FastSpring purchase) and 'nexelit' (Envato purchase): both
// purchases' product_uid matched their admin panel row's hash byte-for-byte.
//
// Per user confirmation (2026-08-23): only the admin panel's "Both Platforms"
// row is used to issue real licenses for a product — differently-named
// duplicate rows (e.g. "Nazmart Bundle Pack" vs the "Both Platforms" plain
// "Nazmart" row) and "Envato Only" rows are excluded here on purpose, since
// they don't correspond to what real purchases actually report.
//
// The rest of this table was transcribed from a screenshot of that admin
// list (not queried live — no API endpoint exposes it) and should be
// spot-checked against a real purchase before being trusted for a live
// checkout. A wrong/missing entry only fails to resolve (safe fallback to
// "contact us" — see resolveCheckoutProduct) — it can never point at the
// wrong product, since a typo'd hash just won't match anything.
const PRODUCT_SLUG_BY_UID: Record<string, string> = {
  '5debb671064213be9c0db593d094da0df3c4e2dd': 'nazmart',   // verified
  '572f47b448287533475b9ea0b17d3fd1e1909310': 'nexelit',   // verified
  'b52e9ee4d4dad2e2c4ef906af4f19c7e8a06050e': 'botmerze',
  '02f055341e6b01ce1a41ca6b81cae707ef74be8e': 'helpnest',
  'a98d267489bb3d09b7bead361bd700583db2ec9c': 'infustar',  // "Influstar" on the product page, 'infustar-' in checkout-products.ts (naming mismatch predates this file)
  '2e3f7542d3ff7a74fe6e450af5057b69ef61b5e4': 'gocar',
  'e7597ad6389415f4d2c0dbb177a06bf88006ec4d': 'xilancer',
  'b6514953de33e8335a94f6cc4661473f557f1f41': 'prohandy',
  '9cabd95c36f0aad9a8a88cd53b751af99d3e0a28': 'listocean',
  'bd972f30bc7af2f42f667e2682db42207f62d81f': 'xilancer',
  '13e95105b4657dc36da6284ceb3f36b8bd2ff66b': 'zaika',
  'ee325e5979048218540bcfb00944c0b1fe513e36': 'safecart', // hash partly obscured in the screenshot — low confidence, verify
  '2f4f7829a3bdcd3899dfc24ff09d738f26236c53': 'multisaas',
  '96944526b73bc278cbf76856ebf1cd01e0365214': 'qixer',
  '83cce34da32567ed3cd205a8c0e8d08e4b628d3a': 'greenmart',
  '8de1f072836b127749b7aa2b575ffc0002ade20e': 'fundorex',  // hash was at the screenshot's edge — low confidence, verify
};

// A checkout product is a candidate BASE-TIER match only if it isn't itself
// a standalone addon-styled entry (e.g. 'listocean-support-6m',
// 'listocean-install-web' exist as their OWN top-level PRODUCTS keys, in
// addition to being nested inside a bundle's addons[] — those must never be
// offered as if they were a purchasable "tier").
const ADDON_STYLED_PATH = /-(support-\d+m|install-web(-and)?(-mobile)?|install|appstore-(google|apple))$/;

function tierKeywords(text: string): Set<string> {
  const words = new Set(text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(' '));
  const buckets = new Set<string>();
  if (words.has('exclusive')) buckets.add('exclusive');
  if (words.has('extended')) buckets.add('extended');
  if (words.has('bundle') || words.has('everything')) buckets.add('bundle');
  if (words.has('installation') || words.has('install')) buckets.add('with_install');
  if (words.has('regular')) buckets.add('regular');
  return buckets;
}

function sameBuckets(a: Set<string>, b: Set<string>): boolean {
  return a.size === b.size && [...a].every((x) => b.has(x));
}

// Explicit tier overrides for `${slug}::${tierLabel}` combinations the
// automatic keyword matcher can't cleanly resolve, but the business has
// confirmed the mapping anyway (checked before automatic matching below).
const TIER_OVERRIDES: Record<string, string> = {
  // Envato "Regular License" buyers of Nexelit are treated as the bundled
  // regular+installation FastSpring tier for renewal/add-on purposes, even
  // though they never got the install service from Envato — confirmed
  // 2026-08-24, the business is OK offering install/support at that tier's
  // pricing rather than showing nothing.
  'nexelit::Regular License': 'nexelit-regular-and-installation',
};

// Resolves a purchased license to its lib/checkout-products.ts catalog entry,
// used to know which addons/renewal path apply. Two steps: (1) product_uid ->
// base slug (exact, see PRODUCT_SLUG_BY_UID), then (2) among that slug's base
// tiers, find the one whose name/path keywords exactly match the purchase's
// variant name (direct sale) or license_type (Envato's own tier naming) —
// e.g. "Everything Bundle Pack" -> {bundle}, "Regular License" -> {regular}.
// Returns null — never a guess — when the product is unmapped, the tier
// label has no recognized keywords, or more/fewer than one tier matches
// (e.g. Nexelit's Envato "Regular License" has no bare-regular FastSpring
// tier — only "Regular License + Installation" — so it correctly resolves
// to nothing rather than implying they already paid for installation).
export function resolveCheckoutProduct(item: PurchaseItem): CheckoutProduct | null {
  const slug = PRODUCT_SLUG_BY_UID[item.product_uid];
  if (!slug) return null;

  const tierLabel = item.variant?.name ?? item.license_type;

  const override = TIER_OVERRIDES[`${slug}::${tierLabel}`];
  if (override) return getCheckoutProduct(override);

  const tierBuckets = tierKeywords(tierLabel);
  if (tierBuckets.size === 0) return null;

  const candidates = Object.values(PRODUCTS).filter(
    (p) => p.path.startsWith(`${slug}-`) && !ADDON_STYLED_PATH.test(p.path)
  );
  const matches = candidates.filter((c) => sameBuckets(tierKeywords(`${c.name} ${c.path}`), tierBuckets));

  return matches.length === 1 ? matches[0] : null;
}
