/*
import Mascota from "RescateDePatitas\js\mascota.js";
import Duenio from "RescateDePatitas\js\duenio.js";
import Estado from "RescateDePatitas\js\estado.js";
import Sexo from "RescateDePatitas\js\sexo.js";
import TipoDocumento from "RescateDePatitas\js\tipoDocumento.js";
import TipoMascota from "RescateDePatitas\js\tipoMascota.js";
import Usuario from "RescateDePatitas\js\Usuario.js"
*/

let dueniosRegistrados = new Array(); 

function main() {
    console.log("Estoy corriendo.");
    cargarDuenioAdmin();
}

function cargarDuenioAdmin() {
    let duenioAdmin = new Duenio(
        'admin',
        'admin',
        'Francobuccellato@gmail.com',
        'Franco',
        'Buccellato',
        26,
        'DNI',
        '38947114',
        'Santos Vega 5822',
        '1133235987'
    );
    dueniosRegistrados.push(duenioAdmin);
    localStorage.setItem('duenio', JSON.stringify(duenioAdmin));
    console.log("Cargue Duenio Admin.");
}

function validarUsuario() {
    console.log("Validando usuario....");
    let usuario = document.getElementById('usuario-logueo').value;
    console.log("El usuario ingresado es: " + usuario);
    let contrasenia = document.getElementById('contrasenia-logueo').value;
    console.log("La contraseña ingresada es: " + contrasenia);
    if(usuario != "") {
        if(contrasenia != "") {
            if(
                dueniosRegistrados.find(
                    unDuenio =>
                    unDuenio.usuario.usuario === usuario &
                    unDuenio.usuario.contrasenia === contrasenia
                ) != null
            ) {
                console.log("Usuario y Contraseña Validado.");

                //Redirecciono a Inicio
                window.location.href = "index.html";

            } else {
                console.log("Usuario o contraseña Incorrecto.")
            }
        } else {
            console.log("Ingrese una contraseña.");
            return false; 
        }
    } else {
        console.log("Ingrese nombre usuario.");
        return false;
    }
}

function registrarUsuario() {
    let nombre = document.getElementById('creacion-nombre').value;
    let apellido = document.getElementById('creacion-apellido').value;
    let mail = document.getElementById('creacion-mail').value;
    let edad = document.getElementById('creacion-edad').value;
    let sexo = document.getElementById('creacion-sexo').value;
    let tipoDocumento = document.getElementById('creacion-tipo-documento').value;
    let numeroDocumento = document.getElementById('creacion-numero-documento').value;
    let direccion = document.getElementById('creacion-direccion').value;
    let telefono = document.getElementById('creacion-telefono').value;
    let usuario = document.getElementById('creacion-usuario').value;
    let contrasenia1 = document.getElementById('creacion-contrasenia1').value;
    let contrasenia2 = document.getElementById('creacion-contrasenia2').value;
    if(validacionCamposParaCreacion(
        nombre,
        apellido,
        mail,
        edad,
        sexo,
        tipoDocumento,
        numeroDocumento,
        direccion, telefono,
        usuario,
        contrasenia1,
        contrasenia2
        ) === true) {
        if(contrasenia1 === contrasenia2) {
            let nuevoDuenio = new Duenio(
                usuario,
                contrasenia1,
                mail,
                nombre,
                apellido,
                edad,
                sexo,
                tipoDocumento,
                numeroDocumento,
                direccion,
                telefono
            );
            agregarNuevoDuenio(nuevoDuenio);
            console.log("Nuevo dueño cargado correctamente.");
            window.alert("Nuevo dueño cargado correctamente.");
            //Redirecciono a Login
            window.location.href = "inicioSesion.html";
        } else {
            console.log("Las contraseñas no coinciden.");
            window.alert("No coinciden las contraseñas.");
        }
    } else {
        console.log('No estan todos los campos completos o correctos.');
    }
}

function validacionCamposParaCreacion(
    nombre,
    apellido,
    mail,
    edad,
    sexo,
    tipoDocumento,
    numeroDocumento,
    direccion,
    telefono,
    usuario,
    contrasenia1,
    contrasenia2
    ) {
        if(
            nombre != "",
            apellido != "",
            mail != "",
            edad != "",
            sexo != "",
            tipoDocumento != "",
            numeroDocumento != "",
            direccion != "",
            telefono != "",
            usuario != "",
            contrasenia1 != "",
            contrasenia2 != ""
        ) {
            return true;
        }
        return false;
    }

function agregarNuevoDuenio(nuevoDuenio) {
    dueniosRegistrados.push(nuevoDuenio);
    console.log("Dueño agregado.");
}

class Usuario {

    constructor(usuario, contrasenia, mail) {

        this.usuario = usuario;
        this.contrasenia = contrasenia,
        this.mail = mail
    }

}

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
        this.mascotas = new Array();
    }

}