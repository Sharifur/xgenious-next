import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';
import { buildSignedAssertion } from '@/lib/envato-assertion';

// Auth + one license-server round trip, then a redirect. The ZIP itself is
// fetched by the browser from the signed URL, so this must not stay at the
// platform's long default (a stalled upstream used to be billable for minutes).
export const maxDuration = 15;

type DownloadUrlResult =
  | { error: NextResponse }
  | { data: { download_url: string; product_uid?: string; version?: string; file_size?: number }; product_uid: string };

async function requestDownloadUrl(req: NextRequest): Promise<DownloadUrlResult> {
  const session = await auth();
  if (!session?.user) return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };

  const { searchParams } = new URL(req.url);
  const license_key = searchParams.get('license_key');
  const product_uid = searchParams.get('product_uid');

  if (!license_key || !product_uid) {
    return { error: NextResponse.json({ error: 'license_key and product_uid are required' }, { status: 400 }) };
  }

  const xgeniousUserId = session.wpUserId;
  const email = session.wpEmail ?? session.user?.email;
  if (!xgeniousUserId || !email) {
    return { error: NextResponse.json({ error: 'No account identity in session' }, { status: 400 }) };
  }

  const { assertion, signature } = buildSignedAssertion({
    xgeniousUserId,
    email,
    displayName: session.user?.name,
    returnPath: '/my-account/downloads',
  });

  const res = await lsFetch(
    `/downloads/fresh-install?license_key=${encodeURIComponent(license_key)}&product_uid=${encodeURIComponent(product_uid)}` +
      `&assertion=${encodeURIComponent(JSON.stringify(assertion))}&signature=${encodeURIComponent(signature)}`
  );
  const data = await res.json();

  if (!res.ok) {
    console.error('[license-server] fresh-install error:', res.status, JSON.stringify(data));
    const userMsg = res.status < 500
      ? ((data as { message?: string }).message ?? 'Failed to generate download link')
      : 'Service temporarily unavailable. Please try again later.';
    return { error: NextResponse.json({ error: userMsg }, { status: res.status < 500 ? res.status : 503 }) };
  }

  return { data, product_uid };
}

function httpsDownloadUrl(raw: unknown): string | null {
  if (typeof raw !== 'string' || !raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:') return null;
    return url.toString();
  } catch {
    return null;
  }
}

// A lightweight availability check: license-server's /downloads/fresh-install
// call already validates the license and confirms the install file exists
// on disk before it ever issues a signed URL, so a successful response here
// is sufficient proof the download will work — no need to also fetch the
// (possibly tens-of-MB) file body just to answer a HEAD probe.
export async function HEAD(req: NextRequest) {
  const result = await requestDownloadUrl(req);
  if ('error' in result) return new Response(null, { status: result.error.status });
  if (!httpsDownloadUrl(result.data.download_url)) return new Response(null, { status: 502 });
  return new Response(null, { status: 200 });
}

export async function GET(req: NextRequest) {
  const result = await requestDownloadUrl(req);
  if ('error' in result) return result.error;

  const downloadUrl = httpsDownloadUrl(result.data.download_url);
  if (!downloadUrl) {
    return NextResponse.json({ error: 'Failed to fetch file from storage' }, { status: 502 });
  }

  // The downloads page clicks an <a href> at this route. A temporary redirect
  // lets the browser pull the ZIP from storage directly, so the bytes never
  // transit this function (duration + origin transfer). 302 is not cached.
  return NextResponse.redirect(downloadUrl, 302);
}
