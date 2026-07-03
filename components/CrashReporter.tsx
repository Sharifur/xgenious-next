'use client';
import { useEffect } from 'react';
import { reportCrash } from '@/lib/crash';

export default function CrashReporter() {
  useEffect(() => {
    function onError(event: ErrorEvent) {
      reportCrash({
        type: 'JS runtime error',
        message: event.message,
        stack: event.error?.stack ?? '',
        source: `${event.filename}:${event.lineno}:${event.colno}`,
      });
    }

    function onUnhandledRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      reportCrash({
        type: 'Unhandled promise rejection',
        message: String(reason?.message ?? reason ?? 'Unknown rejection'),
        stack: reason?.stack ?? '',
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
