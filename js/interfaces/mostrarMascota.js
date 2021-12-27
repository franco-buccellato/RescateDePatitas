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

export function mostrarMiMascotaCargadaGato(nuevaMascota) {
    $.ajax({
        method: "GET",
        url:  URLAPICAT,
        success: function(res) {
            console.log(res[0].url);
            $("#informacion").append(
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
                        </div>
                    </div>
                </div>
            </section>`
            );
        }
    });
}

export function mostrarMiMascotaCargadaPerro(nuevaMascota) {
    $.ajax({
        method: "GET",
        url:  URLAPICAT,
        success: function(res) {
            console.log(res[0].url);
            $("#informacion").append(
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
                        </div>
                    </div>
                </div>
            </section>`
            );
        }
    });
}

export function mostrarSinMascotas() {
    $("#informacion").replaceWith(
        `<section>
        <div id="informacion">
            <br><br>
            <div class="container-informacion-mascota">
                <h1>No posee mascotas.</h1>
            </div>
        </div>
    </section>`
    );
}