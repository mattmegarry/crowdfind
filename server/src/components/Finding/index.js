"use strict";

import express from "express";
const findingRouter = express.Router();

import { createFinding } from "./finding.controller";

findingRouter.post("/create", async (req, res, next) => {
  try {
    const databaseResponse = await createFinding();

    res.status(200).json({
      data: {
        findSessionName: databaseResponse.findSessionName
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({});
  }
});

findingRouter.post("/join", (req, res, next) => {
  console.log(req.body.findSessionNameInput);
  if (req.body.findSessionNameInput === "A") {
    res.status(200).json({
      data: {
        findSessionName: "ApplesMountainJewel",
        otherInfo: "All the other info about the find session"
      }
    });
  } else {
    res.status(404).json({
      data: {
        findSessionName: null
      }
    });
  }
});

export default findingRouter;
