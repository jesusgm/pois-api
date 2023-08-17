import db from "../db/mysql.js";

const QUERIES = {
  getAll: "SELECT * FROM pois",
  getById: "SELECT * FROM pois WHERE id = ?",
  insert:
    "INSERT INTO pois (name, latitude, longitude, status_id, category, subcategory) VALUES (?, ?, ?, ?, ?, ?)",
};

export class POIsModel {
  static async getAll() {
    return await db.query(QUERIES.getAll);
  }

  static async getById(id) {
    return await db.query(QUERIES.getById, [id]);
  }

  static async save(poi) {
    const { name, latitude, longitude, status_id, category, subcategory } = poi;

    return await db.query(QUERIES.insert, [
      name,
      latitude,
      longitude,
      status_id,
      category,
      subcategory,
    ]);
  }
}
