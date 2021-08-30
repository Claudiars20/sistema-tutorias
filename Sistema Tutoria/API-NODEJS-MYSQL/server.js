const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const Route_Docente = require('./Docente')
const Route_Estudiante = require('./Estudiante')
const Route_FichaTutoria = require('./Fichas_Tutoria')
const app = express()
app.set('port', process.env.PORT || 8000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'enyel21',
    database: 'bdsistema_tutorias'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

//app.use('/api', Route_Docente)
//app.use('/api', Route_Estudiante)
app.use('/api', Route_FichaTutoria)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})