const Intern = require('../lib/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.name).toBe('Mike');
    expect(intern.id).toBe('6');
    expect(intern.email).toBe('mike@mail.com');
    expect(intern.school).toBe('yale');
});

test('tests if correct Name is returned', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.getName()).toBe('Tester');
});

test('tests if correct ID is returned', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.getId()).toBe('2');
});

test('tests if correct Email is returned', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.getEmail()).toBe('testing@mail.com');
});

test('tests if correct School is returned', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.getSchool()).toBe('testschool');
});

test('tests if correct Role is returned', () => {
    const intern = new Intern('Mike', '6', 'mike@me.com', 'yale');

    expect(intern.getRole()).toBe('Intern');
});