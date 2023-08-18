import db from "../db/mysql.js";

const QUERIES = {
  getAll: "SELECT * FROM category",
  getById: "SELECT * FROM category WHERE id = ?",
  insert: "INSERT INTO category (name, parent_id) VALUES (?, ?)",
};

export class CategoryModel {
  static async getAll() {
    return await db.query(QUERIES.getAll);
  }

  static async getById(id) {
    return await db.query(QUERIES.getById, [id]);
  }

  static async save(poi) {
    const { name, parent_id } = poi;

    return await db.query(QUERIES.insert, [name, parent_id]);
  }
}
