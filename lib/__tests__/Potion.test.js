const { TestWatcher } = require('jest');
const Potion = require('../lib/Potion.js');

TestWatcher('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

TestWatcher('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potioon.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});