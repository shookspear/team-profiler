const Manager = require('../lib/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('Mary', '4', 'mary@me.com', '100');

    expect(manager.name).toBe('Mary');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('mary@me.com');
    expect(manager.officeNumber).toBe('100');
});

test('tests if correct Name is returned', () => {
    const manager = new Manager('Mary', '4', 'mary@me.com', '100');

    expect(manager.getName()).toBe('Mary');
});

test('tests if correct ID is returned', () => {
    const manager = new Manager('Mary', '4', 'mary@me.com', '100');

    expect(manager.getId()).toBe('4');
});

test('tests if correct Email is returned', () => {
    const manager = new Manager('Mary', '4', 'mary@me.com', '100');

    expect(manager.getEmail()).toBe('mary@me.com');
});

test('tests if correct Role is returned', () => {
    const manager = new Manager('Mary', '4', 'mary@me.com', '100');

    expect(manager.getRole()).toBe('Manager');
});