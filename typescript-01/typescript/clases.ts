(() => {


    // class Avenger {

    //     nombre: string = 'sin nombre';
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor( nombre: string , equipo:string){
    //         this.nombre = nombre;
    //         this.equipo = equipo;

    //     }

    // }

    // const antman = new Avenger('Antman', 'Capi');


    class Avenger {

        // nombre: string = 'sin nombre';
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor(public nombre: string,
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear?: boolean,
                    public peleasGanadas: number = 0
        ) {

        }

    }

    const antman = new Avenger('Antman', 'Capi');

    console.log(antman);

})();


