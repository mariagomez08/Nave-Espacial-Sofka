const Nave = require('./Nave')

class TipoNave1 extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "TipoNave1";
  }
  get TipoNave1() {
    return this.TipoNave1;
  }
  set TipoNave1(nave1) {
    this.nombre = nave1;
  }
}

module.exports = TipoNave1;
