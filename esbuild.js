const esbuild = require('esbuild');

(async () => {
  await esbuild.build({
    entryPoints: ['src/vitize.js'],
    bundle: true,
    minify: true,
    outfile: 'dist/vitize.js'
  })
})()
