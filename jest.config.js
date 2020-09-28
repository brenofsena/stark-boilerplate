module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/index.jsx',
    '!<rootDir>/src/**/index.js',
    '!<rootDir>/src/**/styles.js',
    '!<rootDir>/src/routes/**',
    '!<rootDir>/src/test/cypress/**',
    '!<rootDir>/src/utils/test/helpers/**',
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test/cypress'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
