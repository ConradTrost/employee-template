const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('tests the engineer object', () => {
    const engineer = new Engineer('Mark', 4, 'm@mail.com', 'gitTheHub');

    expect(engineer.getName()).toBe('Mark');
    expect(engineer.getID()).toBe(4);
    expect(engineer.getEmail()).toBe('m@mail.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('gitTheHub');
});