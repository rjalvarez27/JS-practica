/*
1) Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.
*/

const libros = {
    "la_piedra_filosofal": {
        nombre: "Harry Potter y la piedra filosofal",
        autor: 'J.K. Rowling',
        año: 1997,
        copias: 450,
        precio: 50
    },
    "cámara_secreta": {
        nombre: "Harry Potter y la cámara secreta",
        autor: 'J.K. Rowling',
        año: 1998,
        copias: 500,
        precio: 60
    },
    "el_prisionero_de_Azkaban": {
        nombre: "Harry Potter y el prisionero de Azkaban",
        autor: 'J.K. Rowling',
        año: 2000,
        copias: 600,
        precio: 60
    },
    "el_cáliz_de_fuego": {
        nombre: "Harry Potter y el cáliz de fuego",
        autor: 'J.K. Rowling',
        año: 2001,
        copias: 550,
        precio: 55
    }
}

for (let i in libros) {
    console.log(`titulo : ${libros[i].nombre} Autor: ${libros[i].autor}`)
}

/*
2) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.
*/

const personas = [
    {
        nombre: "pedro",
        edad: 34,
        ciudad: "caracas",
    },
    {
        nombre: "saul",
        edad: 37,
        ciudad: "San Antonio",
    },
    {
        nombre: "Maria",
        edad: 28,
        ciudad: "Los Teques",
    },
    {
        nombre: "Arnoldo",
        edad: 25,
        ciudad: "Valencia",
    }
]

for (let value of personas) {
    console.log(`nombre: ${value.nombre} y ciudad: ${value.ciudad}`)
}

/*
3) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero máximo de intentos. (Investigar Math.random).
*/
/*
let palabra1 = ["comico", "risa", "carcajadas", "serio"]
let palabraAleatoria = palabra1[Math.floor(Math.random()* palabra1.length)];
let letra1 = palabraAleatoria.split("");
let max = 9;
let min = 0;
let palabraAdivinada = [];
do {
    let promt = prompt(`Ingrese la letra de la palabra: ${palabraAdivinada}`)
    if(letra1.includes(promt)){
        for(let i = 0; i < letra1.length; i++ ){
            if(letra1[i] === promt){
                palabraAdivinada[i] = promt
            }
        }
    }else{
        min++; 
    }
}while(min < max && palabraAdivinada.join("") !== palabraAleatoria);

if(palabraAdivinada.join("") !== palabraAleatoria){
    console.log("Felicidades")
}else {
    console.log("Game Over")
}
/*

/*
4) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.
*/

class Player {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar() {
        return `Hola soy ${this._nombre} y tengo  ${this._edad} años`;
    }
}

let Player1 = new Player("Pedro", 34);

console.log(Player1.saludar());

/*
5) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parámetro (curso). Agregar un método "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso. 
*/

class Estudiante extends Player {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this._curso = curso;
    }
    get presentar() {
        return `Hola  ${this._nombre} , ${this._edad} , ${this._curso}`
    }
}

let estudiante1 = new Estudiante("jose", 25, "curso A")


console.log(estudiante1.presentar)

/*
6) Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.
*/

function reemplace(texto, valor1, valor2) {
    return texto.replace(valor1, valor2)
}

console.log(reemplace("hola raul", "raul", "pedro"))

/* 
7) Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.
*/
let array0 = [{ nombre: "Andres", edad: 17 }, { nombre: "Juan", edad: 18 }, { nombre: "josefino", edad: 30 }]

function edad(event) {
    return event.filter((value) => value.edad >= 18);
}
console.log(edad(array0))

/*
8) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
*/

let array1 = [{ nombre: "Luis", edad: 33, hobbies: ["videojuegos", "musica", "cine"] }, { nombre: "Juanito", edad: 30 }, { nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"] }]

function value() {
    let length = array1.length;
    for (let i = 0; i < length; i++) {
        console.log(array1[i].nombre, array1[i].edad, array1[i].hobbies);
    }
}
value()

/*
9) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años
*/

array1.push({ nombre: "maria", edad: 25 })
console.log(array1)

/*
10) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.
*/

let nameP = []

for (let i = 0; i < array1.length; i++) {
    nameP.push(array1[i].nombre)
}

console.log(nameP)

let search = nameP.filter(
    function (event) {
        return event.includes("Pedro")
    }
)
console.log(search)

delete array1[2].hobbies

console.log(array1[2])
/*
11) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".
*/


function find(arr, words) {
    let nameJ = []
    for (let i = 0; i < arr.length; i++) {
        nameJ.push(arr[i].nombre)
    }
    let search2 = nameJ.filter(
        function (event) {
            return event.includes(words)
        }
    )
    return search2
}

console.log(find(array1, "Juanito"))

console.log(array1[1])

array1[1].hobbies = "diseñar"

console.log(array1[1])

/*
12) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
*/

/*
      * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
*/
class Inventario {
    constructor() {
        this.productos = [];
    }
    /*
           * Debe haber un método llamado agregarProducto que acepte tres    parámetros (nombre, precio, y cantidad). Este método deberá
             agregar un objeto producto al arreglo productos con los datos proporcionados.
    */
    agregarProducto(nombre, precio, cantidad) {
        const producto = { nombre, precio, cantidad };
        this.productos.push(producto);
    }
    /*
           * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.
    */
    calcularValorTotal() {
        let total = 0;
        this.productos.forEach((producto) => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    }
    /*
           * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada 
              producto (nombre, precio y cantidad).
    */
    listarProductos() {
        this.productos.forEach((producto) => {
            console.log(
                `Nombre del producto: ${producto.nombre}, Precio del producto: ${producto.precio}, Cantidad: ${producto.cantidad}`
            )
        }
        )
    }

}
/*
       * Crea una instancia de la clase "Inventario" llamada miInventario.
*/
const miInventario = new Inventario();
/*
       * Agrega al menos tres productos a miInventario utilizando el método agregarProducto.
*/
miInventario.agregarProducto("manzana", 150, 8);
miInventario.agregarProducto("pera", 250, 4);
miInventario.agregarProducto("melon", 250, 5);
/*
       * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
*/
miInventario.listarProductos();
/*
       * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
*/
const valorTotal = miInventario.calcularValorTotal();
console.log(`Valor total del inventario: ${valorTotal}`)

