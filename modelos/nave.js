class Nave {
    constructor(nombre, velocidad, pais) {
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.pais = pais;
    }

    get nombre() {
        return this.nombre;
    }
    set nombre(nom) {
        this.nombre = nom;
    }
    get velocidad() {
        return this.velocidad;
    }
    set velocidad(vel) {
        this.nombre = vel;
    }
    get pais() {
        return this.pais;
    }
    set pais(pa) {
        this.nombre = pais;
    }
}

module.exports = Nave;
