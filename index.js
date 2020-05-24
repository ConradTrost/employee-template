const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateData = require('./src/html-template');
const fs = require('fs');

const dataArray = [];

const employeePrompt =     
    [
        {
            type: 'text',
            name: 'name',
            message: 'What is the employees name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employees id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the employees email?'
        }
];

const managerPrompt =     
    [
        {
            type: 'text',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the managers id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the managers office number?'
        }
];

const engineerPrompt =     
    [
        {
            type: 'text',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the engineers id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the engineers email?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is the engineers Github?'
        }
];

const internPrompt =     
    [
        {
            type: 'text',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the interns id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'text',
            name: 'school',
            message: 'What is the interns School?'
        }
];

const addAnother = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addConfirm',
            message: 'Would you like to add an employee?',
            default: false
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            when: ({ addConfirm }) => addConfirm
        }
    ])
    .then((data) => {
        whichEmployee(data.employeeType);
    });
}

const whichEmployee = type => {
    if(type === 'Manager'){
        promptManagers();
    } else if(type === 'Employee'){
        promptEmployees();
    } else if(type === 'Engineer'){
        promptEngineers();
    } else if(type === 'Intern'){
        promtInterns();
    } else {
        console.log('Thanks for using this employee template. Bye!')
        // console.log(dataArray);
        // templateData(dataArray)
        // templateData(dataArray)
        writeToFile('./dist/index.html', templateData(dataArray));
    } // return writeToFile('./dist/index.html', templateData(dataArray));
}

function promptEmployees() {
    inquirer.prompt(employeePrompt)
        .then((data) => {
            const employee = new Employee(data.name, data.id, data.email);
            console.log(employee);
            dataArray.push(employee);
            addAnother();
        });
}

function promptManagers() {
    inquirer.prompt(managerPrompt)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            console.log(manager);
            dataArray.push(manager);
            addAnother();
    });
}

function promptEngineers() {
    inquirer.prompt(engineerPrompt)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            console.log(engineer);
            dataArray.push(engineer);
            addAnother();
    });
}

function promtInterns() {
    inquirer.prompt(internPrompt)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            console.log(intern);
            dataArray.push(intern);
            addAnother();
    });
}

const init = () => {
    addAnother();
}

function writeToFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if(err){
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'HTML Generated!'
            })
        })
    })
}

init();
