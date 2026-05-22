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

declare global {
  interface Window {
    fastspring: {
      builder: {
        push: (config: object) => void;
        checkout: () => void;
        reset: () => void;
      };
    };
    onFastSpringWebhookReceived: (order: FastSpringOrder) => void;
    onFastSpringPopupClosed: (order: FastSpringOrder | null) => void;
  }
}
