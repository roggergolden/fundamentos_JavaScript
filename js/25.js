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

// forEach  para enviarlos a la pantalla

carrito.forEach(producto =>  console.log(producto.nombre));





// map para crear un nuevo arreglo

const arreglo2 = carrito.map(producto =>  `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);