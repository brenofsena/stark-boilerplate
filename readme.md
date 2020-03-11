<p align="center">
  <img src="https://raw.githubusercontent.com/brenofsena/stark-boilerplate/master/src/images/stark.png" alt="Stark">
</p>

> Stark Boilerplate

## Install NodeJS, NPM (or Yarn) and Webpack

- [Node.js](https://nodejs.org/) - `^10.0.0`
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)


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

# ESLint fix
$ npm run fix:js

# Stylelint
$ npm run lint:scss

# Stylelint fix
$ npm run fix:scss

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
$ npm run test:coverage
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
📦build                       # Compiled and minified files
📦dist                        # Compiled files
📂src
┃ ┣ 📂__tests__
┃ ┣ 📂images
┃ ┣ 📂sass
┣ ┣ 📜app.js
┣ ┣ 📜index.html
┣ ┣ 📜index.js
┣ 📜.babelrc
┣ 📜.editorconfig
┣ 📜.eslintrc.js
┣ 📜.gitignore
┣ 📜.node-version
┣ 📜.npmrc
┣ 📜.stylelintrc
┣ 📜commitlint.config.js
┣ 📜config.js
┣ 📜enzyme.config.js
┣ 📜jest.config.js
┣ 📜license
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜readme.md
┣ 📜webpack.config.common.js
┣ 📜webpack.config.dev.js
┣ 📜webpack.config.prod.js
```

## Built with

- Node.js
- Webpack
- Babel
- ES6+
- React.js
- SASS
- PostCSS
- Styled Components
- Jest
- Enzyme
- ESLint
- Stylelint
- Commitlint
- PWA

[MIT License](./license) (c) Breno Sena
