module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-extra-semi': 0,
    semi: 0
  },
  env: {
    'jest/globals': true
  },
  globals: {
    document: true
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react,
    },
  }
}
