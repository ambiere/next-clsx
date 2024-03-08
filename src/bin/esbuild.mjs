import * as esbuild from "esbuild";
import { existsSync, readFileSync, rm } from "fs";
import zlib from "zlib";

async function bundle(file, ext, fmt) {
  existsSync("dist") && rm("dist", () => {}, { recursive: true });
  await esbuild.build({
    entryPoints: [file],
    minify: true,
    bundle: true,
    format: `${fmt}`,
    outfile: `dist/index${ext}`,
  });
}

function logFileSize(file) {
  const input = readFileSync(file, "utf-8");
  if (input) {
    const fileSize = zlib.gzipSync(input).byteLength;
    console.log('"%s" (%d b)', file, fileSize);
  }
}

await bundle("src/index.js", ".mjs", "esm");
await bundle("src/index.js", ".js", "cjs");
logFileSize("dist/index.js");
logFileSize("dist/index.mjs");
