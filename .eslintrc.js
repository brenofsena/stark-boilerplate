module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  rules: {
    'no-extra-semi': 0,
    semi: 0
  },
  env: {
    node: true
  }
}
