// const inquirer = require("inquirer");
// const addEngineer = require("./addengineer");
// const addIntern = require("./addintern");

// async function askForEmployee() {
//   const res = await inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "choice",
//         message: "Add a new member?",
//         choices: ["Engineer", "Intern", "No, that's all."],
//       },
//     ]);
//   switch (res.choice) {
//     case "No, that's all.":
//       return console.log(
//         `Thanks! Your updated team file can be found in the directory where this app is located.`
//       );
//     case "Engineer":
//       addEngineer();
//       break;
//     case "Intern":
//       addIntern();
//       break;
//     default:
//       return console.error(`Sorry, something went wrong.`);
//   }
// }

// module.exports = askForEmployee;
