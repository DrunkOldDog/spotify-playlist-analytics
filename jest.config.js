/* eslint-env node */

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@common(.*)$": "<rootDir>/src/common$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@layout(.*)$": "<rootDir>/src/layout$1",
  },
};
