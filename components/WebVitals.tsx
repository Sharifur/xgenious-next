'use client';

import { useReportWebVitals } from 'next/web-vitals';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Field INP/LCP/CLS → dataLayer, so GA4 (via GTM) can report real-user numbers.
export default function WebVitals() {
  useReportWebVitals((m) => {
    if (!['INP', 'LCP', 'CLS', 'TTFB', 'FCP'].includes(m.name)) return;
    (window.dataLayer ??= []).push({
      event: 'web_vitals',
      metric_name: m.name,
      metric_id: m.id,
      metric_value: Math.round(m.name === 'CLS' ? m.value * 1000 : m.value),
      metric_rating: m.rating,
    });
  });
  return null;
}
