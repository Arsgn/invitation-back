import { Request, Response, NextFunction } from "express";

export const checkAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (token !== "Bearer admin123") {
    return res.status(401).json({ error: "Нет доступа" });
  }

  next();
};