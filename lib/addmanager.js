// const fs = require("fs");
// const inquirer = require("inquirer");
// const teamPath = "./team-profile.html";
// const askForEmployee = require("./askForEmployee");

// async function managerPrompt() {
//   try {
//     const mgr = await inquirer.prompt([
//       // {
//       //   type: "list",
//       //   choices: ["Yes", "No"],
//       //   name: "askForTheManager"
//       //   message: "Are you the manager of this team?",
//       // },
//       {
//         type: "input",
//         name: "name",
//         message: "Who is the manager of this team?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is your manager's email adress?",
//       },
//       {
//         type: "input",
//         name: "officeNumber",
//         message: "And their office number?",
//       },
//     ]);
//     let mgrCard = `<div class="col-3 px-2">
//           <div class="card m-1 border-dark">
//             <div class="card-header bg-danger">
//               <h4 class="card-title text-light">${mgr.name}</h4>
//               <h5 class="card-subtitle text-light">Manager</h5>
//             </div>
//             <div class="card-body p-0">
//               <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: <span>1</span></li>
//                 <li class="list-group-item">
//                   Email: <a href="mailto:${mgr.email}">${mgr.email}</a>
//                 </li>
//                 <li class="list-group-item">Office Number: <span>${mgr.officeNumber}</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>`;
//     fs.appendFileSync(teamPath, mgrCard);
//     askForEmployee();
//   } catch (err) {
//     return console.error(err);
//   }
// }

// module.exports = managerPrompt;
