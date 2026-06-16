const BASE = (process.env.LICENSE_SERVER_URL ?? 'https://license.xgenious.com') + '/api/public-api';

const authHeaders = {
  'X-Api-Key': process.env.LICENSE_SERVER_API_KEY!,
  'X-Secret': process.env.LICENSE_SERVER_API_SECRET!,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export async function lsFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(`${BASE}${path}`, {
    ...init,
    headers: { ...authHeaders, ...(init?.headers as Record<string, string> ?? {}) },
    cache: 'no-store',
  });
}

export interface LicenseActivation {
  domain: string;
  ip: string;
  activated_at: string;
  status: number;
}

export interface PurchaseAddon {
  license_key: string;
  purchase_code: string;
  product_uid: string;
  product_name: string;
  license_type: string;
  amount: string | null;
  currency?: string;
}

export interface PurchaseItem {
  platform: string;
  purchase_code: string;
  license_key: string;
  product_uid: string;
  product_name: string;
  client_name: string;
  client_email: string;
  license_type: string;
  variant: { id: number; name: string; uuid: string } | null;
  addons: PurchaseAddon[];
  purchased_at: string;
  supported_until: string;
  support_active: boolean;
  can_extend: boolean;
  validity: 'valid' | 'blocked';
  activations: LicenseActivation[];
  latest_version: string | null;
  version_updated_at: string | null;
  payment: {
    gateway: string | null;
    transaction_id: string | null;
    amount: string | null;
    currency: string;
    paid_at: string | null;
    status: string;
  };
}
