import express, { Response, Application } from "express";
import * as dotenv from "dotenv";

import { connetion } from "./mongo/connection";

dotenv.config();
const app: Application = express();

app.use(express.json());

app.get("/health", (_, res: Response) => {
  res.json({
    message: "healthy",
  });
});

import contents from "./controller/content.controller";

app.use("/v1", contents);

const server = app.listen(process.env.PORT || 8091, () => {
  connetion();
});

export { server };
