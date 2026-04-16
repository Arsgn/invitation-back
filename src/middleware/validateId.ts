import { Request, Response, NextFunction } from "express";

export const validateId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { weddingId } = req.params;

  if (!weddingId || weddingId.length < 10) {
    return res.status(400).json({ error: "Неверный ID" });
  }

  next();
};