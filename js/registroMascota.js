import {Estado} from "./enums/Estado.js"
import {Sexo} from "./enums/Sexo.js"
import {TipoMascota} from "./enums/TipoMascota.js"
import {TipoDocumento} from "./enums/TipoDocumento.js"
import {Duenio} from "./clases/Duenio.js"
import {Mascota} from "./clases/Mascota.js"
import {Usuario} from "./clases/Usuario.js"

document.getElementById('boton-registrar-mascota').addEventListener('click', registrarMascota);

function registrarMascota() {
    let nombre = document.getElementById('registro-nombre').value;
    let apodo = document.getElementById('registro-apodo').value;
    let edad = document.getElementById('registro-edad').value;
    let sexo = document.getElementById('registro-sexo').value;
    let especie = document.getElementById('registro-especie').value;
    let raza = document.getElementById('registro-raza').value;
    let descripcion = document.getElementById('registro-descripcion').value;
    let fotos = document.getElementById('registro-fotos').value;
    let nuevaMascota, duenioActual;
    if(validacionCamposParaRegistroMascota(nombre, apodo, edad, sexo, especie, raza, descripcion, fotos) === true) {
        nuevaMascota = new Mascota(especie, nombre, apodo, edad, sexo, raza, descripcion, fotos, Estado.REGISTRADO);
        duenioActual = localStorage.getItem('duenioActual');
        console.log(duenioActual);
        duenioActual = JSON.parse(duenioActual);
        console.log(duenioActual);
        let listadoDuenios = localStorage.getItem('duenios');
        listadoDuenios = JSON.parse(listadoDuenios);
        for(let i=0; i < listadoDuenios.length;  i++) {
            if(listadoDuenios[i].usuario.usuario === duenioActual.usuario.usuario) {
                console.log(listadoDuenios[i]);
                //listadoDuenios[i].agregarMascota(nuevaMascota);
                listadoDuenios[i].mascotas.push(nuevaMascota);
                localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
                console.log('Se agrego la mascota correctamente.');
                mostrarMascotaCargada(nuevaMascota);
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

function mostrarMascotaCargada(nuevaMascota) {
    document.querySelector('section-registrar')
}