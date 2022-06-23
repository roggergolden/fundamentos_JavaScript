// Tipos de datos

// string o cadena de texto

const tweet = "Aprendiendo JavaScript en el curso de Desarrollo Web completo"; 
const producto2 = "Monitor HD"; 


console.log(tweet.length);  // length sirve para conocer la extensión del texto, es decir cuantos caracteres tiene, Ejm: twiter lo utliza para determinar la cantidad de caracteres que puedes escribir
console.log(producto2);

//Indexof sirve para saber en que posición se encuentra un texto que estoy buscando

console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("laptop"));

//Include -- Retorna true or false

console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("laptop"));

