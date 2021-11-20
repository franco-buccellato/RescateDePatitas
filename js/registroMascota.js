import {Estado} from "./enums/Estado.js"
import {Mascota} from "./clases/Mascota.js"

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
        nuevaMascota = new Mascota(
            especie,
            nombre,
            apodo,
            edad,
            sexo,
            raza,
            descripcion,
            fotos,
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
    let tarjetaMascota = document.createElement('div');
    tarjetaMascota.innerHTML =
        `<div id="informacion">
            <div class="container-informacion-mascota">
                <div class="card" style="width: 18rem;">
                    <img src="imagenes\socio1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nuevaMascota.nombre}</h5>
                        <p class="card-text">${nuevaMascota.apodo}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Edad: ${nuevaMascota.edad}</li>
                        <li class="list-group-item">Especie: ${nuevaMascota.especie}</li>
                        <li class="list-group-item">Raza: ${nuevaMascota.raza}</li>
                        <li class="list-group-item">Descripcion: ${nuevaMascota.descripcion}</li>
                    </ul>
                    <div class="card-body">
                        <a href="registrarMascota.html" class="card-link">Registrar nueva Mascota</a>
                    </div>
                </div>
            </div>
        </div>
        `
    ;
    document.querySelector('.registro').replaceWith(tarjetaMascota);
}