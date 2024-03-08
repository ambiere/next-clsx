import * as esbuild from "esbuild";
import { existsSync, readFileSync, rm, writeFileSync } from "fs";
import zlib from "zlib";

async function bundle(file) {
  existsSync("dist") && rm("dist", () => {}, { recursive: true });
  await esbuild.build({
    entryPoints: ["src/index.mjs"],
    minify: true,
    bundle: true,
    outfile: "dist/index.mjs",
  });

  const input = readFileSync(file, "utf-8");
  let result = await esbuild.transform(input, {
    format: "cjs",
  });

  if (result.code) {
    writeFileSync("dist/index.js", result.code);
    const mjs = zlib.gzipSync(input).byteLength;
    const cjs = zlib.gzipSync(result.code).byteLength;
    console.log('"%s" (%d b)', "dist/index.js", cjs);
    console.log('"%s" (%d b)', file, mjs);
  }
}

await bundle("dist/index.mjs");
