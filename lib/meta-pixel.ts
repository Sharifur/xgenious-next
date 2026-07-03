'use client';

declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init',
      eventOrPixelId: string,
      params?: Record<string, unknown>,
      extra?: { eventID?: string },
    ) => void;
    _fbq: unknown;
  }
}

export function pixelTrack(
  event: string,
  params?: Record<string, unknown>,
  eventId?: string,
) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', event, params ?? {}, eventId ? { eventID: eventId } : undefined);
}

export function pixelPageView(eventId?: string) {
  pixelTrack('PageView', undefined, eventId);
}

export function pixelInitiateCheckout(params: { value?: number; currency?: string; content_ids?: string[] }, eventId?: string) {
  pixelTrack('InitiateCheckout', params, eventId);
}

export function pixelPurchase(params: { value: number; currency: string; content_ids?: string[] }, eventId?: string) {
  pixelTrack('Purchase', params, eventId);
}

export function pixelCompleteRegistration(eventId?: string) {
  pixelTrack('CompleteRegistration', {}, eventId);
}

export function pixelContact(eventId?: string) {
  pixelTrack('Contact', {}, eventId);
}
