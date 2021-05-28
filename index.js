const fs = require("fs");
const inquirer = require("inquirer");
const teamPath = "./team-profile.html";
// const managerPrompt = require("./lib/addManager");
const htmlHead = require("./htmlSkeleton/htmlHead");
const htmlFooter = require("./htmlSkeleton/htmlfooter");

async function managerPrompt() {
  try {
    const mgr = await inquirer.prompt([
      // {
      //   type: "list",
      //   choices: ["Yes", "No"],
      //   name: "askForTheManager"
      //   message: "Are you the manager of this team?",
      // },
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email adress?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "And their office number?",
      },
    ]);
    let mgrCard = `<div class="col-3 px-2">
            <div class="card m-1 border-dark">
              <div class="card-header bg-danger">
                <h4 class="card-title text-light">${mgr.name}</h4>
                <h5 class="card-subtitle text-light">Manager</h5>
              </div>
              <div class="card-body p-0">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: <span>1</span></li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${mgr.email}">${mgr.email}</a>
                  </li>
                  <li class="list-group-item">Office Number: <span>${mgr.officeNumber}</span></li>
                </ul>
              </div>
            </div>
          </div>`;
    fs.appendFileSync(teamPath, mgrCard);
    askForEmployee();
  } catch (err) {
    return console.error(err);
  }
}

async function askForEmployee() {
  const res = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Add a new member?",
      choices: ["Engineer", "Intern", "No, that's all."],
    },
  ]);
  switch (res.choice) {
    case "No, that's all.":
      return console.log(
        `Thanks! Your updated team file can be found in the directory where this app is located.`
      );
    case "Engineer":
      addEngineer();
      break;
    case "Intern":
      addIntern();
      break;
    default:
      return console.error(`Sorry, something went wrong.`);
  }
}

async function addEngineer() {
  try {
    const engi = await inquirer.prompt([
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
    ]);
    let engiCard = `<div class="col-3 px-2">
        <div class="card m-1 border-dark">
          <div class="card-header bg-warning">
            <h4 class="card-title text-light">${engi.name}</h4>
            <h5 class="card-subtitle text-light">Engineer</h5>
          </div>
          <div class="card-body p-0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: <span>${engi.id}</span></li>
              <li class="list-group-item">
                Email:
                <a href="mailto:${engi.email}">${engi.email}</a>
              </li>
              <li class="list-group-item">
                GitHub: <a href="https://github.com/${engi.github}">${engi.github}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
    fs.appendFileSync(teamPath, engiCard);
    anotherEmployee();
  } catch (err) {
    return console.log(err);
  }
}

function addIntern() {
  inquirer
    .prompt([
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
    .then((intern) => {
      let internCard = `<div class="col-3 px-2">
        <div class="card m-1 border-dark">
          <div class="card-header bg-secondary">
            <h4 class="card-title text-light">${intern.name}</h4>
            <h5 class="card-subtitle text-light">Intern</h5>
          </div>
          <div class="card-body p-0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: <span>${intern.id}</span></li>
              <li class="list-group-item">
                Email: <a href="mailto:${intern.email}">${intern.email}</a>
              </li>
              <li class="list-group-item">School: <span>${intern.school}</span></li>
            </ul>
          </div>
        </div>
      </div>`;
      fs.appendFileSync(teamPath, internCard);
      anotherEmployee();
    })
    .catch((err) => console.error(err));
}

async function anotherEmployee() {
  const res = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Add more team members?",
      choices: ["Engineer", "Intern", "No, that's all."],
    },
  ]);
  switch (res.choice) {
    case "No, that's all.":
      writeFooter();
      return console.log(
        `Thanks! Your updated team file can be found in the directory where this app is located.`
      );
    case "Engineer":
      addEngineer();
      break;
    case "Intern":
      addIntern();
      break;
    default:
      return console.error(`Sorry, something went wrong.`);
  }
}

function writeHead() {
  fs.appendFileSync(teamPath, htmlHead);
}

function writeFooter() {
  fs.appendFileSync(teamPath, htmlFooter);
}

async function profileGen() {
  try {
    writeHead();
    await managerPrompt();
  } catch (err) {
    console.error(err);
  }
}

profileGen();
