/**
 * @summary
 * Global test environment setup
 * Configures test environment and shared utilities
 *
 * @module tests/testSetup
 */

/**
 * @summary Test environment configuration
 */
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

/**
 * @summary Global test setup
 */
beforeAll(() => {
  console.log('Test environment initialized');
});

/**
 * @summary Global test teardown
 */
afterAll(() => {
  console.log('Test environment cleanup completed');
});
