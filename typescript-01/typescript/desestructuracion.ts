(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const extraer = ({ nombre, poder }: any) => {

        // const { nombre, clave, poder } = avenger;

        console.log(nombre);
        // console.log( clave );
        console.log(poder);
    }

    extraer(avenger);


    const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];

    const [, , spiderman] = avengers;
    // console.log(thor);
    // console.log(iroman);
    console.log(spiderman);

    const extraerArr = ([thor, iroman, spiderman]:string[]) => {

        console.log(thor);
        console.log(iroman);
        
    }

    extraerArr(avengers);

})();


