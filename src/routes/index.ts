import { Router } from "express";

import weddingRoutes from "../modules/wedding/wedding.routes";
import rsvpRoutes from "../modules/rsvp/rsvp.routes";
import dashboardRoutes from "../modules/dashboard/dashboard.routes";

const router = Router();

// только роуты (без cors!)
router.use("/weddings", weddingRoutes);
router.use("/rsvp", rsvpRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;