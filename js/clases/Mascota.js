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
        raza,
        descripcion,
        fotos,
        estado
    ) {
        this.especie = Especie[especie];
        this.nombre = nombre;
        this.apodo = apodo;
        this.edad = edad;
        this.sexo = Sexo[sexo];
        this.raza = raza;
        this.descripcion = descripcion;
        this.fotos = fotos;
        this.estado = Estado[estado];
    }
}