import {Estado} from "./enums/Estado.js"
import {Mascota} from "./clases/Mascota.js"
import { Duenio } from "./clases/Duenio.js";

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
                let duenio = obtenerDuenio(listadoDuenios[i]);
                console.log(duenio);
                duenio.agregarMascota(nuevaMascota);
                listadoDuenios[i] = duenio;
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
        duenio.teledono
    )
}

function mostrarMascotaCargada(nuevaMascota) {
    let tarjetaMascota = document.createElement('div');
    tarjetaMascota.innerHTML =
        `
        <section>
            <div id="informacion">
                <div class="container-informacion-mascota">
                    <div class="tarjeta-mascota">
                        <h1>${nuevaMascota.nombre}</h1>
                        <img src="imagenes/socio1.jpg" height="300vw">
                        <div>
                            <h2>${nuevaMascota.apodo}</h2>
                        </div>
                        <ul>
                            <li>Edad: <p>${nuevaMascota.edad}</p></li>
                            <li>Especie: <p>${nuevaMascota.especie}</p></li>
                            <li>Raza: <p>${nuevaMascota.raza}</p></li>
                            <li>Descripcion: <p>${nuevaMascota.descripcion}</p></li>
                        </ul>
                        <div>
                            <br>
                            <br>
                            <input type="button" class="boton-submit" onclick="window.location.href='/registrarMascota.html'" value="Registrar nueva Mascota">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
    ;
    document.querySelector('.registro').replaceWith(tarjetaMascota);
}