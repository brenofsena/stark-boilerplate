module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'jest', 'cypress'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
    cypress: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
