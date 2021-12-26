import { Genero } from "../enums/Genero.js";
import { TipoDocumento } from "../enums/TipoDocumento.js";
import {Usuario} from "./Usuario.js"

export class Duenio {
    constructor(
        nombreUsuario,
        contrasenioUsuario,
        mail,
        nombre,
        apellido,
        edad,
        genero,
        tipoDocumento,
        numeroDocumento,
        direccion,
        telefono,
        mascotas
    ) {
        this.usuario = new Usuario(nombreUsuario, contrasenioUsuario, mail);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = Genero[genero];
        this.tipoDocumento = TipoDocumento[tipoDocumento];
        this.numeroDocumento = numeroDocumento;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono  = telefono;
        this.mascotas = mascotas == null ? new Array() : mascotas;
    }

    agregarMascota(mascota) {
        this.mascotas.push(mascota);
    }
}