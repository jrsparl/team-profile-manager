const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John', '01', 'john@test.com');
    
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('01');
    expect(intern.email).toBe('john@test.com');
    expect(typeof(intern)).toBe('object');
    
});

test('gets intern name', () => {
    const intern = new Intern();

    expect(intern.getName()).toBe(this.name);
});

test('gets intern id', () => {
    const intern = new Intern();

    expect(intern.getID()).toBe(this.id);
});

test('gets intern email', () => {
    const intern = new Intern();

    expect(intern.getEmail()).toBe(this.email);
});

test('gets intern school', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toBe(this.school);
});