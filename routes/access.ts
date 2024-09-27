import express from "express";
const accessRouter = express.Router();

import { accessController } from "../controllers/accessController";

accessRouter.post("/", accessController);

export default accessRouter;