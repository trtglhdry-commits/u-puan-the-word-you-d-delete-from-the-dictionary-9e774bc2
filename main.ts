import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Word You'd Delete From the Dictionary.
// One word, nothing else: "irregardless" — a double-negative mistake
// enshrined in the dictionary. Deleting it is the dictionary correcting
// itself; nothing is lost, because "regardless" already does the job.
const ENTRY = "irregardless";

// Runtime guard: the sealed scorer requires UTF-8 text of 1-77
// characters, not only whitespace, and the entry must be exactly one word.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 77 ||
  ENTRY.trim().length === 0 ||
  /\s/.test(ENTRY)
) {
  throw new Error("entry violates the 1-77 character single-word gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
