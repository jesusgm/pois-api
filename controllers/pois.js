import { POIsModel } from "../models/poi.js";
import { poiSchema } from "../schemas/poi.js";

export class POIs {
  static async getAll() {
    return await POIsModel.getAll();
  }

  static async getById(id) {
    const result = await POIsModel.getById(id);

    if (result.length === 0) {
      throw new Error("POI not found");
    }

    return result[0];
  }

  static async save(data) {
    const poi = poiSchema.safeParse(data);

    if (!poi.success) {
      throw new Error(poi.error);
    }

    return await POIsModel.save(poi.data);
  }
}
