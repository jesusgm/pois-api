import { Router } from "express";
import { POIsController } from "../controllers/pois.js";

const router = Router();

router.get("/", async (req, res) => {
  const pois = await POIsController.getAll();
  res.json(pois);
});

router.post("/", async (req, res) => {
  // save the poi
  try {
    const result = await POIsController.save(req.body);

    // return the poi
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const poi = await POIsController.getById(req.params.id);
    res.json(poi);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const poi = await POIsController.update({ ...req.body, id: req.params.id });
    res.json(poi);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

export default router;
