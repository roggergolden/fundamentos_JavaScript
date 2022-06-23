// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Forma antiguar de hacerlo

// const nombreProducto = producto.nombreProducto;
// const precioProducto = producto.precio;

// console.log(nombreProducto);
// console.log(precioProducto);

//Distructuring

const {precio, nombreProducto} = producto;


console.log(precio)
console.log(nombreProducto)




