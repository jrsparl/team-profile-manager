const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '01', 'john@test.com');
    
    expect(engineer.id).toBe('01')
    expect(engineer.email).toBe('john@test.com')
    expect(typeof(engineer)).toBe('object');
    
});

test('gets engineer name', () => {
    const engineer = new Engineer();

    expect(engineer.getName()).toBe(this.name);
});

test('gets engineer id', () => {
    const engineer = new Engineer();

    expect(engineer.getID()).toBe(this.id);
});

test('gets engineer email', () => {
    const engineer = new Engineer();

    expect(engineer.getEmail()).toBe(this.email);
});

test('gets engineer github link', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toBe(this.github);
});