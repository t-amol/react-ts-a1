module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/src/**/*.test.tsx', '<rootDir>/src/**/*.test.ts'],
};
