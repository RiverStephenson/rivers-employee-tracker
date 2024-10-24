import { connectToDb } from "./connection";
import inquirer from "inquirer";

await connectToDb();

function startCli(): void {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'options',
                choices: [`View All Employees`, 'Add Employee']
            },
        ])
        .then((answers: { options: string}) =>
            console.log(answers))
}



startCli();