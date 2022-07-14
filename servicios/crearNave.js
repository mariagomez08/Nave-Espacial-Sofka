const NavesModelo = require('../modelos/navesModelo');

const insertarNave = async (Nave) => {//ingresa un objeto de tipo nave

    const data = {//objeto no instaciado
        nombre : Nave.nombre,
        velocidad : Nave.velocidad,
        pais : Nave.pais,
        tipo : Nave.tipo
    }

    const navesModelo = new NavesModelo(data);

    const respuesta = await navesModelo.save();//contiene la data proveniente de mongo dbguardada

    return {mensaje: "Nave Creada correctamente con nombre: " + respuesta.nombre};//devuelve objeto con el mensaje 

}

module.exports = insertarNave;