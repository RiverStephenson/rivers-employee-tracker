import { pool } from "./connection.js";

 class Database {
  

  async findAllEmps() {
    return await pool.query("SELECT * FROM employee");
  }
  async findNewEmp() {
    return await pool.query('SELECT * FROM employee' );
  }
  async findUpdatedRole() {
    return await pool.query("");
  }
  async findNewRole() {
    return await pool.query("");
  }
  async findAllDeps() {
    return await pool.query('SELECT * FROM department');
  }
  async findNewDep() {
    return await pool.query("");
  }
}

export default new Database();
