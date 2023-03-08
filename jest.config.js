const config = {
    "transformIgnorePatterns": [
        "node_modules/(?!react-dnd)/"
    ],
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": [ "@testing-library/jest-dom/extend-expect" ]
};

module.exports = config;
