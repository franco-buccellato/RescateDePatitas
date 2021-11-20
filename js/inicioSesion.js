import {Estado} from "./enums/Estado.js"
import {Sexo} from "./enums/Sexo.js"
import {TipoMascota} from "./enums/TipoMascota.js"
import {TipoDocumento} from "./enums/TipoDocumento.js"
import {Duenio} from "./clases/Duenio.js"
import {Mascota} from "./clases/Mascota.js"
import {Usuario} from "./clases/Usuario.js"

let duenioActual;
let dueniosRegistrados;

document.getElementById('boton-inicio-sesion').addEventListener('click', validarUsuario);


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
            console.log(dueniosRegistrados);
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
                
                //Redirecciono a Inicio2
                window.location.href = "index2.html";

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