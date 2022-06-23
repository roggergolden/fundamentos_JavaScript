// Arrays o Arreglos

//Eliminar arreglos

const numeros = [10,20,30,40,50];


numeros.push(60,70,80);  //para agregar al final del arreglo

numeros.unshift(-10, -20, -20)  // para agregar al inicio del arreglo

console.table(numeros);




const meses = ["Enero", "Febrero", " Marzo", "Abril", "Mayo"];

// meses.pop(); // elimina el últlimo elemento
// meses.shift(); //  elimina el primer elemento

// meses.splice(2, 1);

// console.table(meses);


// REst operator  o Spread Operator

const nuevoArreglo = [...meses, "Junio"];

console.log(nuevoArreglo);
