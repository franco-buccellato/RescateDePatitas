import * as interfaceMuestra from '../interfaces/mostrarMascota.js';

mostrarMascotasPerdidas();

function mostrarMascotasPerdidas() {
    console.log('Estoy mostrando las mascotas perdidas.');
    let mascotasPerdidas = localStorage.getItem('mascotasEncontradas');
    mascotasPerdidas = JSON.parse(mascotasPerdidas);
    if(mascotasPerdidas.length == 0) {
        interfaceMuestra.mostrarSinMascotas();
    } else {
        mascotasPerdidas.forEach(unaMascota => {
            console.log(unaMascota.especie);
            unaMascota.especie == 'Perro' ? 
            interfaceMuestra.mostrarMiMascotaCargadaPerro(unaMascota, 'misMascotas.html') : 
            interfaceMuestra.mostrarMiMascotaCargadaGato(unaMascota, 'misMascotas.html');
        });
    }
}