"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getTodosMaestroDepartamento: 'SELECT * FROM maestroDepartamentos',
  createNuevoProducto: 'insert into maestroDepartamentos (nombre) values (@nombre)',
  getMaestroDepartamentoById: 'select * from maestroDepartamentos where id = @id',
  deleteMaestroDepartamento: 'Delete from maestroDepartamentos where id = @id',
  updateMaestroDepartamento: 'EXEC modificarMaestro @nombre, @id',
  getDetalleEmpleados: 'select empleados.id,departamentos.nombre as departamento,empleados.nombre,salario from [departamentos].[dbo].detalleEmpleado as empleados inner join [departamentos].[dbo].maestroDepartamentos as departamentos ON empleados.id_departamento = departamentos.id where departamentos.id=@id',
  deleteDetalleEmpleado: 'EXEC eliminarEmpleado  @id'
};
exports.queries = queries;