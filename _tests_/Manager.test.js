const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('John', '01', 'john@test.com');
    
    expect(manager.name).toBe('John');
    expect(manager.id).toBe('01');
    expect(manager.email).toBe('john@test.com');
    expect(typeof(manager)).toBe('object');
    
});

test('gets manager name', () => {
    const manager = new Manager();

    expect(manager.getName()).toBe(this.name);
});

test('gets manager id', () => {
    const manager = new Manager();

    expect(manager.getID()).toBe(this.id);
});

test('gets manager email', () => {
    const manager = new Manager();

    expect(manager.getEmail()).toBe(this.email);
});

test('gets manager office number', () => {
    const manager = new Manager();

    expect(manager.getOfficeNumber()).toBe(this.officenumber);
});