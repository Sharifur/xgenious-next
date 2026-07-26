import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2047bb1ec5c6ae7bb97ef4536cf3da04@debug-ingest.taskip.net/c7f63fd2-bef3-4a3b-8cb6-db2e119ec254",
  environment: process.env.NEXT_PUBLIC_ENV,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  tracesSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0,
});
