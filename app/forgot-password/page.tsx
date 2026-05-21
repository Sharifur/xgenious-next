'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import AuthPanel from '@/components/auth/AuthPanel';
import { forgotPasswordSchema, type ForgotPasswordInput } from '@/lib/schemas/auth';

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({ resolver: zodResolver(forgotPasswordSchema) });

  async function onSubmit(values: ForgotPasswordInput) {
    setServerError('');
    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: values.email }),
    });
    const data = await res.json();
    if (!res.ok) setServerError(data.error ?? 'Something went wrong. Please try again.');
    else setSent(true);
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-4xl rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
        <AuthPanel
          badge="Password reset"
          headline={<>Locked out? We&apos;ve <em className="italic font-bold">got you.</em></>}
          description="Enter your email and we'll send you a reset link. Check your inbox and spam folder after submitting."
        />

        <div className="flex-1 bg-white p-8 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2">Check your email</h1>
              <p className="text-sm text-gray-500 mb-6">
                If an account exists for that email, we sent a password reset link. Check your inbox and spam folder.
              </p>
              <Link href="/login" className="text-[#ec7161] text-sm font-medium hover:underline">Back to sign in</Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Forgot password?</h1>
              <p className="text-sm text-gray-500 mb-6">
                Enter your email and we&apos;ll send you a reset link.{' '}
                <Link href="/login" className="text-[#ec7161] font-medium hover:underline">Back to sign in</Link>
              </p>

              {serverError && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{serverError}</div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    className={`w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending…' : (
                    <>Send reset link <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
