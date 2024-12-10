function factoryBabel(presets = [], plugins = []) {
  return {
    presets: ['@babel/env', '@babel/typescript', ...presets],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      ...plugins
    ]
  };
}

module.exports = factoryBabel;
