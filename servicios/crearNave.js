const NavesModelo = require('../modelos/navesModelo');

const insertarNave = async (tipoNave) => {

    const data = {
        nombre : tipoNave.nombre,
        velocidad : tipoNave.velocidad,
        pais : tipoNave.pais,
        tipo : tipoNave.tipo
    }

    const navesModelo = new NavesModelo(data);

    const respuesta = await navesModelo.save();

    return {mensaje: "Nave Creada correctamente con nombre: " + respuesta.nombre};

}

module.exports = insertarNave;