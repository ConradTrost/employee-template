const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
     constructor(name, id, email, officeNum, role='Manager'){
        super(name, id, email, role);
        this.officeNum = officeNum;
     }

     officeNumber() {
         return this.officeNum;
     }
}

module.exports = Manager;
