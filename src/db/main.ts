import { pool } from "./connection.js";

class Database {
  async createAllEmps() {
    return await pool.query("SELECT * FROM employee");
  }
  async createNewEmp(userInput: any[]) {
    return await pool.query(
      "INSERT INTO employee (first_name, last_name, job_role_id, manager_id) VALUES ($1, $2, $3, $4)", userInput
    );
  }
  async createAllRole() {
    return await pool.query("SELECT * FROM job_role");
  }
  async createNewRole(userInput: any[]) {
    return await pool.query("INSERT INTO ", userInput);
  }
  async createAllDeps() {
    return await pool.query("SELECT * FROM department");
  }
  async createNewDep(userInput: any[]) {
    return await pool.query("INSERT INTO department (dep_name) VALUES ($1)",  userInput);
  }
}

export default new Database();
