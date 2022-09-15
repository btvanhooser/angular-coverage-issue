import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|@angular|@ngrx|rxjs)'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    },
  },
  collectCoverage: true,
  coverageDirectory: '.coverage',
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  reporters: ['default']
};
export default config;
