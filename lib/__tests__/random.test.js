const { TestWatcher } = require('jest');
const randomNumber = require('../lib/random.test.js');

TestWatcher('generates a random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});