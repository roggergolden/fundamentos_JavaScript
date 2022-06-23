//Arrays methods

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

meses.forEach(function(mes) {
    if(mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

//Includes

let resultado = meses.includes("diciembre");

console.log(resultado);


// Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre == "celular"
})

// Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);



// Filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== "celular"
});

console.log(resultado);