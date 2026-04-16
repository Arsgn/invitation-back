import { Request, Response, NextFunction } from "express";

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== "production") {
    return next();
  }

  const token = req.headers.authorization;

  const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "admin123";

  if (token !== `Bearer ${ADMIN_TOKEN}`) {
    return res.status(401).json({ error: "Нет доступа" });
  }

  next();
};
