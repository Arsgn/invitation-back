import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// rsvp.controllers.ts
const getRSVPs = async (req: Request, res: Response) => {
  try {
    const { weddingId } = req.params;

    if (!weddingId) {
      return res.status(400).json({ error: "weddingId обязателен" });
    }

    const guests = await prisma.guest.findMany({
      where: { weddingId: String(weddingId) },
      orderBy: [
        { status: "asc" }, 
        { createdAt: "desc" },
      ],
    });

    res.json(guests);
  } catch (error) {
    console.error("GET RSVP ERROR:", error);
    res.status(500).json({ error: "Ошибка получения RSVP" });
  }
};

// POST /rsvp/:weddingId
const createRSVP = async (req: Request, res: Response) => {
  try {
    const { weddingId } = req.params;
    const { name, phone, status, plusOne } = req.body;

    const guest = await prisma.guest.create({
      data: {
        name,
        phone,
        status,
        plusOne,
        weddingId: String(weddingId),
      },
    });

    res.status(201).json(guest);
  } catch (error) {
    console.log("RSVP ERROR:", error);
    return res.status(500).json({ error });
  }
};

export { createRSVP, getRSVPs };
