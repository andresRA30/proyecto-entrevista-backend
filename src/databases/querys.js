export const queries = {
    getTodosMaestroDepartamento: 'SELECT * FROM maestroDepartamentos',
    createNuevoProducto: 'insert into maestroDepartamentos (nombre) values (@nombre)',
    getMaestroDepartamentoById: 'select * from maestroDepartamentos where id = @id',
    deleteMaestroDepartamento: 'Delete from maestroDepartamentos where id = @id',
    updateMaestroDepartamento: 'EXEC modificarMaestro @nombre, @id',
    getDetalleEmpleados: 'select empleados.id,departamentos.nombre as departamento,empleados.nombre,salario from [departamentos].[dbo].detalleEmpleado as empleados inner join [departamentos].[dbo].maestroDepartamentos as departamentos ON empleados.id_departamento = departamentos.id where departamentos.id=@id',
    deleteDetalleEmpleado: 'EXEC eliminarEmpleado  @id',
    createNuevoDetalle: 'insert into detalleEmpleado (id_departamento,nombre,salario) values (@id_departamento,@nombre,@salario)',

};