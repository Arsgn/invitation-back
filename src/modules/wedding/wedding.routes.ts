import { Router } from "express";
import {
  createWedding,
  deleteWedding,
  getAllWeddings,
  getWeddingById,
  updateWedding,
} from "./wedding.controllers";

const router = Router();

router.get("/", getAllWeddings);
router.get("/:id", getWeddingById);
router.post("/", createWedding);
router.put("/:id", updateWedding);
router.delete("/:id", deleteWedding);

export default router;
