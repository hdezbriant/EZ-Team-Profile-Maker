const fs = require("fs");
const inquirer = require("inquirer");
const teamPath = "teampage.html";
const Manager = require("./lib/addManager");
const Engineer = require("./lib/addEngineer");
const Intern = require("./lib/addIntern");

const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>My Team!</title>
    </head>
    
    <body>
        <div class="jumbotron bg-secondary">
            <h1 class="text-center text-light">
                My Team
            </h1>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 px-2">
                    <div class="card m-1 border-dark">
                        <div class="card-header bg-danger">
                            <h4 class="card-title text-light">Bigboi</h4>
                            <h5 class="card-subtitle text-light">Manager</h5>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <span>1</span></li>
                                <li class="list-group-item">Email: <a href="mailto:man@email.com">man@email.com</a></li>
                                <li class="list-group-item">Office Number: <span>2</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-2 px-2">
                    <div class="card m-1 border-dark">
                        <div class="card-header bg-danger">
                            <h4 class="card-title text-light">Mediumlad</h4>
                            <h5 class="card-subtitle text-light">Engineer</h5>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <span>2</span></li>
                                <li class="list-group-item">Email: <a href="mailto:medlad@email.com">Mediumlad@email.com</a>
                                </li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/">GithubUsername</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-2 px-2">
                    <div class="card m-1 border-dark">
                        <div class="card-header bg-danger">
                            <h4 class="card-title text-light">Smallboi</h4>
                            <h5 class="card-subtitle text-light">Intern</h5>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <span>3</span></li>
                                <li class="list-group-item">Email: <a href="mailto:smol@boi.com">smol@boi.com</a></li>
                                <li class="list-group-item">School: <span>schoolname</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;

// Generate card with info
// ==========================

// function showEmployeeCard(obj) {
//     const partOne = divs from HTML for cards;
//     return;
// };

// Ask for additional entries, if no, stop
// ======================================

// function askMember() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "choice",
//             message: "Add a new member?",
//             choices: ["Engineer", "Intern", "No"],
//         },
//     ])
//         .then((data) => {
//             if (data.choice === "No") {
//                 fs.appendFileSync(teamPath, html);
//             } else if (data.choice === "Engineer") {
//                 addEngineer();
//             } else {
//                 addIntern();
//             }
//         })
// };

function writeHTML() {
  fs.writeFileSync(teamPath, html);
}

writeHTML();
