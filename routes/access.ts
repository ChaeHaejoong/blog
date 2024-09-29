import express from "express";
const accessRouter = express.Router();

import { accessController } from "../controllers/accessController";

// 부모: /access

accessRouter.post("/", accessController);

export default accessRouter;