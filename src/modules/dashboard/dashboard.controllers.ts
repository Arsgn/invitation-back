import { Request, Response } from "express";
import { Guest } from "@prisma/client";
import { prisma } from "../../prisma";

// GET /dashboard/:weddingId
const getDashboard = async (req: Request, res: Response) => {
  try {
    const { weddingId } = req.params;

    const guests: Guest[] = await prisma.guest.findMany({
      where: { weddingId: String(weddingId) },
    });

    const stats = {
      total: guests.length,
      attending: guests.filter((g) => g.status === "ATTENDING").length,
      declined: guests.filter((g) => g.status === "DECLINED").length,
      pending: guests.filter((g) => g.status === "PENDING").length,
    };

    res.json({ guests, stats });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ error: "Ошибка dashboard" });
  }
};

export { getDashboard };