// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('@hubert/build-lib/babel')(
  ['@babel/preset-react'],
  [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            },
            'removeDimensions'
          ]
        }
      }
    ],
    [
      'styled-components',
      {
        fileName: false,
        meaninglessFileNames: ['styles']
      }
    ]
  ]
);
