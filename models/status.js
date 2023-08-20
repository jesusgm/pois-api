import db from "../db/mysql.js";

const QUERIES = {
  getAll: "SELECT * FROM status",
};

export class StatusModel {
  static async getAll() {
    return await db.query(QUERIES.getAll);
  }
}
