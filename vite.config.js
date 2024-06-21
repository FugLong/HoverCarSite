import topLevelAwait from "vite-plugin-top-level-await";
import wasm from 'vite-plugin-wasm';

export default {
  root: 'src/', // Specifies the directory where your source files are located
  publicDir: '../static/', // Adjust if necessary; this is relative to `root` and points to your static assets
  base: './', // Base public path when served in development or production
  build: {
      outDir: './dist', // Specifies the output directory for build files, relative to `root`
  },
  plugins: [
      topLevelAwait({
          // The export name of top-level await promise for each chunk module
          promiseExportName: "__tla",
          // The function to generate import names of top-level await promise in each chunk module
          promiseImportName: i => `__tla_${i}`
      }),
      wasm()
  ]
}