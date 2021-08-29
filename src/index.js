import app from './app'
const cors = require('cors');
//Configurar cors
app.use(cors());
app.listen(app.get('port'))
console.log("server on port", app.get('port'))