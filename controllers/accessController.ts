import { Request, Response } from "express"

export const accessController = async (req: Request, res: Response) => {
  console.log(req.body)
  const { accessKey } = req.body;
  if (accessKey === "1234") {
    res.sendStatus(200);
  } else {
    console.log(accessKey)
    res.sendStatus(402);
  }
}