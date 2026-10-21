import { getCheckoutProduct } from '@/lib/checkout-products';
import { PRODUCTS, money, type Campaign } from './data';

// The coupon only applies to bundle / exclusive packs, so each product is priced from the
// bundle pack it checks out with. Kept out of data.ts: that file is imported by client components.
export const pricedProducts = ({ pct }: Campaign) =>
  PRODUCTS.flatMap((p) => {
    const pack = getCheckoutProduct(p.checkout);
    if (!pack) return [];
    return [{ ...p, oldLabel: money(pack.price), newLabel: money(pack.price * (1 - pct / 100)), saveLabel: money((pack.price * pct) / 100) }];
  });
