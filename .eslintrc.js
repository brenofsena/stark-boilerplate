module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  rules: {
    'no-extra-semi': 0,
    'no-undef': 0,
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
