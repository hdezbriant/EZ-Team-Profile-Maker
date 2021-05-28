// const fs = require("fs");
// const inquirer = require("inquirer");
// const teamPath = "./team-profile.html";
// const anotherEmployee = require("./moreEmployees");

// async function addEngineer() {
//   try {
//     const engi = await inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter engineer name:",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Enter engineer id:",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter engineer email:",
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter engineer GitHub username:",
//       },
//     ]);
//     let engiCard = `<div class="col-3 px-2">
//       <div class="card m-1 border-dark">
//         <div class="card-header bg-warning">
//           <h4 class="card-title text-light">${engi.name}</h4>
//           <h5 class="card-subtitle text-light">Engineer</h5>
//         </div>
//         <div class="card-body p-0">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: <span>${engi.id}</span></li>
//             <li class="list-group-item">
//               Email:
//               <a href="mailto:${engi.email}">${engi.email}</a>
//             </li>
//             <li class="list-group-item">
//               GitHub: <a href="https://github.com/${engi.github}">${engi.github}</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>`;
//     fs.appendFileSync(teamPath, engiCard);
//     anotherEmployee();
//   } catch (err) {
//     return console.log(err);
//   }
// }

// module.exports = addEngineer;
