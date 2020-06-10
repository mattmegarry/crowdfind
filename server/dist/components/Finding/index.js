"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findingRouter = _express.default.Router();

findingRouter.get("/create", (req, res, next) => {
  res.json({
    message: "Create a finding? Not yet!"
  });
});
findingRouter.post("/join", (req, res, next) => {
  res.json({
    message: "Join exisiting? Not yet!"
  });
});
var _default = findingRouter;
exports.default = _default;