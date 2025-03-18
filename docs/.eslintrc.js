// eslint-disable-next-line @typescript-eslint/no-var-requires
const root = require('@hubert/build-lib/eslint');
module.exports = {
  ...root,
  extends: [...root.extends, 'plugin:mdx/recommended'],
  overrides: [
    {
      files: ['*.mdx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
};
