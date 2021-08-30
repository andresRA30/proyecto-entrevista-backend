import { getConnection, sql, queries } from "../databases";
export const getDetalleEmpleados = async(req, res) => {
    try {
        const { id } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getDetalleEmpleados);
        console.log(result)
        res.json(result.recordset)

    } catch (error) {
        res.status(500)
        res.send(error, message);
    }

};
export const deleteDetalleEmpleadosById = async(req, res) => {
    const { id } = req.params
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('id', id)
            .query(queries.deleteDetalleEmpleado);

        res.json({
            ok: true,
            msg: 'Se elimino correctamente'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
    }

}
export const createDetalleEmpleado = async(req, res) => {
    const { id_departamento, nombre, salario } = req.body
    if (nombre == null && id_departamento == null && salario == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' })
    }
    try {

        const pool = await getConnection();
        await pool.request()
            .input('id_departamento', sql.Int, id_departamento)
            .input('nombre', sql.VarChar, nombre)
            .input('salario', sql.Decimal, salario)
            .query(queries.createNuevoDetalle)
        res.json({
            ok: true,
            nombre
        })
    } catch (error) {
        res.status(500)
        res.send(error, message);
    }
}