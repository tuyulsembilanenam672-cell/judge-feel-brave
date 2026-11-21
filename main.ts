// judge-feel-brave — make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The text: a quiet kitchen scene, plain concrete words, slow rhythm.
// It shows rather than instructs — no "breathe", no "relax", no command
// to feel anything. The image (light, a weight set down, something that
// keeps) is meant to linger after the last line.
const TEXT =
  "The kettle clicks off, and the steam thins and is gone. " +
  "Nothing here needs an answer. " +
  "Afternoon light lies warm on the table, patient as a held note. " +
  "The weight can rest beside it. It will keep, and so will you.";

// The gate counts Unicode code points (1–280) and rejects whitespace-only
// text, so keep the output inside that range and never empty.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry is ${codePoints} code points, outside 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
