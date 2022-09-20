"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la misión`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();
