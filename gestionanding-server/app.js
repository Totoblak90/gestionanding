const express = require('express');
const app = express();


// Servidor
app.listen( 3000, () => {
    console.log(`El servidor está funcionando en el puerto ${ 3000 }`)
} )