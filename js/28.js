
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }

    obtenerPrecio () {
        console.log(this.precio)
    }


}

const producto2 = new Producto("Monitor turbo de 40 pulgadas", 800);
const producto3 = new Producto("Laptop turbo de 40 pulgadas", 2000);


// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn

    }

    formatearProducto() {
        return `${super.formatearProducto() }. y su isbn es ${this.isbn}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio();
        console.log("Y si hay una existencia")
    }
}

const libro = new Libro("JavaScript la revoliución", 120, "684981619189")
console.log(libro.formatearProducto() );

console.log(libro.obtenerPrecio() )
console.log(producto2.formatearProducto());
