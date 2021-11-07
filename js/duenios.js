import Usuario from "RescateDePatitas\js\Usuario.js"

class Duenio {

    constructor(
        nombreUsuario,
        contrasenioUsuario,
        mail,
        nombre,
        apellido,
        edad,
        tipoDocumento,
        numeroDocumento,
        direccion,
        telefono
    ) {
        this.usuario = new Usuario(nombreUsuario, contrasenioUsuario, mail);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono  = telefono;
        this.mascotas = new Set();
    }

    agregarMascota(mascota) {
        this.mascotas.add(mascota);
    }

}