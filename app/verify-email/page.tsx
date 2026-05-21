'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type Mode = 'verifying' | 'success' | 'error' | 'resend';

export default function VerifyEmailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('verifying');
  const [errorMsg, setErrorMsg] = useState('');
  const [resendEmail, setResendEmail] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');
  const [resendError, setResendError] = useState('');
  const [countdown, setCountdown] = useState(0);

  const uid = params.get('uid');
  const t = params.get('t');
  const sig = params.get('sig');
  const showResend = params.get('resend') === '1';

  useEffect(() => {
    if (showResend) { setMode('resend'); return; }
    if (!uid || !t || !sig) { setMode('resend'); return; }

    fetch(`/api/verify-email?uid=${uid}&t=${t}&sig=${sig}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) {
          setMode('success');
        } else {
          setErrorMsg(d.error ?? 'Verification failed.');
          setMode('error');
        }
      })
      .catch(() => {
        setErrorMsg('Verification failed. Please try again.');
        setMode('error');
      });
  }, [uid, t, sig, showResend]);

  useEffect(() => {
    if (countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  async function handleResend(e: React.FormEvent) {
    e.preventDefault();
    setResendLoading(true);
    setResendMsg('');
    setResendError('');
    const res = await fetch('/api/resend-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: resendEmail }),
    });
    const data = await res.json();
    setResendLoading(false);
    if (!res.ok) {
      setResendError(data.error ?? 'Failed to resend. Please try again.');
    } else {
      setResendMsg('Verification email sent! Check your inbox (and spam folder).');
      setCountdown(120);
    }
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">

          {mode === 'verifying' && (
            <>
              <div className="w-10 h-10 border-2 border-[#ec7161] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm text-gray-500">Verifying your email…</p>
            </>
          )}

          {mode === 'success' && (
            <>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2">Email verified!</h1>
              <p className="text-sm text-gray-500 mb-6">Your account is now active. You can sign in.</p>
              <Link
                href="/login"
                className="inline-block px-6 py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors"
              >
                Sign in
              </Link>
            </>
          )}

          {mode === 'error' && (
            <>
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2">Verification failed</h1>
              <p className="text-sm text-red-600 mb-6">{errorMsg}</p>
              <button
                onClick={() => setMode('resend')}
                className="text-[#ec7161] text-sm font-medium hover:underline"
              >
                Request a new verification email
              </button>
            </>
          )}

          {mode === 'resend' && (
            <>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2 text-left">Resend verification email</h1>
              <p className="text-sm text-gray-500 mb-6 text-left">Enter the email address you registered with.</p>

              {resendMsg && (
                <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100 text-left">
                  {resendMsg}
                </div>
              )}
              {resendError && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100 text-left">
                  {resendError}
                </div>
              )}

              <form onSubmit={handleResend} className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Email address</label>
                  <input
                    type="email"
                    required
                    value={resendEmail}
                    onChange={(e) => setResendEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={resendLoading || countdown > 0}
                  className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {resendLoading
                    ? 'Sending…'
                    : countdown > 0
                    ? `Resend available in ${countdown}s`
                    : 'Send verification email'}
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                Already verified?{' '}
                <Link href="/login" className="text-[#ec7161] font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
