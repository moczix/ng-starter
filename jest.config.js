require('jest-preset-angular/ngcc-jest-processor');
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'jest-preset-angular',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ['html'],
  coveragePathIgnorePatterns: ['/testing/'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' } ),
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json'
    }
  }
}