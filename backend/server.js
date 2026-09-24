// Flow: server.js → connects MongoDB via config/db.js → mounts /api/contact route → routes/contactRoutes.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
});
