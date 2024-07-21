/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require("./package.json");
module.exports = require("@vilela/build-lib/rollup")(pkg);
