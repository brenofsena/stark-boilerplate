module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    react: true
  },
  globals: {
    "$": true,
    "jQuery": true,
    "APP": true,
    "ClassAvanti": true,
    "AvantiSearch": true,
    "i": true,
    "document": true,
    "window": true,
    "Vtex": true,
    "vtexjs": true,
    "skuJson": true,
    "Cookies": true,
    "ga": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 0,
    'linebreak-style': 'off',
    'no-undef': 0,
    'no-extra-semi': 0,
    quotes: 0,
    semi: 0
  },
  env: {
    node: true
  }
}
