import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectToDB from "./config/db.js";
import router from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", router);

const startServer = async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
