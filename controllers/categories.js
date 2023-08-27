import { CategoryModel } from "../models/category.js";
import { categorySchema } from "../schemas/category.js";

export class CategoriesController {
  static async getAll() {
    return await CategoryModel.getAll();
  }

  static async getById(id) {
    const result = await CategoryModel.getById(id);

    if (result.length === 0) {
      throw new Error("Category not found");
    }

    return result[0];
  }

  static async save(data) {
    const category = categorySchema.safeParse(data);

    if (!category.success) {
      throw new Error(category.error);
    }

    return await CategoryModel.save(category.data);
  }

  static async update(id, data) {
    const category = categorySchema.safeParse(data);

    if (!category.success) {
      throw new Error(category.error);
    }

    return await CategoryModel.update(id, category.data);
  }

  static async delete(id) {
    return await CategoryModel.delete(id);
  }
}
