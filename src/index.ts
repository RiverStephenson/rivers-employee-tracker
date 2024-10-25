import { connectToDb } from "./db/connection.js";
import inquirer from "inquirer";
import Database from "./db/index.js";

await connectToDb();

function startCli(): void {
  inquirer
    .prompt(
      {
        type: "list",
        message: "What would you like to do?",
        name: "options",
        choices: [
          `View All Employees`,
          "Add Employee",
          "Update Employee Role",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      }
    )
    .then(async (choice) => {
      console.log( choice.options );
      switch (choice.options) {
        case `View All Employees`:
          console.log(`View All Employees selected`)
          await viewAllEmps();
          startCli();
          break;
        case `Add Employee`:
          console.log(`Add Employee selected`);
          addNewEmp();
          startCli();
          break;
        case `Update Employee Role`:
          console.log(`Update Employee Role selected`);
          viewUpdatedRole();
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
  await Database.findAllEmps()
  .then((data) => {
      console.table(data.rows);
    })
    }

async function addNewEmp() {
  await Database.findNewEmp()
    .then((data) => {
      console.table(data.rows);
    })
    .then(() => {
      startCli();
    });
}

async function viewUpdatedRole() {
  await Database.findUpdatedRole()
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      startCli();
    });
}

async function addNewRole() {
  await Database.findNewRole()
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      startCli();
    });
}

async function viewAllDeps() {
  await Database.findAllDeps()
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      startCli();
    });
}

async function addNewDep() {
  await Database.findNewDep()
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      startCli();
    });
}

function quit() {
  process.exit();
}

startCli();
