<p align="center">
  <img src="https://raw.githubusercontent.com/brenofsena/stark-boilerplate/master/src/images/stark.png" alt="Stark">
</p>

> Stark Boilerplate

## Install NodeJS, NPM (or Yarn) and Webpack

- [Node.js](https://nodejs.org/) - `^10.0.0`
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

```sh
$ npm i -g webpack webpack-cli

# or

$ yarn add global webpack webpack-cli
```

## Run project

```sh
# Clone repository
$ git clone https://github.com/brenofsena/stark-boilerplate

# Install dependencies
$ cd stark-boilerplate

$ npm install

# or

$ yarn install

# Run in development mode
$ npm start

# or

$ yarn start

# Generate build files
$ npm run build

# or

$ yarn build
```

## Lint

```sh
# ~/stark-boilerplate

# ESLint
$ npm run lint:js

# or

$ yarn lint:js

# ESLint fix
$ npm run fix:js

# or

$ yarn fix:js

# Stylelint
$ npm run lint:scss

# or

$ yarn lint:scss

# Stylelint fix
$ npm run fix:scss

# or

$ yarn fix:scss

# Lint JS and SCSS
$ npm run lint

# or

$ yarn lint
```

## Tests

```sh
# ~/stark-boilerplate

# Tests
$ npm run test

# or

$ yarn test

# Watch tests
$ npm run test:watch

# or

$ yarn test:watch

# Code coverage
$ npm run test:coverage

# or

$ yarn test:coverage
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
📦build                       # Compiled and minified files
📦dist                        # Compiled files
📦src
┃ ┣ 📂components
┃ ┣ 📂images
┃ ┣ 📂js
┃ ┣ 📂sass
┣ 📜.babelrc
┣ 📜.editorconfig
┣ 📜.eslintrc.js
┣ 📜.gitignore
┣ 📜.node-version
┣ 📜.npmrc
┣ 📜.stylelintrc
┣ 📜commitlint.config.js
┣ 📜config.js
┣ 📜jest.config.js
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
- ESLint
- Stylelint
- Commitlint
- PWA
