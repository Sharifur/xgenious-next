import type { ReactNode } from 'react';

interface Props {
  title: string;
  badge: string;
  lastUpdated?: string;
  effectiveDate?: string;
  children: ReactNode;
}

export default function PolicyLayout({ title, badge, lastUpdated, effectiveDate, children }: Props) {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-14 sm:pt-[160px] sm:pb-20"
        style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[13px] font-medium text-[#484848]">{badge}</span>
          </div>
          <h1 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] lg:text-[60px] lg:leading-[68px] font-semibold text-[#0F1112] max-w-[700px]">
            {title}
          </h1>
          {(lastUpdated || effectiveDate) && (
            <div className="flex flex-wrap items-center justify-center gap-4 mt-1">
              {lastUpdated && (
                <span className="inline-flex items-center gap-1.5 text-[13px] text-[#6b7280]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#ec7161" strokeWidth="1.6"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="#ec7161" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  Last updated: <strong className="text-[#484848]">{lastUpdated}</strong>
                </span>
              )}
              {effectiveDate && (
                <span className="inline-flex items-center gap-1.5 text-[13px] text-[#6b7280]">
                  Effective: <strong className="text-[#484848]">{effectiveDate}</strong>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[860px] mx-auto">
          <div className="policy-content">
            {children}
          </div>
        </div>
      </section>

      <style>{`
        .policy-content h2 {
          font-size: 20px;
          font-weight: 700;
          color: #0F1112;
          margin-top: 48px;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f3dacd;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .policy-content h2:first-child { margin-top: 0; }
        .policy-content h2::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 20px;
          background: #ec7161;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .policy-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0F1112;
          margin-top: 24px;
          margin-bottom: 10px;
        }
        .policy-content p {
          font-size: 15px;
          line-height: 1.8;
          color: #484848;
          margin-bottom: 14px;
        }
        .policy-content ul {
          margin-bottom: 16px;
          padding-left: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .policy-content li {
          font-size: 15px;
          line-height: 1.7;
          color: #484848;
          padding-left: 20px;
          position: relative;
        }
        .policy-content li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ec7161;
          flex-shrink: 0;
        }
        .policy-content strong {
          color: #0F1112;
          font-weight: 600;
        }
        .policy-content blockquote {
          background: #fef2ef;
          border-left: 4px solid #ec7161;
          border-radius: 0 12px 12px 0;
          padding: 14px 18px;
          margin: 20px 0;
          color: #484848;
          font-size: 14px;
          line-height: 1.7;
          font-style: italic;
        }
        .policy-content a {
          color: #ec7161;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .policy-content a:hover { color: #d95f4e; }
        .policy-highlight {
          background: #fafbff;
          border: 1px solid #e5e7ec;
          border-radius: 12px;
          padding: 18px 20px;
          margin: 20px 0;
        }
        .policy-highlight p { margin-bottom: 6px; }
        .policy-highlight p:last-child { margin-bottom: 0; }
      `}</style>
    </>
  );
}
