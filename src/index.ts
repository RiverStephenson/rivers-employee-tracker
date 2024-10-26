import { connectToDb } from "./db/connection.js";
import inquirer from "inquirer";
import Database from "./db/index.js";

await connectToDb();

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
          startCli();
          break;
        case `Add Employee`:
          console.log(`Add Employee selected`);
          addNewEmp();
          startCli();
          break;
          case `View All Roles`:
            console.log(`View All Roles selected`);
            await viewAllRole();
            startCli();
            break;
        case `Add Role`:
          console.log(`Add Role selected`);
          addNewRole();
          startCli();
          break;
        case `View All Departments`:
          console.log(`View All Departments selected`);
          viewAllDeps();
          startCli();
          break;
        case `Add Department`:
          console.log(`Add Department selected`);
          addNewDep();
          startCli();
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
  await Database.findAllEmps().then((data) => {
    console.table(data.rows);
  });
}

async function addNewEmp() {
// id: number,
// first_name: string,
// last_name: string,
// role_id: number,
// manager_id: number
  await Database.findNewEmp().then((data) => {
    console.table(data.rows);
  });
}
async function viewAllRole() {
  await Database.findAllRole().then((data) => {
    console.table(data.rows);
  });
}
async function addNewRole() {
  await Database.findNewRole().then((data) => {
    console.log(data);
  });
}

async function viewAllDeps() {
  await Database.findAllDeps().then((data) => {
    console.table(data.rows);
  });
}

async function addNewDep() {
  await Database.findNewDep().then((data) => {
    console.log(data);
  });
}

function quit() {
  process.exit();
}

startCli();
