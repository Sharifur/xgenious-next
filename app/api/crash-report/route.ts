import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, crashReportEmailHtml } from '@/lib/email';

const ALERT_EMAIL = 'dvrobin4@gmail.com';

export async function POST(req: NextRequest) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
  }

  const { message, stack, url, userAgent, digest, source, type,
          apiEndpoint, operation, httpStatus, networkOnline, connectionType } = body;

  try {
    await sendEmail(
      ALERT_EMAIL,
      `[CRASH] ${url ?? 'Unknown page'} — ${message?.slice(0, 80) ?? 'no message'}`,
      crashReportEmailHtml({ message, stack, url, userAgent, digest, source, type,
                             apiEndpoint, operation, httpStatus, networkOnline, connectionType }),
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[crash-report] email send failed:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
