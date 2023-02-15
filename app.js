require("dotenv").config()
const express = require("express")
const cors = require("cors")
const swagger = require("swagger-ui-express")
const morganBody = require("morgan-body")
const openApiConfiguration = require('./docs/swagger')
const loggerStream = require("./utils/handleLogger")
const dbConnectNoSql = require('./config/mongo')
const {dbConnectMySql} = require("./config/mysql")
const app = express()
const ENGINE_DB = process.env.ENGINE_DB
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

morganBody(app, {
    noColors:true,
    stream: loggerStream,
    skip: function(req,res){
        return res.statusCode < 400
    }
})

const port = process.env.PORT || 3000

/**
 * Definir ruta de documentación
 */
app.use('/documentation', swagger.serve, swagger.setup(openApiConfiguration))

/**
 * Aquí invocamos a las rutas
 */
app.use("/api", require("./routes"))

if(NODE_ENV !== 'test'){
    app.listen(port);
}

if(ENGINE_DB === 'nosql'){
    dbConnectNoSql();
}else{
    dbConnectMySql();
}   

module.exports = app;