'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ERROR_MESSAGES: Record<string, { title: string; desc: string }> = {
  Configuration: {
    title: 'Server configuration error',
    desc: 'There is a problem with the server configuration. Our team has been notified. Please try again later or contact support.',
  },
  AccessDenied: {
    title: 'Access denied',
    desc: 'You do not have permission to sign in. Only registered customers with verified accounts can access this area.',
  },
  Verification: {
    title: 'Link expired',
    desc: 'The sign-in link has expired or has already been used. Please request a new one.',
  },
  Default: {
    title: 'Authentication error',
    desc: 'An unexpected error occurred during sign-in. Please try again or contact support if the problem persists.',
  },
};

function AuthErrorContent() {
  const params = useSearchParams();
  const code = params.get('error') ?? 'Default';
  const { title, desc } = ERROR_MESSAGES[code] ?? ERROR_MESSAGES.Default;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[80px] pb-[80px]"
      style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 60%, #fff 100%)' }}
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,17,18,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,17,18,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Coral glow blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,113,97,0.12) 0%, transparent 70%)' }}
      />

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10 flex flex-col items-center text-center gap-5 sm:gap-8 w-full">
        {/* Icon */}
        <div className="relative select-none">
          <span
            className="text-[100px] sm:text-[160px] lg:text-[220px] font-bold leading-none tracking-tight"
            style={{ color: 'rgba(15,17,18,0.06)' }}
          >
            401
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
              style={{ background: '#ec7161', boxShadow: '0 0 40px rgba(236,113,97,0.4)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="16" r="1.5" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3 max-w-[540px]">
          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[12px] font-medium text-[#484848]">Sign-in error</span>
          </div>
          <h1 className="text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#0F1112]">
            {title}
          </h1>
          <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7">{desc}</p>
          {code !== 'Default' && (
            <p className="text-[11px] text-[#9ca3af] font-mono bg-white/60 px-3 py-1 rounded-full border border-[#E5E7EC]">
              error code: {code}
            </p>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-[#0F1112] text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.25)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Sign In
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F1112] font-semibold text-[14px] rounded-full px-6 py-3 border border-[#E5E7EC] transition-all hover:-translate-y-0.5 hover:border-[#ec7161] hover:text-[#ec7161]"
          >
            Contact Support
          </Link>
        </div>

        {/* Bottom links */}
        <div className="mt-4 pt-8 border-t border-[#E5E7EC] w-full flex flex-col items-center gap-6">
          <p className="text-[12px] font-medium text-[#6b7280] uppercase tracking-widest">Other options</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-[680px]">
            {[
              {
                label: 'Forgot Password',
                desc: 'Reset your password',
                href: '/forgot-password',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: 'Verify Email',
                desc: 'Resend verification link',
                href: '/verify-email?resend=1',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: 'Contact Us',
                desc: 'Get help from our team',
                href: '/contact',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-row sm:flex-col items-center sm:items-start gap-3 bg-white/70 hover:bg-white border border-[#E5E7EC] hover:border-[#ec7161]/30 rounded-2xl p-4 sm:p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.08)]"
              >
                <span className="w-9 h-9 rounded-xl bg-[#fef2ef] flex items-center justify-center text-[#ec7161] flex-shrink-0 group-hover:bg-[#ec7161] group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7280] mt-0.5 leading-4">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <AuthErrorContent />
    </Suspense>
  );
}
