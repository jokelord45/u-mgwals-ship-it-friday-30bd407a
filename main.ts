import { mkdirSync, writeFileSync } from "node:fs";

// One line: a git commit message from a confident, cheerful AI coding
// agent, completely unaware of the disaster it is about to ship on Friday.
const line =
  "feat: replaced all tests with vibes, shipping to prod at 4:59pm on a Friday — what could possibly go wrong?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
