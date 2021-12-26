const URLAPIDOG = 'https://dog.ceo/api/breeds/image/random';
const URLAPICAT = 'https://api.thecatapi.com/v1/images/search';

export function mostrarMascotaCargadaPerro(nuevaMascota, url) {
    $.ajax({
        method: "GET",
        url:  URLAPIDOG,
        success: function(res) {
            console.log(res.message);
            $(".registro").replaceWith(
                `<section>
                <div id="informacion">
                    <div class="container-informacion-mascota">
                        <div class="tarjeta-mascota">
                            <h1>${nuevaMascota.nombre}</h1>
                            <img src="${res.message}" height="300vw">
                            <div>
                                <h2>${nuevaMascota.apodo}</h2>
                            </div>
                            <ul>
                                <li>Edad: <p>${nuevaMascota.edad}</p></li>
                                <li>Especie: <p>${nuevaMascota.especie}</p></li>
                                <li>Descripcion: <p>${nuevaMascota.descripcion}</p></li>
                            </ul>
                            <div>
                                <br>
                                <br>
                                <button class="boton-submit" role="link" onclick="window.location='${url}'">Ingresar nueva Mascota</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
            );
        }
    });
}

export function mostrarMascotaCargadaGato(nuevaMascota, url) {
    $.ajax({
        method: "GET",
        url:  URLAPICAT,
        success: function(res) {
            console.log(res[0].url);
            $(".registro").replaceWith(
                `<section>
                <div id="informacion">
                    <div class="container-informacion-mascota">
                        <div class="tarjeta-mascota">
                            <h1>${nuevaMascota.nombre}</h1>
                            <img src="${res[0].url}" height="300vw">
                            <div>
                                <h2>${nuevaMascota.apodo}</h2>
                            </div>
                            <ul>
                                <li>Edad: <p>${nuevaMascota.edad}</p></li>
                                <li>Especie: <p>${nuevaMascota.especie}</p></li>
                                <li>Descripcion: <p>${nuevaMascota.descripcion}</p></li>
                            </ul>
                            <div>
                                <br>
                                <br>
                                <button class="boton-submit" role="link" onclick="window.location='${url}'">Ingresar nueva Mascota</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
            );
        }
    });
}

/* function mostrarMascotaCargada(nuevaMascota) {
    let tarjetaMascota = document.createElement('div');
    tarjetaMascota.innerHTML =
        `<section>
            <div id="informacion">
                <div class="container-informacion-mascota">
                    <div class="tarjeta-mascota">
                        <h1>${nuevaMascota.nombre}</h1>
                        <img src="" height="300vw">
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
        </section>`;
    document.querySelector('.registro').replaceWith(tarjetaMascota);
} */