"use strict";

import express from "express";
const findingRouter = express.Router();

findingRouter.post("/create", (req, res, next) => {
  const words = [
    "Insecure",
    "Testing",
    "Danger",
    "Nascent",
    "Later",
    "Just",
    "For",
    "Now",
    "Agile"
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  res.json({ message: "Create a finding? Not yet!" });
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
