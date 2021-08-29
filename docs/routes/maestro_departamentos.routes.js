"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalle_empleado = require("../controllers/detalle_empleado");

var _maestro_departamentos = require("../controllers/maestro_departamentos.controllers");

var router = (0, _express.Router)();
router.get('/maestro-departamentos', _maestro_departamentos.getMaestroDepartamentos);
router.post('/maestro-departamentos', _maestro_departamentos.createMaestroDepartamento);
router.get('/maestro-departamentos/:id', _maestro_departamentos.getMaestroDepartamentoById);
router["delete"]('/maestro-departamentos/:id', _maestro_departamentos.deleteMaestroDepartamentoById);
router.put('/maestro-departamentos/:id', _maestro_departamentos.updateMaestroDepartamento);
router.get('/detalle-empleados/:id', _detalle_empleado.getDetalleEmpleados);
router["delete"]('/detalle-empleados/:id', _detalle_empleado.deleteDetalleEmpleadosById);
router.put('/detalle-empleados/:id', _maestro_departamentos.updateMaestroDepartamento);
var _default = router;
exports["default"] = _default;