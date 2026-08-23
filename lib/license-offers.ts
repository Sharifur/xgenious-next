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
// it has its own dedicated renew flow (see needsSupportRenewal /
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

export function needsSupportRenewal(item: PurchaseItem): boolean {
  return !item.support_active;
}

// The FastSpring product path for extending this license's support, resolved
// from the verified catalog mapping — never guessed from product_uid (which
// is an opaque license-server identifier, not a FastSpring slug). Returns
// null when the product is unmapped or the license isn't extendable, so
// callers render a "contact us" fallback instead of a broken checkout.
export function resolveSupportRenewalPath(item: PurchaseItem): string | null {
  if (!item.can_extend) return null;
  const product = resolveCheckoutProduct(item);
  const supportAddon = product?.addons.find((a) => categorizeAddonPath(a.path) === 'support_renewal');
  return supportAddon?.path ?? null;
}

export function hasUpsellOffers(item: PurchaseItem): boolean {
  if (needsSupportRenewal(item)) return true;
  return getAvailableAddons(item).some((o) => !o.alreadyOwned);
}
