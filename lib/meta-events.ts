'use client';

import { pixelTrack } from './meta-pixel';
import type { CAPIPayload } from '@/app/api/meta-capi/route';

function uid(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

async function sendCAPI(payload: CAPIPayload) {
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // non-critical — never throw
  }
}

export async function trackPageView(sourceUrl: string, userData?: { email?: string; first_name?: string; last_name?: string; zip?: string }) {
  const eventId = uid();
  pixelTrack('PageView', {}, eventId);
  await sendCAPI({ event_name: 'PageView', event_id: eventId, event_source_url: sourceUrl, ...userData });
}

export async function trackInitiateCheckout(sourceUrl: string, productIds: string[], value?: number) {
  const eventId = uid();
  pixelTrack('InitiateCheckout', { content_ids: productIds, value, currency: 'USD' }, eventId);
  await sendCAPI({ event_name: 'InitiateCheckout', event_id: eventId, event_source_url: sourceUrl, content_ids: productIds, value, currency: 'USD' });
}

export async function trackPurchase(sourceUrl: string, value: number, currency: string, productIds: string[]) {
  const eventId = uid();
  pixelTrack('Purchase', { value, currency, content_ids: productIds }, eventId);
  await sendCAPI({ event_name: 'Purchase', event_id: eventId, event_source_url: sourceUrl, value, currency, content_ids: productIds });
}

export async function trackCompleteRegistration(sourceUrl: string, email?: string) {
  const eventId = uid();
  pixelTrack('CompleteRegistration', {}, eventId);
  await sendCAPI({ event_name: 'CompleteRegistration', event_id: eventId, event_source_url: sourceUrl, email });
}

export async function trackContact(sourceUrl: string, email?: string) {
  const eventId = uid();
  pixelTrack('Contact', {}, eventId);
  await sendCAPI({ event_name: 'Contact', event_id: eventId, event_source_url: sourceUrl, email });
}
