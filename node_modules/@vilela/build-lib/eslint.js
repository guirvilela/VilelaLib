module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true
  },
  rules: {
    'comma-dangle': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'off'
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/out/*',
    '**/dist/*',
    '**/build/*',
    '**/lib/*',
    '**/coverage/*',
    '**/.next/*',
    '**/.swc/*'
  ]
};
