module.exports = {
    preset: 'react-native',

    testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],

    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components/native',
    ],
    setupFiles: ['./jestSetupFiles.js'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
    coverageReporters: ['lcov'],
};
