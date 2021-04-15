const fs = require("fs");
const inquirer = require("inquirer");
const teamPath = "./teampage.html";

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern id:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern email:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern school:",
        },
    ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // fs.appendFileSync(teamPath, makeCard(intern));
            // askMember();
        })
};

module.exports = addIntern();