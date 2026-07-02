'use client';
import { useEffect } from 'react';

const reported = new Set<string>();

function sendCrashReport(data: Record<string, string>) {
  const key = `${data.type}::${data.message?.slice(0, 100)}`;
  if (reported.has(key)) return;
  reported.add(key);
  fetch('/api/crash-report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    keepalive: true,
  }).catch(() => {});
}

export default function CrashReporter() {
  useEffect(() => {
    function onError(event: ErrorEvent) {
      sendCrashReport({
        type: 'JS runtime error',
        message: event.message,
        stack: event.error?.stack ?? '',
        url: window.location.href,
        userAgent: navigator.userAgent,
        source: `${event.filename}:${event.lineno}:${event.colno}`,
      });
    }

    function onUnhandledRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      sendCrashReport({
        type: 'Unhandled promise rejection',
        message: String(reason?.message ?? reason ?? 'Unknown rejection'),
        stack: reason?.stack ?? '',
        url: window.location.href,
        userAgent: navigator.userAgent,
        source: 'unhandledrejection',
      });
    }

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  return null;
}
