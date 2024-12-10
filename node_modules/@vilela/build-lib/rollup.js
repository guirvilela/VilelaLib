/* eslint-disable @typescript-eslint/no-var-requires */
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const dts = require('rollup-plugin-dts');

function factoryRollup(pkg = {}, steps = [], plugins = [], inputs = []) {
  const externals = Object.keys(pkg.peerDependencies || {}).map(
    (x) => new RegExp(`^${x}[\/]?.*`, 'gi')
  );
  const extensions = pkg.extensions;

  const stepSource = {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    external: externals,
    plugins: [
      resolve.default({ extensions }),
      commonjs(),
      babel.default({
        extensions,
        babelHelpers: 'bundled',
        include: ['src/**/*']
      }),
      json(),
      ...plugins
    ],
    onwarn: function (warning, handler) {
      if (/external dependency/.test(warning.code)) return;
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      handler(warning);
    }
  };

  const stepDts = {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.types,
        format: 'es'
      }
    ],
    external: externals,
    plugins: [dts.default()]
  };

  return [stepSource, stepDts, ...steps];
}

module.exports = factoryRollup;
