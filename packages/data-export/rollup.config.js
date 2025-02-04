/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('./package.json');

module.exports = require('@hubert/build-lib/rollup')(pkg);
