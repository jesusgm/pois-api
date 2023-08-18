import express from "express";
import "dotenv/config";

import { corsMiddleware } from "./middlewares/cors.js";

import POIsRouter from "./routes/pois.js";
import CateogryRouter from "./routes/categories.js";

const app = express();
const port = process.env.PORT ?? 3000;

// Middlewares
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pois", POIsRouter);
app.use("/categories", CateogryRouter);

// Start server
app.listen(port, () => {
  console.log(`Pois API listening on port ${port}`);
});
