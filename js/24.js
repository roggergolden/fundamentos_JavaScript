// For loop

// for( let i = 0; i < 10; i++ ) {
//     console.log(i)

// }

// for( let i = 1; i <= 100; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(`El número ${i} es par`)

//     }else{
//         console.log(`El número ${i} es impar`)

//     }

// }

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

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);

}



//While Loop

// let i = 1; // indice

// while( i <= 100) {   // Condición

//     if ( i % 2 ===0) {
//         console.log(`El número ${i} es par`)
//     } else {
//         console.log(`El número ${i} es impar`)
//     }



//     i ++;  // Incremento

// }




// Do While Loop

let i = 0;

do {
    console.log(i)

    i++;
} while( i < 10);