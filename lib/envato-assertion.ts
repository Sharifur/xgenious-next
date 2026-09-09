import { randomBytes, createHmac } from 'crypto';

export interface EnvatoAssertion {
  xgenious_user_id: string;
  email: string;
  display_name: string;
  return_path: string;
  timestamp: string;
  nonce: string;
}

/**
 * Signs a short-lived identity assertion attached to every customer-scoped
 * call to License Server (the Envato connection endpoints, plus the
 * ownership gate on downloads/updates/domain management). Server-only —
 * never import this from a 'use client' component.
 *
 * CRITICAL CROSS-REPO CONTRACT: the canonical-string field order/encoding
 * here must byte-match App\Services\Envato\VerifiesSignedAssertion on
 * License Server. That side uses PHP's rawurlencode(); this uses JS's
 * encodeURIComponent() — the two diverge only on a handful of characters
 * (! * ' ( )) that never legitimately appear in these fields (a numeric id,
 * an email, a short display name, an app-controlled return path, a numeric
 * timestamp, a hex nonce), so the divergence is inert in practice. Do not
 * "fix" one side without updating the other identically.
 */
export function buildSignedAssertion(params: {
  xgeniousUserId: number;
  email: string;
  displayName?: string | null;
  returnPath: string;
}): { assertion: EnvatoAssertion; signature: string } {
  const assertion: EnvatoAssertion = {
    xgenious_user_id: String(params.xgeniousUserId),
    email: params.email,
    display_name: params.displayName ?? '',
    return_path: params.returnPath,
    timestamp: String(Math.floor(Date.now() / 1000)),
    nonce: randomBytes(16).toString('hex'),
  };

  // Alphabetical order — must match the PHP-side implementation exactly.
  const fields: (keyof EnvatoAssertion)[] = [
    'display_name',
    'email',
    'nonce',
    'return_path',
    'timestamp',
    'xgenious_user_id',
  ];
  const canonical = fields.map((k) => `${k}=${encodeURIComponent(assertion[k])}`).join('&');

  const secret = process.env.ENVATO_ASSERTION_SECRET;
  if (!secret) {
    throw new Error('ENVATO_ASSERTION_SECRET is not configured');
  }

  const signature = createHmac('sha256', secret).update(canonical).digest('hex');

  return { assertion, signature };
}
