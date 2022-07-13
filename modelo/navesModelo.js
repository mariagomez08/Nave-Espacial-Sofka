const mongoose = require('mongoose');

const navesSchema = new mongoose.Schema({

    nombre: {
        type : String,
        maxlength: 32,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    velocidad: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    pais: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    }
},{
    versionKey: false,  //evitar el __v
    timestamps: true    //Muestre fecha en documento
});

//Exportando modelo para quien quiera usarlo
module.exports = mongoose.model('naves', navesSchema);