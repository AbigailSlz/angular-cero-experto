"use strict";
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    };
    const extraer = ({ nombre, poder }) => {
        // const { nombre, clave, poder } = avenger;
        console.log(nombre);
        // console.log( clave );
        console.log(poder);
    };
    extraer(avenger);
    const avengers = ['Thor', 'Iroman', 'Spiderman'];
    const [, , spiderman] = avengers;
    // console.log(thor);
    // console.log(iroman);
    console.log(spiderman);
    const extraerArr = ([thor, iroman, spiderman]) => {
        console.log(thor);
        console.log(iroman);
    };
    extraerArr(avengers);
})();
