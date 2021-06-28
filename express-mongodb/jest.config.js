module.exports = {
  bail: 1,
  coverageDirectory: './out-tests/coverage',
  coverageProvider: 'v8',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.tests.json'
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/**/?(*.)+(test|spec).[t]s?(x)'
  ]
};
