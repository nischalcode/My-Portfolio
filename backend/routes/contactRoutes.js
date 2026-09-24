import { Router } from "express";
import { createContact } from "../controllers/contactController.js";

const router = Router();

// POST /api/contact → controller
router.post("/", createContact);

export default router;
