import {Duenio} from "../clases/Duenio.js"

//document.getElementById('boton-registrar-usuario').addEventListener('click', registrarUsuario);
$('#boton-registrar-usuario').click( () => registrarUsuario());

function agregarNuevoDuenio(nuevoDuenio) {
    let listadoDuenios = localStorage.getItem('duenios');
    listadoDuenios = JSON.parse(listadoDuenios);
    listadoDuenios.push(nuevoDuenio);
    console.log("Dueño agregado.");
    localStorage.setItem('duenios', JSON.stringify(listadoDuenios));
}

function registrarUsuario() {
    //let nombre = document.getElementById('creacion-nombre').value;
    let nombre = $('#creacion-apellido').val()
    //let apellido = document.getElementById('creacion-apellido').value;
    let apellido = $('#creacion-apellido').val()
    //let mail = document.getElementById('creacion-mail').value;
    let mail = $('#creacion-mail').val()
    //let edad = document.getElementById('creacion-edad').value;
    let edad = $('#creacion-edad').val()
    //let sexo = document.getElementById('creacion-sexo').value;
    let sexo = $('#creacion-sexo').val()
    //let tipoDocumento = document.getElementById('creacion-tipo-documento').value;
    let tipoDocumento = $('#creacion-tipo.documento').val()
    //let numeroDocumento = document.getElementById('creacion-numero-documento').value;
    let numeroDocumento = $('#creacion-numero-documento').val()
    //let direccion = document.getElementById('creacion-direccion').value;
    let direccion = $('#creacion-direccion').val()
    //let telefono = document.getElementById('creacion-telefono').value;
    let telefono = $('#creacion-telefono').val()
    //let usuario = document.getElementById('creacion-usuario').value;
    let usuario = $('#creacion-usuario').val()
    //let contrasenia1 = document.getElementById('creacion-contrasenia1').value;
    let contrasenia1 = $('#creacion-contrasenia1').val()
    //let contrasenia2 = document.getElementById('creacion-contrasenia2').value;
    let contrasenia2 = $('#creacion-contrasenia2').val()
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