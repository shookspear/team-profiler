const Employee = require("../lib/Employee");

test('creates Employee object', () => {
    const employee = new Employee('John', '3', 'sixteen@bible.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('sixteen@bible.com');
});

test('tests if correct Name is returned', () => {
    const employee = new Employee('John', '3', 'sixteen@bible.com');

    expect(employee.getName()).toBe('John');
});

test('tests if correct ID is returned', () => {
    const employee = new Employee('John', '3', 'sixteen@bible.com');

    expect(employee.getId()).toBe('3');
});

test('tests if correct email is returned', () => {
    const employee = new Employee('John', '3', 'sixteen@bible.com');

    expect(employee.getEmail()).toBe('sixteen@bible.com');
});

test('tests if correct role is returned', () => {
    const employee = new Employee('John', '3', 'sixteen@bible.com');

    expect(employee.getRole()).toBe('Employee');
});