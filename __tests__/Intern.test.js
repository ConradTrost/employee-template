const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('tests the intern object', () => {
    const intern = new Intern('Joe', 5, 'j@mail.com', 'UT');

    expect(intern.getName()).toBe('Joe');
    expect(intern.getID()).toBe(5);
    expect(intern.getEmail()).toBe('j@mail.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('UT');
});