const Nave = require('./Nave')

class Tripuladas extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "Nave espacial tripulada";
  }
  // get tipo() {
  //   return this.tipo;
  // }
  // set tipo(nave3) {
  //   this.tipo = nave3;
  // }
}

module.exports = Tripuladas;