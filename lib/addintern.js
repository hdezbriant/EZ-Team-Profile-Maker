// const fs = require("fs");
// const inquirer = require("inquirer");
// const teamPath = "./team-profile.html";
// const anotherEmployee = require("./moreEmployees");

// function addIntern() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter intern name:",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Enter intern id:",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter intern email:",
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "Enter intern school:",
//       },
//     ])
//     .then((intern) => {
//       let internCard = `<div class="col-3 px-2">
//       <div class="card m-1 border-dark">
//         <div class="card-header bg-secondary">
//           <h4 class="card-title text-light">${intern.name}</h4>
//           <h5 class="card-subtitle text-light">Intern</h5>
//         </div>
//         <div class="card-body p-0">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: <span>${intern.id}</span></li>
//             <li class="list-group-item">
//               Email: <a href="mailto:${intern.email}">${intern.email}</a>
//             </li>
//             <li class="list-group-item">School: <span>${intern.school}</span></li>
//           </ul>
//         </div>
//       </div>
//     </div>`;
//       fs.appendFileSync(teamPath, internCard);
//       anotherEmployee();
//     })
//     .catch((err) => console.error(err));
// }

// module.exports = addIntern;
