//document.getElementById('boton-cierre-sesion').addEventListener('click', cerrarSesion);
$('#boton-cierre-sesion').click( () => cerrarSesion());

function cerrarSesion() {
    console.log("Cerrando sesion....");
    localStorage.removeItem('duenioActual');
    window.location.href = "index.html";
}