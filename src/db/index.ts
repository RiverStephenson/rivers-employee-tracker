import { pool } from "./connection.js";

export default class Database {
  constructor() {}
  // code provided by TA
  async query(sql: string, args: any[] = []) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release();
    }
    // finish these
  }
  async findAllEmps() {
    return this.query();
  }
  async findNewEmp() {
    return this.query();
  }
  async findUpdatedRole() {
    return this.query();
  }
  async findNewRole() {
    return this.query();
  }
  async findAllDeps() {
    return this.query();
  }
  async findNewDep() {
    return this.query();
  }
}
