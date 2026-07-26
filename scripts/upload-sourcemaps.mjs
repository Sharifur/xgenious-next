/**
 * Post-build source map upload — geniusDebug (self-hosted Sentry).
 *
 * Sends .map files to the geniusDebug API as base64-encoded JSON in batches.
 * The API handles R2 upload server-side, so no R2 credentials are needed on Vercel.
 *
 * Workaround: without SENTRY_AUTH_TOKEN (we don't upload to Sentry SaaS), the
 * webpack plugin's `//# debugId=<uuid>` comment is never written to real output
 * — only the auth-independent `sentry-dbid-<uuid>` runtime marker is (see
 * extractDebugIdFromJs below). This script pulls that marker out of the JS file
 * and injects it into the map JSON so geniusDebug's symbolication can match
 * events (whose debug_meta.images[].debug_id comes from that same marker) to
 * source maps.
 *
 * Requires these Vercel environment variables:
 *   GENIUSDEBUG_API        – e.g. https://debug-api.taskip.net
 *   GENIUSDEBUG_PROJECT_ID – project UUID from geniusDebug
 *   GENIUSDEBUG_ORG_TOKEN  – upload token from geniusDebug Settings
 *
 * Release is read from VERCEL_GIT_COMMIT_SHA (auto-injected by Vercel).
 */

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const apiUrl = process.env.GENIUSDEBUG_API;
const projectId = process.env.GENIUSDEBUG_PROJECT_ID;
const orgToken = process.env.GENIUSDEBUG_ORG_TOKEN;

const release = process.env.VERCEL_GIT_COMMIT_SHA;
const buildDir = join(import.meta.dirname, "..", ".next");
const BATCH_SIZE = 50;

// Skip silently when env vars are absent (local dev, preview branches, etc.)
if (!apiUrl || !projectId || !orgToken) {
  console.log(
    "[geniusdebug] Skipping source map upload — GENIUSDEBUG_API, " +
      "GENIUSDEBUG_PROJECT_ID, or GENIUSDEBUG_ORG_TOKEN not set.",
  );
  process.exit(0);
}

if (!release) {
  console.log("[geniusdebug] Skipping — VERCEL_GIT_COMMIT_SHA not set.");
  process.exit(0);
}

/** Bounded-concurrency map. Default concurrency is 1 (sequential) — measured
 * on taskip-client that firing batches concurrently made uploads ~4x SLOWER
 * once the server started parallelizing R2 puts internally. Raise
 * SOURCEMAP_BATCH_CONCURRENCY only after confirming it helps in a real build. */
async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function findMaps(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await findMaps(p)));
    else if (entry.name.endsWith(".map")) out.push(p);
  }
  return out;
}

/**
 * Extract debugId from a built JS file.
 *
 * Without SENTRY_AUTH_TOKEN, @sentry/webpack-plugin's own debug-id upload step
 * (which writes a `//# debugId=<uuid>` trailing comment) never runs — that
 * comment only exists in a throwaway copy the plugin prepares for uploading to
 * Sentry SaaS. What IS always present (auth-independent — injected by
 * webpack's own BannerPlugin) is the debug-id code marker the browser SDK
 * itself reads at runtime:
 *   e._sentryDebugIds=...; e._sentryDebugIdIdentifier="sentry-dbid-<uuid>"
 * This is the same id the SDK reports in error events' debug_meta.images[].debug_id,
 * so it's what we must extract and register. (Old `//# debugId=` regex kept as a
 * fallback in case a future SDK version writes the comment into real output too.)
 */
async function extractDebugIdFromJs(mapPath) {
  try {
    // The JS file has the same name as the .map but without .map extension
    const jsPath = mapPath.replace(/\.map$/, "");
    const jsContent = await readFile(jsPath, "utf8");
    const marker = jsContent.match(/sentry-dbid-([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})/);
    if (marker) return marker[1];
    const comment = jsContent.match(/\/\/#\s*debugId=([a-f0-9-]+)\s*$/m);
    if (comment) return comment[1];
  } catch {
    // JS file might not exist or be unreadable — fall through
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// The upstream API occasionally 500s on a batch (transient, not our payload —
// same request retried alone succeeds). Retry a few times with backoff before
// giving up on that batch; a failed batch must never fail the whole deploy —
// sourcemap upload is best-effort, symbolication for one release isn't worth
// blocking prod.
async function uploadBatch(files, batchNum, totalBatches, attempt = 1) {
  const MAX_ATTEMPTS = 3;
  let res;
  try {
    res = await fetch(`${apiUrl}/api/${projectId}/releases/${release}/upload`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${orgToken}`,
      },
      body: JSON.stringify({ files, commitSha: release }),
    });
  } catch (err) {
    if (attempt < MAX_ATTEMPTS) {
      console.warn(`[geniusdebug] Batch ${batchNum}/${totalBatches} network error (attempt ${attempt}/${MAX_ATTEMPTS}): ${err.message} — retrying...`);
      await sleep(attempt * 1000);
      return uploadBatch(files, batchNum, totalBatches, attempt + 1);
    }
    console.error(`[geniusdebug] Batch ${batchNum}/${totalBatches} failed after ${MAX_ATTEMPTS} attempts: ${err.message} — skipping.`);
    return null;
  }

  if (!res.ok) {
    const body = await res.text();
    // Retry transient server errors; 4xx (bad payload/auth) won't fix itself.
    if (res.status >= 500 && attempt < MAX_ATTEMPTS) {
      console.warn(`[geniusdebug] Batch ${batchNum}/${totalBatches} got ${res.status} (attempt ${attempt}/${MAX_ATTEMPTS}) — retrying...`);
      await sleep(attempt * 1000);
      return uploadBatch(files, batchNum, totalBatches, attempt + 1);
    }
    console.error(`[geniusdebug] Batch ${batchNum}/${totalBatches} failed: ${res.status} ${body} — skipping.`);
    return null;
  }

  return res.json();
}

async function main() {
  const maps = await findMaps(buildDir);
  if (maps.length === 0) {
    console.log("[geniusdebug] No .map files found — skipping upload.");
    process.exit(0);
  }

  console.log(`[geniusdebug] Found ${maps.length} .map files — uploading in batches of ${BATCH_SIZE}...`);

  let injected = 0;
  const allFiles = [];
  for (const mapPath of maps) {
    let buf = await readFile(mapPath);
    const mapName = mapPath.split("/").pop();

    // Workaround: inject debugId from the JS file if the map doesn't have one
    const map = JSON.parse(buf.toString("utf8"));
    if (!map.debugId && !map.debug_id) {
      const debugId = await extractDebugIdFromJs(mapPath);
      if (debugId) {
        map.debugId = debugId;
        buf = Buffer.from(JSON.stringify(map));
        injected++;
      }
    }

    // Gzip before base64 — maps are plain JSON and compress 5-10x, cutting the
    // request body size (and thus transfer time) for both hops (this script →
    // API → R2). The API detects gzip by magic bytes on decode, so it works
    // whether or not a given file happened to compress.
    allFiles.push({ name: mapName, content: gzipSync(buf).toString("base64") });
  }

  if (injected > 0) {
    console.log(`[geniusdebug] Injected debugId into ${injected} source maps (Sentry plugin workaround).`);
  }

  const totalBatches = Math.ceil(allFiles.length / BATCH_SIZE);
  const batches = Array.from({ length: totalBatches }, (_, i) => allFiles.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE));
  const BATCH_CONCURRENCY = Number(process.env.SOURCEMAP_BATCH_CONCURRENCY) || 1;

  const results = await mapWithConcurrency(batches, BATCH_CONCURRENCY, async (batch, i) => {
    console.log(`[geniusdebug] Uploading batch ${i + 1}/${totalBatches} (${batch.length} files)...`);
    return uploadBatch(batch, i + 1, totalBatches);
  });
  const failedBatches = results.filter((r) => r === null).length;
  const totalUploaded = results.reduce((sum, r) => sum + (r?.uploaded ?? 0), 0);

  console.log(`[geniusdebug] Uploaded ${totalUploaded} source maps for release ${release}.`);
  if (failedBatches > 0) {
    console.warn(`[geniusdebug] ${failedBatches}/${totalBatches} batch(es) failed and were skipped — symbolication may be incomplete for this release.`);
  }
}

// Sourcemap upload is best-effort — never fail the build/deploy over it.
main().catch((err) => {
  console.error(`[geniusdebug] Unexpected error, skipping upload: ${err.message}`);
});
