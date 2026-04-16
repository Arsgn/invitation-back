import { Router } from "express";
import { getDashboard } from "./dashboard.controllers";
import { checkAdmin } from "../../middleware/auth";

const router = Router();

router.get("/:weddingId", checkAdmin, getDashboard);

export default router;