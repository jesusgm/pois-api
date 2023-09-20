import db from "../db/mysql.js";

const QUERIES = {
  getAll:
    "SELECT p.*, c.icon as category_icon FROM pois p INNER JOIN category c ON p.category_id = c.id",
  getById:
    "SELECT p.*, c.icon as category_icon FROM pois p INNER JOIN category c ON p.category_id = c.id WHERE p.id = ?",
  insert:
    "INSERT INTO pois (name, latitude, longitude, altitude,  status_id, category_id) VALUES (?, ?, ?, ?, ?, ?)",
  update:
    "UPDATE pois SET name = ?, latitude = ?, longitude = ?, altitude = ?, status_id = ?, category_id = ? WHERE id = ?",
};

export class POIsModel {
  static async getAll() {
    return await db.query(QUERIES.getAll);
  }

  static async getById(id) {
    return await db.query(QUERIES.getById, [id]);
  }

  static async save(poi) {
    const { name, latitude, longitude, altitude, status_id, category_id } = poi;

    return await db.query(QUERIES.insert, [
      name,
      latitude,
      longitude,
      altitude,
      status_id,
      category_id,
    ]);
  }

  static async update(poi) {
    const { id, name, latitude, longitude, altitude, status_id, category_id } =
      poi;

    return await db.query(QUERIES.update, [
      name,
      latitude,
      longitude,
      altitude,
      status_id,
      category_id,
      id,
    ]);
  }
}
