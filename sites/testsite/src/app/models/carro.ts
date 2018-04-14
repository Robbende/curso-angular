
export class Carro {
    marca: string;
    modelo: string;
    nombre: string;
    year: number;
    color: string;

    constructor (mar: string, mod: string, nombre: string, year: number, col: string) {
        this.marca = mar;
        this.modelo = mod;
        this.nombre = nombre;
        this.year = year;
        this.color = col;
    }
}
