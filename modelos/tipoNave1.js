const Nave = require('./Nave')

class TipoNave1 extends Nave {
  tipo = null;

  constructor(nombre, velocidad, pais) {
    super(nombre, velocidad, pais);
    this.tipo = "Vehiculo Lanzadera";
  }
  get tipo() {
    return this.tipo;
  }
  set tipo(nave1) {
    this.tipo = nave1;
  }
}

module.exports = TipoNave1;
