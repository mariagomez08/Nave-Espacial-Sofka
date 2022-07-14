// let tipoNave1 = new TipoNave1('Jonathan','50','veneco')

// crearNave(tipoNave1).then(respuesta => console.log(respuesta));
const NavesModelo = require('../modelos/navesModelo');

const crearNaveControlador = async (Nave) => {
    
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

const buscarTodasLasNaves = async () => {

    await NavesModelo.find({}, (error, respuesta) => {//recibe la consulta {}, si esta vacia busca todo, respuesta proviene de find
        if (error){
            console.log(error);
        }
        else{
            return respuesta;
        }
    })

}

const buscarPorPais = async (atributoFiltro) => {

    await NavesModelo.find({pais: atributoFiltro}, (error, respuesta) => {
        if (error){
            console.log(error);
        }
        else{
            return respuesta;
        }
    })
    
}