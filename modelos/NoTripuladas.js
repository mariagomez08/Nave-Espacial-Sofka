const Nave = require('./Nave')

class NoTripuladas extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "Naves espaciales no tripuladas";
  }
  // get tipo() {
  //   return this.tipo;
  // }
  // set tipo(nave2) {//modificar 
  //   this.tipo = nave2;
  // }
}

module.exports = NoTripuladas;