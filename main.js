const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded())

app.use(express.static('vista'))

(async () =>{
    await mongoose.connect('mongodb+srv://BaseDeDatos:6626846@cluster0.sqnxf.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{console.log('Base de datos conectada')})
        .catch( error => {console.log('Error al conectar con la base de datos', error)});
})();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'vista/index.html'))
})

app.post('/ingresarNave', (req, res) => {
    console.log(req.body)
})

app.listen(4000, () => {
    console.log('Servidor corriendo en puesto 4000')
})






