import { Router } from "express";
import { POIs } from "../controllers/pois.js";

const router = Router();

router.get("/", async (req, res) => {
  const pois = await POIs.getAll();
  res.json(pois);
});

router.post("/", async (req, res) => {
  // save the poi
  const result = await POIs.save(req.body);

  // return the poi
  res.status(201).json(result);
});

router.get("/:id", async (req, res) => {
  try {
    const poi = await POIs.getById(req.params.id);
    res.json(poi);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

export default router;
