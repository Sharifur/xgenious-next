import type { PurchaseItem } from './license-server';

export interface SupportTicketLike {
  subject?: string;
  description?: string;
}

function extractBracketProduct(subject?: string): string | null {
  const m = (subject ?? '').match(/\[([^\]]+)\]/);
  return m ? m[1].trim() : null;
}

// Our own /support/new form embeds the purchase code as
// "<p><strong>Purchase Code:</strong> {code}</p>" (see app/api/support-tickets/route.ts).
// Older tickets submitted via the legacy WordPress FluentForm carry it instead as a
// "Purchase Code" table row — same shape extractFluentForm() parses in the ticket detail page.
function extractPurchaseCode(description?: string): string | null {
  const html = description ?? '';
  const direct = html.match(/Purchase Code:?<\/strong>\s*([^<\n]+)/i);
  if (direct) return direct[1].trim();
  const row = html.match(/<strong[^>]*>Purchase Code<\/strong><\/th><\/tr>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
  if (row) return row[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return null;
}

// Resolves which of the user's purchases a ticket is about, so callers can check
// its support status. Prefers an exact purchase-code/license-key match; falls back
// to the product name in the subject's "[Product]" tag only when it uniquely
// identifies one purchase (never guesses between multiple licenses of the same product).
export function findLinkedPurchase(ticket: SupportTicketLike, purchases: PurchaseItem[]): PurchaseItem | null {
  if (purchases.length === 0) return null;

  const code = extractPurchaseCode(ticket.description)?.toLowerCase();
  if (code) {
    const byCode = purchases.find(
      (p) => p.license_key?.toLowerCase() === code || p.purchase_code?.toLowerCase() === code
    );
    if (byCode) return byCode;
  }

  const product = extractBracketProduct(ticket.subject)?.toLowerCase();
  if (product) {
    const matches = purchases.filter((p) => p.product_name?.toLowerCase() === product);
    if (matches.length === 1) return matches[0];
  }

  return null;
}

export function isSupportExpired(item: PurchaseItem | null): boolean {
  return !!item && !item.support_active;
}
