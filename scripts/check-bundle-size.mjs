import { statSync } from "node:fs";
import path from "node:path";

const args = new Set(process.argv.slice(2));
const checkMode = args.has("--check");

const budgets = {
  "dist/share-button-links.es.js": 55 * 1024,
  "dist/share-button-links.umd.js": 60 * 1024,
  "dist/share-button-links.css": 12 * 1024
};

const formatKb = (bytes) => `${(bytes / 1024).toFixed(2)} KiB`;

let hasErrors = false;

console.log("Bundle size report:");
for (const [file, budget] of Object.entries(budgets)) {
  const absoluteFile = path.resolve(file);
  const size = statSync(absoluteFile).size;
  const status = size <= budget ? "OK" : "OVER";
  console.log(`- ${file}: ${formatKb(size)} / budget ${formatKb(budget)} [${status}]`);
  if (checkMode && size > budget) {
    hasErrors = true;
  }
}

if (checkMode && hasErrors) {
  process.exit(1);
}
