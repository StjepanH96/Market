module.exports = {
    clearMocks: true,
    rootDir: "src",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "^@/components/(.*)$": "<rootDir>/components/$1",
      "^@/lib/(.*)$": "<rootDir>/lib/$1",
      "^@/styled-components/(.*)$": "<rootDir>/styled-components/$1",
      "\\.(css|less|scss|sass)$": "<rootDir>/components/__mocks__/styleMock.js"
    },
    testEnvironment: "jest-environment-jsdom",
    resetMocks: true,
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}", 
      "!**/node_modules/**", 
      "!**/vendor/**"
    ],
    moduleDirectories: [
      "node_modules",
      "<rootDir>" 
    ],
    moduleFileExtensions: [
      "js", 
      "jsx", 
      "ts", 
      "tsx", 
      "json", 
      "node"
    ],
    resetModules: true,
  };
