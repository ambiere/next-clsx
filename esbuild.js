const esbuild = require('esbuild');

(async () => {
  await esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    outfile: 'dist/index.js'
  })
})()
