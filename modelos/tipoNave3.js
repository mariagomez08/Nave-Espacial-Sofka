const Nave = require('./nave')

class TipoNave3 extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "Nave espacial tripulada";
  }
  get TipoNave3() {
    return this.TipoNave3;
  }
  set TipoNave3(nave3) {
    this.nombre = nave3;
  }
}

module.exports = TipoNave3;