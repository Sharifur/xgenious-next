export interface CrashData {
  type?: string;
  message?: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  source?: string;
  digest?: string;
  apiEndpoint?: string;
  operation?: string;
  httpStatus?: string;
  networkOnline?: string;
  connectionType?: string;
}

const reported = new Set<string>();

export function reportCrash(data: CrashData) {
  const key = `${data.type}::${data.message?.slice(0, 100)}::${data.apiEndpoint ?? ''}::${data.operation ?? ''}`;
  if (reported.has(key)) return;
  reported.add(key);

  if (typeof navigator !== 'undefined') {
    data.networkOnline ??= String(navigator.onLine);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const conn = (navigator as any).connection;
    data.connectionType ??= conn?.effectiveType ?? conn?.type ?? 'unknown';
  }
  if (typeof window !== 'undefined') {
    data.url ??= window.location.href;
    data.userAgent ??= navigator.userAgent;
  }

  fetch('/api/crash-report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    keepalive: true,
  }).catch(() => {});
}
