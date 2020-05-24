const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('tests the manager object', () => {
    const manager = new Manager('Bob manage', 3, 'b@mail.com', 4);

    expect(manager.getName()).toBe('Bob manage');
    expect(manager.getID()).toBe(3);
    expect(manager.getEmail()).toBe('b@mail.com');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.officeNumber()).toBe(4);
});