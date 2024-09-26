import express from "express";
import path from "node:path";
import { connectDB } from "./config/db";

const app = express();

app.use(express.json());

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "public", "index.html"));
    });
    
    app.listen(process.env.PORT);
  })
  .catch((e) => {
    console.error(e);
  })

