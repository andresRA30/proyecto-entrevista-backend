import { getConnection, sql, queries } from "../databases";
export const getMaestroDepartamentos = async(req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getTodosMaestroDepartamento)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error, message);
    }

};
export const createMaestroDepartamento = async(req, res) => {
    const { nombre } = req.body
    if (nombre == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' })
    }
    try {

        const pool = await getConnection();
        await pool.request().input('nombre', sql.VarChar, nombre)
            .query(queries.createNuevoProducto)
        res.json({
            ok: true,
            nombre
        })
    } catch (error) {
        res.status(500)
        res.send(error, message);
    }
}
export const getMaestroDepartamentoById = async(req, res) => {
    const { id } = req.params
    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .query(queries.getMaestroDepartamentoById);
    console.log(result)
    res.json(result.recordset[0])
}
export const deleteMaestroDepartamentoById = async(req, res) => {
    const { id } = req.params
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('id', id)
        .query(queries.deleteMaestroDepartamentoById);
    console.log(result)
    res.sendStatus(204)
}
export const updateMaestroDepartamento = async(req, res) => {
    const { nombre } = req.body;
    const { id } = req.params
    if (nombre == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' })
    }
    const pool = await getConnection();
    pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('id', sql.Int, id)
        .query(queries.updateMaestroDepartamento)
    res.json({
        ok: true,
        nombre
    })
}