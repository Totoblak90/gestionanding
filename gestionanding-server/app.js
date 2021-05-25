const express = require('express');
const createError = require('http-errors');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT



// Rutas
const loginRouter = require('./src/routes/loginRoute')


app.use('/api/auth', loginRouter)

// Servidor
app.listen( PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${ PORT }`)
} )
