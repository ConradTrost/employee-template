const Employee = require('../lib/Employee');

test('tests the employee object', () => {
    const employee = new Employee('Bob', 1, 'b@mail.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('tests the employee methods', () => {
    const employee = new Employee('Dave', 2, 'd@mail.com');

    expect(employee.getName()).toBe('Dave');
    expect(employee.getID()).toBe(2);
    expect(employee.getEmail()).toBe('d@mail.com');
    expect(employee.getRole()).toBe('Employee');
});

