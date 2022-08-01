/* eslint-env node */

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@layout(.*)$": "<rootDir>/src/layout$1",
  },
};
