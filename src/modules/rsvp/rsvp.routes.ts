import { Router } from "express";
import { createRSVP, getRSVPs } from "./rsvp.controllers";

const router = Router();

router.post("/:weddingId", createRSVP);
router.get("/:weddingId", getRSVPs);

export default router;