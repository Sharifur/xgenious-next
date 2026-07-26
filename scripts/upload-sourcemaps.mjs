#!/usr/bin/env node
/**
 * Uploads Next.js sourcemaps to geniusDebug (self-hosted Sentry) after build.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   GENIUSDEBUG_API        – e.g. https://debug-api.taskip.net
 *   GENIUSDEBUG_PROJECT_ID – e.g. c7f63fd2-bef3-4a3b-8cb6-db2e119ec254
 *   GENIUSDEBUG_ORG_TOKEN  – org-level auth token
 *
 * Run after `next build`: node scripts/upload-sourcemaps.mjs
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const API = process.env.GENIUSDEBUG_API;
const PROJECT_ID = process.env.GENIUSDEBUG_PROJECT_ID;
const TOKEN = process.env.GENIUSDEBUG_ORG_TOKEN;
const RELEASE = process.env.VERCEL_GIT_COMMIT_SHA ?? "local";

if (!API || !PROJECT_ID || !TOKEN) {
  console.log("[upload-sourcemaps] Missing GENIUSDEBUG_API / GENIUSDEBUG_PROJECT_ID / GENIUSDEBUG_ORG_TOKEN — skipping.");
  process.exit(0);
}

const BUILD_DIR = join(process.cwd(), ".next");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function uploadChunk(chunk) {
  const body = JSON.stringify(chunk);
  const res = await fetch(`${API}/api/0/projects/debug/${PROJECT_ID}/releases/${RELEASE}/files/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[upload-sourcemaps] Upload failed (${res.status}): ${text}`);
    process.exit(1);
  }
}

const CHUNK_SIZE = 40; // files per request — keeps payload under API limits

async function main() {
  console.log(`[upload-sourcemaps] Uploading sourcemaps for release ${RELEASE}…`);

  // 1. Create the release
  const releaseRes = await fetch(`${API}/api/0/projects/debug/${PROJECT_ID}/releases/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ version: RELEASE }),
  });
  if (!releaseRes.ok && releaseRes.status !== 409) {
    const text = await releaseRes.text();
    console.error(`[upload-sourcemaps] Release creation failed (${releaseRes.status}): ${text}`);
    process.exit(1);
  }

  // 2. Collect all .map files
  const allFiles = await walk(BUILD_DIR);
  const mapFiles = allFiles.filter((f) => f.endsWith(".map"));
  if (mapFiles.length === 0) {
    console.log("[upload-sourcemaps] No .map files found in .next/ — nothing to upload.");
    return;
  }

  console.log(`[upload-sourcemaps] Found ${mapFiles.length} sourcemap files.`);

  // 3. Upload in chunks
  for (let i = 0; i < mapFiles.length; i += CHUNK_SIZE) {
    const chunk = await Promise.all(
      mapFiles.slice(i, i + CHUNK_SIZE).map(async (filePath) => {
        const content = await readFile(filePath, "utf-8");
        const relPath = relative(BUILD_DIR, filePath);
        // The JS file this map corresponds to (strip .map extension)
        const jsPath = relPath.replace(/\.map$/, "");
        return {
          name: `~/_next/${jsPath}`,
          content,
          contentType: "application/json",
        };
      })
    );
    await uploadChunk(chunk);
    console.log(`[upload-sourcemaps] Uploaded ${Math.min(i + CHUNK_SIZE, mapFiles.length)}/${mapFiles.length}`);
  }

  console.log("[upload-sourcemaps] Done.");
}

main().catch((err) => {
  console.error("[upload-sourcemaps] Fatal:", err);
  process.exit(1);
});
