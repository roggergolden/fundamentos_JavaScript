"use strict"; // Correr JavaScript en modo estricto

// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto);  // seal pormite modificar propiedades existentes , pero con ninguna puedes agregar otro
Object.seal(producto);


producto.imagen = "imagen.jpg"; 

console.log(Object.isFrozen(producto));
console.log(producto);