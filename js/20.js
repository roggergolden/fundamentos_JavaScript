// Método de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log((`Reproduciendo canción con el ID: ${id} `))
    },

    pausar : function() {
        console.log("pausando...")
        

    },
    crearPlayList: function(nombre){
        console.log(`Creando la PlayList: ${nombre}`)
    },

    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la PlayList: ${nombre}`)
    }
}   

reproductor.borrarCancion = function(id){
    console.log(`eliminando la canción: ${id}`)
}
 

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20)
reproductor.crearPlayList("tech House");
reproductor.reproducirPlayList("tech House")