
const generateEmployeeData = (employee, manager, engineer, intern) => {
    htmlVar = ``;
    
    if(employee){
        for(n in employee){
            htmlVar += `
            <div class="employee col-3 card">
                <div class="card-body">
                    <h2 class="card-title">${employee[n].name}</h2>
                    <div class="card-subtitle"><i class="icon fas fa-briefcase"></i>Employee</div>
                    <p>ID: ${employee[n].id}<br>
                    Email: ${employee[n].email}<br>
                    </p>
                </div>
            </div>`
    }
}
    if(manager) {
        for(n in manager){
            htmlVar += `
            <div class="manager col-3 card">
                <div class="card-body">
                    <h2 class="card-title">${manager[n].name}</h2>
                    <div class="card-subtitle"><i class="icon fab fa-black-tie"></i>Manager</div>
                    <p>ID: ${manager[n].id}<br>
                    Email: ${manager[n].email}<br>
                    Office Number: ${manager[n].officeNum}
                    </p>
                </div>
            </div>`
        }
    }

    if(engineer) {
        for(n in engineer){
            htmlVar += `
            <div class="engineer col-3 card">
                <div class="card-body">
                    <h2 class="card-title">${engineer[n].name}</h2>
                    <div class="card-subtitle"><i class="icon fas fa-tools"></i></i>Engineer</div>
                    <p class="card-text">ID: ${engineer[n].id}<br>
                    Email: ${engineer[n].email}<br>
                    Github: <a href="https://github.com/${engineer[n].github}">${engineer[n].github}</a>
                    </p>
                </div>
            </div>`
        }
    }

    if(intern) {
        for(n in intern){
            htmlVar += `
            <div class="intern col-3 card">
                <div class="card-body">
                    <h2 class="card-title">${intern[n].name}</h2>
                    <div class="card-subtitle"><i class="icon fas fa-school"></i>Intern</div>
                    <p class="card-text">ID: ${intern[n].id}<br>
                    Email: ${intern[n].email}<br>
                    School: ${intern[n].school}
                    </p>
                </div>
            </div>`
        }
    }
    return htmlVar;
};

module.exports = templateData => {

    const data = templateData;
    const employee = [];
    const manager = [];
    const engineer = [];
    const intern = [];

    // Returns employee type based on role in all index of array
    for(n in data){
        if(data[n].role === 'Employee'){
            employee.push(data[n]);
        } else if(data[n].role === 'Manager'){
            manager.push(data[n]);
        } else if(data[n].role === 'Engineer'){
            engineer.push(data[n]);
        } else if(data[n].role === 'Intern'){
            intern.push(data[n]);
        }
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <header>
            <div class="navbar">
                <h2>Team Profile Generator</h2>
            </div>
        </header>

        <section class="team-cards row container">${generateEmployeeData(employee, manager, engineer, intern)}</section>
    </body>

    </html>
    `
};