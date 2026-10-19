import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2047bb1ec5c6ae7bb97ef4536cf3da04@debug-ingest.taskip.net/c7f63fd2-bef3-4a3b-8cb6-db2e119ec254",
  environment: process.env.NEXT_PUBLIC_ENV,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  // No browser tracing: it patches fetch/XHR and observes long tasks on every page (INP cost);
  // geniusDebug is used for error capture only.
  tracesSampleRate: 0,
  // Replay is not registered (no replayIntegration). This is a ceiling so a
  // later SDK default cannot record a replay for every error. Replays are
  // large payloads; 10% of errors is enough to debug.
  replaysOnErrorSampleRate: 0.1,
  replaysSessionSampleRate: 0,
});
