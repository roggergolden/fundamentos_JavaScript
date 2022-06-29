// Programación Orientada a Objetos POO


// Objeto Literal
const producto = {
    nombre : "Tablet",
    precio : 500

}

// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;


}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} tiene un precio de : $ ${this.apellido}`;
}


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;


}

// Crear funciones que sólo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
}


const producto2 = new Producto("Monitor turbo de 40 pulgadas", 800);
const producto3 = new Producto("Laptop turbo de 40 pulgadas", 2000);
const cliente = new Cliente( "Rogger", "Salazar");

console.log(cliente);




function formatearProducto(producto) {
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
}

console.log(producto2);

console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())




