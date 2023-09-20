import { Router } from "express";
import { CategoriesController } from "../controllers/categories.js";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await CategoriesController.getAll();
  res.json(categories);
});

router.post("/", async (req, res) => {
  // save the category
  const result = await CategoriesController.save(req.body);

  // return the category
  res.status(201).json(result);
});

router.get("/:id", async (req, res) => {
  try {
    const category = await CategoriesController.getById(req.params.id);
    res.json(category);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await CategoriesController.update(req.params.id, req.body);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await CategoriesController.delete(req.params.id);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;
