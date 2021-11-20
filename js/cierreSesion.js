import {Estado} from "./enums/Estado.js"
import {Sexo} from "./enums/Sexo.js"
import {TipoMascota} from "./enums/TipoMascota.js"
import {TipoDocumento} from "./enums/TipoDocumento.js"
import {Duenio} from "./clases/Duenio.js"
import {Mascota} from "./clases/Mascota.js"
import {Usuario} from "./clases/Usuario.js"

let duenioActual;
let dueniosRegistrados;

document.getElementById('boton-cierre-sesion').addEventListener('click', cerrarSesion);


function cerrarSesion() {
    console.log("Cerrando sesion....");
    localStorage.removeItem('duenioActual');
    window.location.href = "index.html";
}