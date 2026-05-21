'use client';
export const dynamic = 'force-dynamic';
import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [unverifiedEmail, setUnverifiedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const justReset = params.get('reset') === '1';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setUnverifiedEmail('');
    setResendMsg('');
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const username = fd.get('username') as string;
    const recaptchaToken = recaptchaRef.current?.getValue() ?? '';
    const result = await signIn('credentials', {
      username,
      password: fd.get('password'),
      recaptchaToken,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      recaptchaRef.current?.reset();
      if (result.error === 'EmailNotVerified') {
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
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-4xl rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">

        {/* Left decorative panel */}
        <div className="hidden md:flex md:w-[44%] bg-[#FDF8F3] p-10 flex-col justify-between relative overflow-hidden">
          {/* Decorative cross */}
          <span className="absolute top-[38%] right-10 text-[#ec7161] text-3xl font-light select-none">+</span>
          {/* Decorative curved arrow */}
          <svg
            className="absolute top-[32%] right-14 w-10 h-10 text-gray-400 opacity-60"
            viewBox="0 0 60 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 30 Q30 5 55 20" strokeLinecap="round" />
            <path d="M48 14 L55 20 L47 26" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div />

          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Welcome back
            </p>
            <h2 className="text-3xl font-bold text-[#0F1112] leading-tight">
              Manage your purchases,{' '}
              <em className="italic font-bold">support tickets</em>{' '}
              &amp; file updates.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Your licenses, downloads and support conversations are all behind this door. Sign in to pick up where you left off.
            </p>
          </div>

          <div />
        </div>

        {/* Right form panel */}
        <div className="flex-1 bg-white p-8 md:p-10">
          <h1 className="text-2xl font-bold text-[#0F1112] mb-1">
            Sign in to <em className="italic font-bold">Xgenious</em>
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Use your username or email to sign in.
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
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-[#0F1112]">Password</label>
                <Link href="/forgot-password" className="text-xs text-[#ec7161] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 accent-[#ec7161] cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                Keep me signed in
              </label>
            </div>

            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Signing in…' : (
                <>
                  Sign in
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#ec7161] font-medium hover:underline">
              Create one
            </Link>
            {' · '}
            <Link href="/privacy-policy" className="hover:underline">Privacy</Link>
            {' · '}
            <Link href="/terms-of-service" className="hover:underline">Terms</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
