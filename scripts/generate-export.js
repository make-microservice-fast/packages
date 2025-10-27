// scripts/generate-exports.js
import fs from "fs";
import path from "path";

const uiDir = path.join(import.meta.dirname, "../src/components/");
const hooksDir = path.join(import.meta.dirname, "../src/hooks/");
const libDir = path.join(import.meta.dirname, "../src/lib/");

const files = fs
  .readdirSync(uiDir, { recursive: true })
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .filter((file) => file !== "index.ts");

const hooksFiles = fs
  .readdirSync(hooksDir, { recursive: true })
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .filter((file) => file !== "index.ts");

const libFiles = fs
  .readdirSync(libDir, { recursive: true })
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .filter((file) => file !== "index.ts");

const exports = files
  .map((file) => `export * from './components/${file.replace(/\.tsx?$/, "")}'`)
  .join("\n");

const hooksExports = hooksFiles
  .map((file) => `export * from './hooks/${file.replace(/\.tsx?$/, "")}'`)
  .join("\n");

const libExports = libFiles
  .map((file) => `export * from './lib/${file.replace(/\.tsx?$/, "")}'`)
  .join("\n");

fs.writeFileSync(
  path.join(import.meta.dirname, "../src/index.ts"),
  "import './index.css'"
    .concat("\n")
    .concat(exports)
    .concat("\n")
    .concat(hooksExports)
    .concat("\n")
    .concat(libExports)
);
