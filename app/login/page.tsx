'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [unverifiedEmail, setUnverifiedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');
  const [countdown, setCountdown] = useState(0);

  const justReset = params.get('reset') === '1';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setUnverifiedEmail('');
    setResendMsg('');
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const username = fd.get('username') as string;
    const result = await signIn('credentials', {
      username,
      password: fd.get('password'),
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      if (result.error === 'EmailNotVerified') {
        // username field may be an email — pass it for resend
        setUnverifiedEmail(username.includes('@') ? username : '');
        setError('Please verify your email before signing in.');
      } else {
        setError('Invalid username or password.');
      }
    } else {
      router.push('/my-account');
      router.refresh();
    }
  }

  async function handleResend() {
    if (!unverifiedEmail) {
      router.push('/verify-email?resend=1');
      return;
    }
    setResendLoading(true);
    setResendMsg('');
    const res = await fetch('/api/resend-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: unverifiedEmail }),
    });
    const data = await res.json();
    setResendLoading(false);
    if (res.ok) {
      setResendMsg('Verification email sent! Check your inbox.');
      setCountdown(120);
      const tick = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) { clearInterval(tick); return 0; }
          return c - 1;
        });
      }, 1000);
    } else {
      setResendMsg(data.error ?? 'Failed to send. Please try again.');
    }
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Sign in</h1>
          <p className="text-sm text-gray-500 mb-6">
            No account?{' '}
            <Link href="/register" className="text-[#ec7161] font-medium hover:underline">
              Register
            </Link>
          </p>

          {justReset && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100">
              Password updated. You can now sign in.
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
              {error}
              {error.includes('verify') && (
                <div className="mt-2">
                  {resendMsg ? (
                    <p className="text-xs text-gray-600">{resendMsg}</p>
                  ) : (
                    <button
                      onClick={handleResend}
                      disabled={resendLoading || countdown > 0}
                      className="text-xs font-medium underline disabled:opacity-50"
                    >
                      {resendLoading
                        ? 'Sending…'
                        : countdown > 0
                        ? `Resend in ${countdown}s`
                        : 'Resend verification email'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                Username or email
              </label>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-[#0F1112]">Password</label>
                <Link href="/forgot-password" className="text-xs text-[#ec7161] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
