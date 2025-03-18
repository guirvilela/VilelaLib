const path = require('path');

function compose(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

function byPassMDXRules(config) {
  const mdxRule = config.module.rules.find(
    (x) => String(x.test) === String(/(stories|story)\.mdx$/)
  );
  config.module.rules = [
    ...config.module.rules.filter((x) => String(x.test) !== String(/\.mdx$/)),
    {
      ...mdxRule,
      test: /\.mdx$/
    }
  ];
  return config;
}

function resolveImportAlias(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~/utils': path.resolve(__dirname, '../src/utils')
  };
  return config;
}

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  features: {
    previewMdx2: true
  },
  stories: [
    '../src/index.mdx',
    '../src/1-guide/index.mdx',
    '../src/1-guide/**/*.@(tsx|mdx)',
    '../src/2-design-system/index.mdx',
    '../src/2-design-system/**/*.@(tsx|mdx)',
    '../src/3-libs/index.mdx',
    '../src/3-libs/**/*.@(tsx|mdx)',
    '../src/**/*.@(tsx|mdx)'
  ],
  staticDirs: ['../public'],
  webpackFinal: compose(byPassMDXRules, resolveImportAlias)
};
