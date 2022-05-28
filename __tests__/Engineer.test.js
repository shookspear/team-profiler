const Engineer = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('sixteen@bible.com');
    expect(engineer.github).toBe('gituser');
});

test('tests if correct Name is returned', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser')

    expect(engineer.getName()).toBe('John');
});

test('tests if correct ID is returned', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser')

    expect(engineer.getId()).toBe('3');
});

test('tests if correct Email is returned', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser')

    expect(engineer.getEmail()).toBe('sixteen@bible.com');
});

test('tests if correct GitHub user is returned', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser')

    expect(engineer.getGithub()).toBe('gituser');
});

test('tests if correct role is returned', () => {
    const engineer = new Engineer('John', '3', 'sixteen@bible.com', 'gituser')

    expect(engineer.getRole()).toBe('Engineer');
});