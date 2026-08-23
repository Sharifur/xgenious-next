import type { PurchaseItem } from './license-server';
import type { CheckoutAddon } from './checkout-products';
import { resolveCheckoutProduct } from './license-product-map';

export interface LicenseOffer {
  addon: CheckoutAddon;
  alreadyOwned: boolean;
}

export type LicenseUpsellCategory = 'support_renewal' | 'addon_install' | 'addon_appstore' | 'addon_mobile';

export function categorizeAddonPath(path: string): LicenseUpsellCategory {
  if (path.includes('support')) return 'support_renewal';
  if (path.includes('appstore')) return 'addon_appstore';
  if (path.includes('mobile')) return 'addon_mobile';
  return 'addon_install';
}

// Non-support addons (install/mobile/appstore) available for a purchased
// license, cross-referenced against what's already owned (item.addons) and
// mutually-exclusive addons (disables). Support extension is excluded here —
// it has its own dedicated renew flow (see canRenewSupport /
// resolveSupportRenewalPath) rather than living in the generic addon list.
// Returns [] when the license's product can't be resolved (see
// resolveCheckoutProduct) — never guesses at an unmapped product's addons.
export function getAvailableAddons(item: PurchaseItem): LicenseOffer[] {
  const product = resolveCheckoutProduct(item);
  if (!product) return [];

  const ownedPaths = new Set(item.addons.map((a) => a.product_uid));

  return product.addons
    .filter((a) => categorizeAddonPath(a.path) !== 'support_renewal')
    .filter((a) => !a.disables?.some((d) => ownedPaths.has(d)))
    .map((a) => ({ addon: a, alreadyOwned: ownedPaths.has(a.path) }));
}

// Whether the "Renew Support" action should be offered at all — gated on the
// license server's own can_extend flag, not on whether support has already
// lapsed, so extension is offered proactively (not just after expiry).
// Envato-sourced licenses always offer it regardless of can_extend: that
// flag reflects the license server's own extension bookkeeping, which isn't
// reliably maintained for Envato purchases, and Envato buyers should always
// be able to attempt a direct renewal from us.
export function canRenewSupport(item: PurchaseItem): boolean {
  return item.can_extend || item.platform === 'envato';
}

// The FastSpring product path for extending this license's support, resolved
// from the verified catalog mapping — never guessed from product_uid (which
// is an opaque license-server identifier, not a FastSpring slug). Returns
// null when the product is unmapped or (for non-Envato licenses) not
// extendable, so callers render a "contact us" fallback instead of a broken
// checkout.
export function resolveSupportRenewalPath(item: PurchaseItem): string | null {
  if (!canRenewSupport(item)) return null;
  const product = resolveCheckoutProduct(item);
  const supportAddon = product?.addons.find((a) => categorizeAddonPath(a.path) === 'support_renewal');
  return supportAddon?.path ?? null;
}

// Button label — "Renew" once support has lapsed, "Extend" while it's still
// active but renewable ahead of expiry.
export function supportRenewalLabel(item: PurchaseItem): string {
  return item.support_active ? 'Extend Support' : 'Renew Support';
}

export function hasUpsellOffers(item: PurchaseItem): boolean {
  if (canRenewSupport(item)) return true;
  return getAvailableAddons(item).some((o) => !o.alreadyOwned);
}
