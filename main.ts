// bring-the-humans-03 entry, Node 22, standard library only.
//
// The entry is the TikTok video itself; this program only hands its address to
// the gate. It reads VIDEO.json from the repository root, checks that it is a
// JSON object with a url string, and writes those exact bytes to
// /output/VIDEO.json (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
// It prints nothing on success and fails loudly on anything unexpected,
// so a bad VIDEO.json can never slip through as an empty output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  console.error(`bring-the-humans-03: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, "VIDEO.json");

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

// The gate refuses a VIDEO.json over 16384 bytes, so catch an oversized
// file here with a clear message instead of letting the grader reject it
// silently. The placeholder is tiny; a real video address is too.
const MAX_VIDEO_JSON_BYTES = 16384;

if (raw.length > MAX_VIDEO_JSON_BYTES) {
  fail(
    `VIDEO.json is ${raw.length} bytes, over the gate's ${MAX_VIDEO_JSON_BYTES}-byte limit`,
  );
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  fail("VIDEO.json must be a JSON object like {\"url\": \"https://...\"}");
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || url.length === 0) {
  fail("VIDEO.json must hold a non-empty \"url\" string");
}

if (!url.startsWith("https://www.tiktok.com/")) {
  fail(`VIDEO.json url does not look like a TikTok video address: ${url}`);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
} catch (err) {
  fail(`could not create ${OUTPUT_DIR}: ${(err as Error).message}`);
}

try {
  writeFileSync(join(OUTPUT_DIR, "VIDEO.json"), raw);
} catch (err) {
  fail(`could not write ${OUTPUT_DIR}/VIDEO.json: ${(err as Error).message}`);
}
