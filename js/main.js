import {Duenio} from "./clases/Duenio.js"

main();

function main() {
    localStorage.setItem(
        'duenios', JSON.stringify(
            [new Duenio(
                'admin',
                'admin',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            )]
        )
    );
    localStorage.getItem('mascotasEncontradas') == null ? localStorage.setItem('mascotasEncontradas', JSON.stringify(
        `[
            {"especie":"Gato","nombre":"Informó que encontró ésta mascota:","apodo":"","edad":"Sunt amet et eum di","sexo":"Hembra","descripcion":"Beatae dolore ut aut","estado":"encontrado"},
            {"especie":"Perro","nombre":"Informó que encontró ésta mascota:","apodo":"","edad":"Ut tenetur vel corru","sexo":"Hembra","descripcion":"Facere sunt in quae","estado":"encontrado"},
            {"especie":"Gato","nombre":"Informó que encontró ésta mascota:","apodo":"","edad":"Voluptatem iusto arc","sexo":"Hembra","descripcion":"Et in earum est qui ","estado":"encontrado"},
            {"especie":"Perro","nombre":"Informó que encontró ésta mascota:","apodo":"","edad":"Corporis officia aut","sexo":"Hembra","descripcion":"Natus ipsa perferen","estado":"encontrado"}
        ]`
    )) : null;
    console.log("Estoy corriendo.");
}
