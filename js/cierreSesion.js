document.getElementById('boton-cierre-sesion').addEventListener('click', cerrarSesion);

function cerrarSesion() {
    console.log("Cerrando sesion....");
    localStorage.removeItem('duenioActual');
    window.location.href = "index.html";
}