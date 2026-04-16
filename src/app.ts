import express from "express";
import cors from "cors";
import router from "./routes";

export const buildServer = () => {
  const server = express();

  server.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:3001", "https://invitation-front-five.vercel.app/home"],
    })
  );

  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).json({ message: "Invitation" });
  });

  server.use("/invitation", router);

  return server;
};