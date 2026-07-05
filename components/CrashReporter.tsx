'use client';
import { useEffect } from 'react';
import { reportCrash } from '@/lib/crash';

// Patterns that indicate third-party script noise, not our app crashes
const THIRD_PARTY_PATTERNS = [
  /chrome-extension:\/\//,
  /cortex-api\./,
  /livechat\.js/,
];

// Benign browser notifications that fire as errors but don't break the page
const BENIGN_MESSAGES = [
  /ResizeObserver loop/,
];

// Errors from unresolvable sources (inline/eval scripts) we can't act on
const UNATTRIBUTABLE_MESSAGES = [
  /Maximum call stack size exceeded/,
];

function isThirdParty(stack: string, source: string): boolean {
  const haystack = stack + source;
  return THIRD_PARTY_PATTERNS.some((re) => re.test(haystack));
}

function isUnattributable(message: string, source: string): boolean {
  // source starts with "undefined:" when filename is missing — third-party inline/eval script
  if (!source.startsWith('undefined:')) return false;
  return UNATTRIBUTABLE_MESSAGES.some((re) => re.test(message));
}

function isBenign(message: string): boolean {
  return BENIGN_MESSAGES.some((re) => re.test(message));
}

export default function CrashReporter() {
  useEffect(() => {
    function onError(event: ErrorEvent) {
      const source = `${event.filename}:${event.lineno}:${event.colno}`;
      const stack = event.error?.stack ?? '';
      if (isThirdParty(stack, source)) return;
      if (isBenign(event.message)) return;
      if (isUnattributable(event.message, source)) return;
      reportCrash({
        type: 'JS runtime error',
        message: event.message,
        stack,
        source,
      });
    }

    function onUnhandledRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      const stack = reason?.stack ?? '';
      if (isThirdParty(stack, '')) return;
      reportCrash({
        type: 'Unhandled promise rejection',
        message: String(reason?.message ?? reason ?? 'Unknown rejection'),
        stack,
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
