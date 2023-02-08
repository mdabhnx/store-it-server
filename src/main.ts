import express, { Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/health", (_, res: Response) => {
  res.json({
    message: "healthy",
  });
});

const server = app.listen(process.env.PORT || 8918);

export { server };
