// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}



// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);


// //otra forma de escribirlo
// console.log(producto["precio"])

// Quitar o agregar información

//Agregar
producto.imagen = "imagen.jpg"

//Eliminar

delete producto.disponible;

console.log(producto);
