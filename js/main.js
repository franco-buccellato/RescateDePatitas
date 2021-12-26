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
    localStorage.getItem('mascotasEncontradas') == null ? localStorage.setItem('mascotasEncontradas', JSON.stringify(new Array())) : null;
    console.log("Estoy corriendo.");
}
