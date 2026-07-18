export default function WhatIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
          What is Genius Debug?
        </h2>

        <p className="text-[17px] text-[#0F1112] leading-8 mb-6 p-5 rounded-2xl border border-[#E5E7EC] bg-[#f9fafb]">
          <strong>Genius Debug</strong> is a free, open-source, self-hosted <strong>error and performance monitoring platform</strong> for JavaScript and Next.js/React apps. It captures runtime errors, groups them into issues, symbolicates minified stack traces, and pairs each error with a distributed trace and a short session replay — all on your own server.
        </p>

        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          It is not a full Sentry clone. The positioning is deliberate: <strong>&ldquo;own the slice of Sentry you actually use.&rdquo;</strong> Sentry&apos;s Team plan starts around $26/month plus per-event overage once you exceed quota, scaling to $80+/month on Business. Genius Debug is free to run — you only pay for the VPS underneath it, and there is no per-event or per-seat charge as your team or traffic grows.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          The integration path is compatibility, not reinvention: Genius Debug runs a <strong>Sentry-protocol compatible ingestion endpoint</strong>, so the official <strong>@sentry/nextjs</strong> SDK (or other Sentry client libraries) can send events to it exactly as they would to Sentry.io. You keep your existing instrumentation and just repoint the DSN. The ingest path is deliberately thin — it authenticates, rate-limits, and enqueues — so a slow or offline Genius Debug instance never blocks your app.
        </p>
        <p className="text-[16px] text-[#484848] leading-8">
          Genius Debug parses the same{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Error" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: '#6C5FC7' }}>
            Error interface
          </a>{' '}
          every browser and Node.js runtime exposes, using the{' '}
          <a href="https://develop.sentry.dev/sdk/data-model/event-payloads/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: '#6C5FC7' }}>
            Sentry event payload spec ↗
          </a>{' '}
          as its wire format. That means switching the backend to a self-hosted instance is a config change — DSN and source-map upload target — not an application code rewrite.
        </p>
      </div>
    </section>
  );
}
