import express from "express";
import cors from "cors";
import { closeConnection } from "./config/db";
import router from "./routes/route";
import accessRouter from "./routes/access";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/access", accessRouter);

process.on("SIGINT", async () => {
  await closeConnection();
  process.exit(0);
})

app.listen(process.env.PORT);
