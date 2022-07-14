const Nave = require('./Nave')

class TipoNave2 extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "Naves espaciales no tripuladas";
  }
  get TipoNave2() {
    return this.TipoNave2;
  }
  set TipoNave2(nave2) {
    this.nombre = nave2;
  }
}

module.exports = TipoNave2;