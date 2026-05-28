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

export const FASTSPRING_STORE = 'xgenious.onfastspring.com/popup-xgenious';
export const FASTSPRING_SCRIPT = 'https://sbl.onfastspring.com/sbl/1.0.6/fastspring-builder.min.js';

export function launchCheckout(productPaths: string[]): void {
  const fs = window.fastspring;
  if (!fs?.builder) return;
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
