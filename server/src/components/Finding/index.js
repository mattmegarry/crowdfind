"use strict";

import express from "express";
const findingRouter = express.Router();

findingRouter.get("/create", (req, res, next) => {
  res.json({ message: "Create a finding? Not yet!" });
});

findingRouter.post("/join", (req, res, next) => {
  res.json({ message: "Join exisiting? Not yet!" });
});

export default findingRouter;
