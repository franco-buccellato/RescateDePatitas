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
    console.log("Estoy corriendo.");
}
