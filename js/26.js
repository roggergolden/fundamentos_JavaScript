//This 

const reservacion = {
    nombre : "Rogger",
    apellido : "Salazar",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó  y su cantidad a pagar es ${this.total}`)
    }

}


const reservacion2 = {
    nombre : "Clever",
    apellido : "Techno",
    total: 55000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó  y su cantidad a pagar es ${this.total}`)
    }

}

reservacion.informacion();
reservacion2.informacion();