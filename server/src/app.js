"user strict";

require("dotenv").config();

import express from "express";
import logger from "morgan";

import apiRouter from "./components/index";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res, next) => {
  res.json({ yee: "It's alive!" });
});

app.use("/", apiRouter);

export default app;
