// import { connectToDb } from "./db/connection.js";
import inquirer from "inquirer";
import Database from "./db/main.js";

// await connectToDb();

function startCli(): void {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "options",
      choices: [
        `View All Employees`,
        "Add Employee",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    })
    .then(async (choice) => {
      console.log(choice.options);
      switch (choice.options) {
        case `View All Employees`:
          console.log(`View All Employees selected`);
          await viewAllEmps();

          break;
        case `Add Employee`:
          console.log(`Add Employee selected`);
          addNewEmp();
          break;
        case `View All Roles`:
          console.log(`View All Roles selected`);
          await viewAllRole();
          break;
        case `Add Role`:
          console.log(`Add Role selected`);
          addNewRole();
          break;
        case `View All Departments`:
          console.log(`View All Departments selected`);
          viewAllDeps();
          break;
        case `Add Department`:
          {
            console.log(`Add Department selected`);
            addNewDep();
          }
          break;

        default:
          console.log(`Quit`);
          quit();
          break;
      }
    });
}

// finish these
async function viewAllEmps() {
  await Database.createAllEmps().then((data) => {
    console.table(data.rows);
    startCli();
  });
}

async function addNewEmp() {
  // maybe here
  const res = await inquirer.prompt([
    {
      type: "input",
      message: "What is the first name of the new employee?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the last name of the new employee?",
      name: "lastName",
    },
    {
      type: "list",
      message: "What is the role of the new employee?",
      name: "role",
      // research functions in inquirer
      choices: [
        1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15, 16
      ],
    },
    {
      type: "list",
      message: "Who is Manager of the new employee?",
      name: "manager",
      choices: [8, 16, 20, 26],
    },
  ]);
  await Database.createNewEmp([
    res.firstName,
    res.lastName,
    res.role,
    res.manager,
  ]).then((data) => {
    console.table(`New Employee Added: ${data}`);
    startCli();
  });
}
async function viewAllRole() {
  await Database.createAllRole().then((data) => {
    console.table(data.rows);
    startCli();
  });
}
async function addNewRole() {
  await Database.createNewRole([]).then((data) => {
    console.log(data);
    startCli();
  });
}

async function viewAllDeps() {
  await Database.createAllDeps().then((data) => {
    console.table(data.rows);
    startCli();
  });
}

async function addNewDep() {
  const response = await inquirer.prompt({
    type: "input",
    message: "What is the name of the new department?",
    name: "newDepartment",
  });
  await Database.createNewDep([response.newDepartment]).then((data) => {
    console.log(`New Deapartment added: ${data}`);
    startCli();
  });
}

function quit() {
  process.exit();
}

startCli();
