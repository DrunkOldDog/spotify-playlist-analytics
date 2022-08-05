/* eslint-env node */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@common(.*)$": "<rootDir>/src/common$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@layout(.*)$": "<rootDir>/src/layout$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
