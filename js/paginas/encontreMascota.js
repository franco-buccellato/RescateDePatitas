import {Estado} from "../enums/Estado.js"
import {Mascota} from "../clases/Mascota.js"
import { Especie } from "../enums/Especie.js";
import { Sexo } from "../enums/Sexo.js";
import * as interfaceMuestra from '../interfaces/mostrarMascota.js';

//document.getElementById('boton-encontre-mascota').addEventListener('click', registrarMascota);
$('#boton-encontre-mascota').click( () => encontreMascota());

function encontreMascota() {
    let edad = document.getElementById('registro-edad').value;
    let sexo = document.getElementById('registro-sexo').value;
    let especie = document.getElementById('registro-especie').value;
    let descripcion = document.getElementById('registro-descripcion').value;
    let nuevaMascota;
    if(validacionCamposParaEncontreMascota(edad, sexo, especie, descripcion) === true) {
        nuevaMascota = new Mascota(
            especie == 'Perro' ? Especie.PERRO : Especie.GATO,
            'Informó que encontró ésta mascota:',
            '',
            edad,
            sexo == 'Macho' ? Sexo.MACHO : Sexo.HEMBRA,
            descripcion,
            Estado.ENCONTRADO
        );
        console.log(nuevaMascota)
        let mascotasEncontradas = JSON.parse(localStorage.getItem('mascotasEncontradas'));
        mascotasEncontradas.push(nuevaMascota);
        localStorage.setItem('mascotasEncontradas', JSON.stringify(mascotasEncontradas));
        if(especie == 'Perro') {
            interfaceMuestra.mostrarMascotaCargadaPerro(nuevaMascota, 'encontreMascota.html');
        } else {
            interfaceMuestra.mostrarMascotaCargadaGato(nuevaMascota, 'encontreMascota.html');
        }
    } else {
        console.log("Alguno o varios de los campos está vacio.");
    }
}

function validacionCamposParaEncontreMascota(edad, sexo, especie, descripcion) {
    if(
        edad != "",
        sexo != "",
        especie != "",
        descripcion != ""
    ) {
        return true;
    }
    return false;
}