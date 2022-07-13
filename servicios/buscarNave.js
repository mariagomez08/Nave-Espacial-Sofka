const NavesModelo = require('../modelos/navesModelo');

export const buscarTodasLasNaves = async () => {

    await NavesModelo.find({}, (error, respuesta) => {
        if (error){
            console.log(error);
        }
        else{
            return respuesta;
        }
    })

}

export const buscarPorPais = async (atributoFiltro) => {

    await NavesModelo.find({pais: atributoFiltro}, (error, respuesta) => {
        if (error){
            console.log(error);
        }
        else{
            return respuesta;
        }
    })
    
}