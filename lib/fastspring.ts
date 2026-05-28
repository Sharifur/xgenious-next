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

export const FASTSPRING_TEST_MODE = process.env.NEXT_PUBLIC_FASTSPRING_TEST_MODE === 'true';
export const FASTSPRING_STORE = 'xgenious.onfastspring.com/popup-xgenious';
export const FASTSPRING_SCRIPT = 'https://sbl.onfastspring.com/sbl/1.0.6/fastspring-builder.min.js';

export function launchCheckout(productPaths: string[]): void {
  const fs = window.fastspring;
  if (!fs?.builder) return;
  if (FASTSPRING_TEST_MODE) {
    fs.builder.push({ mode: 'test' });
  }
  fs.builder.push({
    products: productPaths.map((path) => ({ path, quantity: 1 })),
  });
  fs.builder.checkout();
}

declare global {
  interface Window {
    fastspring: {
      builder: {
        push: (config: {
          reset?: boolean;
          mode?: 'test' | 'live';
          products?: { path: string; quantity: number }[];
          checkout?: boolean;
          paymentContact?: { email?: string; firstName?: string; lastName?: string };
          tags?: Record<string, string>;
        } | ((builder: object) => void)) => void;
        checkout: () => void;
        add: (productPath: string) => void;
      };
    };
    onFastSpringWebhookReceived: (order: FastSpringOrder) => void;
    onFastSpringPopupClosed: (order: FastSpringOrder | null) => void;
  }
}
