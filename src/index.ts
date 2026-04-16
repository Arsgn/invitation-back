import { config } from "dotenv";
config();

import { buildServer } from "./app";
import { PrismaClient } from "@prisma/client";

const start = async () => {
  try {
    const PORT = Number(process.env.PORT) || 5004;
    const server = buildServer();

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("✅ DB connected"))
  .catch((e) => console.error("❌ DB error", e));

start();