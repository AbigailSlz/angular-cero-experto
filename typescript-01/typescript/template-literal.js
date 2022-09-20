"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = 'Abigail';
    const apellido = 'Salazar';
    const edad = 25;
    //const salida = nombre + " " + apellido + " ( " + edad + " )";
    const salida = `${nombre} 
    ${apellido} 
    ${edad + getEdad()}`;
    console.log(salida);
})();
