"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Finding = _interopRequireDefault(require("./Finding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRouter = _express.default.Router();

apiRouter.use("/finding", _Finding.default);
var _default = apiRouter;
exports.default = _default;