// Arrays o Arreglos

const numeros = [10,20,30,40,50];

console.table(numeros);

const meses = ["Enero", "Febrero", " Marzo", "Abril", "Mayo"];

console.table(meses);


//Aceder a los valores de un arreglo

console.log(numeros[4]);
console.log(numeros[2]);


// Conocer la extención de un arreglo  (para saber cuantos elementos hay)

console.log(meses.length);


//Te muestra todos los elementos 
numeros.forEach( function (numeros){
    console.log(numeros);
})