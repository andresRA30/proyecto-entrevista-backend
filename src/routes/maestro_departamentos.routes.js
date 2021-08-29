import { Router } from "express";
import { deleteDetalleEmpleadosById, getDetalleEmpleados } from "../controllers/detalle_empleado";
import { createMaestroDepartamento, getMaestroDepartamentos, getMaestroDepartamentoById, deleteMaestroDepartamentoById, updateMaestroDepartamento } from "../controllers/maestro_departamentos.controllers";
const router = Router()
router.get('/maestro-departamentos', getMaestroDepartamentos);
router.post('/maestro-departamentos', createMaestroDepartamento);

router.get('/maestro-departamentos/:id', getMaestroDepartamentoById);
router.delete('/maestro-departamentos/:id', deleteMaestroDepartamentoById);
router.put('/maestro-departamentos/:id', updateMaestroDepartamento);

router.get('/detalle-empleados/:id', getDetalleEmpleados);
router.delete('/detalle-empleados/:id', deleteDetalleEmpleadosById);
router.put('/detalle-empleados/:id', updateMaestroDepartamento);


export default router