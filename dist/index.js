import inquirer from "inquirer";
import Database from "./db/index.js";
const database = new Database();
function startCli() {
    inquirer
        .prompt([
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
        },
    ])
        .then((answers) => {
        console.log(answers);
        const choice = answers.options;
        switch (choice) {
            case `View All Employees`:
                viewAllEmps();
                startCli();
                break;
            case `Add Employee`:
                console.log(`Add Employee selected`);
                viewNewEmp();
                startCli();
                break;
            case `Update Employee Role`:
                console.log(`Update Employee Role selected`);
                viewUpdatedRole();
                startCli();
                break;
            case `Add Role`:
                console.log(`Add Role selected`);
                viewNewRole();
                startCli();
                break;
            case `View All Departments`:
                console.log(`View All Departments selected`);
                viewAllDeps();
                startCli();
                break;
            case `Add Department`:
                console.log(`Add Department selected`);
                viewNewDep();
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
function viewAllEmps() {
    database
        .findAllEmps()
        .then((data) => {
        console.log(data);
    })
        .then(() => {
        startCli();
    });
}
function viewNewEmp() {
    database
        .findNewEmp()
        .then((data) => {
        console.log(data);
    })
        .then(() => {
        startCli();
    });
}
function viewUpdatedRole() {
    database
        .findUpdatedRole()
        .then((data) => {
        console.log(data);
    })
        .then(() => {
        startCli();
    });
}
function viewNewRole() {
    database
        .findNewRole()
        .then((data) => {
        console.log(data);
    })
        .then(() => {
        startCli();
    });
}
function viewAllDeps() {
    database
        .findAllDeps()
        .then((data) => {
        console.log(data);
    })
        .then(() => {
        startCli();
    });
}
function viewNewDep() {
    database
        .findNewDep()
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
