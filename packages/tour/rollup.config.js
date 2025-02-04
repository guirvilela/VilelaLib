/* eslint-disable @typescript-eslint/no-var-requires */
const scss = require('rollup-plugin-scss');

const pkg = require('./package.json');
module.exports = require('@hubert/build-lib/rollup')(pkg, [
  {
    input: ['../../node_modules/intro.js/introjs.css', 'src/styles.scss'],
    plugins: [scss({ output: 'lib/styles.css', outputStyle: 'compressed' })]
  }
]);
