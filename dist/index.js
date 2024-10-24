import { connectToDb } from "./db/connection.js";
import inquirer from "inquirer";
await connectToDb();
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
                "Quit"
            ],
        },
    ])
        .then((answers) => {
        console.log(answers);
        const choice = answers.options;
        switch (choice) {
            case `View All Employees`:
                console.log(`View All Employees selected`);
                startCli();
                break;
            case `Add Employee`:
                console.log(`Add Employee selected`);
                startCli();
                break;
            case `Update Employee Role`:
                console.log(`Update Employee Role selected`);
                startCli();
                break;
            case `Add Role`:
                console.log(`Add Role selected`);
                startCli();
                break;
            case `View All Departments`:
                console.log(`View All Departments selected`);
                startCli();
                break;
            case `Add Department`:
                console.log(`Add Department selected`);
                startCli();
                break;
            default:
                console.log(`Quit`);
                quit();
                break;
        }
    });
}
function quit() {
    process.exit();
}
;
startCli();
