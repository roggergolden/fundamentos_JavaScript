// Arrow functions

const sumar2 = (numero1,numero2) => console.log( numero1 + numero2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)


aprendiendo("JavaScript")




const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "monitor de 20 pulgadas", precio: 500 },
    {nombre: "Televisión de 20 pulgadas", precio: 700 },
    {nombre: "Tablet de 20 pulgadas", precio: 300 },
    {nombre: "audifonos de 20 pulgadas", precio: 200 },
    {nombre: "teclado", precio: 50 },
    {nombre: "celular", precio: 500 },
    {nombre: "bocinas", precio: 300 },
    {nombre: "Laptop", precio: 500 },
];

// foreach 

meses.forEach(mes => {
    if(mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

let resultado;
// Some ideal para arreglo de objetos

resultado = carrito.some(producto =>  producto.nombre == "celular")

// Reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter

resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre !== "celular");

console.log(resultado);
