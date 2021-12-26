import { Especie } from "../enums/Especie.js";
import { Sexo } from "../enums/Sexo.js";
import { Estado } from "../enums/Estado.js";

export class Mascota {
    constructor ( 
        especie,
        nombre,
        apodo,
        edad,
        sexo,
        descripcion,
        estado
    ) {
        this.especie = especie;
        this.nombre = nombre;
        this.apodo = apodo;
        this.edad = edad;
        this.sexo = sexo;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}