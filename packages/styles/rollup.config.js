/* eslint-disable @typescript-eslint/no-var-requires */
const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');

const pkg = require('./package.json');

module.exports = require('@hubert/build-lib/rollup')(pkg, [
  {
    input: 'src/styles.scss',
    plugins: [
      scss({ output: 'lib/styles.css', outputStyle: 'compressed' }),
      copy({
        targets: [
          { src: 'src/fonts/*.woff2', dest: 'lib/fonts' },
          { src: 'src/icons/*.svg', dest: 'lib/icons' },
          { src: 'src/animations/lottie/*.json', dest: 'lib/animations' }
        ]
      })
    ]
  },
  {
    input: 'src/fonts/styles.scss',
    plugins: [scss({ output: 'lib/fonts.css', outputStyle: 'compressed' })]
  },
  {
    input: 'src/utils/normalize.scss',
    plugins: [scss({ output: 'lib/normalize.css', outputStyle: 'compressed' })]
  }
]);
