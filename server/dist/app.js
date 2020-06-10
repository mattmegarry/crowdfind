"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = require("express");

var logger = require("morgan"); //var apiRouter = require("./components/index");


var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); //app.use("/", apiRouter);

var _default = app;
exports.default = _default;