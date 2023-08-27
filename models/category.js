import db from "../db/mysql.js";

const QUERIES = {
  getAll: "SELECT * FROM category",
  getById: "SELECT * FROM category WHERE id = ?",
  insert: "INSERT INTO category (name, parent_id) VALUES (?, ?)",
  update: "UPDATE category SET name = ?, parent_id = ? WHERE id = ?",
  delete: "DELETE FROM category WHERE id = ?",
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

  static async update(id, poi) {
    const { name, parent_id } = poi;

    return await db.query(QUERIES.update, [name, parent_id, id]);
  }

  static async delete(id) {
    return await db.query(QUERIES.delete, [id]);
  }
}
