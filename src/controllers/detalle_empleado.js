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