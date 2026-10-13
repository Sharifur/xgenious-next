'use client';

import { useEffect } from 'react';

// Pushes a one-time `user_interaction` event to dataLayer on the first tap/key/scroll.
// GTM tags that are heavy at page view (AdRoll, Clarity, Facebook Pixel) can trigger on this
// Custom Event (or Window Loaded + 3s timer) instead of All Pages, keeping them off the INP path.
export default function InteractionSignal() {
  useEffect(() => {
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;
    const fire = () => {
      events.forEach((e) => window.removeEventListener(e, fire));
      (window.dataLayer ??= []).push({ event: 'user_interaction' });
    };
    events.forEach((e) => window.addEventListener(e, fire, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, fire));
  }, []);
  return null;
}
