/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('./package.json');
module.exports = require('../build-lib/rollup')(pkg);
