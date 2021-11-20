import { Sexo } from "../enums/Sexo.js";
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
        sexo,
        tipoDocumento,
        numeroDocumento,
        direccion,
        telefono
    ) {
        this.usuario = new Usuario(nombreUsuario, contrasenioUsuario, mail);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = Sexo[sexo];
        this.tipoDocumento = TipoDocumento[tipoDocumento];
        this.numeroDocumento = numeroDocumento;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono  = telefono;
        this.mascotas = new Array();
    }

    agregarMascota(mascota) {
        this.mascotas.add(mascota);
    }
}