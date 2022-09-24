module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: [],
    transform: {
        "^.+\\.(ts)$": [
            "ts-jest",
            {
                tsconfig: "<rootDir>/tsconfig.jest.json",
                diagnostics: false
            }
        ]
    }
};