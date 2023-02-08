import { Router, Request, Response } from "express";
import { createNewContent } from "../models/content.model";

const ContentRouter = Router();

ContentRouter.post("/cr/content", async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    if (content === undefined) {
      throw Error();
    }

    const response = await createNewContent(content);

    res.json({
      status: 201,
      message: "success",
      data: response
        ? {
            _id: response.id,
          }
        : "",
    });
  } catch (error: any | Error) {
    res.json({
      status: 400,
      message: error.message || "bad request",
    });
  }
});

export default ContentRouter;
