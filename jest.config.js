module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",

    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
};
