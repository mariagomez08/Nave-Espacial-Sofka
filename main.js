const mongoose = require('mongoose');


(async () =>{
    await mongoose.connect('mongodb+srv://BaseDeDatos:6626846@cluster0.sqnxf.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{console.log('Base de datos conectada')})
        .catch( error => {console.log('Error al conectar con la base de datos', error)});
})();

const TipoNave1 = require('./modelos/TipoNave1')

let tipoNave1 = new TipoNave1('Julia','50','veneco')
