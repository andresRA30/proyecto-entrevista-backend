import express from "express";
import config from "./config";
import productosRoutes from './routes/maestro_departamentos.routes'
const cors = require('cors');
const app = express()
app.use(cors())
    //settings
app.set('port', config.port)
    //middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(productosRoutes)
export default app