const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) { 
        resolve("Usuario Autenticado");  // El promimse se cumple

    }else {
        reject("No se pudo iniciar sesión");   // El promise no se cumple


    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado) )

    .catch(error => console.log(error))  

//Existen 3 valores posibles 

// Pending: No se ha cumplido, pero tampoco se ha rechazado

// Fulfield: Ya se cumplió 

// reject : Se ha rechazado o no se puede cumplir 