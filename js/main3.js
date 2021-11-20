import {Estado} from "./enums/Estado.js"
import {Sexo} from "./enums/Sexo.js"
import {TipoMascota} from "./enums/TipoMascota.js"
import {TipoDocumento} from "./enums/TipoDocumento.js"
import {Duenio} from "./clases/Duenio.js"
import {Mascota} from "./clases/Mascota.js"
import {Usuario} from "./clases/Usuario.js"

let duenioActual;
let dueniosRegistrados;

main();

function main() {
    localStorage.setItem('duenios', JSON.stringify(
        [
            {
                nombreUsuario:"franco",
                contrasenioUsuario:"franco",
                mail:"",
                nombre:"",
                apellido:"",
                edad:"",
                tipoDocumento:"",
                numeroDocumento:"",
                direccion:"",
                telefono:""
            }
        ]
    ));
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
    agregarNuevoDuenio(duenioAdmin);
    console.log("Cargue Duenio Admin.");
}

function agregarNuevoDuenio(nuevoDuenio) {
    let listadoDuenios = localStorage.getItem('duenios');
    listadoDuenios = JSON.parse(listadoDuenios);
    console.log(listadoDuenios);
    listadoDuenios.push(nuevoDuenio);
    console.log("Dueño agregado.");
    localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
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