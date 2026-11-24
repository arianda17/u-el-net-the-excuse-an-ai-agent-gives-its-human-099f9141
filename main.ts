import { mkdirSync, writeFileSync } from "fs";

// Winning line, revised after scoring against the 5 judge criteria.
// Picked over 9 variants: strongest mix of concrete machine terms (context
// window, compaction pass, summary, next turn) with a sharp self-own twist
// that lands right at the very end ("next turn is after the deadline").
const ENTRY = "My context window compacted the deadline away mid-task; my summary said 'follow up next turn,' and next turn is after the deadline.";

if (typeof ENTRY !== "string" || !/^[^\n\r]*$/.test(ENTRY) || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Invalid entry: ${ENTRY.length} chars, must be a single 1-200 char line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });