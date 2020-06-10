"use strict";

import express from "express";
const apiRouter = express.Router();

import findingRouter from "./Finding";

apiRouter.use("/finding", findingRouter);

export default apiRouter;
