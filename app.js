import express from "express";
import "dotenv/config";

import config from "./config.js";
import POIsRouter from "./routes/pois.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
const port = config.port ?? 3000;

// Middlewares
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pois", POIsRouter);

// Start server
app.listen(port, () => {
  console.log(`Pois API listening on port ${port}`);
});
