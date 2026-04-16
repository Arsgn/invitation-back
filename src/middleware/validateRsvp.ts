import { Request, Response, NextFunction } from "express";

export const validateRsvp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, phone, status } = req.body;

  if (!name || name.length < 2) {
    return res.status(400).json({ error: "Имя обязательно" });
  }

  if (!phone) {
    return res.status(400).json({ error: "Телефон обязателен" });
  }

  if (!["PENDING", "ATTENDING", "DECLINED"].includes(status)) {
    return res.status(400).json({ error: "Неверный статус" });
  }

  next();
};