import express from "express";
import "dotenv/config";

import { corsMiddleware } from "./middlewares/cors.js";

import POIsRouter from "./routes/pois.js";
import CateogryRouter from "./routes/categories.js";
import StatusRouter from "./routes/statuses.js";

const app = express();
const port = process.env.PORT;
const basePath = process.env.BASE_PATH ?? "/";

// Middlewares
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.use(`${basePath}`, express.static("public"));

app.get(`${basePath}`, (req, res) => {
  res.send("Pois API!");
});

app.use(`${basePath}/pois`, POIsRouter);
app.use(`${basePath}/categories`, CateogryRouter);
app.use(`${basePath}/status`, StatusRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start server
app.listen(port, () => {
  console.log(`Pois API listening on port ${port}`);
});
