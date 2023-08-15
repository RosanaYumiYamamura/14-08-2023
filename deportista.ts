//Crear un super clase llamada Deportista 
//(que tenga al menos 3 atributos 
//[al menos 1 atributo en protected] y 
//2 métodos ademas de los respectivos constructores. 
//Crear 3 subclases hijas de esa superclase Deportista, 
//cada una con al menos un nuevo método especifico y un atributo extra tambien.
//una de las sub clases podria estar compuesta por otras clases. 
class Deportista {
    nombre: string;
    edad: number;
    protected deporte: string;

    constructor(nombre: string, edad: number, deporte: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.deporte = deporte;
    }

    entrenar(): void {
        console.log(`${this.nombre} está entrenando para mejorar en su deporte.`);
    }

    descansar(): void {
        console.log(`${this.nombre} está tomando un descanso para recuperarse.`);
    }
}

class Futbolista extends Deportista {
    posicion: string;

    constructor(nombre: string, edad: number, deporte: string, posicion: string) {
        super(nombre, edad, deporte);
        this.posicion = posicion;
    }

    jugarPartido(): void {
        console.log(`${this.nombre} está jugando un partido de fútbol como ${this.posicion}.`);
    }

    practicarPenales(): void {
        console.log(`${this.nombre} está practicando tiros de penal.`);
    }
}

class Nadador extends Deportista {
    estilo: string;

    constructor(nombre: string, edad: number, deporte: string, estilo: string) {
        super(nombre, edad, deporte);
        this.estilo = estilo;
    }

    nadar(): void {
        console.log(`${this.nombre} está nadando estilo ${this.estilo}.`);
    }

    realizarEjerciciosEnAguaLibre(): void {
        console.log(`${this.nombre} está realizando ejercicios en aguas abiertas.`);
    }
}

class Ciclista extends Deportista {
    tipoBicicleta: string;

    constructor(nombre: string, edad: number, deporte: string, tipoBicicleta: string) {
        super(nombre, edad, deporte);
        this.tipoBicicleta = tipoBicicleta;
    }

    pedalear(): void {
        console.log(`${this.nombre} está pedaleando en una bicicleta ${this.tipoBicicleta}.`);
    }

    hacerSaltos(): void {
        console.log(`${this.nombre} está realizando saltos en su bicicleta.`);
    }
}

class Equipo {
    nombre: string;
    integrantes: Deportista[];

    constructor(nombre: string, integrantes: Deportista[]) {
        this.nombre = nombre;
        this.integrantes = integrantes;
    }

    entrenarEquipo(): void {
        this.integrantes.forEach(deportista => deportista.entrenar());
    }

    presentarEquipo(): void {
        console.log(`Equipo: ${this.nombre}`);
        this.integrantes.forEach(deportista => {
            console.log(`- ${deportista.nombre}, ${deportista.edad} años`);
        });
    }
}

// Ejemplo de uso
const futbolista1 = new Futbolista("Lionel Messi", 34, "fútbol", "delantero");
const nadador1 = new Nadador("Michael Phelps", 36, "natación", "mariposa");
const ciclista1 = new Ciclista("Chris Froome", 36, "ciclismo", "de montaña");

const equipoDeportesAcuaticos = new Equipo("Equipo de Deportes Acuáticos", [nadador1]);
equipoDeportesAcuaticos.entrenarEquipo();
equipoDeportesAcuaticos.presentarEquipo();

futbolista1.jugarPartido();
ciclista1.pedalear();
