// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('@hubert/build-lib/babel')(
  ['@babel/preset-react'],
  [
    [
      'styled-components',
      {
        fileName: false,
        meaninglessFileNames: ['styles']
      }
    ]
  ]
);
