import { StatusModel } from "../models/status.js";
import { statusSchema } from "../schemas/status.js";

export class StatusController {
  static async getAll() {
    return await StatusModel.getAll();
  }
}
