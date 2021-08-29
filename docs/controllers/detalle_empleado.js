"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDetalleEmpleadosById = exports.getDetalleEmpleados = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _databases = require("../databases");

var getDetalleEmpleados = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return (0, _databases.getConnection)();

          case 4:
            pool = _context.sent;
            _context.next = 7;
            return pool.request().input('id', id).query(_databases.queries.getDetalleEmpleados);

          case 7:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0, message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function getDetalleEmpleados(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDetalleEmpleados = getDetalleEmpleados;

var deleteDetalleEmpleadosById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _databases.getConnection)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('id', id).query(_databases.queries.deleteDetalleEmpleado);

          case 7:
            result = _context2.sent;
            res.json({
              ok: true,
              msg: 'Se elimino correctamente'
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.status(400).json({
              ok: false,
              error: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function deleteDetalleEmpleadosById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteDetalleEmpleadosById = deleteDetalleEmpleadosById;