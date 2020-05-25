
const generateEmployeeData = (manager, engineer, intern) => {
    htmlVar = ``;

    if(manager) {
        for(n in manager){
            htmlVar += `
            <div class="manager col-3 card">
                <div class="card-body">
                    <div class="card-header">
                        <h2 class="card-title">${manager[n].name}</h2>
                        <div class="card-subtitle"><i class="icon fab fa-black-tie"></i>Manager</div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager[n].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager[n].email}" target="_blank">${manager[n].email}</a></li>
                        <li class="list-group-item">Office Number: ${manager[n].officeNum}</li>
                    </ul>
                </div>
            </div>`
        }
    }

    if(engineer) {
        for(n in engineer){
            htmlVar += `
            <div class="engineer col-3 card">
                <div class="card-body">
                    <div class="card-header">
                        <h2 class="card-title">${engineer[n].name}</h2>
                        <div class="card-subtitle"><i class="icon fas fa-tools"></i></i>Engineer</div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer[n].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer[n].email}" target="_blank">${engineer[n].email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer[n].github}" target="_blank">${engineer[n].github}</a></li>
                    </ul>
                </div>
            </div>`
        }
    }

    if(intern) {
        for(n in intern){
            htmlVar += `
            <div class="intern col-3 card">
                <div class="card-body">
                    <div class="card-header">
                        <h2 class="card-title">${intern[n].name}</h2>
                        <div class="card-subtitle"><i class="icon fas fa-school"></i>Intern</div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern[n].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern[n].email}" target="_blank">${intern[n].email}</a></li>
                        <li class="list-group-item">School: ${intern[n].school}</li>
                    </ul>
                </div>
            </div>`
        }
    }
    return htmlVar;
};

module.exports = templateData => {

    const data = templateData;
    const manager = [];
    const engineer = [];
    const intern = [];

    // Returns employee type based on role in all index of array
    for(n in data){
        if(data[n].role === 'Manager'){
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

        <section class="team-cards row container">${generateEmployeeData(manager, engineer, intern)}</section>
    </body>

    </html>
    `
};