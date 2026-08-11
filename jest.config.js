const packageJson = require('./package.json');

module.exports = {
    displayName: packageJson.name,
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    coverageThreshold: {
        global: {
            lines: 0,
        },
    },
    moduleDirectories: ['<rootDir>/src', 'node_modules'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/__tests__/**'],
    coverageDirectory: '<rootDir>/coverage/',
    testMatch: ['**/__tests__/**/(spec|test|index).(js|ts)?(x)', '**/(*.)+(spec|test).(js|ts)?(x)'],
    transform: {
        '^.+\\.(j|t)sx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.jest.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    },
};
