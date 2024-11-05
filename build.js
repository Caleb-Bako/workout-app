// build.js
require('esbuild').build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'dist/output.js',
    loader: {
      '.js': 'jsx'
    },
  }).catch(() => process.exit(1));
  