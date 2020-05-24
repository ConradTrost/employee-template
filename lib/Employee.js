const inquirer = require('inquirer');

// function inqPrompt() {
//     inquirer
//         .prompt([
//             {
//                 type: 'text',
//                 name: 'name',
//                 message: 'Enter employees name:'
//             }
//         ])
//         .then(({ name }) => {
//             this.employee = new Employee(name)
//         });
// }

class Employee {
      constructor(name, id, email, role='Employee'){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
      };

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    }
};

module.exports = Employee;
