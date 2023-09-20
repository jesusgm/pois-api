import { Router } from "express";
import { StatusController } from "../controllers/status.js";

const router = Router();

router.get("/", async (req, res) => {
  const statuses = await StatusController.getAll();
  res.json(statuses);
});

export default router;
