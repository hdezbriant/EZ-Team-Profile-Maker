const fs = require("fs");
const inquirer = require("inquirer");
const teamPath = "./teampage.html";

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager id:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email:",
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter manager office number:",
        },
    ])
        .then((answers) => {
            const Mgr = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            // fs.appendFileSync(teamPath, makeCard(Mgr));
            // askMember();
        })
};

module.exports = addManager();