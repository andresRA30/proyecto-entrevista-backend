"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMaestroDepartamento = exports.deleteMaestroDepartamentoById = exports.getMaestroDepartamentoById = exports.createMaestroDepartamento = exports.getMaestroDepartamentos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _databases = require("../databases");

var getMaestroDepartamentos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _databases.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_databases.queries.getTodosMaestroDepartamento);

          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0, message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getMaestroDepartamentos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMaestroDepartamentos = getMaestroDepartamentos;

var createMaestroDepartamento = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nombre, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nombre = req.body.nombre;

            if (!(nombre == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Por favor llena todos los campos'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _databases.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('nombre', _databases.sql.VarChar, nombre).query(_databases.queries.createNuevoProducto);

          case 9:
            res.json({
              ok: true,
              nombre: nombre
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0, message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createMaestroDepartamento(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createMaestroDepartamento = createMaestroDepartamento;

var getMaestroDepartamentoById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _databases.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('id', id).query(_databases.queries.getMaestroDepartamentoById);

          case 6:
            result = _context3.sent;
            console.log(result);
            res.json(result.recordset[0]);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMaestroDepartamentoById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMaestroDepartamentoById = getMaestroDepartamentoById;

var deleteMaestroDepartamentoById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _databases.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('id', id).query(_databases.queries.deleteMaestroDepartamentoById);

          case 6:
            result = _context4.sent;
            console.log(result);
            res.sendStatus(204);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteMaestroDepartamentoById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteMaestroDepartamentoById = deleteMaestroDepartamentoById;

var updateMaestroDepartamento = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var nombre, id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            nombre = req.body.nombre;
            id = req.params.id;

            if (!(nombre == null)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Por favor llena todos los campos'
            }));

          case 4:
            _context5.next = 6;
            return (0, _databases.getConnection)();

          case 6:
            pool = _context5.sent;
            pool.request().input('nombre', _databases.sql.VarChar, nombre).input('id', _databases.sql.Int, id).query(_databases.queries.updateMaestroDepartamento);
            res.json({
              ok: true,
              nombre: nombre
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateMaestroDepartamento(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateMaestroDepartamento = updateMaestroDepartamento;