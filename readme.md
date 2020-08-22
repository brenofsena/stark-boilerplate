<p align="center">
  <img src="https://raw.githubusercontent.com/brenofsena/stark-boilerplate/master/src/images/stark.png" alt="Stark">
</p>

> Stark Boilerplate

## Run project

```sh
# Clone repository
$ git clone https://github.com/brenofsena/stark-boilerplate

# Install dependencies
$ cd stark-boilerplate

$ npm install

# Run in development mode
$ npm start

# Generate build files
$ npm run build
```

## Lint

```sh
# ~/stark-boilerplate

# ESLint
$ npm run lint:js

# Stylelint
$ npm run lint:scss

# Lint JS and SCSS
$ npm run lint
```

## Tests

```sh
# ~/stark-boilerplate

# Tests
$ npm run test

# Watch tests
$ npm run test:watch

# Code coverage
$ npm run test:ci
```

## Commits

`<type>[optional scope]: <description>`

`feat:` a feature that is visible for end users.

`fix:` a bugfix that is visible for end users.

`chore:` a change that doesn't impact end users (e.g. chances to CI pipeline)

`docs:` a change in the README or documentation

`refactor:` a change in production code focused on readability, style and/or performance.

## Directory structure

```
📂__mocks__
📂src
📂static
┃ ┣ 📂__tests__
┃ ┣ 📂images
┃ ┣ 📂style
┣ ┣ 📜app.jsx
┣ ┣ 📜index.jsx
┣ 📜.babelrc
┣ 📜.editorconfig
┣ 📜.eslintignore
┣ 📜.eslintrc.js
┣ 📜.gitignore
┣ 📜.huskyrc.json
┣ 📜.lintstagedrc.json
┣ 📜.npmrc
┣ 📜.prettierrc
┣ 📜.stylelintrc.json
┣ 📜config.js
┣ 📜jest.config.js
┣ 📜license
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜jest.setup.js
┣ 📜readme.md
┣ 📜webpack.common.js
┣ 📜webpack.dev.js
┣ 📜webpack.prod.js
```

## Built with

- Webpack
- Babel
- React
- SASS
- PostCSS
- CSS Modules
- Jest
- React Testing Library
- Prettier
- ESLint
- Stylelint

[MIT License](./license) (c) Breno Sena
