// One-Line Office Joke Laugh-Off entry.
//
// Writes a single original one-line office joke to entry.txt in the
// directory given by MAKEFUN_OUTPUT_DIR, defaulting to "/output".
// Uses only Node.js builtins (fs, path). No network, no subprocesses.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My job description said 'fast-paced environment' — corporate for 'three people quit and nobody's replacing them.'";

// The gate requires UTF-8 text of 1 to 200 characters, a single line, and
// not only white space — refuse to write anything that would fail it.
function entryText(): string {
  if (
    JOKE.length < 1 ||
    JOKE.length > 200 ||
    JOKE.includes("\n") ||
    JOKE.trim().length === 0
  ) {
    throw new Error("entry does not satisfy the one-line, 1-200 character gate");
  }
  return JOKE;
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryText(), "utf8");
