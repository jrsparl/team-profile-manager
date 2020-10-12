const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', '01', 'john@test.com');
    expect(employee.name).toBe('John')
    expect(employee.id).toBe('01')
    expect(employee.email).toBe('john@test.com')
    expect(typeof(employee)).toBe('object');
})

test('gets employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toBe(this.name);
});

test('gets employee id', () => {
    const employee = new Employee();

    expect(employee.getID()).toBe(this.id);
});

test('gets employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toBe(this.email);
});