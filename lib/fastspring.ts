export interface FastSpringOrder {
  id: string;
  reference: string;
  total: number;
  currency: string;
  customer: {
    first: string;
    last: string;
    email: string;
  };
  items: FastSpringOrderItem[];
}

export interface FastSpringOrderItem {
  product: string;
  quantity: number;
  total: number;
  attributes?: {
    product_uid?: string;
    license_type?: string;
    license_key?: string;
  };
}

// data-popup-closed only ever passes {id, reference} — both null if the
// checkout was abandoned. It never carries total/currency/items; that data
// only arrives via data-popup-webhook-received (FastSpringOrder below).
export interface FastSpringPopupClosedResult {
  id: string | null;
  reference: string | null;
}

export const FASTSPRING_TEST_MODE = process.env.NEXT_PUBLIC_FASTSPRING_TEST_MODE === 'true';
export const FASTSPRING_STORE = 'xgenious.onfastspring.com/popup-xgenious';
export const FASTSPRING_SCRIPT = 'https://sbl.onfastspring.com/sbl/1.0.6/fastspring-builder.min.js';

// Site-wide promo coupon, auto-applied at checkout so users never have to type
// it. Must match the code configured in the FastSpring dashboard and the one
// advertised by the PromoBanner. Set to '' to disable auto-apply.
export const PROMO_CODE = 'WELCOME_10';

export function launchCheckout(productPaths: string[], couponOverride?: string): void {
  const fs = window.fastspring;
  if (!fs?.builder) return;
  // Single atomic push with checkout:true avoids the mobile race condition
  // where builder.checkout() fires before the prior push is processed.
  // If the user entered a custom coupon via promo(), don't overwrite it.
  const coupon = couponOverride !== undefined ? couponOverride : PROMO_CODE;
  fs.builder.push({
    reset: true,
    ...(FASTSPRING_TEST_MODE ? { mode: 'test' } : {}),
    ...(coupon ? { coupon } : {}),
    products: productPaths.map((path) => ({ path, quantity: 1 })),
    checkout: true,
  });
}

declare global {
  interface Window {
    fastspring: {
      builder: {
        push: (config: {
          reset?: boolean;
          mode?: 'test' | 'live';
          coupon?: string;
          products?: { path: string; quantity: number }[];
          checkout?: boolean;
          paymentContact?: { email?: string; firstName?: string; lastName?: string };
          tags?: Record<string, string>;
        } | ((builder: object) => void)) => void;
        promo: (code: string) => void;
        checkout: () => void;
        add: (productPath: string) => void;
      };
    };
    onFastSpringWebhookReceived: (order: FastSpringOrder) => void;
    onFastSpringPopupClosed: (result: FastSpringPopupClosedResult | null) => void;
    onFastSpringError: (code: string | number | undefined, details?: unknown) => void;
  }
}
