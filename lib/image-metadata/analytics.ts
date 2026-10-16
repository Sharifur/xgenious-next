type Params = Record<string, string | number | boolean | string[]>;

/** GTM dataLayer push. Counts, buckets and enums only: never filenames, metadata values or hashes. */
export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event, tool: 'ai-image-metadata-remover', ...params });
}

export function sizeBucket(bytes: number): string {
  const mb = bytes / 1048576;
  return mb < 1 ? '<1MB' : mb < 5 ? '1-5MB' : mb < 20 ? '5-20MB' : '20-100MB';
}
