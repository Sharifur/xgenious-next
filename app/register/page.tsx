'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [regEmail, setRegEmail] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');

  useEffect(() => {
    if (countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const password = fd.get('password') as string;
    const confirm = fd.get('confirm') as string;
    const email = fd.get('email') as string;

    if (password !== confirm) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: fd.get('username'),
        email,
        password,
        firstName: fd.get('firstName'),
        lastName: fd.get('lastName'),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? 'Registration failed.');
      return;
    }

    setRegEmail(email);
    setRegistered(true);
    setCountdown(120);
  }

  async function handleResend() {
    setResendLoading(true);
    setResendMsg('');
    const res = await fetch('/api/resend-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: regEmail }),
    });
    const data = await res.json();
    setResendLoading(false);
    if (res.ok) {
      setResendMsg('Verification email resent!');
      setCountdown(120);
    } else {
      setResendMsg(data.error ?? 'Failed to resend. Please try again.');
    }
  }

  if (registered) {
    return (
      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 bg-[#ec7161]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#ec7161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[#0F1112] mb-2">Check your email</h1>
            <p className="text-sm text-gray-500 mb-1">
              We sent a verification link to
            </p>
            <p className="text-sm font-medium text-[#0F1112] mb-6">{regEmail}</p>
            <p className="text-xs text-gray-400 mb-4">
              Click the link in the email to activate your account. Check your spam folder if you don't see it.
            </p>

            {resendMsg && (
              <p className="text-xs text-gray-600 mb-3">{resendMsg}</p>
            )}

            <button
              onClick={handleResend}
              disabled={resendLoading || countdown > 0}
              className="text-sm text-[#ec7161] font-medium hover:underline disabled:opacity-50 disabled:no-underline"
            >
              {resendLoading
                ? 'Sending…'
                : countdown > 0
                ? `Resend available in ${countdown}s`
                : 'Resend verification email'}
            </button>

            <p className="mt-6 text-xs text-gray-400">
              Already verified?{' '}
              <Link href="/login" className="text-[#ec7161] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Create account</h1>
          <p className="text-sm text-gray-500 mb-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#ec7161] font-medium hover:underline">
              Sign in
            </Link>
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[#0F1112] mb-1.5">First name</label>
                <input
                  name="firstName"
                  type="text"
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Last name</label>
                <input
                  name="lastName"
                  type="text"
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Username</label>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Password</label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Confirm password</label>
              <input
                name="confirm"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
