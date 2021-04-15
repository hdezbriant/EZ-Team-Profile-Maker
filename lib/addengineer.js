const fs = require("fs");
const inquirer = require("inquirer");
const teamPath = "./dist/teampage.html";

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer id:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer email:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer GitHub username:",
        },
    ])
        .then((data) => {
            const obj = new Engineer(data.name, data.id, data.email, data.github);
            // fs.appendFileSync(filePath, makeCard(obj));
            // askMember();
        })
};

module.exports = addEngineer()