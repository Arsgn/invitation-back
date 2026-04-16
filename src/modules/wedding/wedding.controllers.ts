import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /weddings
const getAllWeddings = async (req: Request, res: Response) => {
  try {
    const weddings = await prisma.wedding.findMany({
      include: { guests: true },
    });
    res.json(weddings);
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения свадеб" });
  }
};

// GET /weddings/:id
 const getWeddingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const wedding = await prisma.wedding.findUnique({
      where: { id: String(id) },
      include: { guests: true },
    });
    if (!wedding) return res.status(404).json({ error: "Свадьба не найдена" });
    res.json(wedding);
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения свадьбы" });
  }
};

// POST /weddings
 const createWedding = async (req: Request, res: Response) => {
  try {
    const {
      coupleNames,
      date,
      ceremonyVenue,
      ceremonyAddress,
      ceremonyLat,
      ceremonyLng,
      banquetVenue,
      banquetAddress,
      banquetLat,
      banquetLng,
    } = req.body;

    const wedding = await prisma.wedding.create({
      data: {
        coupleNames,
        date: new Date(date),
        ceremonyVenue,
        ceremonyAddress,
        ceremonyLat,
        ceremonyLng,
        banquetVenue,
        banquetAddress,
        banquetLat,
        banquetLng,
      },
    });
    res.status(201).json(wedding);
  } catch (error) {
    res.status(500).json({ error: "Ошибка создания свадьбы" });
  }
};

// PUT /weddings/:id
 const updateWedding = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (data.date) data.date = new Date(data.date);

    const wedding = await prisma.wedding.update({
      where: { id: String(id) },
      data,
    });
    res.json(wedding);
  } catch (error) {
    res.status(500).json({ error: "Ошибка обновления свадьбы" });
  }
};

// DELETE /weddings/:id
 const deleteWedding = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.wedding.delete({ where: { id: String(id) } });
    res.json({ message: "Свадьба удалена" });
  } catch (error) {
    res.status(500).json({ error: "Ошибка удаления свадьбы" });
  }
};

export {
  getAllWeddings,
  getWeddingById,
  createWedding,
  updateWedding,
  deleteWedding,    
};