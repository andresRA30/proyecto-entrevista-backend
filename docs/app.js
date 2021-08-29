"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _maestro_departamentos = _interopRequireDefault(require("./routes/maestro_departamentos.routes"));

var cors = require('cors');

var app = (0, _express["default"])();
app.use(cors()); //settings

app.set('port', _config["default"].port); //middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_maestro_departamentos["default"]);
var _default = app;
exports["default"] = _default;