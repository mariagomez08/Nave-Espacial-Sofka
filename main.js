const mongoose = require('mongoose');


(async () =>{
    await mongoose.connect('mongodb+srv://BaseDeDatos:6626846@cluster0.sqnxf.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{console.log('Base de datos conectada')})
        .catch( error => {console.log('Error al conectar con la base de datos', error)});
})();








