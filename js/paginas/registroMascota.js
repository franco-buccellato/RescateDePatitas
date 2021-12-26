import {Estado} from "../enums/Estado.js";
import {Mascota} from "../clases/Mascota.js";
import {Duenio} from "../clases/Duenio.js";
import {Especie} from "../enums/Especie.js";
import {Sexo} from "../enums/Sexo.js";
import * as interfaceMuestra from '../interfaces/mostrarMascota.js';

//document.getElementById('boton-registrar-mascota').addEventListener('click', registrarMascota);
$('#boton-registrar-mascota').click( () => registrarMascota());

function registrarMascota() {
    let nombre = document.getElementById('registro-nombre').value;
    let apodo = document.getElementById('registro-apodo').value;
    let edad = document.getElementById('registro-edad').value;
    let sexo = document.getElementById('registro-sexo').value;
    let especie = document.getElementById('registro-especie').value;
    let descripcion = document.getElementById('registro-descripcion').value;
    let nuevaMascota, duenioActual;
    if(validacionCamposParaRegistroMascota(nombre, apodo, edad, sexo, especie, descripcion) === true) {
        nuevaMascota = new Mascota(
            especie == 'Perro' ? Especie.PERRO : Especie.GATO,
            nombre,
            apodo,
            edad,
            sexo == 'Macho' ? Sexo.MACHO : Sexo.HEMBRA,
            descripcion,
            Estado.REGISTRADO
        );
        duenioActual = localStorage.getItem('duenioActual');
        console.log(duenioActual);
        duenioActual = JSON.parse(duenioActual);
        console.log(duenioActual);
        let listadoDuenios = localStorage.getItem('duenios');
        listadoDuenios = JSON.parse(listadoDuenios);
        for(let i=0; i < listadoDuenios.length;  i++) {
            if(listadoDuenios[i].usuario.usuario === duenioActual.usuario.usuario) {
                console.log(listadoDuenios[i]);
                let duenio = obtenerDuenio(listadoDuenios[i]);
                console.log(duenio);
                duenio.agregarMascota(nuevaMascota);
                listadoDuenios[i] = duenio;
                localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
                console.log('Se agrego la mascota correctamente.');
                console.log(especie);
                if(especie == 'Perro') {
                    interfaceMuestra.mostrarMascotaCargadaPerro(nuevaMascota, 'registrarMascota.html');
                } else {
                    interfaceMuestra.mostrarMascotaCargadaGato(nuevaMascota, 'registrarMascota.html');
                }
            }
        }
    } else {
        console.log("Alguno o varios de los campos está vacio.");
    }
}

function validacionCamposParaRegistroMascota(nombre, apodo, edad, sexo, especie, descripcion) {
    if(
        nombre != "",
        apodo != "",
        edad != "",
        sexo != "",
        especie != "",
        descripcion != ""
    ) {
        return true;
    }
    return false;
}

function obtenerDuenio(duenio) {
    return new Duenio(
        duenio.usuario.usuario,
        duenio.usuario.contrasenia,
        duenio.usuario.mail,
        duenio.nombre,
        duenio.apellido,
        duenio.edad,
        duenio.genero,
        duenio.tipoDocumento,
        duenio.numeroDocumento,
        duenio.direccion,
        duenio.teledono,
        duenio.mascotas
    )
}