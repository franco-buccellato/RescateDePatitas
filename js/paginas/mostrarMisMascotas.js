import * as interfaceMuestra from '../interfaces/mostrarMascota.js';

mostrarMascotasDelDuenioActual();

function mostrarMascotasDelDuenioActual() {
    console.log('Estoy mostrando las mascotas');
    let duenioActual = localStorage.getItem('duenioActual');
    duenioActual = JSON.parse(duenioActual);
    console.log(duenioActual);
    if(duenioActual.mascotas.length == 0) {
        interfaceMuestra.mostrarSinMascotas();
    } else {
        duenioActual.mascotas.forEach(unaMascota => {
            console.log(unaMascota.especie);
            unaMascota.especie == 'Perro' ? 
            interfaceMuestra.mostrarMiMascotaCargadaPerro(unaMascota, 'misMascotas.html') : 
            interfaceMuestra.mostrarMiMascotaCargadaGato(unaMascota, 'misMascotas.html');
        });
    }
}