/*
import Mascota from "RescateDePatitas\js\mascota.js";
import Duenio from "RescateDePatitas\js\duenio.js";
import Estado from "RescateDePatitas\js\estado.js";
import Sexo from "RescateDePatitas\js\sexo.js";
import TipoDocumento from "RescateDePatitas\js\tipoDocumento.js";
import TipoMascota from "RescateDePatitas\js\tipoMascota.js";
import Usuario from "RescateDePatitas\js\Usuario.js"
*/

let duenioActual;
let dueniosRegistrados;

function main() {
    //console.log("Estoy corriendo.");
    //cargarDuenioAdmin();
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
    agregarNuevoDuenio(duenioAdmin);
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
            dueniosRegistrados = localStorage.getItem('duenios');
            dueniosRegistrados = JSON.parse(dueniosRegistrados);
            duenioActual = dueniosRegistrados.find(
                unDuenio =>
                unDuenio.usuario.usuario === usuario &
                unDuenio.usuario.contrasenia === contrasenia
            );
            if(
                duenioActual != null
            ) {
                console.log("Usuario y Contraseña Validado.");

                localStorage.setItem('duenioActual', JSON.stringify(duenioActual));
                
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
    let listadoDuenios = localStorage.getItem('duenios');
    listadoDuenios = JSON.parse(listadoDuenios);
    listadoDuenios.push(nuevoDuenio);
    console.log("Dueño agregado.");
    localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
}

function registrarMascota() {
    let nombre = document.getElementById('registro-nombre').value;
    let apodo = document.getElementById('registro-apodo').value;
    let edad = document.getElementById('registro-edad').value;
    let sexo = document.getElementById('registro-sexo').value;
    let especie = document.getElementById('registro-especie').value;
    let raza = document.getElementById('registro-raza').value;
    let descripcion = document.getElementById('registro-descripcion').value;
    let fotos = document.getElementById('registro-fotos').value;
    let nuevaMascota;
    if(validacionCamposParaRegistroMascota(nombre, apodo, edad, sexo, especie, raza, descripcion, fotos) === true) {
        nuevaMascota = new Mascota(especie, nombre, apodo, edad, sexo, raza, descripcion, fotos, Estado.REGISTRADO);
        duenioActual = localStorage.getItem('duenioActual');
        duenioActual = JSON.parse(duenioActual);
        let listadoDuenios = localStorage.getItem('duenios');
        listadoDuenios = JSON.parse(listadoDuenios);
        for(let i=0; i < listadoDuenios.length;  i++) {
            if(listadoDuenios[i].usuario.usuario === duenioActual.usuario.usuario) {
                console.log(listadoDuenios[i]);
                //listadoDuenios[i].agregarMascota(nuevaMascota);
                listadoDuenios[i].mascotas.push(nuevaMascota);
                localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
                console.log('Se agrego la mascota correctamente.');
            }
        }
    } else {
        console.log("Alguno o varios de los campos está vacio.");
    }
}

function validacionCamposParaRegistroMascota(nombre, apodo, edad, sexo, especie, raza, descripcion, fotos) {
    if(
        nombre != "",
        apodo != "",
        edad != "",
        sexo != "",
        especie != "",
        raza != "",
        descripcion != "",
        fotos != ""
    ) {
        return true;
    }
    return false;
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

    agregarMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }

}

class Mascota {

    constructor ( 
        tipoMascota,
        nombre,
        apodo,
        edadAproximada,
        sexo,
        raza,
        descripcionFisica,
        fotos,
        estado
    ) {
        this.tipoMascota = tipoMascota;
        this.nombre = nombre;
        this.apodo = apodo;
        this.edadAproximada = edadAproximada;
        this.sexo = sexo;
        this.raza = raza;
        this.descripcionFisica = descripcionFisica;
        this.fotos = fotos;
        this.estado = estado;
    }

}

const Estado = {
    PERDIDO: "perdido",
    ENCONTRADO: "encontrado",
    REGISTRADO: "registrado"
}

const Sexo = {
    MASCULINO: "M",
    FEMENINO: "F",
    INDETERMINADO: "I"
}

const TipoDocumento = {
    DNI: "dni",
    PASAPORTE: "pasaporte"
}

const TipoMascota = {
    PERRO: "perro",
    GATO: "gato"
}